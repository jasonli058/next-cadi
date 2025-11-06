"use client"
import Image from "next/image";
import Reveal from "@/app/components/animations/Reveal"

const Question = () => {
  return (
    <>
      <div className="lg:text-xl lg:flex items-center lg:justify-start lg:pt-8">
        <div className="flex justify-center pt-10 lg:pl-16 lg:border-r-2 lg:pr-8 lg:pb-10">
          <Reveal>
            <Image
              src="/img/cadi-logo.jpg"
              alt="cadi-logo"
              width={80}
              height={80}
              className="lg:w-96 w-[400px] rounded-2xl border border-gray-200 border-[5px]"
            />
          </Reveal>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:pt-5 pb-8 pt-10 lg:m-0 flex-1">
          <Reveal>
            <p className="font-body up_until:text-2xl text-xl max-w-4xl lg:max-w-none text-left p-10 lg:pl-8 lg:mr-2 w-full">
              If you have any questions or concerns regarding commissions, please feel free to contact us. Whether you&apos;re inquiring about pricing, requesting a custom piece, or clarifying details about the process, we are happy to assist. Our goal is to ensure clear communication and a smooth experience from start to finish. Please reach out via the contact form or email!
            </p>
          </Reveal>
          <div className="flex flex-col items-center lg:items-start lg:pl-8 w-full">
            <Reveal>
              <h2 className="font-body text-2xl font-semibold mb-5">Need More Information?</h2>
            </Reveal>
            <Reveal>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdZ7h7K7qVhJpHv-NsNnvebBrIdiwP84GVBdP9UlH4Yo4o7mg/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-2 transition-transform duration-200 hover:bg-gray-200 hover:border-gray-200 hover:text-gray-700 text-2xl font-body font-semibold text-black border-[10px] border-r-[20px] border-l-[20px] border-gray-100 bg-gray-100 rounded-full"
              >
                Contact Us Today
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;