import { VSLVideoPlayer } from "@/components/ui/vsl-video-player";

export function HeroVideoSection() {
  return (
    <div className="relative px-6 mt-12 pb-20">
      <div className="relative size-full shadow-2xl rounded-3xl overflow-hidden max-w-4xl mx-auto">
        <VSLVideoPlayer />
      </div>
    </div>
  );
}
