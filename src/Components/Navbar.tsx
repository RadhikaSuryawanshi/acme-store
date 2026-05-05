"use client";

import Link from "next/link";

import SearchBar from "./SearchBar";
import CartSection from "./CartSection";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full p-2 lg:p-4 flex justify-between items-center">
      <div className=" lg:w-[27%] flex items-center gap-2 lg:p-2">
        <div className="hidden w-[11%] lg:block  border border-neutral-300 bg-white rounded-md ">
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
          <p className="hidden lg:flex text-sm lg:text-[0.9rem] font-semibold">
            ACME STORE
          </p>
        </Link>
        <div className="hidden w-[55%] lg:flex  justify-around items-center  p-2 text-[0.9rem] text-neutral-500">
          <Link href={"/search"} className="hover:text-black hover:underline">
            All
          </Link>
          <Link
            href={"/search/furniture"}
            className="hover:text-black hover:underline"
          >
            Furniture
          </Link>
          <Link
            href={"/search/beauty"}
            className="hover:text-black hover:underline"
          >
            {" "}
            Beauty
          </Link>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="lg:hidden">
            <Button variant="outline">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link
                  href={"/dashboard"}
                  className="hover:text-black hover:underline"
                >
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <Link
                  href={"/search"}
                  className="hover:text-black hover:underline"
                >
                  All
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={"/search/furniture"}
                  className="hover:text-black hover:underline"
                >
                  Furniture
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={"/search/beauty"}
                  className="hover:text-black hover:underline"
                >
                  Beauty
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <SearchBar />
      <CartSection />
    </nav>
  );
}
