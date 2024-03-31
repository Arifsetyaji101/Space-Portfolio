"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] flex flex-col antialiased bg-black bg-grid-white/[0.05]  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "Arif Setyaji 1",
    src: "/assets/1.png",
  },
  {
    name: "Arif Setyaji 2",
    src: "/assets/2.jpg",
  },
  {
    name: "Arif Setyaji 3",
    src: "/assets/3.jpg",
  },
  {
    name: "Arif Setyaji 4",
    src: "/assets/4.jpg",
  },
  {
    name: "Arif Setyaji 5",
    src: "/assets/5.jpg",
  },
  {
    name: "Arif Setyaji 6",
    src: "/assets/6.jpg",
  },
  {
    name: "Arif Setyaji 7",
    src: "/assets/7.jpg",
  },
  {
    name: "Arif Setyaji 8",
    src: "/assets/8.jpg",
  },
  {
    name: "Arif Setyaji 9",
    src: "/assets/9.jpg",
  },
];
