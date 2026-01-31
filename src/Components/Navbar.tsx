"use client";

import Link from "next/link";

import SearchBar from "./SearchBar";
import CartSection from "./CartSection";

export default function Navbar() {
  return (
    <nav className="w-full  p-4   flex justify-between items-center">
      <div className="w-[27%]  flex items-center gap-2 p-2">
        <div className="w-[11%]   border border-neutral-300 bg-white rounded-md ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Acme Store logo"
            viewBox="0 -18 32 69"
            className=" w-full  fill-black dark:fill-white h-[37px] "
          >
            <title>Acme Store logo</title>
            <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
            <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
          </svg>
        </div>
        <Link href={"/dashboard"}>
          <p className="text-[0.9rem] font-semibold">ACME STORE</p>
        </Link>
        <div className="w-[55%]  flex justify-around items-center  p-2 text-[0.9rem] text-neutral-500">
          <Link href={"/search"} className="hover:text-black hover:underline">
            All
          </Link>
          <Link
            href={"/search/shirts"}
            className="hover:text-black hover:underline"
          >
            Shirts
          </Link>
          <Link
            href={"/search/jewelery"}
            className="hover:text-black hover:underline"
          >
            {" "}
            Jewelery
          </Link>
        </div>
      </div>
      <SearchBar />
      <CartSection />
    </nav>
  );
}
