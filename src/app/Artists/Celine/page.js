'use client'
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import ArtCard from '@/app/components/ArtCard';
import BackButton from '@/app/components/BackButton';
import ZoomReveal from '@/app/components/animations/ZoomReveal';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const Celine = () => {
  return (
    <>
      <ZoomReveal>
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
                      src="/artworks/celine/celine_pfp.jpg"
                      alt="oil-painting"
                      fill
                      className="object-contain w-3/4 max-h-full pl-5 pr-5"
                    />
                  </div>
                  <div className="pb-5">
                    <span className="block text-lg mt-5 font-bold text-center font-body"> Celine Zhang </span>
                    <span className='block text-lg mt-3 text-center font-body text-primary'> Traditional and Digital Art </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center col-span-2 up_until:m-10 mt-10">
                {/* Desktop back button - only visible on large screens */}
                <div className="hidden lg:block absolute top-40 right-20">
                  <BackButton />
                </div>
                <p className='text-primary up_until:text-xl text-lg font-body font-semibold up_until:m-5 leading-relaxed text-left'>
                  Celine is a talented artist with a playful approach to both traditional and digital mediums. Specializing in cartoon-style illustrations, her work radiates charm, humor, and creativity. With her fun, vibrant art style, Celine brings a sense of joy and imagination to the CADI community, inspiring others through her expressive and lighthearted pieces.
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
                <ArtCard
                  src="/artworks/celine/celine1.png"
                  alt="Artwork1"
                />
        
                <ArtCard
                  src="/artworks/celine/celine2.png"
                  alt="Artwork2"
                />
        
                <ArtCard
                  src="/artworks/celine/celine3.png"
                  alt="Artwork3"
                />
                <ArtCard
                  src="/artworks/celine/celine4.png"
                  alt="Artwork4"
                />
                <ArtCard
                  src="/artworks/celine/celine5.png"
                  alt="Artwork5"
                />
              </Masonry>
            </div>
            {/* end of artworks section */}
          </div>
        </div>
      </ZoomReveal>
      {/* end of content wrapper */}
    </>
  );
};

export default Celine;