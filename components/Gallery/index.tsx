import Image from "next/image";
import React from "react";

const Gallery = () => {
  const photos = [
    { src: "/images/gallery/1.jpg", index: 1 },
    // { src: "/images/gallery/2.jpg", index: 2 },
    // { src: "/images/gallery/3.jpg", index: 3 },
    // { src: "/images/gallery/4.jpg", index: 4 },
    { src: "/images/gallery/5.jpg", index: 5 },
    { src: "/images/gallery/6.jpg", index: 6 },
    { src: "/images/gallery/7.jpg", index: 7 },
    { src: "/images/gallery/8.jpg", index: 8 },
    { src: "/images/gallery/9.jpg", index: 9 },
    { src: "/images/gallery/10.jpg", index: 10 },
    { src: "/images/gallery/11.jpg", index: 11 },
    { src: "/images/gallery/12.jpg", index: 12 },
    // { src: "/images/gallery/13.jpg", index: 13 },
    { src: "/images/gallery/14.jpg", index: 14 },
    { src: "/images/gallery/15.jpg", index: 15 },
    { src: "/images/gallery/16.jpg", index: 16 },
  ];

  return (
    <div>
      <br />
      {/* <div className="masonry grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {photos.map((photo, index) => (
          <div key={index}>
          <div className='relative ml-2 mr-2 mt-2 mb-2'>
          <img
            src={photo.src}
            className="square-full scale-105 ease-in-out"
          />
          </div>
        </div>
        ))}
      </div> */}

      <div className="masonry grid w-full grid-cols-2 justify-center gap-3 p-[10px] lg:grid-cols-3 xl:grid-cols-3">
        {photos.map((photo, index) => (
          <div key={index} className="relative">
            {/* <div className="layout-intrinsic object-cover"> */}
            <Image
              src={photo.src}
              width={500}
              height={300}
              alt={`Photo ${index + 1}`}
            />
            {/* </div> */}
            {/* </div> */}
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
export default Gallery;
