'use client'
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import ArtCard from '@/app/components/ArtCard';
import BackButton from '@/app/components/BackButton';


const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const Jenny = () => {
  return (
    <>
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
                    src="/artworks/jenny/jenny_pfp.jpg"
                    alt="oil-painting"
                    fill
                    className="object-contain w-3/4 max-h-full pl-5 pr-5"
                  />
                </div>
                <div className="pb-5">
                  <span className="block text-lg mt-5 font-bold text-center font-body"> Jenny Chen </span>
                  <span className='block text-lg mt-3 text-center font-body text-primary'> Photography and Editing </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center col-span-2 up_until:m-10 mt-10">
              {/* Desktop back button - only visible on large screens */}
              <div className="hidden lg:block absolute top-40 right-20">
                <BackButton />
              </div>
              <p className='text-primary up_until:text-xl text-lg font-body font-semibold up_until:m-5 leading-relaxed text-left'>
                Jenny is a creative artist with expertise in photography and video editing. Known for her strong aesthetic sense, she captures professional-quality images and skillfully edits engaging vlogs. Her work blends technical precision with artistic vision, bringing stories to life through both still and moving visuals. As part of the CADI community, Jenny contributes her eye for beauty and storytelling, inspiring others to see the world through a new lens.
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
                src="/artworks/jenny/jenny1.png"
                alt="Artwork1"
              />
              <ArtCard
                src="/artworks/jenny/jenny2.png"
                alt="Artwork2"
              />
              
              <ArtCard
                src="/artworks/jenny/jenny3.png"
                alt="Artwork3"
              />

              <ArtCard
                src="/artworks/jenny/jenny4.png"
                alt="Artwork4"
              />

              <ArtCard
                src="/artworks/jenny/jenny5.png"
                alt="Artwork5"
              />
            </Masonry>

          </div>
          {/* end of artworks section */}

        </div>
      </div>
      {/* end of content wrapper */}
    </>
  );
};

export default Jenny;