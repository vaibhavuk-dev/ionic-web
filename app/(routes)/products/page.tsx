"use client";
import ProductsGrid from "@/components/products/ProductsGrid";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import ContactForm from "@/components/homepage/ContactForm";
import CompanyCategorySelector from "@/components/products/CompanyCategorySelector";
import { sanityClient } from "@/lib/sanity";
import ZoomableImage from "@/components/ZoomableImage";

export default function ProductsPage() {
  const queryCompanies = `
    *[_type == "companies"]{
      logo{
        asset->{
          _id,
          url
        },
        alt
      },
      name,
      slug,
      description,
      order,
      website
    } | order(order asc)`;

  const queryCategories = `
    *[_type == "pi_products_categories"]{
      name,
      slug,
      "company": company->{
        name,
        slug,
        order
      },
      order
    }`;

  const queryProducts = `
    *[
        _type == "my_products" || _type == "pi_products"
    ]{
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
        }
    } | order(order asc)
    `;

  const [companies, setCompanies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState<any>([]);

  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const handleCompanySelect = (company: any) => {
    setSelectedCompany(company);
    setSelectedCategory(
      categories.filter(
        (category: any) => category?.company?.name === company?.name,
      )?.[0],
    );
  };

  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    async function fetchData() {
      const [fetchedCompanies, fetchedCategories] = await Promise.all([
        sanityClient.fetch(queryCompanies),
        sanityClient.fetch(queryCategories),
      ]);
      setCompanies(fetchedCompanies);
      setCategories(fetchedCategories);
      setSelectedCompany(fetchedCompanies[0]);
      setSelectedCategory(
        fetchedCategories.filter(
          (category: any) =>
            category?.company?.name === fetchedCompanies?.[0]?.name,
        )?.[0],
      );
    }
    fetchData();

    async function fetchProducts() {
      const [fetchedProducts] = await Promise.all([
        sanityClient.fetch(queryProducts),
      ]);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <div>
      <div
        className="w-full"
        style={{
          backgroundImage: "url('/banner/bridge-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="responsive-padding py-12 gap-6 items-center justify-between bg-secondary w-full h-full bg-opacity-90 text-center">
          <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:flex-row lg:justify-between">
            <div className="w-full flex flex-col items-start justify-start">
              <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                Our Products
              </h1>
              <p className="mt-4 text-xl font-light text-white drop-shadow-lg text-start">
                Advanced Water Treatment Technologies for Industrial Excellence
              </p>
            </div>

            <div className="w-full md:w-auto md:min-w-[320px]">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search...."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                >
                  <Search className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* bg-gradient-to-b from-gray-50 to-white py-16 */}
      <div className="flex flex-col w-full py-6 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
        <CompanyCategorySelector
          companies={companies}
          categories={categories}
          selectedCompany={selectedCompany}
          selectedCategory={selectedCategory}
          handleCompanySelect={handleCompanySelect}
          handleCategorySelect={handleCategorySelect}
        />
        {/* {selectedCompany?.name?.includes("Ionic") ? (
          <div className="flex py-6 justify-between gap-3 bg-white">
            <ZoomableImage
              src="/products/products_ppt_1.jpeg"
              className="w-1/2"
            />
            <ZoomableImage
              src="/products/products_ppt_2.jpeg"
              className="w-1/2"
            />
          </div>
        ) : (
          <></>
        )} */}
        <ProductsGrid
          products={products?.filter(
            (product: any) =>
              product?.category?.name === selectedCategory?.name &&
              product?.name
                ?.toLowerCase()
                ?.includes(searchQuery?.toLowerCase()),
          )}
        />
        <hr></hr>
        <ContactForm />
      </div>
    </div>
  );
}
