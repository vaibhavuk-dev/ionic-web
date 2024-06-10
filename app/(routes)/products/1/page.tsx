"use client"

import AnyQuestion from "@/components/AnyQuestion";
import BlogsCarousal from "@/components/BlogsCarousal";
import CaseStudiesCarousal from "@/components/CaseStudiesCarousal";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ProductGallery from "@/components/ProductGallery";
import { useState } from "react";

export default function Products1Page() {

    const [model, setModel] = useState("")

    return (
        <>

            <NavBar />

            <div className="relative bg-blueb-700">
                <img src="/waterharvester.png" alt="" className="w-screen h-[100vh] object-cover opacity-30" />
                <div className="absolute w-full top-[45%] text-white flex flex-col items-center justify-center">
                    <h1 className="text-center w-fit font-semibold text-7xl text-white">Quick Cycle Demineralization</h1>
                    <p className="text-center w-fit text-3xl text-white mt-3">Zero Liquid Discharge</p>
                </div>
            </div>

            <div className="flex flex-col gap-20 my-20 px-32 bg-white">

                <div className="">
                    <div className="flex gap-5">
                        <div className="w-full">
                            <img src="/waterharvester.png" alt="" className="w-full h-full object-cover rounded-lg" />
                            <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p>
                        </div>
                        <div className="w-full">
                            <p className="text-lg w-fit font-semibold">Applications of QCDM</p>
                            <p className="text-md w-fit text-justify mt-3">Enhance your water treatment process with Ionic&amp;s &quote;Quick Cycle&quote; Fully Automatic Demineralisers, the ultimate solution for efficient and sustainable water demineralization. Designed to meet the rising demand for minimal waste and compliance with environmental regulations, these advanced demineralizers use proprietary 5th Generation ion exchange resin technology. This innovative approach offers industries an unparalleled advantage by reducing water, wastewater, and chemical footprints. Available in 30 models with flow rates ranging from 2.0 to 60.0 m³/hr, our Quick Cycle systems cater to diverse operational needs with three distinct series providing various treated water qualities. Unlike traditional systems, Ionic&apos;s Quick Cycle demineralizers deliver ultra-short service cycles and rapid regeneration, driving down operational costs and boosting productivity. Optimize your water treatment process today with Ionic&apos;s state-of-the-art Quick Cycle technology.</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="flex gap-5">
                        <div className="w-full">
                            <p className="text-lg w-fit font-semibold">Working of QCDM</p>
                            <p className="text-md w-fit text-justify mt-3">Ionic&apos;s Quick Cycle Fully Automatic Demineralisers are compact, skid-mounted units engineered for maximum reliability and efficiency. Featuring fully automated PLC controls, these systems are Industry 4.0 and Water 4.0 ready, ensuring seamless integration with modern, smart factories. They consistently produce high-quality demineralized water with conductivity below 1.0 µS/cm, thanks to their advanced ion exchange resin technology. Our demineralizers stand out for their low chemical, water, and power consumption, significantly lowering operational costs. Constructed with premium materials like UPVC piping and SS 316 process pumps, these units promise longevity and low maintenance. Optional features include real-time remote monitoring and printout facilities for enhanced operational oversight. Suitable for a wide range of applications from pharmaceuticals and cosmetics to automotive and aerospace, Ionic&apos;s Quick Cycle demineralizers provide a robust and eco-friendly solution for your water treatment needs. Contact us today to customize a system tailored to your specific requirements. </p>
                        </div>
                        <div className="w-full">
                            <img src="/waterharvester.png" alt="" className="w-full h-full object-cover rounded-lg" />
                            <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <p className="text-xl w-fit font-semibold">Models of QCDM</p>
                    <div className="w-full flex gap-5 mt-10">
                        <div className="w-full flex flex-col items-center justify-center">
                            <img src="/qcdm_model.png" alt="" className="w-1/2 h-full object-cover rounded-lg" />
                            <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center">
                            <img src="/qcdm_model.png" alt="" className="w-1/2 h-full object-cover rounded-lg" />
                            <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p>
                        </div>
                    </div>

                    <div className="flex w-full gap-5 justify-evenly mt-7">
                        <button className={`w-fit mx-3 px-7 py-4 rounded-lg hover:bg-[#10BDC8] hover:text-white ${model === "QCDM 1+" ? "bg-[#10BDC8] text-white" : "bg-[#d8f5fb]"}`}
                            onClick={() => setModel("QCDM 1+")}>
                            QCDM 1+
                        </button>
                        <button className={`w-fit mx-3 px-7 py-4 rounded-lg hover:bg-[#10BDC8] hover:text-white ${model === "QCDM 2+" ? "bg-[#10BDC8] text-white" : "bg-[#d8f5fb]"}`}
                            onClick={() => setModel("QCDM 2+")}>
                            QCDM 2+
                        </button>
                        <button className={`w-fit mx-3 px-7 py-4 rounded-lg hover:bg-[#10BDC8] hover:text-white ${model === "QCDM 3+" ? "bg-[#10BDC8] text-white" : "bg-[#d8f5fb]"}`}
                            onClick={() => setModel("QCDM 3+")}>
                            QCDM 3+
                        </button>
                        <button className={`w-fit mx-3 px-7 py-4 rounded-lg hover:bg-[#10BDC8] hover:text-white ${model === "QCDM 4+" ? "bg-[#10BDC8] text-white" : "bg-[#d8f5fb]"}`}
                            onClick={() => setModel("QCDM 4+")}>
                            QCDM 4+
                        </button>
                    </div>

                    {
                        (model === "QCDM 1+" || model === "QCDM 2+" || model === "QCDM 3+" || model === "QCDM 4+") && <div>
                            <p className="w-full h-[10vh] bg-[#d8f5fb] mx-10 mt-5 px-10 py-5 rounded-lg"> {model}&apos;s details of model goes here...</p>
                        </div>
                    }

                    <div className="flex w-full gap-5 justify-evenly mt-7">
                        <button className={`w-fit mx-3 px-7 py-4 rounded-lg hover:bg-[#10BDC8] hover:text-white ${model === "QCDM 5+" ? "bg-[#10BDC8] text-white" : "bg-[#d8f5fb]"}`}
                            onClick={() => setModel("QCDM 5+")}>
                            QCDM 5+
                        </button>
                        <button className={`w-fit mx-3 px-7 py-4 rounded-lg hover:bg-[#10BDC8] hover:text-white ${model === "QCDM 6+" ? "bg-[#10BDC8] text-white" : "bg-[#d8f5fb]"}`}
                            onClick={() => setModel("QCDM 6+")}>
                            QCDM 6+
                        </button>
                        <button className={`w-fit mx-3 px-7 py-4 rounded-lg hover:bg-[#10BDC8] hover:text-white ${model === "QCDM 7+" ? "bg-[#10BDC8] text-white" : "bg-[#d8f5fb]"}`}
                            onClick={() => setModel("QCDM 7+")}>
                            QCDM 7+
                        </button>
                        <button className={`w-fit mx-3 px-7 py-4 rounded-lg hover:bg-[#10BDC8] hover:text-white ${model === "QCDM 8+" ? "bg-[#10BDC8] text-white" : "bg-[#d8f5fb]"}`}
                            onClick={() => setModel("QCDM 8+")}>
                            QCDM 8+
                        </button>
                    </div>

                    {
                        (model === "QCDM 5+" || model === "QCDM 6+" || model === "QCDM 7+" || model === "QCDM 8+") && <div>
                            <p className="w-full h-[10vh] bg-[#d8f5fb] mx-10 mt-5 px-10 py-5 rounded-lg"> {model}&apos;s details of model goes here...</p>
                        </div>
                    }

                </div>

                {/* <div className="h-[50vh]"></div> */}

                <div className="">
                    <p className="text-xl w-fit font-semibold">Gallery</p>
                    <div className="mt-5 ">
                        <ProductGallery />
                    </div>
                </div>

                <div className="">
                    <p className="text-xl w-fit font-semibold">Brochure</p>
                    <div className="mt-5 w-fit flex flex-col gap-3">
                        <img className="h-80 rounded-xl" src="/brochure.png" />
                        <p>Download Brochure (PDF)</p>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <CaseStudiesCarousal
                    data={[
                        { post_title: "Case Studies: Successful Wastewater Treatment through Bioremediation", post_slug: "/case-study/1", post_image: "/blogs/blog2.png" },
                        { post_title: "Why Municipal Wastewater Treatment Is Important?", post_slug: "/blogs/1", post_image: "/blogs/blog4.png" },
                        { post_title: "7 Benefits Of Wastewater Treatment", post_slug: "/blogs/1", post_image: "/blogs/blog3.png" },
                        { post_title: "Monroe Environmental Saves Steel Mill $145,000 on Clarifier Upgrade", post_slug: "/case-study/1", post_image: "/casestudy/cs4.png" },
                    ]} />
            </div>

            <div className="bg-white">
                <BlogsCarousal
                    data={[
                        { post_title: "Algae-based Wastewater Treatment", post_slug: "/blogs/1", post_image: "/blogs/blog2.png" },
                        { post_title: "Scientist found new way to treat Waste Water", post_slug: "/blogs/1", post_image: "/blogs/blog1.png" },
                        { post_title: "7 Benefits Of Wastewater Treatment", post_slug: "/blogs/1", post_image: "/blogs/blog3.png" },
                        { post_title: "Why Municipal Wastewater Treatment Is Important?", post_slug: "/blogs/1", post_image: "/blogs/blog4.png" },
                    ]} />
            </div>

            <AnyQuestion />
            <Footer />
        </>
    )
}