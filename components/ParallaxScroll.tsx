"use client";
import { ParallaxScroll } from "./ui/parallax-scroll";

export default function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
  "/assets/1.png",
  "/assets/2.jpg",
  "/assets/3.jpg",
  "/assets/4.jpg",
  "/assets/5.jpg",
  "/assets/6.jpg",
  "/assets/7.jpg",
  "/assets/8.jpg",
  "/assets/9.jpg",
];
