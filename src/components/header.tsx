"use client";
import React from "react"; 

import { useScrollPosition } from "@/hooks/useScrollPosition";
import Image from "next/image";
import { heroHeader } from "@/config/contents"
import { logoHeader } from "@/config/contents"
const Header = () => {
  const scrollPosition = useScrollPosition();
  
  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrollPosition > 0
          ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
          : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="absolute hidden md:block top-0 right-0 -z-10">
      
      <Image src="/images/logo.png" alt="Description" width={500} height={300} />
      </div>
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <div className="flex flex-1 justify-center lg:justify-end">
          <Image
            src={logoHeader.image}
            width={80}
            height={80}
            alt="logo image"
          />
        </div>
        <span></span>
          <span className="ml-3 text-xl">Mayar Institute</span>
          
        </a>
        
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">About</a>
          <a className="mr-5 hover:text-gray-900">Features</a>
          <a className="mr-5 hover:text-gray-900">Contact </a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
