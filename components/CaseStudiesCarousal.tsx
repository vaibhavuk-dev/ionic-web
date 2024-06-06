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
        if (isLarge && imageIndex === data.length - 3) {
            setImageIndex(0);
        } else if (!isLarge && imageIndex === data.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }
    };
    const showPrevImage = (imageIndex: number) => {
        if (isLarge && imageIndex === 0) {
            setImageIndex(data.length - 3);
        } else if (!isLarge && imageIndex === 0) {
            setImageIndex(data.length - 1);
        } else {
            setImageIndex(imageIndex - 1);
        }
    };
    return (
        <div className="w-full h-full px-7 mt-4  relative flex flex-col items-center justify-center md:items-start md:overflow-hidden md:px-0 lg:px-0 bg-white my-5">

            <div className="px-32 flex flex-col gap-2">
                <p className="text-xl w-fit font-semibold">Case Studies</p>
                <div className=" flex items-center h-[65vh] w-full overflow-hidden gap-5">
                    {data &&
                        data.map((post, index) => (
                            <div className="group h-[60vh] w-[30%] flex relative flex-shrink-0 flex-grow-0 hover:h-[65vh] cursor-pointer" key={index} style={{ translate: `${-110 * imageIndex}%` }}>
                                <img
                                    className="border border-white object-cover"
                                    src={post.post_image ? post.post_image : ""}
                                    alt=""
                                />
                                <div className="absolute bottom-0 left-0 w-full backdrop-blur-xl px-5 py-3 h-[20%] group-hover:h-[80%] group-hover:bg-blueb-700">
                                    <p className="text-white text-md group-hover:font-semibold line-clamp-2 group-hover:line-clamp-none">{post.post_title}</p>
                                    <p className="hidden group-hover:flex font-light text-white text-sm pt-2">
                                        30 models of fully automatic “Quick Cycle” demineralizers use 5th Generation Premium grade proprietary ion exchange resin process technology that provides unparalleled manufacturing advantage to industries that wants to reduce their water, waste water and chemical foot print. The flow rate ranges from 2.0- 60.0 m3/hr.

                                    </p>
                                </div>

                            </div>
                        ))}
                </div>
            </div>

            {data.length > 3 ? (
                <div className="absolute justify-between w-full flex items-center gap-3 mt-2 px-16">
                    <div
                        className={`rounded-sm cursor-pointer ${imageIndex == 0 && "invisible"}`}
                        onClick={() => showPrevImage(imageIndex)}
                    >
                        <img
                            src="/icons/carousalLeft.svg "
                            alt="img"
                            className="w-8 h-8"
                        />
                    </div>
                    <div
                        className="rounded-sm cursor-pointer"
                        onClick={() => showNextImage(imageIndex)}
                    >
                        <img
                            src="/icons/carousalRight.svg "
                            alt="img"
                            className="w-8 h-8"
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
            )}
        </div>
    );
}
