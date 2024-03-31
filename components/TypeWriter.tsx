"use client";
import MovingBorder from "./MovingBorder";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Follow",
    },
    {
      text: "Me",
    },
    {
      text: "on",
    },
    {
      text: "My",
    },
    {
      text: "Social Media.",
      className: "text-cyan-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  bg-black">
      <p className="text-white text-md sm:text-base  ">
        Hanyalah Mas-Mas Jawa yang Suka Teknologi
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <MovingBorder
          name={"Linkedin"}
          href="https://www.linkedin.com/in/arifsetyaji101"
        />
        <MovingBorder
          name={"Instagram"}
          href="https://www.instagram.com/arifsetyaji_"
        />
        <MovingBorder
          name={"Github"}
          href="https://github.com/arifsetyaji101"
        />
      </div>
    </div>
  );
}
