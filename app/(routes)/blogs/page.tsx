import AnyQuestion from "@/components/AnyQuestion";
import BlogsCarousalNavBar from "@/components/BlogsCarousalNavBar";
import BlogsGrid from "@/components/BlogsGrid";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/homepage/NewsLetter";
import NavBar from "@/components/NavBar";

export default function BlogsPage() {

    return (
        <div>
            

            <div
                className="flex items-center gap-3 h-[200px]"
                style={{
                    backgroundImage: "url('/banner/bridge-banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col justify-center bg-blueb-700 w-full h-full bg-opacity-60 text-center">
                    <h1 className="text-5xl font-bold text-white drop-shadow-lg">Blogs</h1>
                    <p className="mt-4 text-xl font-light text-white drop-shadow-lg">
                    News on the world&apos;s most precious resource, including the latest in research, trends, and treatment advances.
                    </p>
                </div>
            </div>

            <div className="px-32 my-10 flex flex-col gap-10">

                <div>
                    <select
                        name="variant"
                        id="variant"
                        title="variant"
                        className="bg-gray-100 py-3 px-5 cursor-pointer outline-none border rounded-lg"
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
                    <BlogsGrid
                        data={[
                            { post_title: "Algae-based Wastewater Treatment", post_slug: "/blogs/1", post_image: "/blogs/blog2.png" },
                            { post_title: "Scientist found new way to treat Waste Water", post_slug: "/blogs/1", post_image: "/blogs/blog1.png" },
                            { post_title: "7 Benefits Of Wastewater Treatment", post_slug: "/blogs/1", post_image: "/blogs/blog3.png" },
                            { post_title: "Why Municipal Wastewater Treatment Is Important?", post_slug: "/blogs/1", post_image: "/blogs/blog4.png" },
                            { post_title: "Case Studies: Successful Wastewater Treatment through Bioremediation", post_slug: "/blogs/1", post_image: "/casestudy/cs1.png" },
                            { post_title: "Decentralized Wastewater Treatment for a Chinese Village", post_slug: "/blogs/1", post_image: "/casestudy/cs2.png" },
                            { post_title: "Environment-Friendly Waste Water Treatment | Case Study", post_slug: "/blogs/1", post_image: "/casestudy/cs3.png" },
                            { post_title: "Monroe Environmental Saves Steel Mill $145,000 on Clarifier Upgrade", post_slug: "/blogs/1", post_image: "/casestudy/cs4.png" },
                        ]} />
                </div>
            </div>

            <NewsLetter />
            
        </div>
    )
}