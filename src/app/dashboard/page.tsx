"use client";

import ScrollProducts from "@/Components/ScrollProducts";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductData } from "@/lib/data";
import { useProducts } from "@/lib/Products/products.hook";
import Link from "next/link";

export default function DashboardPage() {
  const { data, isLoading } = useProducts();
  if (isLoading)
    return (
      <div className="w-[98%] h-[50%] flex justify-between gap-4">
        <div className="w-[65%] h-full    ">
          <Skeleton className=" w-full " />
        </div>
        <div className="w-[35%] h-full">
          <div className="flex h-[98%] flex-col gap-4">
            {Array.from({ length: 2 }, (_, i) => `skeleton-${i}`).map((key) => (
              <div key={key} className="w-full  h-full  rounded-lg">
                <Skeleton className="w-full h-full " />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  return (
    <div className="w-full min-h-screen flex flex-col  justify-center items-center">
      <div className="w-[97%] h-[50%]  flex  gap-5 rounded-md">
        <div className="w-[65%]   rounded-md ">
          {data.slice(1, 2).map((product: ProductData) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="w-full flex flex-col justify-center items-center h-[95%] rounded-lg border hover:border-blue-600 ">
                <div className="relative group w-full flex justify-center items-center ">
                  <img
                    src={product.image}
                    alt=""
                    className="w-[40%]  h-[60%] relative  transition duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute top-14 left-17 w-[27%] h-[11%] flex gap-1 justify-around items-center rounded-full p-1 backdrop-blur-xs border border-neutral-200">
                    <p className="text-[0.8rem] font-semibold line-clamp-1">
                      {product.title}
                    </p>
                    <Button className="bg-blue-700 h-[98%] rounded-full ">
                      ${product.price}
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-[33%]  flex flex-col gap-5">
          {data.slice(5, 7).map((product: ProductData) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="w-full h-[45%]"
            >
              <div className=" w-full h-full   rounded-lg border hover:border-blue-600 ">
                <div className="relative group w-full  h-full  flex justify-center items-center ">
                  <img
                    src={product.image}
                    alt=""
                    className="w-[40%]  h-[60%] relative  transition duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-5 left-5 w-[50%] h-[20%] flex gap-1 justify-around items-center rounded-full p-1 backdrop-blur-xs border border-neutral-200">
                    <p className="text-[0.8rem] font-semibold line-clamp-1">
                      {product.title}
                    </p>
                    <Button className="bg-blue-700 h-[98%] rounded-full ">
                      ${product.price}
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ScrollProducts />
    </div>
  );
}
