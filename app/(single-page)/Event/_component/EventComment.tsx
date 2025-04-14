


'use client'

import { useState } from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Loader, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react'
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
  userId:string | undefined
  comments: (Comment & {
    user?: User
    replies?: (Reply & { user?: User })[]
    likes?: CommentLike[]
  })[] | null | undefined
}

const EventComment = ({ scheduleId, comments: initialComments, userId }: Props) => {
  const [comments, setComments] = useState(initialComments || [])
  const [replyingToId, setReplyingToId] = useState<string | null>(null)
  const [likedComments, setLikedComments] = useState<string[]>([])
  const [showAllComments, setShowAllComments] = useState(false)
  const [expandedReplies, setExpandedReplies] = useState<Record<string, boolean>>({})
  const [commentLoading, setCommentLoading] = useState(false)
  const [replyLoading, setReplyLoading] = useState(false)


  const commentForm = useForm<{ content: string }>({
    defaultValues: { content: '' }
  })

  const replyForm = useForm<{ content: string }>({
    defaultValues: { content: '' }
  })

  const handleSubmitComment = async (data: { content: string }) => {

    if (!userId ) {
      toast.error('Login to drop comment')
      return null
    }
   
    if (!data.content ) {
      toast.error('Can not send an empty field! add a comment')
      return null
    }
   

    setCommentLoading(true)
    try {
      const res = await createComment(scheduleId, data.content)
      if (res) {
        toast.success('Comment posted')
        setComments(prev => [{ ...res.comment, replies: [] }, ...prev])
        commentForm.reset()
      }
    } catch {
      toast.error('Failed to post comment')
    } finally {
      setCommentLoading(false)
    }
  }
  

  const handleReplySubmit = async (commentId: string, data: { content: string }) => {

    if (!userId ) {
      toast.error('Login to reply to comment')
      return null
    }
   

    setReplyLoading(true)
    try {
      const res = await createReply(commentId, data.content)
      if (res) {
        toast.success('Reply posted')
        setComments(prev =>
          prev.map(comment =>
            comment.id === commentId
              ? { ...comment, replies: [...(comment.replies || []), res.reply] }
              : comment
          )
        )
        replyForm.reset()
        setReplyingToId(null)
      }
    } catch {
      toast.error('Failed to post reply')
    } finally {
      setReplyLoading(false)
    }
  }
  

  const toggleLike = async (commentId: string) => {

    if (!userId ) {
      toast.error('Login to like comment')
      return null
    }
   

    const isLiked = likedComments.includes(commentId)
    if (!commentId) return

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
    } catch {
      toast.error('Failed to toggle like')
    }
  }

  const toggleReplies = (commentId: string) => {
    setExpandedReplies(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }))
  }

  const visibleComments = showAllComments ? comments : comments.slice(0, 4)

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4 text-black">Comment</h2>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700">
            Join the conversation about this event. Ask questions, share your excitement, or connect with other attendees!
          </p>
        </div>

        {/* Comment Input */}
        <Form {...commentForm}>
          <form onSubmit={commentForm.handleSubmit(handleSubmitComment)}>
            <div className="flex items-start gap-3 mb-6">
              <Avatar className="h-8 w-8">
                <AvatarFallback>u</AvatarFallback>
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
                    <Button type="submit" className="mt-2 mr-0" disabled={commentLoading}>
                    {commentLoading ? <Loader className="h-4 w-4 animate-spin" /> : ' Comment'}
                    </Button>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>

        {/* Comment List */}
        <div className="space-y-4">
          {visibleComments.map(comment => (
            <div key={comment.id} className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={comment.user?.imageUrl} />
                <AvatarFallback>{comment.user?.username?.[0]}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-black">{comment.user?.username}</span>
                  {/* <span className="text-gray-500 text-sm">
                    {formatDistanceToNow(new Date(comment.createdAt))} ago
                  </span> */}
                </div>
                <p className="text-gray-700 mb-2">{comment.content}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <button
                    className={`flex items-center gap-1 ${
                      likedComments.includes(comment.id) ? 'text-red-800' : 'text-gray-500'
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
                 


                  {comment.replies?.length ? (
                    <button
                      onClick={() => toggleReplies(comment.id)}
                      className="flex items-center gap-1 hover:text-gray-700"
                    >
                      {expandedReplies[comment.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      <span>{expandedReplies[comment.id] ? 'Hide replies' : 'View replies'}</span>
                    </button>
                  ) : null}
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
                            <Button type="submit" size="sm" className="mt-2"   disabled={replyLoading}>
                                {replyLoading ? <Loader className="h-4 w-4 animate-spin" /> : 'Post Reply'}
                            </Button>
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                )}

                {/* Replies */}
                {expandedReplies[comment.id] &&
                  (comment.replies ?? []).map(reply => (
                    <div key={reply.id} className="ml-12 mt-4 flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={reply.user?.imageUrl || '/assets/xsb.png'} />
                        <AvatarFallback>{reply.user?.username?.[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-black">{reply.user?.username}</span>
                        </div>
                        <p className="text-gray-700">{reply.content}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Comments */}
        {comments.length > 4 && (
          <div className="mt-4 text-center">
            <Button
              onClick={() => setShowAllComments(prev => !prev)}
              variant="outline"
              className="text-white"
            >
              {showAllComments ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" /> Show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" /> Show more comments
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default EventComment
