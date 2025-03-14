import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { AboutCard } from "./about-card"
import { UpcomingStream } from "./upcoming"
import { Schedule, User } from "@prisma/client"


// type Schedule ={
//   id: string;
//   title: string;
//   description: string  | null;
//   isFree: boolean;
//   amount: number  | null;
//   thumbnailImage: string  | null;
//   thumbnailVideo: string  | null;
// }

export function About_Tab({
    bio,
    followedByCount,
    hostIdentity,
    hostName,
    viewerIdentity,
    instagram,
    youtube,
    twitter,
    schedule
  }: {
    hostName: string;
    hostIdentity: string;
    viewerIdentity: string;
    bio: string | null;
    instagram: string | null;
    youtube: string | null;
    twitter: string | null;
    followedByCount: number;
    schedule: (Schedule & { user: User })[]
  }) {
  return (
    <Tabs defaultValue="about" className="w-full pl-4">
      <TabsList className="grid w-[90%] mx-auto md:mx-0 md:w-[30%] grid-cols-2 bg-black">
        <TabsTrigger className=" " value="about">About</TabsTrigger>
        <TabsTrigger className=" "  value="upcoming">Upcoming</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
      <AboutCard
            hostName={hostName}
            hostIdentity={hostIdentity}
            viewerIdentity={viewerIdentity}
            bio={bio}
            instagram={instagram}
            youtube={youtube}
            twitter={twitter}
            followedByCount={followedByCount}
          />
      </TabsContent>
      <TabsContent value="upcoming">
        <UpcomingStream 
        data={schedule}
        
        />
      </TabsContent>
    </Tabs>
  )
}
