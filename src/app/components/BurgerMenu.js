"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const BurgerMenu = () => {
  const [isMenuHidden, setMenuHidden] = useState(true);

  const handleBurgerClick = () => {
    setMenuHidden(!isMenuHidden);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuHidden(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <button
        className="medd:hidden w-28 flex justify-end px-4"
        id="burger"
        onClick={handleBurgerClick}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 flex justify-end"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div
        id="menu"
        className={`${
          isMenuHidden ? "hidden" : "block"
        } absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl z-10 overflow-hidden`}
      >
        <ul className="flex flex-col">
          <li className="w-full text-center py-4 border border-gray-400 rounded-t-2xl hover:bg-gray-50 transition-colors">
            <Link href="/" onClick={() => setMenuHidden(true)} className="block">
              Home
            </Link>
          </li>
          {/*
          <li className="w-full text-center py-4 hover:bg-gray-50 transition-colors">
            <Link href="/about" onClick={() => setMenuHidden(true)} className="block">
              About
            </Link>
          </li>
          */}
          <li className="w-full text-center py-4 border-r border-l border-b border-gray-400 hover:bg-gray-50 transition-colors">
            <Link href="/Artists" onClick={() => setMenuHidden(true)} className="block">
              Artists
            </Link>
          </li>
          {/*
          <li className="w-full text-center py-4 hover:bg-gray-50 transition-colors">
            <Link href="/feedback" onClick={() => setMenuHidden(true)} className="block">
              Feedback
            </Link>
          </li>
          */}
          <li className="w-full text-center py-4 bg-secondary hover:bg-accented transition-colors">
            <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf6ZgujqM-luE-hqqBXV2Rn2EP29PUIe0ktPwtfCHEY-lbGUA/viewform?pli=1"
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => setMenuHidden(true)} 
            className="block font-medium">
              Commission Today!
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;