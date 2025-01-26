
import Breadcrumb from "@/components/homepage/Breadcrumb";
import ContactForm from "@/components/homepage/ContactForm";
import ProductPage from "@/components/products/ProductPage";
import { sanityClient } from "@/lib/sanity";
import { notFound } from "next/navigation";

export default async function ProductsPage({
  params,
}: {
  params: any;
}) {

  const { categorySlug, slug } = await Promise.resolve(params); // Await if `params` is potentially async 

  console.log(categorySlug, slug);

  const query = `
    *[_type == "my_products" && slug.current == $slug][0]{
      name,
        shortDescription,
        tagline,
        slug,
        order,
        mainImage{
        asset->{
            _id,
            url
        },
        alt
        },
        "category": category->{
        name,
        slug,
        order
        },
        sections[]{
          title,
          content
        }
      }`;

  try {
    const productData = await sanityClient.fetch(query, { slug });

    if (!productData) {
      return notFound();
    }


    return (
      <>
        <Breadcrumb />

        <ProductPage productData={productData} />

        <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">

          {/* <ProductsGrid type="carousel" products={products}/> */}
          <hr></hr>
          <ContactForm />

        </div>

      </>
    )
  } catch (error) {
    console.error('Error fetching product data:', error);
    return notFound();
  }


}