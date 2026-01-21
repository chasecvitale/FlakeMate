// ProfileDashboard.jsx
// Component to display a dashboard of user profiles and their event statistics
import React from "react";
import ProfileEvent from "./ProfileEvent";

function ProfileDashboard({ profiles = [] }) {
  return (
    <div className="p-8 bg-gray-100 min-h-screen grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {profiles.length === 0 ? (
        <p className="text-gray-500">No profiles available.</p>
      ) : (
        profiles.map((profile) => (
          <ProfileEvent key={profile.id} profile={profile} />
        ))
      )}
    </div>
  );
}

export default ProfileDashboard;
