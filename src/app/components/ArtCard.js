"use client"
import Image from "next/image";
import { useState } from 'react';

const ArtCard = ({ src, alt}) => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div className='bg-white rounded-xl shadoow-md overflow-hidden flex flex-col items-center'>
        <Image 
          src={src} 
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="object-cover border border-gray-300 rounded-xl cursor-pointer hover:opacity-90 transition"
          onClick={() => setIsEnlarged(true)}
        />
      </div>

      {isEnlarged && (
        <div 
          onClick={() => {
            setIsEnlarged(false);
            setIsZoomed(false);
          }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <Image 
            src={src} 
            alt={alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{ 
              width: 'auto', 
              height: 'auto', 
              maxWidth: '95vw', 
              maxHeight: '95vh',
              transform: isZoomed ? 'scale(2)' : 'scale(1)',
              cursor: isZoomed ? 'zoom-out' : 'zoom-in'
            }}
            className="object-contain transition-transform duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(!isZoomed);
            }}
          />
        </div>
      )}
    </>
  );
};

export default ArtCard