"use client"

import AnyQuestion from "@/components/AnyQuestion";
import BlogsCarousal from "@/components/BlogsCarousal";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useState } from "react";

export default function Products1Page() {

    const [model, setModel] = useState("")

    return (
        <>

            <NavBar />

            <div className="relative bg-blueb-700">
                <img src='/waterharvester.png' alt="" className="w-screen h-[100vh] object-cover opacity-30" />
                <div className="absolute w-full top-[45%] text-white flex flex-col items-center justify-center ">
                    <h1 className="text-center w-fit font-semibold text-7xl text-white">Quick Cycle Demineralization</h1>
                    <p className="text-center w-fit text-3xl text-white mt-3">Zero Liquid Discharge</p>
                </div>
            </div>

            <div className="flex flex-col gap-20 my-20 px-32">

                <div className="">
                    <div className="flex gap-5">
                        <div className="w-full">
                            <img src='/waterharvester.png' alt="" className="w-full h-full object-cover rounded-lg" />
                            <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p>
                        </div>
                        <div className="w-full">
                            <p className="text-lg w-fit font-semibold">Applications of QCDM</p>
                            <p className="text-md w-fit  mt-3">Ionic redefines the way water is demineralized. Water treatment is important. More important is how  efficiently you treat water. With Minimum and Zero liquid discharge manufacturing facilities becoming the  regulatory norms and with rising water shortage, environmental problems and operating cost we need to  seriously think about lowering Life Cycle cost and consider “Cleaner Production” and Quick Cycle  demineralizers just offers that!</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="flex gap-5">
                        <div className="w-full">
                            <p className="text-lg w-fit font-semibold">Working of QCDM</p>
                            <p className="text-md w-fit  mt-3">30 models of fully automatic “Quick Cycle” demineralizers use 5th Generation Premium grade proprietary ion
                                exchange resin process technology that provides unparalleled manufacturing advantage to industries that
                                wants to reduce their water, waste water and chemical foot print. The flow rate ranges from 2.0- 60.0 m3/hr.
                                Three different series produces 3 different treated water qualities for meeting different end user
                                requirements.
                                Unlike conventional manually operated demineralisers “Quick Cycle” plant requires very short service cycle
                                and regeneration time offering many direct and intangible benefits to the end user!
                                Please do contact us with your specific requirements and Ionic will provide you the optimum solution. </p>
                        </div>
                        <div className="w-full">
                            <img src='/waterharvester.png' alt="" className="w-full h-full object-cover rounded-lg" />
                            <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <p className="text-xl w-fit font-semibold">Models of QCDM</p>
                    <div className="w-full flex gap-5 mt-10">
                        <div className="w-full flex flex-col items-center justify-center">
                            <img src='/qcdm_model.png' alt="" className="w-1/2 h-full object-cover rounded-lg" />
                            <p className="w-full text-center mt-2 text-sm">Water Harvester Plant</p>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center">
                            <img src='/qcdm_model.png' alt="" className="w-1/2 h-full object-cover rounded-lg" />
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
                            <p className="w-full h-[10vh] bg-[#d8f5fb] mx-10 mt-5 px-10 py-5 rounded-lg"> {model}'s details of model goes here...</p>
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
                            <p className="w-full h-[10vh] bg-[#d8f5fb] mx-10 mt-5 px-10 py-5 rounded-lg"> {model}'s details of model goes here...</p>
                        </div>
                    }


                </div>

                {/* <div className="h-[50vh]"></div> */}

                <div className="">
                    <p className="text-xl w-fit font-semibold">Brochure</p>
                    <div className="mt-5 w-fit flex flex-col gap-3">
                        <img className="h-80 rounded-xl" src="/brochure.png" />
                        <p>Download Brochure (PDF)</p>
                    </div>
                </div>

                <div className="">
                    <p className="text-xl w-fit font-semibold">Case Studies</p>
                    <BlogsCarousal
                        data={[
                            { post_title: "Case Studies: Successful Wastewater Treatment through Bioremediation", post_slug: "", post_image: "/casestudy/cs1.png" },
                            { post_title: "Decentralized Wastewater Treatment for a Chinese Village", post_slug: "", post_image: "/casestudy/cs2.png" },
                            { post_title: "Environment-Friendly Waste Water Treatment | Case Study", post_slug: "", post_image: "/casestudy/cs3.png" },
                            { post_title: "Monroe Environmental Saves Steel Mill $145,000 on Clarifier Upgrade", post_slug: "", post_image: "/casestudy/cs4.png" },
                        ]} />
                </div>

                <div className="">
                    <p className="text-xl w-fit font-semibold">Blogs</p>
                    <BlogsCarousal
                        data={[
                            { post_title: "Algae-based Wastewater Treatment", post_slug: "", post_image: "/blogs/blog2.png" },
                            { post_title: "Scientist found new way to treat Waste Water", post_slug: "", post_image: "/blogs/blog1.png" },
                            { post_title: "7 Benefits Of Wastewater Treatment", post_slug: "", post_image: "/blogs/blog3.png" },
                            { post_title: "Why Municipal Wastewater Treatment Is Important?", post_slug: "", post_image: "/blogs/blog4.png" },
                        ]} />
                </div>
            </div>

            <AnyQuestion />
            <Footer />
        </>
    )
}