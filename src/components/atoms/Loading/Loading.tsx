import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-4xl animate-spin">🤔</p>
      <p className="text-lg">Loading...</p>
    </div>
  );
};

export default Loading;
