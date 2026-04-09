"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductData } from "@/lib/data";
import { useProducts } from "@/lib/Products/products.hook";
import { slugify } from "@/lib/slug";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Shirts() {
  const { data, isLoading } = useProducts();
  const pathname = usePathname();
  const [sortBy, setSortBy] = useState("relevance");
  const router = useRouter();

  if (isLoading)
    return (
      <div className="w-[98%] h-full flex justify-between">
        <div className="w-full h-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }, (_, i) => `skeleton-${i}`).map((key) => (
              <Skeleton key={key} className="w-full h-[260px] rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );

  if (!data) return <div>Loading...</div>;

  const Shirts =
    data.filter(
      (product: any) =>
        product.category === "men's clothing" ||
        product.category === "women's clothing",
    ) || [];
  const sortedProducts = [...Shirts].sort((a: any, b: any) => {
    switch (sortBy) {
      case "trending":
        return b.rating?.count - a.rating?.count;
      case "latest-desc":
        return b.id - a.id;
      case "price-asc":
        return a.price - b.price;

      case "price-desc":
        return b.price - a.price;

      default:
        return 0;
    }
  });

  const handleSort = (value: string) => {
    setSortBy(value);
    if (value === "relevance") {
      router.push("/search/shirts");
    } else {
      router.push(`/search/shirts?sort=${value}`);
    }
  };

  return (
    <div className="w-full gap-3 flex">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] ">
        {sortedProducts.map((product: any) => (
          <Link
            href={`/product/${slugify(product.title)}-${product.id}`}
            key={product.id}
          >
            <CardContainer className="w-[90%]  rounded-xl hover:border hover:border-blue-700">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto   rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src={product.image}
                    height="1000"
                    width="1000"
                    className="relative h-60 w-full object-fill rounded-xl group-hover/card:shadow-xl"
                    alt="Images"
                  />
                </CardItem>

                <div className="absolute bottom-[5px] left-[4%] w-[80%]  flex gap-1 justify-around items-center bg-neutral-300/40 rounded-full p-1 backdrop-blur-xs border border-neutral-300">
                  <p className="text-[0.8rem] font-semibold line-clamp-1">
                    {product.title}
                  </p>
                  <Button className="bg-blue-700 rounded-full ">
                    ${product.price}
                  </Button>
                </div>
                {/* <CardItem className=""></CardItem> */}
              </CardBody>
            </CardContainer>
          </Link>
        ))}
      </div>
      <section className="w-[160px] ">
        <nav className="w-full  ">
          <h3 className="text-[0.8rem] text-neutral-400">Sort by</h3>
          <ul className="w-full text-[0.9rem] ">
            <li>
              {" "}
              <button
                type="button"
                onClick={() => handleSort("relevance")}
                className={` text-left border-b 
      ${
        sortBy === "relevance"
          ? "border-b border-black"
          : "border-b border-transparent"
      }`}
              >
                Relevance
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleSort("trending")}
                className={` text-left border-b 
      ${
        sortBy === "trending"
          ? "border-b border-black"
          : "border-b border-transparent"
      }`}
              >
                Trending
              </button>
            </li>
            <li>
              {" "}
              <button
                type="button"
                onClick={() => handleSort("latest-desc")}
                className={` text-left border-b 
      ${
        sortBy === "latest-desc"
          ? "border-b border-black"
          : "border-b border-transparent"
      }`}
              >
                Latest arrivals
              </button>
            </li>
            <li>
              {" "}
              <button
                type="button"
                onClick={() => handleSort("price-asc")}
                className={` text-left border-b 
      ${
        sortBy === "price-asc"
          ? "border-b border-black"
          : "border-b border-transparent"
      }`}
              >
                Price: Low to high
              </button>
            </li>
            <li>
              {" "}
              <button
                type="button"
                onClick={() => handleSort("price-desc")}
                className={` text-left border-b 
      ${
        sortBy === "price-desc"
          ? "border-b border-black"
          : "border-b border-transparent"
      }`}
              >
                Price: High to low
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
