import AnyQuestion from "@/components/AnyQuestion";
import BlogsGrid from "@/components/BlogsGrid";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import NavBarWhite from "@/components/NavBarWhite";

export default function CaseStudyPage() {

    return (
        <div>
            <NavBarWhite />

            <div className="bg-blueb-50 mt-20 py-10 px-32 ">
                <h1 className="text-5xl font-semibold text-black">Case Studies</h1>
                <p className="text-xl font-light mt-2">Explore our recent water, wastewater, and reuse projects from across the globe.</p>
            </div>

            <div className="px-32 my-10 flex flex-col gap-10">

                <div>
                    <select
                        name="variant"
                        id="variant"
                        title="variant"
                        className="bg-gray-100 py-3 px-5 outline-none border rounded-lg"
                    // onChange={handleSelectChange}
                    // value={currentVariant}
                    >
                        <option value="" className="text-lg font-light">Show All</option>
                        <option value="" className="text-lg font-light">Category 1</option>
                        <option value="" className="text-lg font-light">Category 2</option>
                        <option value="" className="text-lg font-light">Category 3</option>
                        <option value="" className="text-lg font-light">Category 4</option>
                        <option value="" className="text-lg font-light">Category 5</option>
                    </select>
                </div>

                <div className="">
                    {/* <p className="text-xl w-fit font-semibold">Blogs</p> */}
                    <CaseStudiesGrid
                        data={[
                            { post_title: "Case Studies: Successful Wastewater Treatment through Bioremediation", post_slug: "", post_image: "/casestudy/cs1.png" },
                            { post_title: "Decentralized Wastewater Treatment for a Chinese Village", post_slug: "", post_image: "/casestudy/cs2.png" },
                            { post_title: "Environment-Friendly Waste Water Treatment | Case Study", post_slug: "", post_image: "/casestudy/cs3.png" },
                            { post_title: "Monroe Environmental Saves Steel Mill $145,000 on Clarifier Upgrade", post_slug: "", post_image: "/casestudy/cs4.png" },
                            { post_title: "Algae-based Wastewater Treatment", post_slug: "", post_image: "/blogs/blog2.png" },
                            { post_title: "Scientist found new way to treat Waste Water", post_slug: "", post_image: "/blogs/blog1.png" },
                            { post_title: "7 Benefits Of Wastewater Treatment", post_slug: "", post_image: "/blogs/blog3.png" },
                            { post_title: "Why Municipal Wastewater Treatment Is Important?", post_slug: "", post_image: "/blogs/blog4.png" },
                        ]} />
                </div>
            </div>

            <AnyQuestion />
            <Footer />
        </div>
    )
}