import AnyQuestion from "@/components/AnyQuestion";
import BlockRenderer from "@/components/BlockRenderer";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { sanityClient } from "@/lib/sanity";
import { formatDate } from "@/utils/formatter";
import { notFound } from "next/navigation";

export default async function Blog({ params }: { params: any }) {

    const { slug } = await Promise.resolve(params);

    console.log(slug);

    const query = `
    *[_type == "blog" && slug.current == $slug][0]{
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
      content,
      seoTitle,
      seoDescription
    }`;

    let blogData: any;

    try {
        blogData = await sanityClient.fetch(query, { slug });

        console.log(blogData?.content?.[0]);

        if (!blogData) {
            return notFound();
        }

    } catch (error) {
        console.error('Error fetching product data:', error);
        return notFound();
    }

    return (
        <div>
            <div className="w-full px-10 lg:px-32 py-16 flex gap-10">
                <div className="">
                    <div className="border rounded-lg">
                        <div className="p-5">
                            <p className="bg-blueb-50 py-1 px-2 rounded-lg text-sm w-fit text-blueb-800">Blog</p>
                            <h1 className="mt-3 text-3xl font-semibold text-primary">{blogData.title}</h1>
                            <div className="flex w-full gap-10">
                                <p className="text-lg font-light mt-2">Author: {blogData.author}</p>
                                <p className="text-lg font-light mt-2">Published: {formatDate(blogData.publishedAt)}</p>
                            </div>
                        </div>
                        <img className="w-full" src={blogData.featuredImage?.asset?.url} alt="" />
                    </div>

                    <div className="mt-10">
                        <BlockRenderer content={blogData?.content} />
                    </div>

                </div>
                <div className="w-[35%] hidden">

                    <div className="sticky top-0 bg-blueb-50 mx-5 p-5 flex flex-col gap-3 items-center justify-center rounded-lg">
                        <p className="text-lg text-gray-500">Our Products</p>
                        <img className="px-10" src="/qcdm_model.png" alt="" />
                        <p className="text-xl font-semibold text-blueb-950">Quick Cycle DM</p>
                        <button className="bg-complementary py-2 text-white px-2 rounded-md text-sm">Contact Us</button>
                        <button className="bg-blueb-700 py-2 text-white px-2 rounded-md text-sm">Download Brochure</button>
                    </div>

                </div>
            </div>

        </div>
    )
}