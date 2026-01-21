"use client";

import React, { useState } from "react";

function CancelButton({ event }) {
  const [cancelled, setCancelled] = useState(false);

  const handleCancel = () => {
    setCancelled(true);
  };

  return (
    <button
      className={`py-2 px-4 font-semibold rounded border ${
        cancelled
          ? "bg-gray-300 text-gray-600 border-gray-300 cursor-not-allowed"
          : "bg-transparent hover:bg-red-500 text-red-700 border-red-500 hover:border-transparent hover:text-white"
      }`}
      onClick={handleCancel}
      disabled={cancelled}
    >
      {cancelled ? "Cancelled" : "Cancel"}
    </button>
  );
}

export default CancelButton;