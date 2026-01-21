// src/app/page.tsx

import React from "react";
import Header from "../components/Header";

export default function Page() {
  // sample events
  const events = [
  {
    id: 1,
    google_event_id: "abc123",
    title: "Team Sync",
    description: "Weekly project meeting",
    participation: ["John", "Joey"],
    start_time: "2025-11-15T10:00:00",
    end_time: "2025-11-15T11:00:00",
    cancelled: false,
  },
  {
    id: 2,
    google_event_id: "xyz456",
    title: "Project Deadline",
    description: "Submit final report",
    participation: ["Claire", "Josh", "Jerry", "Christina"],
    start_time: "2025-11-20T09:00:00",
    end_time: "2025-11-20T17:00:00",
    cancelled: false,
  },
];

  return (
    <div>
      <Header/>
    </div>
  );
}