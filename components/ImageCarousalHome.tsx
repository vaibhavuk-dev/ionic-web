'use client'
import { useState } from "react"

export default function ImageCarousalHome() {

    const images = [
        "/waterharvester.png",
        "/blogs/blog1.png",
        "/waterharvester.png",
        "/blogs/blog3.png",
        "/blogs/blog2.png"
    ]

    const [currentImage, setCurrentImage] = useState("");

    return (
        <div className={`h-full w-full  basic-transition`}>
            <div className={`fixed h-[90vh] right-0 flex flex-col items-center justify-center `}>
                {currentImage && (
                    <div className="w-full flex flex-col items-center justify-center py-10">
                        <img
                            className="h-[50vh] rounded-xl border border-white animate-popUp"
                            src={currentImage}
                            alt=""
                        />
                    </div>
                )}

                <div className="flex flex-col overflow-hidden gap-5 justify-center items-center px-10">
                    {images.map((image) => (
                        <img
                            className="w-24 h-14 rounded-xl border border-white cursor-pointer"
                            src={image}
                            alt=""
                            key={image}
                            onMouseEnter={() => setCurrentImage(image)}
                            onMouseLeave={() => setCurrentImage("")}
                        />
                    ))}
                </div>

                {/* <img className="my-3 h-7" src="/down-chevron.svg" alt="" /> */}
            </div>
        </div>
    )
}
