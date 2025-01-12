"use client"

import { Carousel } from "@material-tailwind/react";

export default function ImageCarousal({images}: any) {

    console.log(images)

    return (
        <Carousel
            className="rounded-2xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                            onScroll={() => setActiveIndex(1)}
                        />
                    ))}
                </div>
            )}
        >
            {
                images?.map((image: any, index: any) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="h-full w-full object-cover"
                    />
                ))
            }
        </Carousel>
    )
}