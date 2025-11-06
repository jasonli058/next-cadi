'use client'

import Image from "next/image";
import Welcome from "../app/components/home/Welcome";
import OurWorks from "./components/home/OurWorks";
import Question from "./components/home/Questions";
import { motion } from "framer-motion";
import FadeIn from "../app/components/animations/FadeIn";
import Reveal from "../app/components/animations/Reveal";

export default function Home() {
  return (
    //content wrapper begins here
    <div className="grid m-0 p-30 text-center gap-8 grid-cols-12 auto-rows-[minmax(100px,auto)]"> 

      {/* welcome comp begins */}
      
      <div className="border-t-0 col-start-1 col-end-13 row-span-7 bg-welcome relative flex items-center justify-center">
        <Welcome />
      </div>
      {/* welcome comp ends */}

      {/* goals comp starts */}
      <div className="border-b-2 col-start-1 col-end-13 row-span-6">
            <Reveal>
              <h2 className="font-body up_until:text-4xl text-3xl font-semibold text-primary mt-16">
                <span className="border-b-2 border-primary">About Us!</span>
              </h2>
            </Reveal>
          <div className="lg:text-xl lg:flex p-4 items-center lg:justify-center lg:pt-2 pr-8">
            <div className="flex item-center lg:pt-5 justify-center pb-8">
              <br />
              <Reveal>
                <p className=" font-body up_until:text-2xl text-xl lg:max-w-2xl md:max-w-3xl text-left p-10 lg:mr-2 lg:mt-14 lg:border-r-2">
                  CADI is a student-led service club dedicated to using art as a force for good. We design and donate hand-decorated care bags filled with school supplies and necessities to underfunded schools, create collaborative art projects to support local hospitals, and take custom art commissions to raise funds for future donations. Each month, we align our projects with national health awareness themes to educate, inspire, and support our community. Our mission is simple: turn creativity into action, and action into impact.
                </p>
              </Reveal>
            </div>
            <Reveal>
              <div className="flex items-center justify-center pt-10 lg:pl-16 lg:pb-0 pb-24">
                <Image
                  src="/img/new_cadi_logo.jpg"
                  alt="cadi-logo"
                  width={80}
                  height={80}
                  className="lg:w-96 w-[400px] rounded-2xl border border-gray-200 border-[5px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      {/* goals comp ends */}
      
      {/* our works comp starts */}
      <div id="work" className=" border-t-2 col-start-1 col-end-13 row-span-8">
        <Reveal>
          <h2 className="font-body up_until:text-4xl text-3xl font-semibold text-primary mt-20">
            <span className="border-b-2 border-primary">Our Works!</span>
          </h2>
        </Reveal>
        <div className="mt-20 lg:grid lg:grid-cols-3 gap-10 m-14  ">
          <OurWorks />
        </div>
        <div className="flex items-center justify-center mt-16">
          <Reveal>
            <div className="
            hover:-translate-y-2 transition-transform duration-200 hover:bg-gray-200 hover:border-gray-200 hover:text-gray-700 text-2xl bottom-4 lg:left-14 left-7 font-body font-semibold text-black border-[10px] border-r-[20px] border-l-[20px] border-gray-100 bg-gray-100 rounded-full mb-20">
                <a href="/Artists"> Learn more </a>
            </div>
          </Reveal>
        </div>
      </div>
      {/* our works comp ends */}

      {/* commission comp starts */}
      <div className="border-t-2 col-start-1 col-end-13 row-span-3 border-b-2">
        <h2 className="font-body up_until:text-4xl text-3xl font-semibold text-primary mt-20 lg:p-0 medd:p-0 pl-10 pr-10">
          <Reveal><span className="lg:border-b-2 border-primary">Become a part of our journey!</span></Reveal>
        </h2>
        <Reveal>
          <p className="font-body up_until:text-2xl text-xl max-w-none text-left p-20 w-full">
              Every brushstroke, every care package, and every project starts with a person like you. Whether you are an experienced artist or simply someone with a passion for making a difference, your energy and creativity is what fuels our mission. By joining CADI, you&apos;ll gain hands-on experience in project planning, collaborate with a team of dedicated peers, and see firsthand how your talents can bring tangible joy and support to those in need. Together, we can amplify our impact and spread the power of art further into our community.
            </p>
        </Reveal>
          <div className="flex flex-col items-center justify-center lg:pl-8 w-full mb-20">
            <Reveal>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf6ZgujqM-luE-hqqBXV2Rn2EP29PUIe0ktPwtfCHEY-lbGUA/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-2 transition-transform duration-200 hover:bg-accented hover:border-accented hover:text-gray-700 text-2xl font-body font-semibold text-black border-[10px] border-r-[20px] border-l-[20px] border-secondary bg-secondary rounded-full"
              >
                Commission Today
              </a>
            </Reveal>
          </div>
      </div>
      {/* commission comp ends */}

      {/* start of questions header */}
        <div className="col-start-1 col-end-13 lg:row-span-2 row-span-3 bg-questions relative flex items-center justify-center">
          <div className="text-center isolate">
            <Reveal>
              <span className="lg:text-6xl text-5xl font-body font-bold text-white textsd border-b-4 border-white">
                Questions?
              </span>
            </Reveal>
          </div>
        </div>
      {/* end of questions header */}

      {/* question comp starts */}
      <div className="col-start-1 col-end-13 row-span-5"> 
          <Question />
      </div>
      {/* question comp ends */}
    </div>
    //content wrapper ends here
  );
}
