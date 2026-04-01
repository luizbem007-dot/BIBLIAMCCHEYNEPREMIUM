"use client";

import { cn } from "@/lib/utils";
import Script from "next/script";

interface VSLVideoPlayerProps {
  mediaId?: string;
  className?: string;
}

export function VSLVideoPlayer({ mediaId = "zqfax5aqve", className }: VSLVideoPlayerProps) {
  return (
    <div className={cn("relative w-full aspect-video overflow-hidden rounded-2xl", className)}>
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        strategy="afterInteractive"
        type="module"
      />
      <style>{`
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
      {/* @ts-expect-error wistia-player is a custom element */}
      <wistia-player
        media-id={mediaId}
        aspect="1.7777777777777777"
        autoplay="viewport"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
