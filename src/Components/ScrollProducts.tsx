"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductData } from "@/lib/data";
import { useProducts } from "@/lib/Products/products.hook";
import { slugify } from "@/lib/slug";
import Link from "next/link";

export default function ScrollProducts() {
  const { data, isLoading } = useProducts();

  const oneProductPerCategory = () => {
    const map = new Map();

    data.forEach((product: any) => {
      if (!map.has(product.category)) {
        map.set(product.category, product);
      }
    });

    return Array.from(map.values());
  };
  const uniqueCategoryProducts = oneProductPerCategory();

  return (
    <div className=" w-full  py-1 overflow-hidden scroll-auto ">
      <div className="flex gap-4 overflow-x-auto   ">
        {uniqueCategoryProducts.map((product: ProductData) => (
          <Link
            href={`/product/${slugify(product.title)}-${product.id}`}
            key={product.id}
          >
            <div className="w-[450px] py-3 border rounded-md bg-white flex-shrink-0 relative group hover:border-blue-700 mb-4">
              <img
                src={product.thumbnail}
                alt="product images"
                className="h-35 mx-auto object-contain transition duration-300 ease-in-out group-hover:scale-105 "
              />

              <div className="absolute bottom-3 left-8 w-[50%] h-[25%] flex  justify-around items-center rounded-full p-1 backdrop-blur-md border border-neutral-200">
                <p className="text-[0.8rem] font-semibold line-clamp-1">
                  {product.title}
                </p>
                <Button className="bg-blue-700 h-[98%] rounded-full ">
                  ${product.price}
                </Button>
              </div>
            </div>
          </Link>
        ))}
        {uniqueCategoryProducts.map((product: ProductData) => (
          <Link
            href={`/product/${slugify(product.title)}-${product.id}`}
            key={product.id}
          >
            <div className="w-[450px] py-3 border rounded-md bg-white flex-shrink-0 relative group hover:border-blue-700 mb-4">
              <img
                src={product.thumbnail}
                alt="product images"
                className="h-35 mx-auto object-contain transition duration-300 ease-in-out group-hover:scale-105 "
              />

              <div className="absolute bottom-3 left-8 w-[50%] h-[25%] flex  justify-around items-center rounded-full p-1 backdrop-blur-md border border-neutral-200">
                <p className="text-[0.8rem] font-semibold line-clamp-1">
                  {product.title}
                </p>
                <Button className="bg-blue-700 h-[98%] rounded-full ">
                  ${product.price}
                </Button>
              </div>
            </div>
          </Link>
        ))}
        {uniqueCategoryProducts.map((product: ProductData) => (
          <Link
            href={`/product/${slugify(product.title)}-${product.id}`}
            key={product.id}
          >
            <div className="w-[450px] py-3 border rounded-md bg-white flex-shrink-0 relative group hover:border-blue-700 mb-4">
              <img
                src={product.thumbnail}
                alt="product images"
                className="h-35 mx-auto object-contain transition duration-300 ease-in-out group-hover:scale-105 "
              />

              <div className="absolute bottom-3 left-8 w-[50%] h-[25%] flex  justify-around items-center rounded-full p-1 backdrop-blur-md border border-neutral-200">
                <p className="text-[0.8rem] font-semibold line-clamp-1">
                  {product.title}
                </p>
                <Button className="bg-blue-700 h-[98%] rounded-full ">
                  ${product.price}
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
