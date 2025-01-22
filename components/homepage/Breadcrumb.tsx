"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Breadcrumb() {
  const router = useRouter();
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter((part) => part);

  // Utility function to convert text to sentence case
  const toSentenceCase = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  return (
    <nav className="flex items-center text-sm text-gray-600  max-w-7xl mx-auto mt-5 py-4" aria-label="breadcrumb">
      <ul className="flex space-x-2">
        {/* Home Link */}
        <li>
          <Link href="/">
            <p className="hover:text-blue-600">Home</p>
          </Link>
        </li>

        {pathParts.map((part, index) => {
          const href = `/${pathParts.slice(0, index + 1).join("/")}`;
          const isLast = index === pathParts.length - 1;

          return (
            <li key={href} className="flex items-center space-x-2">
              {/* Separator */}
              <span>/</span>

              {/* Dynamic Breadcrumb Link */}
              {isLast ? (
                <span className="text-gray-400">{toSentenceCase(decodeURIComponent(part)?.replaceAll("-", " "))}</span>
              ) : (
                <Link href={href}>
                  <p className="hover:text-blue-600">{toSentenceCase(decodeURIComponent(part)?.replaceAll("-", " "))}</p>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
