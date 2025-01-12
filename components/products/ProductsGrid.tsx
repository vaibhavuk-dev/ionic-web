// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ProductSection({ products, type = "grid" }: { products: any, type?: string }) {
  const [activeCategory, setActiveCategory] = useState('water-treatment');
  const router = useRouter();

  return (
    <div className="">
      <div className="mx-auto w-full">

        {products.length == 0 && <p>No product match found.</p>}

        {type === "grid" && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any, index: number) => (
            <div
              key={index}
              className="cursor-pointer group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-blueb-950"
              onClick={() => router.push("/products/1")}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blueb-500 to-blueb-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              <div className="p-8">
                <div className="h-16 w-16 bg-blueb-100 text-blueb-600 rounded-lg p-4 mb-6 group-hover:bg-blueb-600 group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-semibold text-blueb-950 mb-2">
                  {product.name}
                </h3>

                <p className="text-lg font-medium text-blueb-600 mb-4">
                  {product.tagline}
                </p>

                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <button className="inline-flex items-center text-blueb-600 font-semibold group-hover:text-blueb-800 transition-colors duration-300">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>}

        {type === "carousel" &&<>
          <div className="absolute top-1/2 -left-4 z-10 hidden md:block">
        <button className="swiper-button-prev after:content-none bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors">
          <ChevronLeft className="w-6 h-6 text-blue-600" />
        </button>
      </div>
      <div className="absolute top-1/2 -right-4 z-10 hidden md:block">
        <button className="swiper-button-next after:content-none bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors">
          <ChevronRight className="w-6 h-6 text-blue-600" />
        </button>
      </div>
          <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Pagination, Navigation]}
        className="pb-12"
        breakpoints={{
          340: {
            slidesPerView: 1,
            navigation: false,
          },
          768: {
            slidesPerView: 2,
            navigation: true,
          },
          1024: {
            slidesPerView: 3,
            navigation: true,
          },
        }}
      >
          {products.map((product: any, index: number) => (
            <SwiperSlide>
              <div
                key={index}
                className="cursor-pointer group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-blueb-950"
              onClick={() => router.push("/products/1")}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blueb-500 to-blueb-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="p-8">
                  <div className="h-16 w-16 bg-blueb-100 text-blueb-600 rounded-lg p-4 mb-6 group-hover:bg-blueb-600 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-semibold text-blueb-950 mb-2 text-left">
                    {product.name}
                  </h3>

                  <p className="text-lg font-medium text-blueb-600 mb-4 text-left">
                    {product.tagline}
                  </p>

                  <p className="text-gray-600 mb-6">
                    {
                    product.description
                    }
                  </p>

                  <button className="inline-flex items-center text-blueb-600 font-semibold group-hover:text-blueb-800 transition-colors duration-300">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </>
        }
      </div>
    </div>
  );
}