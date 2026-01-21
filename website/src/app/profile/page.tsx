// profile/page.tsx
// This is the main profile page that renders the ProfileDashboard component
// with a list of user profiles and their event stats
import React from "react";
import ProfileDashboard from "../../components/ProfileDashboard";
import Header from "../../components/Header";

export default function Page() {
  const profiles = [
    {
      id: 1,
      name: "Lan",
      total_events: 1,
      total_late: 1,
      total_cancelled: 0,
    },
    {
      id: 2,
      name: "Chase",
      events: ["1", "2"],
      total_events: 2,
      total_late: 0,
      total_cancelled: 1,
    },
  ];

  return (
    <main>
        <Header/>
        <ProfileDashboard profiles={profiles as any}/>
    </main>
  );
}