"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="text-center items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto ">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] m-auto"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Portfolio Website</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 max-[767px]:text-4xl text-6xl font-bold text-white max-w-[600px] w-auto h-auto m-auto"
        >
          <span>
            {"I'am Arif Setyaji as a"}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Frontend Developer{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] m-auto"
        >
          I&apos;m a Frontend Developer with experience in Website.{" "}
          {"Let's Get Started and Explore"}.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="#skills"
          className="py-2 px-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] m-auto"
        >
          Explore!
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
