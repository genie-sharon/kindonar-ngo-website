"use client";
import React from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-soft-blush flex items-center justify-center px-4">
      <div className="glass-card p-8 max-w-md text-center space-y-4">
        <h2 className="clamp-text-2xl font-bold text-rich-cocoa">Something went wrong</h2>
        <p className="text-soft-mauve-gray">{error.message}</p>
        <button onClick={reset} className="magnetic-button">Try again</button>
      </div>
    </div>
  );
}
