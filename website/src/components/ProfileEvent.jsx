// ProfileEvent.jsx
// Component to display individual user profile event stats
import React from "react";

function ProfileEvent({ profile }) {
  const total = profile?.total_events || 0;
  // TODO: change to percentage, not decimal
  const avgLate = total > 0 ? (profile.total_late / total).toFixed(2) : "0.00";
  const avgCancelled =
    total > 0 ? (profile.total_cancelled / total).toFixed(2) : "0.00";

  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow mb-4">
      <h2 className="text-xl font-bold text-gray-800">{profile?.name}</h2>
      <div className="text-gray-500">Average Late: {avgLate}</div>
      <div className="text-gray-500">Average Cancelled: {avgCancelled}</div>
      <div className="text-gray-400 text-sm mt-2 space-y-1">
        <div> Total Events: {total} </div>
        <div> Late Events: {profile?.total_late ?? 0} </div>
        <div> Cancelled Events: {profile?.total_cancelled ?? 0} </div>
      </div>
    </div>
  );
}

export default ProfileEvent;
