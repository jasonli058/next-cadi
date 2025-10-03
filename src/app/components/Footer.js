'use client'

import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center border-t-2 '>
      <div className='flex items-center justify-between'>
        <Image 
        src="/img/new_cadi_logo2.jpg"
        alt="cadi-logo"
        width={80}
        height={80}
        className="rounded-full w-20 mt-10"
        />
        <h1 className="text-3xl font-bold ml-5 mt-10">CADI</h1>
      </div>
      <div className='mt-5 flex flex-col items-center mb-10'>
        <p className='mr-3'>©2025</p>
        <Link href ="/" className='hover:underline hover:text-darker_accent'>
        CADI: Commissions and Digital Innovations
        </Link>
        <p className='ml-3'>All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer