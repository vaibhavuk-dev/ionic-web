"use client"

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import BlogsCarousal from "./BlogsCarousal";
import BlogsCarousalNavBar from "./BlogsCarousalNavBar";

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold1 = 10;
      setIsScrolled(scrollY > threshold1);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("")

  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="fixed z-10 top-0 left-0 right-0  flex-col">
      <div
        className={`flex flex-row justify-between items-center w-full h-auto px-20 py-3 ${isScrolled || isMenuOpen ? `bg-white drop-shadow-xl` : `bg-transperant`
          } transition-all duration-300 ease-in-out`}
      >
        <img
          src={`${isScrolled || isMenuOpen ? "/ioniclogo.png" : "/ioniclogo_white.png"}`}
          className="h-16"
          onMouseEnter={() => setIsMenuOpen("")}
        />

        <div
          className={`${isScrolled || isMenuOpen ? `text-black` : `text-white`
            } transition-all duration-300 ease-in-out text-lg font-normal`}
        >
          <a
            className={`border-expand mx-5 py-2 cursor-pointer ${isHovered ? '' : 'mouse-leave'}`}
            aria-current="page"
            onMouseEnter={() => { setIsMenuOpen("Products"); setIsHovered(true) }}
            onMouseLeave={() => setIsHovered(false)}
          >
            Products
          </a>
          <a href="#about"
            className={`border-expand mx-5 py-2 cursor-pointer ${isHovered ? '' : 'mouse-leave'}`}
            onMouseEnter={() => { setIsMenuOpen("Applications"); setIsHovered(true) }}
            onMouseLeave={() => setIsHovered(false)}
          >
            Applications
          </a>
          <a href="#products"
            className={`border-expand mx-5 py-2 cursor-pointer ${isHovered ? '' : 'mouse-leave'}`}
            onMouseEnter={() => { setIsMenuOpen("Knowledge"); setIsHovered(true) }}
            onMouseLeave={() => setIsHovered(false)}
          >
            Knowledge
          </a>
          <a href="#blogs"
            className={`border-expand mx-5 py-2 cursor-pointer ${isHovered ? '' : 'mouse-leave'}`}
            onMouseEnter={() => { setIsMenuOpen("About"); setIsHovered(true) }}
            onMouseLeave={() => setIsHovered(false)}
          >
            About
          </a>
          <a href="#footer"
            className={`border-expand mx-5 py-2 cursor-pointer ${isHovered ? '' : 'mouse-leave'}`}
            onMouseEnter={() => { setIsMenuOpen("Contact"); setIsHovered(true) }}
            onMouseLeave={() => setIsHovered(false)}
          >
            Contact
          </a>
        </div>

        <Link href="/brochure">
          <button className="px-4 py-2 text-white rounded bg-logoBlue border-white hover:bg-opacity-70 text-lg"
            onMouseEnter={() => setIsMenuOpen("")}>
            Get Brochure
          </button>
        </Link>

      </div>

      {
        isMenuOpen === "Products" && <div className="flex bg-white py-10 px-32 transition-all duration-300 ease-in-out" onMouseEnter={() => setIsMenuOpen("Products")} onMouseLeave={() => setIsMenuOpen("")}>
          <div className="w-[40%] text-xl flex flex-col gap-3">
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("")}>
              Category 1
            </p>
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("")}>
              Category 2
            </p>
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("Category3")}
            >
            Category 3 >
            </p>
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("Category4")}
            >
            Category 4 >
            </p>
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("Category5")}
            >
            Category 5 >
            </p>
          </div>
          <div className="border-r border-gray-300 mx-5"></div>
          {selectedCategory === "" && <div className="w-[60%]">
            <div className="">
              <p className="font-bold text-3xl">Products</p>
              <p className="font-medium text-lg mt-3">Explore our wide range of products.</p>
            </div>
          </div>}

          {selectedCategory === "Category3" && <div className="w-[60%]">
            <div className="text-lg flex flex-col gap-2">
              <p className="text-sm text-gray-600">Category 3</p>
              <p>Product 1</p>
              <p>Product 2</p>
              <p>Product 3</p>
            </div>
          </div>}

          {selectedCategory === "Category4" && <div className="w-[60%]">
            <div className="text-lg flex flex-col gap-2">
              <p className="text-sm text-gray-600">Category 4</p>
              <p>Product 1</p>
              <p>Product 2</p>
              <p>Product 3</p>
              <p>Product 4</p>
            </div>
          </div>}

          {selectedCategory === "Category5" && <div className="w-[60%]">
            <div className="text-lg flex flex-col gap-2">
              <p className="text-sm text-gray-600">Category 5</p>
              <p>Product 1</p>
              <p>Product 2</p>
              <p>Product 3</p>
              <p>Product 4</p>
              <p>Product 5</p>
            </div>
          </div>}
        </div>
      }

      {
        isMenuOpen === "Applications" && <div className="flex bg-white py-10 px-32 transition-all duration-300 ease-in-out" onMouseEnter={() => setIsMenuOpen("Applications")} onMouseLeave={() => setIsMenuOpen("")}>
          <div className="w-[40%] text-xl flex flex-col gap-3">
            <p className="group w-fit hover:font-bold cursor-pointer">
              Application 1
            </p>
            <p className="group w-fit hover:font-bold cursor-pointer">
              Application 2
            </p>
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("Application3")}
            >
            Application 3 >
            </p>
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("Application4")}
            >
            Application 4 >
            </p>
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("Application5")}
            >
            Application 5 >
            </p>
          </div>
          <div className="border-r border-gray-300 mx-5"></div>
          {selectedCategory === "" && <div className="w-[60%]">
            <div className="">
              <p className="font-bold text-3xl">Applications</p>
              <p className="font-medium text-lg mt-3">Explore wide range of applications of our products.</p>
            </div>
          </div>}

          {selectedCategory === "Application3" && <div className="w-[60%]">
            <div className="text-lg flex flex-col gap-2">
              <p className="text-sm text-gray-600">Application 3</p>
              <p>Product 1</p>
              <p>Product 2</p>
              <p>Product 3</p>
            </div>
          </div>}

          {selectedCategory === "Application4" && <div className="w-[60%]">
            <div className="text-lg flex flex-col gap-2">
              <p className="text-sm text-gray-600">Application 4</p>
              <p>Product 1</p>
              <p>Product 2</p>
              <p>Product 3</p>
              <p>Product 4</p>
            </div>
          </div>}

          {selectedCategory === "Application5" && <div className="w-[60%]">
            <div className="text-lg flex flex-col gap-2">
              <p className="text-sm text-gray-600">Application 5</p>
              <p>Product 1</p>
              <p>Product 2</p>
              <p>Product 3</p>
              <p>Product 4</p>
              <p>Product 5</p>
            </div>
          </div>}
        </div>
      }

      {
        isMenuOpen === "Knowledge" && <div className="flex bg-white py-10 px-32 transition-all duration-300 ease-in-out" onMouseEnter={() => setIsMenuOpen("Knowledge")} onMouseLeave={() => setIsMenuOpen("")}>
          <div className="w-[40%] text-xl flex flex-col gap-3">
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("Blogs")}
            >
              Blogs
            </p>
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("Case Studies")}
            >
              Case Studies
            </p>
          </div>
          <div className="border-r border-gray-300 mx-5"></div>
          {selectedCategory === "" && <div className="w-[60%]">
            <div className="">
              <p className="font-bold text-3xl">Knowledge</p>
              <p className="font-medium text-lg mt-3">Explore our wide range of products.</p>
            </div>
          </div>}

          {selectedCategory === "Blogs" && <div className="w-[60%]">
            <div className="">
              <p className="text-xl w-fit font-semibold">Blogs</p>
              <BlogsCarousalNavBar
                data={[
                  { post_title: "Scientist found new way to treat Waste Water", post_slug: "", post_image: "/blogs/blog1.png" },
                  { post_title: "Why Municipal Wastewater Treatment Is Important?", post_slug: "", post_image: "/blogs/blog4.png" },
                ]} />
            </div>
          </div>}

          {selectedCategory === "Case Studies" && <div className="w-[60%]">
            <div className="">
              <p className="text-xl w-fit font-semibold">Case Studies</p>
              <BlogsCarousalNavBar
                data={[
                  { post_title: "Decentralized Wastewater Treatment for a Chinese Village", post_slug: "", post_image: "/casestudy/cs2.png" },
                  { post_title: "Environment-Friendly Waste Water Treatment | Case Study", post_slug: "", post_image: "/casestudy/cs3.png" },
                ]} />
            </div>
          </div>}
        </div>
      }

      {
        isMenuOpen === "About" && <div className="flex bg-white py-10 px-32 transition-all duration-300 ease-in-out" onMouseEnter={() => setIsMenuOpen("About")} onMouseLeave={() => setIsMenuOpen("")}>
          <div className="w-[40%] text-xl flex flex-col gap-3">
            <p className="group w-fit hover:font-bold cursor-pointer">
              About Us
            </p>
            <p className="group w-fit hover:font-bold cursor-pointer">
              Careers
            </p>
          </div>
          <div className="border-r border-gray-300 mx-5"></div>
          {selectedCategory === "" && <div className="w-[60%]">
            <div className="">
              <p className="font-bold text-3xl">About</p>
              <p className="font-medium text-lg mt-3">Explore our wide range of products.</p>
            </div>
          </div>}

        </div>
      }

      {
        isMenuOpen === "Contact" && <div className="flex bg-white py-10 px-32 transition-all duration-300 ease-in-out" onMouseEnter={() => setIsMenuOpen("Contact")} onMouseLeave={() => setIsMenuOpen("")}>
          <div className="w-[40%] text-lg flex flex-col gap-3">
            <div className="mt-4">
              <p className='py-2'><b>Contact:</b> <br /> 020-27475272 / 8275486263</p>
              <p className='py-2'><b>Email:</b> <br /> contact@ionic.co.in / support@ionic.co.in</p>
              <p className='py-2'><b>Address:</b> <br /> No 1, 5 & 12, Ground Floor, B Wing,
                Mahalaxmi Heights, Old Mumbai -
                Pune Hwy, next to Keys Hotel, Pimpri
                Colony, Pimpri-Chinchwad,
                Maharashtra 411019
              </p>
            </div>
          </div>
          <div className="border-r border-gray-300 mx-5"></div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15122.922505541159!2d73.79250328511964!3d18.63118198564944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84e62f8c169%3A0xf6df110a3e44ab98!2sIonic%20Engineering%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716738071408!5m2!1sen!2sin" className="w-[80%] h-[400px]" loading="lazy" ></iframe>
        </div>
      }

    </nav >
  );
}
