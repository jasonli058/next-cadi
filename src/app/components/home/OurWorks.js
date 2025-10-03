'use client'
import Image from "next/image";

const OurWorks = () => {
  return (
    <>

      <div className="card border border-gray-200 hover:shadow-xl lg:max-h-[670px] rounded-xl mt-5 ">
        <div>
          <div className="h-[500px] mt-5 flex items-center justify-center">
            <Image
              src="/artworks/jenny/jenny1.png"
              alt="oil-painting"
              fill
              className="w-3/4 max-h-full object-contain pl-5 pr-5 pt-10 pb-16 rounded-2xl"
            />
          </div>
          <div className="pb-5">
            <span className="block text-lg mt-5 semibold"> Photography </span>
          </div>
        </div>
      </div>

      <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5">
        <div>
          <div className="h-[500px] mt-5 flex items-center justify-center">
            <Image
              src="/artworks/carol/carol4.png"
              alt="oil-painting"
              fill
              className="w-3/4 max-h-full object-contain pl-5 pr-5 pt-10 pb-16"
            />
          </div>
          <div className="pb-5">
            <span className="block text-lg mt-5 semibold"> Digital Art </span>
          </div>
        </div>
      </div>

      <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5">
        <div>
          <div className="h-[500px] mt-5 flex items-center justify-center">
            <Image
              src="/artworks/eliz/eliz2.png"             
              alt="oil-painting"
              fill
              className="w-3/4 max-h-full object-contain pl-5 pr-5 pt-10 pb-16"
            />
          </div>
          <div className="pb-5">
            <span className="block text-lg semibold mt-5"> Handicraft </span>
          </div>
        </div>
      </div>

      <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5">
        <div>
          <div className="h-[500px] mt-5 flex items-center justify-center">
            <Image
              src="/artworks/emma/emma2.png"             
              alt="oil-painting"
              fill
              className="w-3/4 max-h-full object-contain pl-5 pr-5 pt-10 pb-16"
            />
          </div>
          <div className="pb-5">
            <span className="block text-lg semibold mt-5"> Traditional Art </span>
          </div>
        </div>
      </div>

      <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5">
        <div>
          <div className="h-[500px] mt-10 flex items-center justify-center">
            <span>coming soon!</span>
          </div>
        </div>
      </div>

      <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5">
        <div>
          <div className="h-[500px] mt-10 flex items-center justify-center">
            <span>coming soon!</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default OurWorks;