"use client";

import { cn } from "@/lib/utils";
import Script from "next/script";

interface VSLVideoPlayerProps {
  mediaId?: string;
  className?: string;
}

export function VSLVideoPlayer({ mediaId = "nuvy5kyx1q", className }: VSLVideoPlayerProps) {
  return (
    <div className={cn("relative w-full overflow-hidden rounded-2xl", className)} style={{ paddingTop: "177.78%" }}>
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
          padding-top: 177.78%;
        }
      `}</style>
      {/* @ts-expect-error wistia-player is a custom element */}
      <wistia-player
        media-id={mediaId}
        aspect="0.5625"
        autoplay="viewport"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />
    </div>
  );
}
