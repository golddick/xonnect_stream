'use client'

import { useEffect, useState } from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Loader, MessageSquare } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { createComment, createReply, likeComment, unlikeComment } from '@/actions/schedule'
import type { Comment, CommentLike, Reply, User } from '@prisma/client'

interface Props {
  scheduleId: string
  comments: (Comment & {
    user?: User
    replies?: (Reply & { user?: User })[]
    likes?: CommentLike[]
  })[] | null | undefined
  
}

const EventComment = ({ scheduleId, comments: initialComments }: Props) => {
  const [comments, setComments] = useState(initialComments || [])
  const [replyingToId, setReplyingToId] = useState<string | null>(null)
  const [likedComments, setLikedComments] = useState<string[]>([])


  const commentForm = useForm<{ content: string }>({
    defaultValues: { content: '' }
  })

  const replyForm = useForm<{ content: string }>({
    defaultValues: { content: '' }
  })

  const handleSubmitComment = async (data: { content: string }) => {
    try {
      const res = await createComment(scheduleId, data.content)
      if (res) {
        toast.success('Comment posted')
        setComments(prev => [{ ...res.comment, replies: [] }, ...prev]) // Add new comment at top
        commentForm.reset()
      }
    } catch (error) {
      toast.error('Failed to post comment')
    }
  }

  const handleReplySubmit = async (commentId: string, data: { content: string }) => {
    try {
      const res = await createReply(commentId, data.content)
      if (res) {
        toast.success('Reply posted')
        setComments(prev =>
          prev.map(comment =>
            comment.id === commentId
              ? {
                  ...comment,
                //   replies: [...(comment.replies || []), { ...res.reply, user: res.reply?.user }]
                }
              : comment
          )
        )
        replyForm.reset()
        setReplyingToId(null)
      }
    } catch (error) {
      toast.error('Failed to post reply')
    }
  }


  const toggleLike = async (commentId: string) => {
    const isLiked = likedComments.includes(commentId)
  
    if (!commentId) return null
  
    try {
      if (isLiked) {
        await unlikeComment(commentId)
        setLikedComments(prev => prev.filter(id => id !== commentId))
        toast.success('Comment unliked')
      } else {
        await likeComment(commentId)
        setLikedComments(prev => [...prev, commentId])
        toast.success('Comment liked')
      }
    } catch (err) {
      toast.error('Failed to toggle like')
    }
  }
  

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4 text-black">Discussion</h2>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700">
            Join the conversation about this upcoming stream. Ask questions, share your excitement, or connect with other attendees!
          </p>
        </div>

        {/* Comment Input */}
        <Form {...commentForm}>
          <form onSubmit={commentForm.handleSubmit(handleSubmitComment)}>
            <div className="flex items-start gap-3 mb-6">
              <Avatar className="h-10 w-10">
                <AvatarFallback>You</AvatarFallback>
              </Avatar>

              <FormField
                control={commentForm.control}
                name="content"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="Add a comment..." {...field} />
                    </FormControl>
                    <FormMessage />
                    <Button type="submit" className="mt-2">
                      Post Comment
                    </Button>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>

        {/* Comments */}
        <div className="space-y-4">
          {comments?.map(comment => (
            <div key={comment.id} className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.user?.imageUrl} />
                <AvatarFallback>{comment.user?.username?.[0]}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-black">{comment.user?.username}</span>
                  <span className="text-gray-500 text-sm">
                    {formatDistanceToNow(new Date(comment.createdAt))} ago
                  </span>
                </div>
                <p className="text-gray-700 mb-2">{comment.content}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                <button
                className={`flex items-center gap-1 ${
                    likedComments.includes(comment.id) ? 'text-red-800 ' : 'text-gray-500'
                } hover:text-red-600`}
                onClick={() => toggleLike(comment.id)}
                >
                <Heart className="h-4 w-4" fill={likedComments.includes(comment.id) ? 'red' : 'none'} />
                <span>{comment.likes?.length}</span>
                </button>

                  <button
                    className="flex items-center gap-1 hover:text-gray-700"
                    onClick={() => setReplyingToId(replyingToId === comment.id ? null : comment.id)}
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Reply</span>
                  </button>
                </div>

                {/* Reply Form */}
                {replyingToId === comment.id && (
                  <Form {...replyForm}>
                    <form
                      onSubmit={replyForm.handleSubmit(data => handleReplySubmit(comment.id, data))}
                      className="mt-3 ml-12"
                    >
                      <FormField
                        control={replyForm.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Write a reply..." {...field} />
                            </FormControl>
                            <FormMessage />
                            <Button type="submit" size="sm" className="mt-2">
                              Post Reply
                            </Button>
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                )}

                {/* Replies */}
                {(comment.replies?.length ?? 0) > 0 && (
                  <div className="ml-12 mt-4 space-y-4">
                    {(comment.replies ?? []).map(reply => (
                      <div key={reply.id} className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={reply.user?.imageUrl || '/placeholder.svg'} />
                          <AvatarFallback>{reply.user?.username?.[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-black">{reply.user?.username}</span>
                            <span className="text-gray-500 text-sm">
                              {formatDistanceToNow(new Date(reply.createdAt))} ago
                            </span>
                          </div>
                          <p className="text-gray-700">{reply.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default EventComment

