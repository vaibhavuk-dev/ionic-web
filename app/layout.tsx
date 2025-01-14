import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/homepage/Breadcrumb";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });
const gtmID = process.env.GTM_CONTAINER_ID || "";

export const metadata: Metadata = {
  title: "Ionic Engineering",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
