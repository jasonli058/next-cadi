"use client"
import Image from "next/image";

const ArtCard = ({ src, alt}) => (
    <div className='bg-white rounded-xl shadoow-md overflow-hidden flex flex-col items-center'>
        {/* <img 
            src={src} 
            alt={alt}
            className="w-full h-auto object-cover border border-gray-300 rounded-xl"
        /> */}
        <Image 
            src={src} 
            alt={alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="object-cover border border-gray-300 rounded-xl"
        />
    </div>
);

export default ArtCard