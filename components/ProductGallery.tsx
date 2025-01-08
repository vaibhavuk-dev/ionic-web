'use client'
import { useState } from "react"

export default function ProductGallery() {

    const images = [
        "/waterharvester.png",
        "/machine.jpg",
        "/blogs/blog1.png",
        "/blogs/blog2.png",
        "/blogs/blog3.png",
    ]

    const [currentImage, setCurrentImage] = useState("/waterharvester.png");

    return (
        <div className={`w-full h-[500px] flex gap-16 items-start`}>

            <div className="h-[500px] w-30 flex flex-col overflow-y-scroll gap-5 items-center hide-scrollbar">
                {images.map((image) => (
                    <img
                        className={`w-full h-14 cursor-pointer object-cover border-2 ${currentImage === image ? "border-blueb-700" : "border-gray-400"}`}
                        src={image}
                        alt=""
                        key={image}
                        onMouseEnter={() => setCurrentImage(image)}
                    />
                ))}
            </div>

            {currentImage && (
                <div className="h-[500px]  flex relative">
                    <img
                        className="border border-white animate-slideInFromLeft transition-all duration-500 ease-in-out"
                        src={currentImage}
                        alt=""
                    />
                    <p className="absolute bottom-0 left-0 w-full backdrop-blur-3xl px-5 py-3 text-white text-lg animate-fadeIn transition-opacity duration-500 ease-in-out">
                        More important is how efficiently you treat water. With Minimum and Zero liquid discharge manufacturing facilities.
                    </p>
                </div>
            )}
        </div>
    )
}