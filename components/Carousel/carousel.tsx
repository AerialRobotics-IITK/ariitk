"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Carousel = ({
  data,
  autoplayInterval = 3000, // Set default autoplay interval in milliseconds
}: {
  data: {
    image: string;
  }[];
  autoplayInterval?: number; // Optional prop for customizable interval
}) => {
  // State and Ref initialization
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // useEffect to get the initial carousel size and set up autoplay
  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
      // Start autoplay logic
      intervalRef.current = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % data.length);
      }, autoplayInterval);
    }

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalRef.current);
  }, [autoplayInterval, data.length, carouselRef]);

  // Function to handle manual navigation click
  const handleNavigationClick = (direction) => {
    setCurrentImg((prev) => {
      if (direction === "prev") {
        return prev === 0 ? data.length - 1 : prev - 1;
      }
      return prev === data.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <div>
      {/* Carousel container */}
      {/* <div className="relative h-80 w-80 overflow-hidden rounded-md"> */}
      <div className="relative h-80 w-80 overflow-hidden">
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
            transition: "transform 2s ease-in-out", // Add transition for smooth scrolling
          }}
          className="absolute flex h-full w-full"
        >
          {/* Map through data to render images */}
          {data.map((v, i) => (
            <div key={i} className="relative h-full w-full shrink-0">
              <Image
                className="pointer-events-none"
                alt={`carousel-image-${i}`}
                fill
                src={v.image || "https://random.imagecdn.app/500/500"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-3 flex justify-center">
        {/* <button
          disabled={currentImg === 0}
          onClick={() => handleNavigationClick("prev")}
          className={`border px-4 py-2 font-bold ${currentImg === 0 && "opacity-50"}`}
        >
          {"<"}
        </button>
        <button
          disabled={currentImg === data.length - 1}
          onClick={() => handleNavigationClick("next")}
          className={`border px-4 py-2 font-bold ${currentImg === data.length - 1 && "opacity-50"}`}
        >
          {">"}
        </button> */}
      </div>
    </div>
  );
};

export default Carousel;
