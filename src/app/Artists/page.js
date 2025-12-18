'use client'

import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../components/animations/Reveal';

const Artists = () => {
  return (
    <>
    <div className="overflow-x-auto mt-10">
      <div className="text-center">
        <Reveal>
          <h2 className="inline-block mt-40 font-bold border-[10px] border-r-[30px] border-l-[30px] border-secondary bg-secondary rounded-full text-primary text-4xl font-body">
            Meet our Artists!
          </h2>
        </Reveal>
        <Reveal delay={0.1}><span className='block lg:p-0 medd-p-0 pl-10 pr-10 mt-5 text-primary font-body font-semibold text-xl'> Click on the Artist&apos;s Card to learn more about their works! </span></Reveal>
      </div>

      <div className="grid grid-cols-1 medd:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-10 m-14">

        <Reveal delay={0.2}>
          <Link href="/Artists/Carol">
            <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
              <div>
                <div className="relative h-[500px] mt-5 flex items-center justify-center p-10">
                  <Image
                    src="/artworks/carol/carol_pfp.jpg"
                    alt="carol-pfp"
                    fill
                    className="object-contain w-3/4 max-h-full pl-5 pr-5"
                  />
                </div>
                <div className="pb-5">
                  <span className="block text-lg mt-5 font-bold text-center font-body"> Carol Wang </span>
                  <span className='block text-lg mt-3 text-center font-body text-primary'> Traditional and Digital Art </span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.3}>
          <Link href="/Artists/Jenny">
            <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
              <div>
                <div className="relative h-[500px] mt-5 flex items-center justify-center p-10">
                  <Image
                    src="/artworks/jenny/jenny_pfp.jpg"
                    alt="jenny-pfp"
                    fill
                    className="object-contain w-3/4 max-h-full pl-5 pr-5"
                  />
                </div>
                <div className="pb-5">
                  <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Jenny Chen </span>
                  <span className='block text-lg mt-3 text-center font-body text-primary'> Photography and Editing </span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.4}>
          <Link href="/Artists/Celine">
            <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
              <div>
                <div className="relative h-[500px] mt-5 flex items-center justify-center p-10">
                  <Image
                    src="/artworks/celine/celine_pfp.jpg"
                    alt="celine-pfp"
                    fill
                    className="object-contain w-3/4 max-h-full pl-5 pr-5"
                  />
                </div>
                <div className="pb-5">
                  <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Celine Zhang</span>
                  <span className='block text-lg mt-3 text-center font-body text-primary'> Traditional and Digital Art </span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.2}>
          <Link href="/Artists/Elizabeth">
            <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
              <div>
                <div className="relative h-[500px] mt-5 flex items-center justify-center p-10">
                  <Image
                    src="/artworks/eliz/eliz_pfp.jpg"
                    alt="elizabeth-pfp"
                    fill
                    className="object-contain w-3/4 max-h-full pl-5 pr-5"
                  />
                </div>
                <div className="pb-5">
                  <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Elizabeth Trinh </span>
                  <span className='block text-lg mt-3 text-center font-body text-primary'> Handicraft (Origami) </span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
          <div>
            <div className="relative h-[500px] mt-5 flex items-center justify-center p-10">
              <Image
                src="/artworks/carol/carol_pfp.jpg"
                alt="emma-pfp"
                fill
                className="object-contain w-3/4 max-h-full pl-5 pr-5"
              />
            </div>
            <div className="pb-5">
              <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Emma Xi </span>
              <span className='block text-lg mt-3 text-center font-body text-primary'> Traditional Art </span>
            </div>
          </div>
        </div> */}

        {/* <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
          <div>
            <div className="relative h-[500px] mt-5 flex items-center justify-center p-10">
              <Image
                src="/artworks/carol/carol_pfp.jpg"
                alt="katherine-pfp"
                fill
                className="object-contain w-3/4 max-h-full pl-5 pr-5"
              />
            </div>
            <div className="pb-5">
              <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Katherine Su </span>
              <span className='block text-lg mt-3 text-center font-body text-primary'> Digital Art </span>
            </div>
          </div>
        </div> */}

        <Reveal delay={0.3}>
          <Link href="/Artists/Sristhi">
            <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
              <div>
                <div className="relative h-[500px] mt-5 flex items-center justify-center p-10">
                  <Image
                    src="/artworks/sris/sristhi_pfp.jpg"
                    alt="srishti-pfp"
                    fill
                    className="object-contain w-3/4 max-h-full pl-5 pr-5"
                  />
                </div>
                <div className="pb-5">
                  <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Srishti Gupta</span>
                  <span className='block text-lg mt-3 text-center font-body text-primary'> Handicraft </span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.4}>
          <Link href="/Artists/Luyao">
            <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
              <div>
                <div className="relative h-[500px] mt-5 flex items-center justify-center p-10">
                  <Image
                    src="/artworks/luyao/luyao_pfp.jpg"
                    alt="luyao-pfp"
                    fill
                    className="object-contain w-3/4 max-h-full pl-5 pr-5"
                  />
                </div>
                <div className="pb-5">
                  <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Luyao Ren </span>
                  <span className='block text-lg mt-3 text-center font-body text-primary'> Traditional and Digital Art </span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.2}>
          <Link href="/Artists/Mary">
            <div className="card hover:shadow-xl lg:max-h-[670px] rounded-xl border border-gray-200 mt-5 hover:-translate-y-4 transition-transform duration-200">
              <div>
                <div className="relative h-[500px] mt-5 flex items-center justify-center p-10">
                  <Image
                    src="/artworks/mary/mary_pfp.jpg"
                    alt="luyao-pfp"
                    fill
                    className="object-contain w-3/4 max-h-full pl-5 pr-5"
                  />
                </div>
                <div className="pb-5">
                  <span className="block text-lg mt-5 font-bold text-center font-body text-primary"> Mary Mai </span>
                  <span className='block text-lg mt-3 text-center font-body text-primary'> Traditional, Digital Art, Handicraft (keychains)</span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

      </div>
    </div>
      
    </>
  )
}

export default Artists;