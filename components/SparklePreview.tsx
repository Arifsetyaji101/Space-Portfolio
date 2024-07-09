"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export default function SparklesPreview() {
  return (
    <div className="pt-[100px] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-4xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        JAWA JAWA JAWA
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>
    </div>
  );
}
