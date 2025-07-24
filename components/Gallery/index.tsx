import Image from "next/image";
import React from "react";

const Gallery = () => {
  const photos = [
    { src: "/images/gallery/1.jpg", index: 1 },
    { src: "/images/gallery/2.jpg", index: 2 },
    { src: "/images/gallery/3.jpg", index: 3 },
    { src: "/images/gallery/4.jpg", index: 4 },
    { src: "/images/gallery/5.jpg", index: 5 },
    { src: "/images/gallery/6.jpg", index: 6 },
    { src: "/images/gallery/7.jpg", index: 7 },
    { src: "/images/gallery/8.jpg", index: 8 },
    { src: "/images/gallery/9.jpg", index: 9 },
    { src: "/images/gallery/10.jpg", index: 10 },
    { src: "/images/gallery/11.jpg", index: 11 },
    { src: "/images/gallery/12.jpg", index: 12 },
    { src: "/images/gallery/13.jpg", index: 13 },
    { src: "/images/gallery/14.jpg", index: 14 },
    { src: "/images/gallery/15.jpg", index: 15 },
    { src: "/images/gallery/16.jpg", index: 16 },
  ];

  return (
    <div className="masonry" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', justifyContent: 'center', alignItems: 'center', padding: '100px' }}>
      {photos.map((photo, index) => (
        <div key={index} className="relative" style={{ width: '100%', height: '250px' }}>
          <Image
            src={photo.src}
            alt={`Photo ${index + 1}`}
            layout="fill" // Fill the container, cropping the image
            objectFit="cover" // Cover the container, cropping the image
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
