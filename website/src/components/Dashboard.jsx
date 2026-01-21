// src/components/Dashboard.jsx
import React from "react";
import EventCard from "./CalendarEvent";

function Dashboard({ events }) {
  return (
    <div className="p-8 bg-gray-100 min-h-screen grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {events.length === 0 ? (
        <p className="text-gray-500">No events scheduled.</p>
      ) : (
        events.map((event) => <EventCard key={event.id} event={event} />)
      )}
    </div>
  );
}

export default Dashboard;