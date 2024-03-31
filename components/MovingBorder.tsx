"use client";
import React, { Children } from "react";
import { Button } from "./ui/moving-border";

interface BtnProps {
  name: string;
  href: string;
}

export default function MovingBorder(Props: BtnProps) {
  const { name, href } = Props;
  const openNewTab = () => {
    window.open(`${href}`, "_blank");
  };
  return (
    <div>
      <Button
        onClick={openNewTab}
        borderRadius="1.75rem"
        target="_blank"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 z-50 relatif"
      >
        {name}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-up-right"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 7l-10 10" />
          <path d="M8 7l9 0l0 9" />
        </svg>
      </Button>
    </div>
  );
}
