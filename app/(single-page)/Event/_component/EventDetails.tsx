'use client'

import Link from "next/link"
import {
  CalendarPlus,
  Share2,
  Bell,
  Clock,
  Users,
  DollarSign,
  Calendar,
  Tag,
  MessageSquare,
  Heart,
  ExternalLink,
  Play,
  BanknoteIcon,
  Instagram,
  YoutubeIcon,
  Twitter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StreamCountdown from "./stream-countdown"
import Image from "next/image"
import {  Comment, CommentLike, Schedule, User,  } from "@prisma/client"
import { SchedulePurchaseBTN } from "@/components/purchaseBTN/SchedulePurchaseBTN"
import ShareBTN from "@/components/share/ShareBTN"
import { FeaturedArtist } from "./FeaturedArtist"
import EventVideoPreview from "./EventVideoPreview"
import { Actions } from "@/components/stream-player/actions"
import { EditSchedule } from "@/app/(dashboard)/u/[username]/schedule/[scheduleId]/_component/edit-schedule/edit-schedule"
import EventComment from "./EventComment"
import FormattedComment from "@/lib/type"
import { useEffect } from "react"
import PhysicalDetails from "./physicalDetails"




interface Props {
  data: (Schedule & {
    user?: User
    comments?: Comment[]
  }) | null
  scheduledEvent: Schedule[] | undefined | null
  userId: string | undefined
  selfName: string | undefined | null
  selfEmail: string | null | undefined
  following: string[]
  followers: string[]
  availableSlots:number
  remainingSlots:number
}



export default function ScheduledStreamPage({data,userId,scheduledEvent, selfEmail, selfName, following, followers, availableSlots, remainingSlots}:Props) {

    if (!data) {
        return null
    }


  const tags = data.tags ? data.tags.split(',').map(tag => tag.trim()) : [];
  const streamCreator = data.user?.externalUserId === userId
  const followersCount = followers?.length ?? 0;
  const followingCount = following?.length ?? 0;


  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Hero Section with Video/Thumbnail */}
      <section className="bg-black text-white ">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Player / Thumbnail - Takes up 2/3 of the width on large screens */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <EventVideoPreview img={data?.thumbnailImage} video={data?.thumbnailVideo}/>

                {/* Premium Badge */}
                {!data?.isFree && (
                  <div className="absolute top-4 left-4 z-10 bg-red-700 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    {/* <DollarSign className="h-4 w-4 mr-1" /> */}
                    <span className="h-4 w-4 mr-1">₦</span> 
                    <span>Premium</span>
                  </div>
                )}
              </div>
            </div>

            {/* Stream Info and CTA - Takes up 1/3 of the width on large screens */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-800 text-white border-gray-700 capitalize">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-2xl md:text-2xl font-bold mb-3 capitalize">{data?.title}</h1>

                <div className="flex items-center gap-2 mb-4">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={data.user?.imageUrl} alt={data.user?.username} />
                    <AvatarFallback>{data.user?.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-gray-300">
                    Hosted by <span className="font-medium text-white capitalize">{data.user?.username}</span>
                  </span>
                  .
                  <span className="text-gray-300">
                    Organized by <span className="font-medium text-white capitalize">{data.organizers}</span>
                  </span>
                </div>
              

                <div className="space-y-3 mb-6">
                   <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="h-5 w-5" />
                    <span>{formatDate(data.eventDateTime.toISOString())}</span>
                  </div> 

                 



                  <div className="flex items-center gap-2 text-gray-300">
                    <Tag className="h-5 w-5" />
                    <span>Category: {data.category}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300">
                    <BanknoteIcon className="h-5 w-5" />
                    <span>
                    {data.isFree ? (
                      "Free" 
                    ) : (
                      `Virtual Ticket Price: ${data.amount}` 
                    )}
                  </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <StreamCountdown streamDate={data.eventDateTime.toISOString()}  isLive={data.isLive}/>

                <div className=" flex w-full items-center justify-between gap-6">
                  {data.isLive && (
                    <Link href={`/channel/${data.user?.username}`} className=" w-full">
                      <Button size={'lg'} variant={'ghost'} className="w-full text-white">Watch</Button>
                    </Link>
                  )}

                   {!data?.isFree && (
                   <SchedulePurchaseBTN data={data} selfEmail={selfEmail} selfName={selfName} userId={userId}/>
                )}
               

                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 gap-2 border-gray-700 text-white hover:bg-gray-800">
                    <CalendarPlus className="h-4 w-4" />
                    <span>Calendar</span>
                  </Button>
                    <ShareBTN/>
                </div>

                {/* <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-gray-300" />
                    <span className="text-gray-300 text-sm">Notify me before stream</span>
                  </div>
                  <Switch />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container bg-white mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stream Details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="host">Host</TabsTrigger>
                <TabsTrigger value="comment">Comment</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-8">
                {/* Stream Description */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4 text-black">About This Stream</h2>
                    <div className="prose max-w-none">
                      <p className="mb-4 text-gray-700 capitalize">{data.description}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Proof */}
                {
                  data.artists && (
                    <FeaturedArtist data={data.artists} streamDate={data.eventDateTime}/>
                  )
                }
              
               
              
              </TabsContent>

              <TabsContent value="host" className="space-y-8">
                {/* Host Information */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={data.user?.imageUrl} alt={data.user?.username} />
                          <AvatarFallback>{data.user?.username.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>

                      <div className="flex-1 ">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-black">{data.user?.username}</h3>
                            <p className="text-gray-500">{data.user?.username} streaming channel</p>
                          </div>
                          {
                            streamCreator && (

                              <EditSchedule  data={data}/>
                            )
                          }
                        </div>

                        <p className="text-gray-700 mb-4">{data.user?.bio}</p>

                        <div className=" flex items-center gap-4">

                        <div className="flex items-center gap-1 mb-4">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">
                          {followersCount} {followersCount === 1 ? "follower" : "followers"}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-1 mb-4">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">
                          {followingCount} {followingCount === 1 ? "follow" : "following"}
                          </span>
                        </div>

                        </div>
                       

                        <div className="flex gap-3 items-center">
                          {
                            data.user?.youtube && (
                              <Link href={`${data.user?.youtube}`}>
                                <Button variant={'outline'} size={'icon'} className=" shadow-black shadow-md ">
                                  <YoutubeIcon className=" size-6  text-white"/>
                                </Button>
                              </Link>
                            )
                          }
                          {
                            data.user?.twitter && (
                              <Link href={`${data.user?.twitter}`}>
                                <Button variant={'outline'} size={'icon'} className=" shadow-black shadow-md ">
                                  <Twitter className=" size-6  text-white"/>
                                </Button>
                              </Link>
                            )
                          }
                          {
                            data.user?.instagram && (
                              <Link href={`${data.user?.instagram}`}>
                                <Button variant={'outline'} size={'icon'} className=" shadow-black shadow-md ">
                                  <Instagram className=" size-6  text-white"/>
                                </Button>
                              </Link>
                            )
                          
                          }
                     
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Host's Other Streams */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-black">More from {data.user?.username}</h3>
                      {/* <Link
                        href={`/creators/${data.userId}`}
                        className="text-red-700 hover:text-red-800 text-sm font-medium flex items-center"
                      >
                        View all
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link> */}
                      <p className=" text-black animate-pulse"><span className=" text-red-700">x</span>onnect</p>
                    </div>

                    <div className="flex  gap-4 w-full">
                    {
                        scheduledEvent ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
                                  {scheduledEvent.map((relatedStream) => (
                        <Link href={`/Event/${relatedStream.id}`} key={relatedStream.id}>
                          <div className="group">
                            <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                              <Image
                                src={relatedStream.thumbnailImage || "/assets/xc.jpg"}
                                alt={relatedStream.title}
                                fill
                                className="w-full h-full absolute object-cover group-hover:scale-105 transition-transform duration-200"
                              />
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Play className="h-10 w-10 text-white" />
                              </div>
                              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              <span className="text-gold">{relatedStream.amount === 0 || relatedStream.isFree ? 'Free' : `N${relatedStream.amount}`}</span>
                              </div>
                            </div>
                            <h4 className="font-medium text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                              {relatedStream.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {new Date(relatedStream.eventDateTime).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </Link>
                      ))}
                            </div>
                        ):(
                            <div>
                                no scheduled event
                            </div>
                        )
                    }
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="comment" className="space-y-8">
                {/* comment Section */}
                <EventComment userId={userId} scheduleId={data.id} comments={data.comments}/>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Pricing and Registration */}
          <div className="space-y-6">

            {/* Physical Details */}
            {
              data.physicalTicketAmount && data.availableSlots && (
                <PhysicalDetails physicalTicketAmount={data.physicalTicketAmount } remainingSlots={remainingSlots} availableSlots={availableSlots || 0} ticketType={data.TicketType || 'Regular'}  userEmail={selfEmail} userId={userId} userName={selfName} eventName={data.title} eventID={data.id} address={data.address}/>
              )
              }
            {/* What You'll Get */}
            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-black">What You&apos;ll Get</h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-red-700" />
                    </div>
                    <span className="text-gray-700">Live interactive workshop with professional artist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-red-700" />
                    </div>
                    <span className="text-gray-700">Digital resource pack with brushes and references</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-red-700" />
                    </div>
                    <span className="text-gray-700">Replay access (duration depends on tier)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-red-700" />
                    </div>
                    <span className="text-gray-700">Q&A session with the host</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-red-700" />
                    </div>
                    <span className="text-gray-700">Personalized feedback (Premium & Master tiers)</span>
                  </li>
                </ul>
              </CardContent>
            </Card> */}

            {/* Refund Policy */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 text-black">Refund Policy</h3>
                <p className="text-gray-700 text-sm">
                Please note that once stream access is purchased, no further refunds will be provided.
                However, you will still have access to the stream&apos;s replay, in accordance with your  access period.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}




function ChevronRight(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function Check(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

