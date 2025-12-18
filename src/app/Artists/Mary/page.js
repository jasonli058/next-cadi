'use client'
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import ArtCard from '@/app/components/ArtCard';
import BackButton from '@/app/components/BackButton';
import Reveal from '@/app/components/animations/Reveal';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const Mary = () => {
  return (
    <>
      <Reveal>
        <div className="grid m-0 p-30 text-center gap-8 grid-cols-12 auto-rows-[minmax(100px,auto)]">
          {/* content wrapper begins */}
          {/* start of artist section */}
          <div id="work" className="border-t-2 col-start-1 col-end-13 row-span-6">
            <div className="mt-[120px] med:mt-[130px] lg:grid lg:grid-cols-3 gap-10 m-14">
              {/* Mobile back button - only visible on small screens */}
              <div className="lg:hidden flex justify-start up_until:m-10 pt-10">
                <BackButton />
              </div>
        
              <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 overflow-hidden bg-white">
                <div>
                  <div className="relative h-[500px] mt-5 flex items-center justify-center p-5">
                    <Image
                      src="/artworks/mary/mary_pfp.jpg"
                      alt="oil-painting"
                      fill
                      className="object-contain w-3/4 max-h-full pl-5 pr-5"
                    />
                  </div>
                  <div className="pb-5">
                    <span className="block text-lg mt-5 font-bold text-center font-body"> Mary Mai </span>
                    <span className='block text-lg mt-3 text-center font-body text-primary'> Traditional, Digital Art, Handicraft (keychains) </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center col-span-2 up_until:m-10 mt-10">
                {/* Desktop back button - only visible on large screens */}
                <div className="hidden lg:block absolute top-40 right-20">
                  <BackButton />
                </div>
                <p className='text-primary up_until:text-xl text-lg font-body font-semibold up_until:m-5 leading-relaxed text-left'>
                  Mary is a skilled digital artist with a strong command of structure and rendering. Her precision allows her to make images feel lifelike and dynamic, giving her art a sense of depth and clarity that captures attention. Her ability to transform ideas into vivid visuals highlights both her technical skill and creative vision.
                </p>
              </div>
            </div>
          </div>
          {/* end of artist section */}
          <div className="border-t-2 col-start-1 col-end-13 row-span-6">
            <div className="overflow-x-auto">
              <div className="text-center">
                <h2 className="inline-block mt-10 font-bold border-[10px] border-r-[30px] border-l-[30px] border-secondary bg-secondary rounded-full text-primary text-4xl font-body">
                  Works
                </h2>
              </div>
            </div>
            {/* this is where the artworks go */}
            <div className='m-14'>
        
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-auto"
                columnClassName="masonry-column"
              >
        
              </Masonry>
            </div>
            {/* end of artworks section */}
          </div>
        </div>
      </Reveal>
      {/* end of content wrapper */}
    </>
  );
};

export default Mary;