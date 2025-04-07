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
import { Schedule, User } from "@prisma/client"
import { SchedulePurchaseBTN } from "@/components/purchaseBTN/SchedulePurchaseBTN"
import ShareBTN from "@/components/share/ShareBTN"
import { FeaturedArtist } from "./FeaturedArtist"
import EventVideoPreview from "./EventVideoPreview"
import { Actions } from "@/components/stream-player/actions"
import { EditSchedule } from "@/app/(dashboard)/u/[username]/schedule/[scheduleId]/_component/edit-schedule/edit-schedule"


interface Props {
   data: (Schedule & { user?: User }) | null
   scheduledEvent:Schedule[] | undefined | null
  userId:string | undefined
  selfName:string | undefined | null
  selfEmail:string  | null | undefined
  following: string[] 
  followers: string[] 
}


export default function ScheduledStreamPage({data,userId,scheduledEvent, selfEmail, selfName, following, followers}:Props) {

    if (!data) {
        return null
    }


  const tags = data.tags ? data.tags.split(',').map(tag => tag.trim()) : [];
  const streamCreator = data.user?.externalUserId === userId
  const followersCount = followers?.length ?? 0;
  const followingCount = following?.length ?? 0;

    console.log(data, 'p')
  // Mock data for the scheduled stream
  const stream = {
    id: "stream-123",
    title: "Advanced Character Design Workshop: From Concept to Final Art",
    description:
      "Join professional character artist Maria Rodriguez for an in-depth workshop on creating compelling character designs for games, animation, and illustration.",
    longDescription:
      "In this comprehensive 3-hour workshop, you'll learn the complete process of character design from initial concept sketches to final rendered artwork.\n\nMaria will share her professional workflow developed over 10 years working with major studios including Pixar, Riot Games, and independent productions.\n\nYou'll discover:\n\n- How to develop unique character concepts that stand out\n- Techniques for creating expressive facial features and poses\n- Color theory specifically for character design\n- Industry-standard presentation methods for your designs\n- Common pitfalls to avoid in the character design process\n\nThis workshop is perfect for intermediate artists looking to level up their character design skills, as well as beginners who want to learn professional techniques from day one.\n\nAll participants will receive a digital resource pack including brushes, reference sheets, and a PDF workbook to continue practicing after the workshop.",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    trailerVideo: "/placeholder.svg?height=720&width=1280",
    date: "2025-06-10T18:00:00Z",
    duration: "3 hours",
    category: "Art & Design",
    tags: ["Character Design", "Digital Art", "Workshop"],
    isRecurring: false,
    isPremium: true,
    pricing: {
      type: "tiered",
      options: [
        {
          id: "tier-1",
          name: "Basic Access",
          price: "$29.99",
          features: ["Live workshop access", "7-day replay access", "Digital resource pack"],
        },
        {
          id: "tier-2",
          name: "Premium Access",
          price: "$49.99",
          features: [
            "Live workshop access",
            "Unlimited replay access",
            "Digital resource pack",
            "Personalized feedback on one design",
            "Certificate of completion",
          ],
          isRecommended: true,
        },
        {
          id: "tier-3",
          name: "Master Class",
          price: "$99.99",
          features: [
            "Live workshop access",
            "Unlimited replay access",
            "Digital resource pack",
            "Personalized feedback on three designs",
            "Certificate of completion",
            "30-minute 1-on-1 mentoring session",
            "Exclusive Discord community access",
          ],
        },
      ],
    },
    host: {
      id: "creator-789",
      name: "Maria Rodriguez",
      username: "@mariadesigns",
      image: "/placeholder.svg?height=200&width=200",
      followers: 45600,
      bio: "Character artist with 10+ years of experience working with major studios. Passionate about teaching and helping artists develop their unique style.",
      socialLinks: {
        twitter: "https://twitter.com/mariadesigns",
        instagram: "https://instagram.com/mariadesigns",
        artstation: "https://artstation.com/mariadesigns",
      },
    },
    stats: {
      registered: 342,
      interested: 876,
      maxCapacity: 500,
    },
    relatedStreams: [
      {
        id: "stream-124",
        title: "Environment Design Fundamentals",
        thumbnail: "/placeholder.svg?height=300&width=600",
        date: "2025-06-17T18:00:00Z",
        price: "$24.99",
      },
      {
        id: "stream-125",
        title: "Color Theory for Digital Artists",
        thumbnail: "/placeholder.svg?height=300&width=600",
        date: "2025-06-24T18:00:00Z",
        price: "$19.99",
      },
      {
        id: "stream-126",
        title: "Portfolio Review Session",
        thumbnail: "/placeholder.svg?height=300&width=600",
        date: "2025-07-01T18:00:00Z",
        price: "$39.99",
      },
    ],
  }

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
                    <span>Premium Stream</span>
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

                <h1 className="text-2xl md:text-3xl font-bold mb-3 capitalize">{data?.title}</h1>

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

                  {/* <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="h-5 w-5" />
                    <span>Duration: {stream.duration}</span>
                  </div> */}

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
                      `Price: ${data.amount}` 
                    )}
                  </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <StreamCountdown streamDate={data.eventDateTime.toISOString()} />

                <div className=" flex w-full items-center justify-between gap-6">
                  <Link href={`/channel/${data.user?.username}`} className=" w-full">
                    <Button size={'lg'} variant={'ghost'} className="w-full text-white">Watch</Button>
                  </Link>
                <SchedulePurchaseBTN data={data} selfEmail={selfEmail} selfName={selfName} userId={userId}/>

                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 gap-2 border-gray-700 text-white hover:bg-gray-800">
                    <CalendarPlus className="h-4 w-4" />
                    <span>Calendar</span>
                  </Button>
                    <ShareBTN/>
                </div>

                <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-gray-300" />
                    <span className="text-gray-300 text-sm">Notify me before stream</span>
                  </div>
                  <Switch />
                </div>
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
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
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
                <FeaturedArtist data={data.artists} streamDate={data.eventDateTime}/>
              
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
                            <p className="text-gray-500">{data.user?.username} stream channel</p>
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
                          <Link href={`${data.user?.instagram}`}>
                          <Button variant={'outline'} size={'icon'} className=" shadow-black shadow-md ">
                            <Instagram className=" size-6  text-white"/>
                          </Button>
                          </Link>
                          <Link href={`${data.user?.youtube}`}>
                          <Button variant={'outline'} size={'icon'} className=" shadow-black shadow-md ">
                            <YoutubeIcon className=" size-6  text-white"/>
                          </Button>
                          </Link>
                          <Link href={`${data.user?.twitter}`}>
                          <Button variant={'outline'} size={'icon'} className=" shadow-black shadow-md ">
                            <Twitter className=" size-6  text-white"/>
                          </Button>
                          </Link>
                     
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
                      <Link
                        href={`/creators/${stream.host.id}`}
                        className="text-red-700 hover:text-red-800 text-sm font-medium flex items-center"
                      >
                        View all
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
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

              <TabsContent value="discussion" className="space-y-8">
                {/* Discussion Section */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4 text-black">Discussion</h2>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <p className="text-gray-700">
                        Join the conversation about this upcoming stream. Ask questions, share your excitement, or
                        connect with other attendees!
                      </p>
                    </div>

                    <div className="space-y-6">
                      {/* Comment input placeholder */}
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=50&width=50&text=You" />
                          <AvatarFallback>You</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 bg-gray-100 rounded-lg p-3">
                          <p className="text-gray-500">Add a comment or ask a question...</p>
                        </div>
                      </div>

                      {/* Sample comments */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg?height=50&width=50&text=JD" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">John Doe</span>
                              <span className="text-gray-500 text-sm">2 days ago</span>
                            </div>
                            <p className="text-gray-700 mb-2">
                              Will we need any specific software for this workshop? I&apos;m currently using Procreate on
                              iPad.
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <button className="flex items-center gap-1 hover:text-gray-700">
                                <Heart className="h-4 w-4" />
                                <span>5</span>
                              </button>
                              <button className="flex items-center gap-1 hover:text-gray-700">
                                <MessageSquare className="h-4 w-4" />
                                <span>Reply</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 ml-12">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={stream.host.image} />
                            <AvatarFallback>{stream.host.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-black">{stream.host.name}</span>
                              <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">Host</span>
                              <span className="text-gray-500 text-sm">1 day ago</span>
                            </div>
                            <p className="text-gray-700 mb-2">
                              Great question, John! Procreate works perfectly for this workshop. I&apos;ll be demonstrating
                              in both Procreate and Photoshop, so you can follow along with either one.
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <button className="flex items-center gap-1 hover:text-gray-700">
                                <Heart className="h-4 w-4" />
                                <span>8</span>
                              </button>
                              <button className="flex items-center gap-1 hover:text-gray-700">
                                <MessageSquare className="h-4 w-4" />
                                <span>Reply</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Pricing and Registration */}
          <div className="space-y-6">
            {/* Pricing Options */}
            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-black">Pricing Options</h3>
                <div className=" text-black">
                  {data.amount}
                </div>
                <PriceCard/>
                <PricingOptions options={stream.pricing.options} />
              </CardContent>
            </Card> */}

            {/* What You'll Get */}
            <Card>
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
            </Card>

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



// Helper component for social icons
function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case "twitter":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    case "instagram":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0
 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      )
    case "artstation":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z" />
        </svg>
      )
    default:
      return <ExternalLink className="h-5 w-5" />
  }
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

