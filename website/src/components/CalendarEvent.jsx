import React from "react";
import CancelButton from "./CancelButton";
import ShareButton from "./ShareButton";


function CalendarEvent({ event, user }) {
    return (
        <div className="max-w-sm p-4 bg-[#fafafa] rounded-lg shadow-md hover:shadow-xl transition-shadow mb-4 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800">{event.title}</h2>
            <p className="text-gray-500">{event.description}</p>
            <p className="text-gray-400 text-sm">
                {new Date(event.start_time).toLocaleString()} -{" "}
                {new Date(event.end_time).toLocaleString()}
            </p>
            <p>Participants: {event.participation.join(", ")}</p>
            <div className="flex flex-row justify-end gap-2 mt-4">
                <ShareButton event={event} />
                <CancelButton event={event} />
            </div>
            
        </div>
    );
}

export default CalendarEvent;