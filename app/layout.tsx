import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/homepage/Breadcrumb";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { sanityClient } from "@/lib/sanity";

const montserrat = Montserrat({ subsets: ["latin"] });
const gtmID = process.env.GTM_CONTAINER_ID || "";

export const metadata: Metadata = {
  title: "Ionic Engineering Technology Pvt Ltd",
  description: "Advanced Engineering Solutions for Water Treatment & Chlorine Dioxide Genrators",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Fetch data from Sanity
const fetchedProducts = await sanityClient.fetch(`
  *[_type == "pi_products"]{
  name,
  slug,
  order,
  "nameLength": string::length(name),
  "category": category->{
    title,
    slug,
    order
  },
} | order(category.order asc, nameLength asc)
`);

  return (
    <html lang="en">
      <GoogleTagManager gtmId={gtmID} />
      <Script
          id="gtm-script"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtmID}`}
          strategy="beforeInteractive" // Ensures GTM loads early
        />
      <body className={montserrat.className}>
        <GoogleTagManager gtmId={gtmID} />
        <NavBar fetchedProducts={fetchedProducts}/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
