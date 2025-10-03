"use client"

const ArtCard = ({ src, alt}) => (
    <div className='bg-white rounded-xl shadoow-md overflow-hidden flex flex-col items-center'>
        <img 
            src={src} 
            alt={alt}
            className="w-full h-auto object-cover border border-gray-300 rounded-xl"
        />
    </div>
);

export default ArtCard