"use client"

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import BlogsCarousalNavBar from "./BlogsCarousalNavBar";

export default function NavBar({ shouldWhite }: { shouldWhite?: boolean }) {

  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const isWhite = shouldWhite || isScrolled || selectedMenu;

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

  const navItems = [
    { label: "Products" },
    { label: "Applications" },
    { label: "Knowledge" },
    { label: "About" },
    { label: "Contact" },
  ];

  const dropdownContent: { [key: string]: { label: string; }[] } = {
    Products: [
      { label: "Water Treatment" },
      { label: "Industrial Waste Water Treatment" },
    ],
    Applications: [
      { "label": "Water Treatment" },
      { "label": "Brine Treatment" },
      { "label": "Ammonia Removal" },
      { "label": "Silica Removal" },
      { "label": "Resource Recovery" },
      { "label": "BOD/COD Reduction" },
      { "label": "Lithium Extraction" },
      { "label": "Zero liquid Discharge" },
      { "label": "Cooling water Treatment" },
      { "label": "Potable water disinfection" },
      { "label": "Industrial Waste Water Treatment" },
    ],
  };

  const productItems: { [key: string]: { src: string; label: string; href: string }[] } = {
    "Water Treatment": [
      { "src": "/water_drop.svg", "label": "Oil-Loc", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Silica-Loc", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Nanofiltration", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Ultrafiltration", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Polymix Dosing System", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Seawater Desalination", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Quick Cycle Auto DM Plant", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Hi - Purity Water Systems", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Brackish Water Desalination", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Closed Loop Desal RO Matrix", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Hot Water Generation Systems", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "I-Dose Chemical Dosing System", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Technology for Ammonia Removal", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Capacitive Electro Desalination", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Turbiloc Active Media Filtration", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Lamella Inclined Plate Clarifier", "href": "/products/1" },
      { "src": "/water_drop.svg", "label": "Genox Smart Digital Chlorine Dioxide Generator", "href": "/products/1" },
    ]
    ,
    "Industrial Waste Water Treatment": [
      { src: "/water_drop.svg", label: "Eutectic Freeze Crystallization", href: "/products/1" },
      { src: "/water_drop.svg", label: "Advanced Photochemical Oxidation", href: "/products/1" },
      { src: "/water_drop.svg", label: "Water Harvester Zero liquid Discharge", href: "/products/1" },
    ]
  };

  const applicationItems: { [key: string]: { src: string; label: string; href: string }[] } = {
      "BOD/COD Reduction": [
        { src: "/water_drop.svg", label: "Advanced Photochemical Oxidation", href: "/products/1" }
      ],
      "Brine Treatment": [
        { src: "/water_drop.svg", label: "Closed Loop Desal RO Matrix", href: "/products/1" },
        { src: "/water_drop.svg", label: "Ultrafiltration", href: "/products/1" }
      ],
      "Ammonia Removal": [
        { src: "/water_drop.svg", label: "Technology for Ammonia Removal", href: "/products/1" }
      ],
      "Resource Recovery (Brief writeup to be provided by ionic)": [
        { src: "/water_drop.svg", label: "Eutectic Freeze Crystallization", href: "/products/1" },
        { src: "/water_drop.svg", label: "Water Harvester Zero liquid Discharge", href: "/products/1" }
      ],
      "Zero liquid Discharge": [
        { src: "/water_drop.svg", label: "Eutectic Freeze Crystallization", href: "/products/1" },
        { src: "/water_drop.svg", label: "Water Harvester Zero liquid Discharge", href: "/products/1" }
      ],
      "Potable water disinfection": [
        { src: "/water_drop.svg", label: "Genox Smart Digital Chlorine Dioxide Generator", href: "/products/1" }
      ],
      "Cooling water Treatment": [
        { src: "/water_drop.svg", label: "Genox Smart Digital Chlorine Dioxide Generator", href: "/products/1" },
        { src: "/water_drop.svg", label: "Water Harvester Zero liquid Discharge", href: "/products/1" }
      ],
      "Lithium Extraction": [
        { src: "/water_drop.svg", label: "Water Harvester Zero liquid Discharge", href: "/products/1" }
      ],
      "Water Treatment": [
        { src: "/water_drop.svg", label: "Brackish Water Desalination", href: "/products/1" },
        { src: "/water_drop.svg", label: "Capacitive Electro Desalination", href: "/products/1" },
        { src: "/water_drop.svg", label: "Seawater Desalination", href: "/products/1" },
        { src: "/water_drop.svg", label: "Ultrafiltration", href: "/products/1" }
      ]    
  };
  return (
    <nav className="fixed z-10 top-0 left-0 right-0  flex-col backdrop-blur-sm">
      <div
        className={`flex flex-row justify-between items-center w-full h-auto px-20 py-3 ${isWhite ? `bg-white` : `bg-transperant`
          } ${!selectedMenu ? "drop-shadow-xl" : "border-b"} basic-transition`}
      >
        <Link href={"/"}>
          <img
            src={`${isWhite ? "/ioniclogo.png" : "/ioniclogo_white.png"}`}
            className="h-16"
            onMouseEnter={() => setSelectedMenu("")}
          />
        </Link>

        <div
          className={`${isWhite ? `text-black` : `text-white`
            } basic-transition text-lg font-normal`}
        >
          <a
            className={`border-expand mx-5 py-2 cursor-pointer ${isHovered ? '' : 'mouse-leave'}`}
            aria-current="page"
            onMouseEnter={() => { setSelectedMenu("Products"); setIsHovered(true) }}
            onMouseLeave={() => setIsHovered(false)}
          >
            Products
          </a>
          <a href="#"
            className={`border-expand mx-5 py-2 cursor-pointer ${isHovered ? '' : 'mouse-leave'}`}
            onMouseEnter={() => { setSelectedMenu("Applications"); setIsHovered(true) }}
            onMouseLeave={() => setIsHovered(false)}
          >
            Applications
          </a>
          <a href="#"
            className={`border-expand mx-5 py-2 cursor-pointer ${isHovered ? '' : 'mouse-leave'}`}
            onMouseEnter={() => { setSelectedMenu("Knowledge"); setIsHovered(true) }}
            onMouseLeave={() => setIsHovered(false)}
          >
            Knowledge
          </a>
          <a href="#"
            className={`border-expand mx-5 py-2 cursor-pointer ${isHovered ? '' : 'mouse-leave'}`}
            onMouseEnter={() => { setSelectedMenu("About"); setIsHovered(true) }}
            onMouseLeave={() => setIsHovered(false)}
          >
            About
          </a>
          <a href="#"
            className={`border-expand mx-5 py-2 cursor-pointer ${isHovered ? '' : 'mouse-leave'}`}
            onMouseEnter={() => { setSelectedMenu("Contact"); setIsHovered(true) }}
            onMouseLeave={() => setIsHovered(false)}
          >
            Contact
          </a>
        </div>

        <Link href="/brochure">
          <button className="px-4 py-2 text-white rounded bg-blueb-700 border-white hover:bg-opacity-70 text-lg"
            onMouseEnter={() => setSelectedMenu("")}>
            Get Brochure
          </button>
        </Link>

      </div>

      {selectedMenu && dropdownContent[selectedMenu] && (
        <div
          className="flex bg-white py-10 px-32 shadow-xl basic-transition max-h-[80vh]"
          onMouseEnter={() => setSelectedMenu(selectedMenu)}
          onMouseLeave={() => {
            setSelectedMenu("");
            setSelectedCategory("");
          }}
        >
          <div className="w-[40%] text-xl flex flex-col gap-3 overflow-y-scroll">
            {dropdownContent[selectedMenu].map((item) => (
              <p
                key={item.label}
                className={`flex items-center px-2 w-fit hover:font-semibold cursor-pointer ${selectedCategory === item.label && "font-semibold"}`}
                onMouseEnter={() => setSelectedCategory(item.label)}
              >
                {item.label}
                {((selectedMenu == "Products" && item.label in productItems) || (selectedMenu == "Applications" && item.label in applicationItems)) && <img className="w-5 h-5" src="/right-arrow.svg" alt="" />}
              </p>
            ))}
          </div>
          <div className="border-r border-gray-300 mx-5"></div>
          {selectedCategory === "" && (
            <div className="w-[60%]">
              <div>
                <p className="font-bold text-3xl">{selectedMenu}</p>
                {selectedMenu === "Products" ? <p className="font-medium text-lg mt-3">Explore our wide range of products.</p> : <p className="font-medium text-lg mt-3">Explore wide range of applications of our products.</p>}
              </div>
            </div>
          )}
          {selectedMenu === "Products" && selectedCategory && selectedCategory in productItems && (
            <div className="w-[60%] overflow-y-scroll">
              <div className="text-md flex flex-col">
                <p className="text-sm text-gray-600 py-3">{selectedCategory}</p>
                <div className="grid grid-cols-2 gap-3">
                  {productItems[selectedCategory].map((product) => (
                    <Link key={product.label} href={product.href}>
                      <div className="group flex items-center justify-start gap-2 rounded-lg w-[1/2] py-2 px-3 hover:border hover:bg-blueb-700 hover:drop-shadow-xl" onMouseEnter={() => setHoveredProduct(product.label)}
                        onMouseLeave={() => setHoveredProduct(null)}>
                        <img className="w-5 h-5" src={hoveredProduct === product.label ? "/water_drop_white.svg" : product.src} alt="" />
                        <p className="group-hover:text-white">{product.label}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedMenu === "Applications" && selectedCategory && selectedCategory in applicationItems && (
            <div className="w-[60%] overflow-y-scroll">
              <div className="text-md flex flex-col">
                <p className="text-sm text-gray-600 py-3">{selectedCategory}</p>
                <div className="grid grid-cols-2 gap-3">
                  {applicationItems[selectedCategory].map((product) => (
                    <Link key={product.label} href={product.href}>
                      <div className="group flex items-center justify-start gap-2 rounded-lg w-[1/2] py-2 px-3 hover:border hover:bg-blueb-700" onMouseEnter={() => setHoveredProduct(product.label)}
                        onMouseLeave={() => setHoveredProduct(null)}>
                        <img className="w-5 h-5" src={hoveredProduct === product.label ? "/water_drop_white.svg" : product.src} alt="" />
                        <p className="group-hover:text-white">{product.label}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* {
        isMenuOpen === "Products" && <div className="flex bg-white py-10 px-32 shadow-xl basic-transition" onMouseEnter={() => setIsMenuOpen("Products")} onMouseLeave={() => { setIsMenuOpen(""); setSelectedCategory("") }}>
          <div className="w-[40%] text-xl flex flex-col gap-3">
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("Water Treatment")}>
              Water Treatment &gt;
            </p>
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("Industrial Waste Water Treatment")}>
              Industrial Waste Water Treatment &gt;
            </p>
          </div>
          <div className="border-r border-gray-300 mx-5"></div>
          {selectedCategory === "" && <div className="w-[60%]">
            <div className="">
              <p className="font-bold text-3xl">Products</p>
              <p className="font-medium text-lg mt-3">Explore our wide range of products.</p>
            </div>
          </div>}

          {selectedCategory === "Water Treatment" && <div className="w-[60%]">
            <div className="text-lg flex flex-col">
              <p className="text-sm text-gray-600 py-3">Category 3</p>
              <div className="grid grid-cols-2">
                <Link href={"/products/1"}>
                  <div className="flex items-center justify-start gap-3 rounded-lg w-[1/2] py-2 px-3 hover:border">
                    <img className="w-8 h-8" src="/water_drop.svg" alt="" />
                    <p>Product 1</p>
                  </div>
                </Link>
                <Link href={"/products/1"}>
                  <div className="flex items-center justify-start gap-3 rounded-lg w-[1/2] py-2 px-3 hover:border">
                    <img className="w-8 h-8" src="/water_drop.svg" alt="" />
                    <p>Product 2</p>
                  </div>
                </Link>
                <Link href={"/products/1"}>
                  <div className="flex items-center justify-start gap-3 rounded-lg w-[1/2] py-2 px-3 hover:border">
                    <img className="w-8 h-8" src="/water_drop.svg" alt="" />
                    <p>Product 3</p>
                  </div>
                </Link>
                <Link href={"/products/1"}>
                  <div className="flex items-center justify-start gap-3 rounded-lg w-[1/2] py-2 px-3 hover:border">
                    <img className="w-8 h-8" src="/water_drop.svg" alt="" />
                    <p>Product 4</p>
                  </div>
                </Link>
              </div>
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
        isMenuOpen === "Applications" && <div className="flex bg-white py-10 px-32 shadow-xl basic-transition" onMouseEnter={() => setIsMenuOpen("Applications")} onMouseLeave={() => { setIsMenuOpen(""); setSelectedCategory("") }}>
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
              Application 3 &gt;
            </p>
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("Application4")}
            >
              Application 4 &gt;
            </p>
            <p className="group w-fit hover:font-bold cursor-pointer"
              onMouseEnter={() => setSelectedCategory("Application5")}
            >
              Application 5 &gt;
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
      } */}

      {
        selectedMenu === "Knowledge" && <div className="flex bg-white py-10 px-32 shadow-xl basic-transition" onMouseEnter={() => setSelectedMenu("Knowledge")} onMouseLeave={() => { setSelectedMenu(""); setSelectedCategory("") }}>
          <div className="w-[40%] text-xl flex flex-col gap-3">
            <Link className={`flex items-center px-2 w-fit hover:font-semibold cursor-pointer ${selectedCategory === "Blogs" && "font-semibold"}`}
              onMouseEnter={() => setSelectedCategory("Blogs")} href={"/blogs"}>
              Blogs
            </Link>
            <Link className={`flex items-center px-2 w-fit hover:font-semibold cursor-pointer ${selectedCategory === "Case Studies" && "font-semibold"}`}
              onMouseEnter={() => setSelectedCategory("Case Studies")} href={"/case-study"}            >
              Case Studies
            </Link>
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
                  { post_title: "Scientist found new way to treat Waste Water", post_slug: "/blogs/1", post_image: "/blogs/blog1.png" },
                  { post_title: "Why Municipal Wastewater Treatment Is Important?", post_slug: "/blogs/1", post_image: "/blogs/blog4.png" },
                ]} />
            </div>
          </div>}

          {selectedCategory === "Case Studies" && <div className="w-[60%]">
            <div className="">
              <p className="text-xl w-fit font-semibold">Case Studies</p>
              <BlogsCarousalNavBar
                data={[
                  { post_title: "Decentralized Wastewater Treatment for a Chinese Village", post_slug: "/case-study/1", post_image: "/casestudy/cs2.png" },
                  { post_title: "Environment-Friendly Waste Water Treatment | Case Study", post_slug: "/case-study/1", post_image: "/casestudy/cs3.png" },
                ]} />
            </div>
          </div>}
        </div>
      }

      {
        selectedMenu === "About" && <div className="flex bg-white py-10 px-32 shadow-xl basic-transition" onMouseEnter={() => setSelectedMenu("About")} onMouseLeave={() => { setSelectedMenu(""); setSelectedCategory("") }}>
          <div className="w-[40%] text-xl flex flex-col gap-3">
            <p className={`flex items-center px-2 w-fit hover:font-semibold cursor-pointer ${selectedCategory === "About Us" && "font-semibold"}`} onMouseEnter={() => setSelectedCategory("About Us")}>
              About Us
            </p>
            <p className={`flex items-center px-2 w-fit hover:font-semibold cursor-pointer ${selectedCategory === "Careers" && "font-semibold"}`} onMouseEnter={() => setSelectedCategory("Careers")}>
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
        selectedMenu === "Contact" && <div className="flex bg-white py-10 px-32 shadow-xl basic-transition" onMouseEnter={() => setSelectedMenu("Contact")} onMouseLeave={() => { setSelectedMenu(""); setSelectedCategory("") }}>
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
