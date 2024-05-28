"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type PostData = {
    post_title: string;
    post_slug: string;
    post_image: string;
};

type DataType = PostData[];

export default function ExpertReviews({ data }: { data: DataType }) {
    const [isLarge, setIsLarge] = useState(false);
    const [isMedium, setIsMedium] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLarge(window.matchMedia("(min-width: 1024px)").matches);
            setIsMedium(
                window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches
            );
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [imageIndex, setImageIndex] = useState(0);
    const showNextImage = (imageIndex: number) => {
        if (isLarge && imageIndex === data.length - 4) {
            setImageIndex(0);
        } else if (!isLarge && imageIndex === data.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }
    };
    const showPrevImage = (imageIndex: number) => {
        if (isLarge && imageIndex === 0) {
            setImageIndex(data.length - 4);
        } else if (!isLarge && imageIndex === 0) {
            setImageIndex(data.length - 1);
        } else {
            setImageIndex(imageIndex - 1);
        }
    };
    return (
        <div className="w-full h-full px-7 mt-4  relative flex flex-col items-center justify-center md:items-start md:overflow-hidden md:px-0 lg:px-0">
            <div className=" flex w-full h-full overflow-hidden ">
                {data &&
                    data.map((post, index) => (
                        <a
                            key={index}
                            style={{ translate: `${-100 * imageIndex}%` }}
                            className={`h-full w-full  md:w-[50%] lg:w-[25%] md:px-2 flex flex-col transition-all bg-[#f9f9f9]  ease-in-out duration-300   gap-3 items-center  flex-shrink-0 flex-grow-0 justify-start bg-transparent bg-opacity-30 hover:scale-105`}
                            href={post.post_slug}
                            target="_blank"
                        >
                            <img
                                src={post.post_image ? post.post_image : ""}
                                alt="postimgae"
                                className=" w-full h-[12rem] object-cover rounded-xl"
                            />
                            <div className="flex flex-col w-full h-full items-center justify-center py-2 ">
                                <h3 className="font-semibold text-[#444444]">
                                    {post.post_title}
                                </h3>
                                {/* <p className="text-[#929292] text-xs">{post.post_date}</p> */}
                            </div>
                        </a>
                    ))}
            </div>
            {/* {data.length > 4 ? (
                <div className="w-full flex items-center justify-center gap-3 mt-2">
                    <div
                        className="p-3 bg-[#e9e9e9] rounded-sm cursor-pointer "
                        onClick={() => showPrevImage(imageIndex)}
                    >
                        <img
                            src="/nextmedia/modeldetails/arrow-right.svg "
                            alt="img"
                            className="w-6 h-6 rotate-180"
                        />
                    </div>
                    <div
                        className="p-3 bg-[#e9e9e9] rounded-sm cursor-pointer"
                        onClick={() => showNextImage(imageIndex)}
                    >
                        <img
                            src="/nextmedia/modeldetails/arrow-right.svg "
                            alt="img"
                            className="w-6 h-6"
                        />
                    </div>
                </div>
            ) : (
                <div className="w-full flex items-center justify-center gap-3 mt-2">
                    <div className="p-3 bg-[#e9e9e9] rounded-sm cursor-pointer ">
                        <img
                            src="/nextmedia/modeldetails/arrow-right.svg "
                            alt="img"
                            className="w-6 h-6 rotate-180"
                        />
                    </div>
                    <div className="p-3 bg-[#e9e9e9] rounded-sm cursor-pointer">
                        <img
                            src="/nextmedia/modeldetails/arrow-right.svg "
                            alt="img"
                            className="w-6 h-6"
                        />
                    </div>
                </div>
            )} */}
        </div>
    );
}
