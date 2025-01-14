import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/homepage/Breadcrumb";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <body className={montserrat.className}>
      <GoogleTagManager gtmId={gtmID} />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
