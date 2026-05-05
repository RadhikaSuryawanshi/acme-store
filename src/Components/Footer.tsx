"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div>
      <footer className="w-full flex gap-3 lg:gap-0 border-t px-2 py-12  ">
        <div className="lg:w-[15%] flex gap-2 p-0 lg:p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Acme Store logo"
            viewBox="0 -20 35 77"
            className=" bg-white border border-neutral-300  rounded-md  fill-black dark:fill-white h-[30px] w-[30px]"
          >
            <title>Acme Store logo</title>
            <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
            <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
          </svg>
          <Link href={"/dashboard"}>
            <p className="text-[0.9rem] mt-1">ACME STORE</p>
          </Link>
        </div>
        <div className="w-[60%] ">
          <ul className="w-full text-[0.9rem] text-neutral-500 leading-7 lg:leading-10">
            <li>
              <Link
                href={"/dashboard"}
                className={`hover:text-black hover:underline  ${
                  pathname === "/dashboard" ? "text-black" : "text-neutral-500"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/about"}
                className={`hover:text-black hover:underline  ${
                  pathname === "/dashboard/about"
                    ? "text-black"
                    : "text-neutral-500"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/terms-conditions"}
                className={`hover:text-black hover:underline ${
                  pathname === "/dashboard/terms-conditions"
                    ? "text-black"
                    : "text-neutral-500"
                }`}
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/shipping-return-policy"}
                className={`hover:text-black hover:underline ${
                  pathname === "/dashboard/shipping-return-policy"
                    ? "text-black"
                    : "text-neutral-500"
                }`}
              >
                Shipping & Return Policy
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/privacy-policy"}
                className={`hover:text-black hover:underline ${
                  pathname === "/dashboard/privacy-policy"
                    ? "text-black"
                    : "text-neutral-500"
                }`}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href={"/dashboard/frequently-asked-questions"}
                className={`hover:text-black hover:underline ${
                  pathname === "/dashboard/frequently-asked-questions"
                    ? "text-black"
                    : "text-neutral-500"
                }`}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <footer className=" w-full flex justify-between px-2 lg:px-4 py-4 lg:py-6 border-t  ">
        <div className="flex gap-1 lg:gap-3">
          <p className="text-xs lg:text-sm text-neutral-500">
            © 2023 Acme Store. All rights reserved.{" "}
          </p>{" "}
          <p className="text-xs lg:text-sm text-neutral-500">|</p>
          <p className="text-xs lg:text-[15.7px] text-neutral-500">View the source</p>
        </div>{" "}
        <Link href={""} className="text-xs lg:text-[0.9rem]">
          Created by ▲ Vercel
        </Link>
      </footer>
    </div>
  );
}
