"use client"

import { products } from "@/utils/const";
import Breadcrumb from "@/components/homepage/Breadcrumb";
import ContactForm from "@/components/homepage/ContactForm";
import ProductPage from "@/components/products/ProductPage";
import { useState } from "react";
import { productDataType } from "@/utils/types";
import { notFound } from "next/navigation";
import PIProductPage from "@/components/products/PIProductPage";

export default function ProductsPage({
    params,
  }: {
    params: any;
  }) {

    // const productData : productDataType = products?.find(p => p.slug === params.slug);

    // if (!productData) notFound();

    const [model, setModel] = useState("")

    return (
        <>
            <Breadcrumb />

            <div className="w-full reponsive-padding">
            <PIProductPage/>
            </div>

           <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
           
                           {/* <ProductsGrid type="carousel" products={products}/> */}
                           <hr></hr>
                           <ContactForm />
           
                       </div>

        </>
    )
}