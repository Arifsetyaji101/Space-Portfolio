"use client";
import MovingBorder from "./MovingBorder";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "My",
    },
    {
      text: "Timeline.",
      className: "text-cyan-500 dark:text-cyan-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center pt-[50px]">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
