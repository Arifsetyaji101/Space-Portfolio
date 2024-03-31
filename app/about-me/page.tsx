"use client";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/utils/cn";
import LampDemo from "@/components/Lamp";
// import Template from "../template";
import SparklesPreview from "@/components/SparklePreview";
import ParallaxScroll from "@/components/ParallaxScroll";
import MacbookScroll from "@/components/MacbookScroll";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMoving";
import { TracingBeamDemo } from "@/components/TracingBeam";
import Typewriter2 from "@/components/TypeWriter2";

const HomeV2: NextPage = () => {
  return (
    <>
      <LampDemo />
      <MacbookScroll />
      <Typewriter2 />
      <TracingBeamDemo />
      <InfiniteMovingCardsDemo />
    </>
  );
};
export default HomeV2;
