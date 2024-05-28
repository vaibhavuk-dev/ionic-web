import React from 'react'
import About from "./About";
import AnyQuestion from "./AnyQuestion";
import Blogs from "./Blogs";
import Footer from "./Footer";
import ProductSection from "./ProductSection";

export default function Home(props: any) {
  return (
    <div>
      <div className="relative w-full h-screen">
        <video
          className="fixed w-full h-full object-cover overflow-hidden"
          src="/bg_video.mp4"
          autoPlay
          muted
          loop
        />

        <div className="fixed inset-0 flex items-center justify-center bg-blueb-700 bg-opacity-50">
          <h1 className="text-center font-bold text-white text-6xl">
            We Treat Water - Differently
          </h1>
        </div>
      </div>

      <div>
        <About data={props.data} />

        <ProductSection />

        <Blogs />

        <AnyQuestion />

        <Footer />
      </div>
    </div>
  )
}

