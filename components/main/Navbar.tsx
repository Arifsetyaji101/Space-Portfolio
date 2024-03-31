import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 sec-navbar">
      <div className="w-full h-full flex flex-row items-center justify-center align-middle m-auto px-[10px] text-center">
        <Link href="/" className=" font-bold text-white">
          Home
        </Link>
        <Link href="/" className="h-auto w-auto px-3">
          <Image
            src="/logo-light.svg"
            width={50}
            height={50}
            alt="Logo"
            id="Logo"
          />
        </Link>
        <Link href="/about-me" className=" font-bold text-white">
          About Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
