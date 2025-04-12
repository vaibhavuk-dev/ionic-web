import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/homepage/Breadcrumb";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { sanityClient } from "@/lib/sanity";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import StickySidebar from "@/components/homepage/StickySidebar";
import { SpeedInsights } from "@vercel/speed-insights/next"

const montserrat = Montserrat({ subsets: ["latin"] });
const gtmID = process.env.GTM_CONTAINER_ID || "";

export const metadata: Metadata = {
  title: "Ionic Engineering Technology Pvt Ltd",
  description:
    "Advanced Engineering Solutions for Water Treatment & Chlorine Dioxide Genrators",
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Fetch data from Sanity
  const fetchedProducts = await sanityClient.fetch(`
  *[
        _type == "my_products" || _type == "pi_products"
    ]{
  name,
  slug,
  order,
  "nameLength": string::length(name),
  "category": category->{
    name,
    slug,
    order
  },
} | order(category.order asc, order asc)
`);

  return (
    <html lang="en">
      <GoogleTagManager gtmId={gtmID} />
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sofia&display=swap"
        />
        <Script
          id="gtm-script"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtmID}`}
          strategy="beforeInteractive" // Ensures GTM loads early
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Prevent zoom via Ctrl+ and Ctrl+wheel
                const preventZoom = (e) => {
                  if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                  }
                };

                document.addEventListener('keydown', preventZoom);
                document.addEventListener('wheel', preventZoom, { passive: false });
              })();
            `,
          }}
        />
      </head>
      <body className={montserrat.className}>
        <GoogleTagManager gtmId={gtmID} />
        <NavBar fetchedProducts={fetchedProducts} />
        <StickySidebar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
