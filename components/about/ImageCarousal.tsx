"use client";

import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function ImageCarousel({ images }: any) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Set up auto-scroll interval
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        // Reset to first image when reaching the end
        return current === images?.length - 1 ? 0 : current + 1;
      });
    }, 2000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images?.length]);

  return (
    <Carousel
      className="rounded-2xl max-w-[80vw] lg:max-w-[60vw] h-[50vh]"
      autoplay={true}
      autoplayDelay={2000}
      loop={true}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images?.map((image: any, index: number) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className="object-cover w-full h-full rounded-2xl"
        />
      ))}
    </Carousel>
  );
}
