"use client";

import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl space-y-6 ">
      <h1 className="w-full text-5xl font-bold ">About</h1>
      <p className="text-[17.4px] leading-7 ">
        This website is built with{" "}
        <Link
          href="https://vercel.com/templates/next.js/nextjs-commerce"
          className="underline font-semibold hover:text-neutral-300 "
        >
          Next.js Commerce
        </Link>{" "}
        , which is a ecommerce template for creating a headless Shopify
        storefront.{" "}
      </p>

      <p className="text-[18px]">
        Support for real-world commerce features including:{" "}
      </p>
      <ul className="list-disc text-[17.5px] list-inside leading-9 ">
        <li className="marker:text-gray-300 text-black">Out of stocks</li>
        <li className="marker:text-gray-300 text-black">Order history</li>
        <li className="marker:text-gray-300 text-black">Order status</li>
        <li className="marker:text-gray-300 text-black">
          {" "}
          Cross variant / option availability (aka. Amazon style)
        </li>
        <li className="marker:text-gray-300 text-black">
          {" "}
          <Link
            href="https://demo.vercel.store/product/acme-webcam-cover"
            className="underline font-semibold hover:text-neutral-300 "
          >
            Hidden products
          </Link>{" "}
        </li>
        <li className="marker:text-gray-300 text-black">
          {" "}
          Dynamically driven content and features via Shopify (ie. collections,
          menus, pages, etc.){" "}
        </li>
        <li className="marker:text-gray-300 text-black">
          Seamless and secure checkout via{" "}
          <Link
            href="https://www.shopify.com/in/checkout"
            className="underline font-semibold hover:text-neutral-300 "
          >
            Shopify Checkout
          </Link>{" "}
        </li>
        <li className="marker:text-gray-300 text-black">And more!</li>
      </ul>

      <p className="text-[17.6px]">
        This template also allows us to highlight newer Next.js features
        including:{" "}
      </p>
      <ul className="list-disc text-[17.5px] list-inside leading-9 ">
        <li className="marker:text-gray-300 text-black">Next.js App Router</li>
        <li className="marker:text-gray-300 text-black">
          Optimized for SEO using Next.js's Metadata
        </li>
        <li className="marker:text-gray-300 text-black">
          React Server Components (RSCs) and Suspense{" "}
        </li>
        <li className="marker:text-gray-300 text-black">
          Server Actions for mutations
        </li>
        <li className="marker:text-gray-300 text-black">Edge runtime</li>{" "}
        <li className="marker:text-gray-300 text-black">
          New Next.js 13 fetching and caching paradigms
        </li>
        <li className="marker:text-gray-300 text-black">Dynamic OG images</li>
        <li className="marker:text-gray-300 text-black">
          Styling with Tailwind CSS
        </li>
        <li className="marker:text-gray-300 text-black">
          Automatic light/dark mode based on system settings
        </li>
        <li className="marker:text-gray-300 text-black">And more!</li>
      </ul>

      <p className="text-[0.9rem] italic">
        This document was last updated on July 18, 2023.
      </p>
    </div>
  );
}
