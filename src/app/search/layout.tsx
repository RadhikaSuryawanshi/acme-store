"use client";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col  ">
      <Navbar />
      <main className="w-full flex gap-2  justify-center">
        <section className="w-[125px]  ">
          <nav className="w-full  ">
            <h3 className="text-[0.8rem] text-neutral-400">Collections</h3>
            <ul className="w-full text-[0.9rem] leading-7">
              <li>
                <Link
                  href={"/search"}
                  className={` ${
                    pathname === "/search"
                      ? "border-b border-black"
                      : "border-b border-transparent"
                  }`}
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  href={"/search/groceries"}
                  className={`${
                    pathname === "/search/groceries"
                      ? "border-b border-black"
                      : "border-b border-transparent"
                  }`}
                >
                  Groceries
                </Link>
              </li>
              <li>
                <Link
                  href={"/search/tops"}
                  className={`${
                    pathname === "/search/tops"
                      ? "border-b border-black"
                      : "border-b border-transparent"
                  }`}
                >
                  Tops
                </Link>
              </li>
              <li>Electronics</li>
              <li>Footware</li>
              <li>Headwear</li>
              <li>Hoodies</li>
              <li>
                <Link
                  href={"/search/beauty"}
                  className={`${
                    pathname === "/search/beauty"
                      ? "border-b border-black"
                      : "border-b border-transparent"
                  }`}
                >
                  Beauty
                </Link>
              </li>
              <li>Kids</li>
              <li>Pets</li>
              <li>
                {" "}
                <Link
                  href={"search/furniture"}
                  className={` ${
                    pathname === "/search/furniture"
                      ? "border-b border-black"
                      : "border-b border-transparent"
                  }`}
                >
                  Furniture
                </Link>
              </li>
              <li>Stickers</li>
            </ul>
          </nav>
        </section>
        <section className="w-[87%] ">{children}</section>
      </main>

      <Footer />
    </div>
  );
}
