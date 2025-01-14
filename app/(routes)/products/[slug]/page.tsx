"use client"

import { products } from "@/utils/const";
import AnyQuestion from "@/components/AnyQuestion";
import BlogsCarousal from "@/components/BlogsCarousal";
import CaseStudiesCarousal from "@/components/CaseStudiesCarousal";
import Footer from "@/components/Footer";
import BlogArticlesGrid from "@/components/homepage/BlogArticlesGrid";
import Breadcrumb from "@/components/homepage/Breadcrumb";
import ContactForm from "@/components/homepage/ContactForm";
import NewsArticlesGrid from "@/components/homepage/NewsArticlesGrid";
import NavBar from "@/components/NavBar";
import ProductGallery from "@/components/ProductGallery";
import ProductHeroCard from "@/components/products/ProductHeroCard";
import ProductPage from "@/components/products/ProductPage";
import ProductsGrid from "@/components/products/ProductsGrid";
import { useState } from "react";
import { productDataType } from "@/utils/types";

export default function Products1Page({
    params,
  }: {
    params: { slug: string };
  }) {

    const productData : productDataType = products?.find(p => p.slug === params.slug);

    console.log(productData)

    const [model, setModel] = useState("")

    return (
        <>
            <Breadcrumb />

            <ProductPage productData={productData}/>

           <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
           
                           {/* <ProductsGrid type="carousel" products={products}/> */}
                           <hr></hr>
                           <ContactForm />
           
                       </div>

            <AnyQuestion />

        </>
    )
}