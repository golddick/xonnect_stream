import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface Props {
  data: string | null;
  streamDate: Date; // Expected date format: 'YYYY-MM-DD HH:mm:ss'
}

export const FeaturedArtist = ({ data, streamDate }: Props) => {
  // Convert the string into an array by splitting by commas
  const artists = data ? data.split(",").map((artist) => artist.trim()) : [];

  // Convert the streamDate to a Date object
  const streamDateTime = new Date(streamDate);
  const currentDateTime = new Date();

  // Check if the stream is upcoming or passed
  const isStreamUpcoming = streamDateTime > currentDateTime;

  // If no data is available or the array is empty
  if (artists.length === 0) {
    return (
      <div id="xonnect">
        
        <div className="w-[800px] bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl shadow-lg overflow-hidden border-2  border-black">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary-800">Event Featuring Stars</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-500">No featured artists available at the moment.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card >
      <CardContent className=" p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-black">
              {isStreamUpcoming ? "Futuring Stars" : "Featured Stars"}
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 text-black"
              >
                <h3 className="text-[12px] font-bold text-primary-800 capitalize">{artist}</h3>
              </div>
            ))}
          </div>
      </CardContent>
    </Card>
  );
};
