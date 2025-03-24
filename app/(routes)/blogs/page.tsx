import BlogsCarousalNavBar from "@/components/BlogsCarousalNavBar";
import BlogsGrid from "@/components/BlogsGrid";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/homepage/NewsLetter";
import NavBar from "@/components/NavBar";
import { sanityClient } from "@/lib/sanity";
import { notFound } from "next/navigation";

export default async function BlogsPage() {

    const query = `
    *[_type == "blog"]{
      title,
      slug,
      author,
      publishedAt,
      featuredImage{
        asset->{
            _id,
            url
        },
        alt
      },
      category,
      tags,
      seoTitle,
      seoDescription
    }`;

    let blogData: any;

    try {
        blogData = await sanityClient.fetch(query);

        console.log(blogData);

        if (!blogData) {
            return notFound();
        }

    } catch (error) {
        console.error('Error fetching product data:', error);
        return notFound();
    }

    return (
        <div>
            
            <div
                className="flex items-center"
                style={{
                    backgroundImage: "url('/banner/bridge-banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col justify-center bg-secondary w-full h-full bg-opacity-90 text-center responsive-padding py-4 lg:py-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">Blogs</h1>
                    <h2 className="text-md lg:text-xl font-light text-white drop-shadow-lg mt-2">
                        Blogs on the world&apos;s most precious resource, including the latest in research, trends, and treatment advances.
                    </h2>
                </div>
            </div>

            <div className="px-32 my-10 flex flex-col gap-10">

                {/* <div>
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
                </div> */}

                <div className="">
                    {/* <p className="text-xl w-fit font-semibold">Blogs</p> */}
                    <BlogsGrid
                        data={blogData.map((blog: any) => ({
                            post_title: blog.title,
                            post_slug: "/blogs/" + blog.slug.current,
                            post_image: blog.featuredImage?.asset?.url,
                            post_description: blog.seoDescription
                        }))}
                    />
                </div>
            </div>

            {/* <NewsLetter /> */}

        </div>
    )
}