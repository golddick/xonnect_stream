import { Actions } from '@/components/stream-player/actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useParticipants, useRemoteParticipant } from '@livekit/components-react';
import { CheckCircle, Star, User, Users } from 'lucide-react';
import React from 'react';

// Define the interface for the props, but do not assign values here.
interface CreatorInfoCardProps {
  image: string;
  name: string;
  isVerified: boolean;
  username: string;
  bio: string;
  followers: number;
  socialLinks: {
    instagram: string;
    youtube: string;
    twitter: string;
  };
  hostIdentity: string;
  viewerIdentity: string;
  isFollowing: boolean;
}

const CreatorInfoCard = ({ 
  image, 
  name, 
  isVerified, 
  username, 
  bio, 
  followers,  
  socialLinks, 
  hostIdentity, 
  viewerIdentity, 
  isFollowing 
}: CreatorInfoCardProps) => {

     const participants = useParticipants();
      const participant = useRemoteParticipant(hostIdentity);
      const isLive = !!participant;
      const participantCount = participants.length - 1;
    const hostAsViewer = `host-${hostIdentity}`;
    const isHost = hostAsViewer === viewerIdentity;

  return (
    <div className="mb-6  lg:container">
      <Card className="bg-black text-white  ">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <Avatar className="h-10 w-10">
                <AvatarImage src={image} alt={name} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-1">
             <div className=' flex items-center justify-between gap-6'>
             <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold">{name}</h3>
                {isVerified && <CheckCircle className="h-4 w-4 text-gold" />}
              </div>

                <div className='w-[200px]'>
                <Actions
                    hostIdentity={hostIdentity}
                    isFollowing={isFollowing}
                    isHost={isHost}
                    />
                </div>
             </div>
              <p className="text-gray-400 mb-2">{username}</p>

              <p className="text-sm text-gray-300 mb-3 capitalize">{bio}</p>

              <div className="flex flex-wrap gap-4 mb-3">
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Users className="h-4 w-4" />
                  <span>{followers.toLocaleString()} followers</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                {isLive ? (
                    <div className="font-semibold flex gap-x-1 items-center text-xs text-rose-500">
                    <User className="h-4 w-4" />
                    <p>
                        {participantCount}{" "}
                        {participantCount === 1 ? "viewer" : "viewers"}
                    </p>
                    </div>
                ) : (
                    <Badge  className="font-semibold text-xs text-muted-foreground bg-black hover:text-gold ">
                    Offline
                    </Badge>
                )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {Object.entries(socialLinks).map(([platform, url], index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="h-8 border-gray-700 hover:bg-gray-800"
                    asChild
                  >
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <span className="text-xs capitalize">{platform}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatorInfoCard;
