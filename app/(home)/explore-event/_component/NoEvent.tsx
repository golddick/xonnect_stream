import { Calendar, Clock } from "lucide-react";

interface NoEventsFoundProps {
  type: "upcoming" | "past";
}

export default function NoEventsFound({ type }: NoEventsFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="w-20 h-20 mb-4 rounded-full bg-gray-50 flex items-center justify-center">
        {type === "upcoming" ? (
          <Calendar className="w-10 h-10 text-red-700" />
        ) : (
          <Clock className="w-10 h-10 text-red-700" />
        )}
      </div>

      <h3 className="text-xl font-semibold text-black mb-2">
        {type === "upcoming" ? "No Upcoming Events" : "No Past Events"}
      </h3>

      <p className="text-gray-600 text-center">
        {type === "upcoming"
          ? "There are no upcoming events at the moment. Please check back later."
          : "There are no past events to show right now."}
      </p>
    </div>
  );
}
