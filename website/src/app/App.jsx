import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Event from "./models/Event";

const events = [
  new Event({
    id: 1,
    google_event_id: "abc123",
    title: "Team Sync",
    description: "Weekly project meeting",
    participation: [{ userId: 1, cancelled: false }],
    start_time: "2025-11-15T10:00:00",
    end_time: "2025-11-15T11:00:00",
  }),
  new Event({
    id: 2,
    google_event_id: "xyz456",
    title: "Project Deadline",
    description: "Submit final report",
    participation: [{ userId: 2, cancelled: true }],
    start_time: "2025-11-20T09:00:00",
    end_time: "2025-11-20T17:00:00",
  }),
];

function App() {
  return (
    <div>
      <Header />
      <Dashboard events={events} />
    </div>
  );
}

export default App;