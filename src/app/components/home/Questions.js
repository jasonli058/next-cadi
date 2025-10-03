"use client"
import Image from "next/image";

const Question = () => {
  return (
    <>
      <div className="lg:text-xl lg:flex items-center lg:justify-start lg:pt-8">
        <div className="flex justify-center pt-10 lg:pl-16 lg:border-r-2 lg:pr-8 lg:pb-10">
          <Image
            src="/img/cadi-logo.jpg"
            alt="cadi-logo"
            width={80}
            height={80}
            className="lg:w-96 w-[400px] rounded-2xl border border-gray-200 border-[5px]"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start lg:pt-5 pb-8 pt-10 lg:m-0 flex-1">
          <p className="font-body up_until:text-2xl text-xl max-w-4xl lg:max-w-none text-left p-10 lg:pl-8 lg:mr-2 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex flex-col items-center lg:items-start lg:pl-8 w-full">
            <h2 className="font-body text-2xl font-semibold mb-5">Need More Information?</h2>
            <a 
              href="https://www.youtube.com/"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:-translate-y-2 transition-transform duration-200 hover:bg-gray-200 hover:border-gray-200 hover:text-gray-700 text-2xl font-body font-semibold text-black border-[10px] border-r-[20px] border-l-[20px] border-gray-100 bg-gray-100 rounded-full"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;