"use client"

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import BlogsCarousalNavBar from "./BlogsCarousalNavBar";
import { usePathname } from "next/navigation";

export default function NavBar({ shouldWhite = true }: { shouldWhite?: boolean }) {

  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const pathname = usePathname();

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
    { label: "About us" },
    { label: "Products" },
    { label: "Services" },
    { label: "News & Blogs" },
    { label: "Gallery" },
    { label: "Contact us" },
  ];

  const dropdownContent: { [key: string]: { label: string; }[] } = {
    Products: [
      { label: "Water Treatment" },
      { label: "Industrial Waste Water Treatment" },
      { label: "Pi Products" },
      { label: "Pulsation Dampeners" },
      { label: "HIDRACAR For Industry" },
      { label: "HIDRACAR For Agriculture" },
    ],
    Services: [
      { "label": "Consulting" },
      { "label": "Maintenance" },
      { "label": "Installation" },
    ],
  };

  const productItems: { [key: string]: { src: string; label: string; href: string }[] } = {
    "Water Treatment": [
      { src: "/water_drop.svg", label: "Oil-Loc", href: "/products/1" },
      { src: "/water_drop.svg", label: "Silica-Loc", href: "/products/1" },
      { src: "/water_drop.svg", label: "Nanofiltration", href: "/products/1" },
      { src: "/water_drop.svg", label: "Ultrafiltration", href: "/products/1" },
      { src: "/water_drop.svg", label: "Polymix Dosing System", href: "/products/1" },
      { src: "/water_drop.svg", label: "Seawater Desalination", href: "/products/1" },
      { src: "/water_drop.svg", label: "Quick Cycle Auto DM Plant", href: "/products/1" },
      { src: "/water_drop.svg", label: "Hi - Purity Water Systems", href: "/products/1" },
      { src: "/water_drop.svg", label: "Brackish Water Desalination", href: "/products/1" },
      { src: "/water_drop.svg", label: "Closed Loop Desal RO Matrix", href: "/products/1" },
      { src: "/water_drop.svg", label: "Hot Water Generation Systems", href: "/products/1" },
      { src: "/water_drop.svg", label: "I-Dose Chemical Dosing System", href: "/products/1" },
      { src: "/water_drop.svg", label: "Technology for Ammonia Removal", href: "/products/1" },
      { src: "/water_drop.svg", label: "Capacitive Electro Desalination", href: "/products/1" },
      { src: "/water_drop.svg", label: "Turbiloc Active Media Filtration", href: "/products/1" },
      { src: "/water_drop.svg", label: "Lamella Inclined Plate Clarifier", href: "/products/1" },
      { src: "/water_drop.svg", label: "Genox Smart Digital Chlorine Dioxide Generator", href: "/products/1" },
    ],
    "Industrial Waste Water Treatment": [
      { src: "/water_drop.svg", label: "Eutectic Freeze Crystallization", href: "/products/1" },
      { src: "/water_drop.svg", label: "Advanced Photochemical Oxidation", href: "/products/1" },
      { src: "/water_drop.svg", label: "Water Harvester Zero liquid Discharge", href: "/products/1" },
    ],
    "Pi Products": [
      { src: "/water_drop.svg", label: "Total Alkalinity - AlkaSense®", href: "/products/1" },
      { src: "/water_drop.svg", label: "Dissolved Air Flotation (DAF) - DAFSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Charge Analyser - ChargeSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Coagulation Controller - CoagSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Conductivity Meter - ConductiSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Chlorine Dioxide Analyser – DioSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "High Range Chlorine Dioxide Analyser - DioSense HR", href: "/products/1" },
      { src: "/water_drop.svg", label: "UV254 Analyser – UV254Sense Probe", href: "/products/1" },
      { src: "/water_drop.svg", label: "Turbidity Meter - TurbSense®", href: "/products/1" },
      { src: "/water_drop.svg", label: "Dissolved Oxygen Meter - OxySense", href: "/products/1" },
      { src: "/water_drop.svg", label: "UV254 Analyser - UV254Sense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Automatic Sensor Cleaning System", href: "/products/1" },
      { src: "/water_drop.svg", label: "Remote Access - Control InSite - CRIUS®4.0", href: "/products/1" },
      { src: "/water_drop.svg", label: "Streaming Current Monitor - StreamerSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Residual Chlorine Monitoring - HaloSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Residual Chlorine Monitoring - DPDSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Residual Chlorine Monitoring - Chloribrid", href: "/products/1" },
      { src: "/water_drop.svg", label: "Chlorine in Sodium Hypochlorite - HypoSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Laboratory Charge Analyser - LabSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Fluoride Monitor - FluoriSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Particle Counter - ParticleSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Peracetic Acid Analyser - PeraSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Hydrogen Peroxide Analyser - PeroxiSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "pH Meter - pHSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "Suspended Solids Monitor - SoliSense®", href: "/products/1" },
      { src: "/water_drop.svg", label: "Ozone Analyser - OzoSense", href: "/products/1" },
      { src: "/water_drop.svg", label: "ORP Monitor - ORPSense", href: "/products/1" },
    ],
    "Pulsation Dampeners": [
      { "src": "/water_drop.svg", "label": "Bladder pulsation damper", "href": "/products/bladder-pulsation-damper" },
      { "src": "/water_drop.svg", "label": "Bellows pulsation damper", "href": "/products/bellows-pulsation-damper" },
      { "src": "/water_drop.svg", "label": "Membrane pulsation damper", "href": "/products/membrane-pulsation-damper" },
      { "src": "/water_drop.svg", "label": "In-line pulsation damper", "href": "/products/in-line-pulsation-damper" },
      { "src": "/water_drop.svg", "label": "Accessories", "href": "/products/accessories" },
      { "src": "/water_drop.svg", "label": "Parts and spares", "href": "/products/parts-and-spares" }
    ],
    "HIDRACAR For Industry": [
      { "src": "/water_drop.svg", "label": "Oleo-pneumatic accumulators", "href": "/products/oleo-pneumatic-accumulators" },
      { "src": "/water_drop.svg", "label": "Nitrogen gas spring", "href": "/products/nitrogen-gas-spring" },
      { "src": "/water_drop.svg", "label": "Oleo-pneumatic shockabsorber", "href": "/products/oleo-pneumatic-shockabsorber" },
      { "src": "/water_drop.svg", "label": "Hydrostatic dynamometers", "href": "/products/hydrostatic-dynamometers" },
      { "src": "/water_drop.svg", "label": "Tensioners for conveyor belts", "href": "/products/tensioners-for-conveyor-belts" },
      { "src": "/water_drop.svg", "label": "Air storage tank", "href": "/products/air-storage-tank" },
      { "src": "/water_drop.svg", "label": "Starters for diesel engines", "href": "/products/starters-for-diesel-engines" }
    ],
    "HIDRACAR For Agriculture": [
      { "src": "/water_drop.svg", "label": "Accumulators for agriculture", "href": "/products/accumulators-for-agriculture" },
      { "src": "/water_drop.svg", "label": "Oleo-pneumatic suspension cylinders", "href": "/products/oleo-pneumatic-suspension-cylinders" },
      { "src": "/water_drop.svg", "label": "Integrated oleo-pneumatic suspension cylinders", "href": "/products/integrated-oleo-pneumatic-suspension-cylinders" },
      { "src": "/water_drop.svg", "label": "Ole-pneumatic springs", "href": "/products/ole-pneumatic-springs" }
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
    <nav className="sticky z-20 top-0 left-0 right-0  flex-col backdrop-blur-sm">
      <div
        className={`flex flex-row items-center w-full ${isWhite ? `bg-white` : `bg-transperant`
          } ${isScrolled ? "drop-shadow-xl" : ""} basic-transition`}
      >
        <Link href={"/"}>
          <img
            src={`${isWhite ? "/ioniclogo.png" : "/ioniclogo_white.png"}`}
            className="h-16 ml-32"
            onMouseEnter={() => setSelectedMenu("")}
          />
        </Link>

        <div
          className={`w-full py-6 flex ${isWhite ? `text-black` : `text-white`
            } basic-transition text-lg font-normal  h-full justify-between ml-28 pl-4 pr-32 bg-white`}
        >
          {navItems.map((item) => (
            <Link key={item.label} href={item.label === "Products" ? "/products" : item.label === "About us" ? "/about" :"#"}>
              <p
                className={`text-textcolor font-medium border-expand mx-5 py-2 cursor-pointer ${isHovered ? '' : 'mouse-leave'} ${item.label.toLowerCase()?.includes(pathname?.split("/")?.[1]) ? 'border-b-2 border-secondary' : ''}`}
                aria-current="page"
                onMouseEnter={() => { setSelectedMenu(item.label); setIsHovered(true) }}
                onMouseLeave={() => setIsHovered(false)}
              >
                {item.label}
              </p>
            </Link>
          ))}

        <Link href="/brochure">
          <button className="px-4 py-2 text-white rounded bg-secondary border-white hover:bg-opacity-70 text-lg font-semibold"
            onMouseEnter={() => setSelectedMenu("")}>
            Get Brochure
          </button>
        </Link>
        </div>

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
                {((selectedMenu == "Products" && item.label in productItems) || (selectedMenu == "Services" && item.label in productItems)) && <img className="w-5 h-5" src="/right-arrow.svg" alt="" />}
              </p>
            ))}
          </div>
          <div className="border-r border-gray-300 mx-5"></div>
          {selectedCategory === "" && (
            <div className="w-[60%]">
              <div>
                <p className="font-bold text-3xl">{selectedMenu}</p>
                {selectedMenu === "Products" ? <p className="font-medium text-lg mt-3">Explore our wide range of products.</p> : <p className="font-medium text-lg mt-3">Explore our services.</p>}
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
        </div>
      )}

      {
        selectedMenu === "News & Blogs" && <div className="flex bg-white py-10 px-32 shadow-xl basic-transition" onMouseEnter={() => setSelectedMenu("News & Blogs")} onMouseLeave={() => { setSelectedMenu(""); setSelectedCategory("") }}>
          <div className="w-[40%] text-xl flex flex-col gap-3">
            <Link className={`flex items-center px-2 w-fit hover:font-semibold cursor-pointer ${selectedCategory === "Blogs" && "font-semibold"}`}
              onMouseEnter={() => setSelectedCategory("Blogs")} href={"/blogs"}>
              Blogs
            </Link>
            <Link className={`flex items-center px-2 w-fit hover:font-semibold cursor-pointer ${selectedCategory === "News" && "font-semibold"}`}
              onMouseEnter={() => setSelectedCategory("News")} href={"/news"}            >
              News
            </Link>
          </div>
          <div className="border-r border-gray-300 mx-5"></div>
          {selectedCategory === "" && <div className="w-[60%]">
            <div className="">
              <p className="font-bold text-3xl">News & Blogs</p>
              <p className="font-medium text-lg mt-3">Explore our latest news and blogs.</p>
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

          {selectedCategory === "News" && <div className="w-[60%]">
            <div className="">
              <p className="text-xl w-fit font-semibold">News</p>
              <BlogsCarousalNavBar
                data={[
                  { post_title: "Decentralized Wastewater Treatment for a Chinese Village", post_slug: "/news/1", post_image: "/casestudy/cs2.png" },
                  { post_title: "Environment-Friendly Waste Water Treatment | Case Study", post_slug: "/news/1", post_image: "/casestudy/cs3.png" },
                ]} />
            </div>
          </div>}
        </div>
      }

      {
        selectedMenu === "About us" && <div className="flex bg-white py-10 px-32 shadow-xl basic-transition" onMouseEnter={() => setSelectedMenu("About us")} onMouseLeave={() => { setSelectedMenu(""); setSelectedCategory("") }}>
          <div className="w-[40%] text-xl flex flex-col gap-3">
            <Link href={"/about"} className={`flex items-center px-2 w-fit hover:font-semibold cursor-pointer ${selectedCategory === "About Us" && "font-semibold"}`} onMouseEnter={() => setSelectedCategory("")}>
              About Us
            </Link>
            <Link href={"/careers"} className={`flex items-center px-2 w-fit hover:font-semibold cursor-pointer ${selectedCategory === "Careers" && "font-semibold"}`} onMouseEnter={() => setSelectedCategory("")}>
              Careers
            </Link>
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
        selectedMenu === "Contact us" && <div className="flex bg-white py-10 px-32 shadow-xl basic-transition" onMouseEnter={() => setSelectedMenu("Contact us")} onMouseLeave={() => { setSelectedMenu(""); setSelectedCategory("") }}>

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15122.922505541159!2d73.79250328511964!3d18.63118198564944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84e62f8c169%3A0xf6df110a3e44ab98!2sIonic%20Engineering%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716738071408!5m2!1sen!2sin" className="w-[80%] h-[400px]" loading="lazy" ></iframe>
          <div className="border-r border-gray-300 mx-5"></div>
          <div className="w-[50%] text-lg flex flex-col gap-3">
            <div className="mt-4">
              <p className='py-2'><b>Contact:</b> <br /> 020-27475272 / 8275486263</p>
              <p className='py-2'><b>Email:</b> <br /> contact@ionic.co.in / support@ionic.co.in</p>
              <p className='py-2'><b>Address:</b> <br /> No 1, 5 & 12, Ground Floor, B Wing,
                Mahalaxmi Heights, Old Mumbai -
                Pune Hwy, next to Keys Hotel, Pimpri
                Colony, Pimpri-Chinchwad,
                Maharashtra, INDIA
              </p>
              <Link href="/contact">
                <button className="mt-3 px-4 py-2 text-white rounded bg-blueb-700 border-white hover:bg-opacity-70 text-md">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      }

    </nav >
  );
}
