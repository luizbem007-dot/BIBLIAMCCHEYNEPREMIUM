"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface VSLVideoPlayerProps {
  src: string;
  className?: string;
}

export function VSLVideoPlayer({ src, className }: VSLVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay blocked by browser — user can press play manually
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={cn("relative w-full aspect-video overflow-hidden rounded-2xl", className)}>
      <video
        ref={videoRef}
        src={src}
        muted
        controls
        playsInline
        preload="metadata"
        className="w-full h-full object-cover bg-black"
      />
    </div>
  );
}
