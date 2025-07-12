"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function NavBar({
  fetchedProducts,
  shouldWhite = false,
}: {
  fetchedProducts: any;
  shouldWhite?: boolean;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const [isSideBarActive, setIsSideBarActive] = useState(false);

  const pathname = usePathname();

  const isWhite = shouldWhite || pathname == "/";

  useEffect(() => {
    const handleScroll = async () => {
      const scrollY = window.scrollY;
      const threshold1 = 10;
      setIsScrolled(scrollY > threshold1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Home", route: "/" },
    { label: "About us", route: "/about" },
    { label: "Solutions", route: "/solutions/pharma-industry-solutions" },
    { label: "Products", route: "/products" },
    { label: "Services", route: "/services" },
    { label: "Blogs", route: "/blogs" },
    { label: "Contact", route: "/contact" }
  ];

  const productItems: {
    [key: string]: { src: string; label: string; href: string }[];
  } = {};

  (fetchedProducts || [])?.forEach((product: any) => {
    const categoryTitle = product.category?.name || "Uncategorized";
    if (!productItems[categoryTitle]) {
      productItems[categoryTitle] = [];
    }
    productItems[categoryTitle].push({
      src: "/water_drop.svg",
      label: product.name,
      href: `/products/${product?.category?.slug?.current}/${product?.slug?.current}`,
    });
  });

  // Create dropdownContent dynamically
  const dropdownContent = {
    Products: Object.keys(productItems).map((category) => ({
      label: category,
    })),
    Services: [
      { label: "Consulting" },
      { label: "Maintenance" },
      { label: "Installation" },
    ],
    Solutions: [
      {
        label: "Pharma Solutions",
        href: "/solutions/pharma-industry-solutions",
      },
      // { label: "Industry Solutions", href: "/solutions/industry-solutions" },
    ],
  };

  return (
    <nav
      className={`sticky z-20 top-0 left-0 right-0  flex-col backdrop-blur-sm ${isScrolled ? "drop-shadow-xl" : ""} basic-transition`}
    >
      <div
        className={`hidden lg:flex w-full ${isWhite ? "bg-white" : "bg-blueb-gradient"} items-center justify-center`}
      >
        <div
          className={`flex items-center w-full justify-between py-3 max-w-7xl mx-auto`}
        >
          <Link href={"/"}>
            <img
              src={`${isWhite ? "/logo/ionic_logo.png" : "/logo/ionic_logo_white.png"}`}
              className="h-20"
              onMouseEnter={() => setSelectedMenu("")}
            />
          </Link>

          <div
            className={` py-3 flex ${
              isWhite ? `text-black` : `text-white`
            } basic-transition text-lg font-normal  h-full gap-6`}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.route}
                onClick={() => setSelectedMenu("")}
              >
                <p
                  className={`${
                    isWhite ? `text-textcolor` : `text-white`
                  } text-lg font-medium border-expand mx-5 py-2 cursor-pointer ${isHovered ? "" : "mouse-leave"} ${pathname == item.route ? "border-b-2 border-secondary" : ""}`}
                  aria-current="page"
                  onMouseEnter={() => {
                    setSelectedMenu(item.label);
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`flex lg:hidden w-full ${isWhite ? "bg-white" : "bg-blueb-gradient"}  items-center justify-center`}
      >
        <div
          className={`flex items-center w-full justify-between responsive-padding py-4`}
        >
          <div className="flex gap-4 items-center">
            <Menu
              size={24}
              className={`cursor-pointer ${isWhite ? "text-textcolor" : "text-white"} `}
              onClick={() => setIsSideBarActive(true)}
            />
            <Link href={"/"}>
              <img
                src={`${isWhite ? "/logo/ionic_logo.png" : "/logo/ionic_logo_white.png"}`}
                className="h-14 w-auto"
                onMouseEnter={() => setSelectedMenu("")}
              />
            </Link>
          </div>
        </div>
      </div>

      {isSideBarActive && (
        <div className="absolute flex top-0 left-0 z-50 h-[100vh] w-full">
          {/* Sidebar */}
          <div
            className={`w-1/2 h-full bg-white text-textcolor transform transition-transform duration-1000s ${
              isSideBarActive ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <nav className="p-4">
              <div className="h-[50px] flex items-center justify-end">
                <X
                  size={20}
                  onClick={() => setIsSideBarActive(false)}
                  className="cursor-pointer"
                />
              </div>
              <hr></hr>
              <ul>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.route}
                    onClick={() => setIsSideBarActive(false)}
                  >
                    <li
                      className={`text-textcolor text-lg font-medium border-expand mx-5 py-2 cursor-pointer ${isHovered ? "" : "mouse-leave"} ${pathname?.split("/")?.[1] && item.label.toLowerCase()?.includes(pathname?.split("/")?.[1]) ? "border-b-2 border-secondary" : ""}`}
                    >
                      {item.label}
                    </li>
                  </Link>
                ))}
              </ul>
              <Link href="/brochure">
                <button
                  className="mx-5 my-4 px-2 py-2 text-white rounded bg-secondary border-white hover:bg-opacity-70 text-md font-semibold"
                  onMouseEnter={() => setSelectedMenu("")}
                  onClick={() => setIsSideBarActive(false)}
                >
                  Get Brochure
                </button>
              </Link>
            </nav>
          </div>

          {/* Overlay (Optional) */}
          {isSideBarActive && (
            <div
              className="w-1/2 h-full bg-black opacity-50 z-5"
              onClick={() => setIsSideBarActive(false)}
            ></div>
          )}
        </div>
      )}

      {selectedMenu && <hr className="bg-gray-300 h-1"></hr>}

      {selectedMenu &&
        selectedMenu == "Solutions" &&
        dropdownContent[selectedMenu] && (
          <div
            className="bg-white py-8 basic-transition max-h-[70vh]"
            onMouseEnter={() => setSelectedMenu(selectedMenu)}
            onMouseLeave={() => {
              setSelectedMenu("");
              setSelectedCategory("");
            }}
          >
            <div className="flex max-w-7xl mx-auto px-6">
              <div className="w-[30%] text-xl flex flex-col gap-3 pr-5 max-h-[60vh] overflow-y-auto custom-scrollbar">
                {dropdownContent[selectedMenu].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center px-4 py-2 rounded-md w-fit hover:font-semibold cursor-pointer ${
                      selectedCategory === item.label
                        ? "font-semibold bg-gray-100"
                        : ""
                    }`}
                    onMouseEnter={() => setSelectedCategory(item.label)}
                  >
                    {item.label}
                    {selectedMenu == "Solutions" &&
                      item.label in productItems && (
                        <img
                          className="w-4 h-4 ml-2"
                          src="/right-arrow.svg"
                          alt=""
                        />
                      )}
                  </Link>
                ))}
              </div>
              <div className="border-r border-gray-300 mx-6"></div>
              {selectedCategory === "" && (
                <div className="w-full p-4">
                  <p className="font-bold text-3xl">{selectedMenu}</p>
                  <p className="font-medium text-lg mt-3">
                    {selectedMenu === "Solutions"
                      ? "Explore our wide range of products."
                      : "Explore our services."}
                  </p>
                </div>
              )}
              {selectedMenu === "Solutions" &&
                selectedCategory &&
                selectedCategory in productItems && (
                  <div className="w-[70%] max-h-[60vh] overflow-y-auto custom-scrollbar pl-2">
                    <p className="text-sm text-gray-600 py-3 px-4">
                      {selectedCategory}
                    </p>
                    <div className="grid grid-cols-2 gap-4 px-4">
                      {productItems[selectedCategory].map((product) => (
                        <Link key={product.label} href={product.href}>
                          <div
                            className="group flex items-center gap-3 rounded-lg p-4 hover:bg-blueb-700 hover:shadow-lg transition-all"
                            onMouseEnter={() =>
                              setHoveredProduct(product.label)
                            }
                            onMouseLeave={() => setHoveredProduct(null)}
                            onClick={() => {
                              setSelectedMenu("");
                              setSelectedCategory("");
                            }}
                          >
                            <img
                              className="w-6 h-6"
                              src={
                                hoveredProduct === product.label
                                  ? "/water_drop_white.svg"
                                  : product.src
                              }
                              alt=""
                            />
                            <p className="group-hover:text-white">
                              {product.label}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        )}

      {selectedMenu &&
        selectedMenu == "Products" &&
        dropdownContent[selectedMenu] && (
          <div
            className="bg-white py-8 basic-transition max-h-[70vh]"
            onMouseEnter={() => setSelectedMenu(selectedMenu)}
            onMouseLeave={() => {
              setSelectedMenu("");
              setSelectedCategory("");
            }}
          >
            <div className="flex max-w-7xl mx-auto px-6">
              <div className="w-[30%] text-xl flex flex-col gap-3 pr-5 max-h-[60vh] overflow-y-auto custom-scrollbar">
                {dropdownContent[selectedMenu].map((item) => (
                  <p
                    key={item.label}
                    className={`flex items-center px-4 py-2 rounded-md w-fit hover:font-semibold cursor-pointer ${
                      selectedCategory === item.label
                        ? "font-semibold bg-gray-100"
                        : ""
                    }`}
                    onMouseEnter={() => setSelectedCategory(item.label)}
                  >
                    {item.label}
                    {selectedMenu == "Products" &&
                      item.label in productItems && (
                        <img
                          className="w-4 h-4 ml-2"
                          src="/right-arrow.svg"
                          alt=""
                        />
                      )}
                  </p>
                ))}
              </div>
              <div className="border-r border-gray-300 mx-6"></div>
              {selectedCategory === "" && (
                <div className="w-full p-4">
                  <p className="font-bold text-3xl">{selectedMenu}</p>
                  <p className="font-medium text-lg mt-3">
                    {selectedMenu === "Products"
                      ? "Explore our wide range of products."
                      : "Explore our services."}
                  </p>
                </div>
              )}
              {selectedMenu === "Products" &&
                selectedCategory &&
                selectedCategory in productItems && (
                  <div className="w-[70%] max-h-[60vh] overflow-y-auto custom-scrollbar pl-2">
                    <p className="text-sm text-gray-600 py-3 px-4">
                      {selectedCategory}
                    </p>
                    <div className="grid grid-cols-2 gap-4 px-4">
                      {productItems[selectedCategory].map((product) => (
                        <Link key={product.label} href={product.href}>
                          <div
                            className="group flex items-center gap-3 rounded-lg p-4 hover:bg-blueb-700 hover:shadow-lg transition-all"
                            onMouseEnter={() =>
                              setHoveredProduct(product.label)
                            }
                            onMouseLeave={() => setHoveredProduct(null)}
                            onClick={() => {
                              setSelectedMenu("");
                              setSelectedCategory("");
                            }}
                          >
                            <img
                              className="w-6 h-6"
                              src={
                                hoveredProduct === product.label
                                  ? "/water_drop_white.svg"
                                  : product.src
                              }
                              alt=""
                            />
                            <p className="group-hover:text-white">
                              {product.label}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        )}

      {selectedMenu === "News & Blogs" && (
        <div
          className="bg-white basic-transition"
          onMouseEnter={() => setSelectedMenu("News & Blogs")}
          onMouseLeave={() => {
            setSelectedMenu("");
            setSelectedCategory("");
          }}
        >
          <div className="max-w-7xl mx-auto py-8 px-6">
            <div className="flex">
              <div className="w-[40%] text-xl flex flex-col gap-4">
                <Link
                  href="/blogs"
                  className={`px-4 py-2 rounded-md w-fit hover:bg-gray-100 hover:font-semibold transition-all ${
                    selectedCategory === "Blogs"
                      ? "font-semibold bg-gray-100"
                      : ""
                  }`}
                  onMouseEnter={() => setSelectedCategory("Blogs")}
                >
                  Blogs
                </Link>
                <Link
                  href="/news"
                  className={`px-4 py-2 rounded-md w-fit hover:bg-gray-100 hover:font-semibold transition-all ${
                    selectedCategory === "News"
                      ? "font-semibold bg-gray-100"
                      : ""
                  }`}
                  onMouseEnter={() => setSelectedCategory("News")}
                >
                  News
                </Link>
              </div>

              <div className="border-r border-gray-300 mx-6"></div>

              <div className="w-[60%] px-4">
                {selectedCategory === "" && (
                  <div>
                    <p className="font-bold text-3xl">News & Blogs</p>
                    <p className="font-medium text-lg mt-3">
                      Explore our latest news and blogs.
                    </p>
                  </div>
                )}

                {/* {selectedCategory === "Blogs" && (
                  <div>
                    <p className="text-xl font-semibold mb-4">Blogs</p>
                    <BlogsCarousalNavBar data={blogData} />
                  </div>
                )}

                {selectedCategory === "News" && (
                  <div>
                    <p className="text-xl font-semibold mb-4">News</p>
                    <BlogsCarousalNavBar data={newsData} />
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      )}

      {false && selectedMenu === "About us" && (
        <div
          className="bg-white basic-transition"
          onMouseEnter={() => setSelectedMenu("About us")}
          onMouseLeave={() => {
            setSelectedMenu("");
            setSelectedCategory("");
          }}
        >
          <div className="max-w-7xl mx-auto py-8 px-6">
            <div className="flex">
              <div className="w-[40%] text-xl flex flex-col gap-4">
                <Link
                  href="/about"
                  className={`group px-4 py-2 rounded-md w-fit hover:bg-gray-100 transition-all ${
                    selectedCategory === "About Us"
                      ? "font-semibold bg-gray-100"
                      : ""
                  }`}
                  onMouseEnter={() => setSelectedCategory("")}
                >
                  <div className="flex items-center space-x-3">
                    <span>About Us</span>
                  </div>
                </Link>

                <Link
                  href="/careers"
                  className={`group px-4 py-2 rounded-md w-fit hover:bg-gray-100 transition-all ${
                    selectedCategory === "Careers"
                      ? "font-semibold bg-gray-100"
                      : ""
                  }`}
                  onMouseEnter={() => setSelectedCategory("")}
                >
                  <div className="flex items-center space-x-3">
                    <span>Careers</span>
                  </div>
                </Link>
              </div>

              <div className="border-r border-gray-300 mx-6" />

              {selectedCategory === "" && (
                <div className="w-[60%] px-4">
                  <h2 className="font-bold text-3xl mb-4">About</h2>
                  <div className="space-y-6">
                    <p className="font-medium text-lg">
                      Explore our company&apos;s journey and opportunities.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all">
                        <h3 className="font-semibold text-lg mb-2">
                          Our Mission
                        </h3>
                        <p className="text-gray-600">
                          Leading innovation in engineering solutions for a
                          sustainable future.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all">
                        <h3 className="font-semibold text-lg mb-2">
                          Join Our Team
                        </h3>
                        <p className="text-gray-600">
                          Discover exciting opportunities to grow with us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {selectedMenu === "Contact us" && (
        <div
          className="bg-white basic-transition"
          onMouseEnter={() => setSelectedMenu("Contact us")}
          onMouseLeave={() => {
            setSelectedMenu("");
            setSelectedCategory("");
          }}
        >
          <div className="max-w-7xl mx-auto py-8 px-6">
            <div className="flex gap-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15122.922505541159!2d73.79250328511964!3d18.63118198564944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84e62f8c169%3A0xf6df110a3e44ab98!2sIonic%20Engineering%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716738071408!5m2!1sen!2sin"
                className="w-[60%] h-[400px] rounded-lg shadow-md"
                loading="lazy"
              />

              <div className="border-r border-gray-300" />

              <div className="w-[40%] flex flex-col">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg">
                      IONIC ENGINEERING TECHNOLOGY PVT LTD
                    </h3>
                    <p className="font-medium text-gray-600">
                      (An ISO 9001:2015 Certified Company)
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-600">Contact:</p>
                      <p>020-27475272/73, 29525874 / 08275486263</p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-600">Email:</p>
                      <p>contact@ionic.co.in / support@ionic.co.in</p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-600">Address:</p>
                      <p>
                        S. No. 1, 5, 11, 12 & 13, Ground Floor, B Wing,
                        <br />
                        Mahalaxmi Heights, Mumbai-Pune Road, Pimpiri,
                        <br />
                        Pune-18, Maharashtra, INDIA.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    onClick={() => {
                      setSelectedMenu("");
                      setSelectedCategory("");
                    }}
                  >
                    <button className="px-6 py-2 text-white bg-blueb-700 rounded-md hover:bg-opacity-90 transition-all mt-6">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
