"use client";

import { useState, useEffect } from "react";

export default function DiscordOnlineCount({ inviteCode }: { inviteCode: string }) {
  const [onlineCount, setOnlineCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://discord.com/api/v9/invites/${inviteCode}?with_counts=true`)
      .then((res) => res.json())
      .then((data) => {
        if (data.approximate_presence_count !== undefined) {
          setOnlineCount(data.approximate_presence_count);
        }
      })
      .catch((err) => console.error("Failed to fetch Discord status", err));
  }, [inviteCode]);

  return (
    <>
      <div
        className="w-3 h-3 rounded-full bg-green-500 animate-pulse"
        style={{ boxShadow: "0 0 10px #22c55e" }}
      ></div>
      <span className="font-label-sm text-label-sm text-muted-gray uppercase tracking-widest">
        {onlineCount !== null ? `${onlineCount} Members Online` : "Secure Connection Ready"}
      </span>
    </>
  );
}
