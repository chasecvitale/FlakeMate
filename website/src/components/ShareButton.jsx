import React from "react";

function ShareButton({ event, user }) {
  return (
    <button className="py-3 px-5 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
        Share
    </button>
  );
}

export default ShareButton;