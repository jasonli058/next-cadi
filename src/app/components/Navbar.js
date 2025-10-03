"use client" 

import { useEffect } from "react";  
import Link from "next/link";  // ← Next.js Link
import logo from "../../../public/img/new_cadi_logo2.jpg";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  useEffect(() => {
    const body = document.body;
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
      }

      if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white">
      <nav className="font-body text-black border-b-2">
        <div className="flex items-center justify-between p-4 medd:mr-10 ml-8">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="CADI-logo"
              width={80}
              height={80}
              className="rounded-full w-20 mr-4"
              priority
            />
            <h1 className="text-3xl font-bold">CADI</h1>
          </Link>

          <ul className="hidden medd:flex items-center space-x-7 text-xl">
            <Link href="/">
              <li className="list-none hover:-translate-y-2 transition-transform duration-200">
                Home
              </li>
            </Link>
            <Link href="/Artists">
              <li className="list-none hover:-translate-y-2 transition-transform duration-200">
                Artists
              </li>
            </Link>
            <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf6ZgujqM-luE-hqqBXV2Rn2EP29PUIe0ktPwtfCHEY-lbGUA/viewform?usp=header"
            target="_blank" 
            rel="noopener noreferrer"
            >
              <li className="list-none font-semibold border-[10px] border-r-[20px] border-l-[20px] border-secondary bg-secondary rounded-full text-primary hover:bg-accented hover:border-accented hover:-translate-y-2 transition-transform duration-200 ">
                Commission Today!
              </li>
            </a>
          </ul>

          <div className="medd:hidden">
            <BurgerMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;