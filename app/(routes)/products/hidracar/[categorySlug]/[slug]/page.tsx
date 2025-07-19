import { DownloadBrochureProvider } from "@/components/brochures/DownloadBrochureContext";
import Breadcrumb from "@/components/homepage/Breadcrumb";
import ContactForm from "@/components/homepage/ContactForm";
import PIProductPage from "@/components/products/PIProductPage";
import { sanityClient } from "@/lib/sanity";
import { notFound } from "next/navigation";


export default async function ProductsPage({
  params,
}: {
  params: any
}) {

  // Ensure params are awaited properly
  const { slug } = await Promise.resolve(params); // Await if `params` is potentially async 

  const query = `
 *[_type == "pi_products" && slug.current == $slug][0]{
   name,
   shortDescription,
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
     title,
     slug,
     order
   },
   sections[]{
     title,
     content
   },
   brochures[]{
     name,
     category,
     pdf{
       asset->{
       _id,
       url
       }
    }
  }
 }`;

  try {
    const productData = await sanityClient.fetch(query, { slug });

    console.log(productData);

    if (!productData) {
      return notFound();
    }


    return (
      <DownloadBrochureProvider>
        <Breadcrumb />

        <div className="w-full reponsive-padding">
          <PIProductPage productData={productData} />
        </div>

        <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">

          {/* <ProductsGrid type="carousel" products={products}/> */}
          <hr></hr>
          <ContactForm />

        </div>

      </DownloadBrochureProvider>
    )
  } catch (error) {
    console.error('Error fetching product data:', error);
    return notFound();
  }
}