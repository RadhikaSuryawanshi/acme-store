"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductData } from "@/lib/data";
import { useProducts } from "@/lib/Products/products.hook";

export default function ScrollProducts() {
    const { data, isLoading } = useProducts();
    if (isLoading) return <p>Loading products...</p>;
  return (
    <div className="w-full h-[35%] ">
      <div className="w-full h-full overflow-hidden scroll-auto">
        <div className="flex gap-4 overflow-x-auto pb-6 h-full ">
          {data.slice(5, 9).map((product: ProductData) => (
            <Card
              key={product.id}
              className="min-w-[450px] h-full rounded-lg hover:border hover:border-blue-600 "
            >
              <CardContent className="relative group w-full h-full flex justify-center items-center ">
                <img
                  src={product.image}
                  alt=""
                  className="w-[50%] h-full  relative  transition duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute bottom-[-8%] left-5 w-[40%] h-[30%] flex gap-1 justify-around items-center rounded-full p-1 backdrop-blur-xs border border-neutral-200">
                  <p className="text-[0.8rem] font-semibold line-clamp-1">
                    {product.title}
                  </p>
                  <Button className="bg-blue-700 h-[98%] rounded-full ">
                    ${product.price}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {data.slice(5, 9).map((product: ProductData) => (
            <Card
              key={product.id}
              className="min-w-[450px] h-full rounded-lg hover:border hover:border-blue-600 "
            >
              <CardContent className="relative group w-full h-full flex justify-center items-center ">
                <img
                  src={product.image}
                  alt=""
                  className="w-[50%] h-full  relative  transition duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute bottom-[-8%] left-5 w-[40%] h-[30%]  flex gap-1 justify-around items-center rounded-full p-1 backdrop-blur-xs border border-neutral-200">
                  <p className="text-[0.8rem] font-semibold line-clamp-1">
                    {product.title}
                  </p>
                  <Button className="bg-blue-700 h-[98%] rounded-full ">
                    ${product.price}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {data.slice(5, 9).map((product: ProductData) => (
            <Card
              key={product.id}
              className="min-w-[450px] h-full rounded-lg hover:border hover:border-blue-600 "
            >
              <CardContent className="relative group w-full h-full flex justify-center items-center ">
                <img
                  src={product.image}
                  alt=""
                  className="w-[50%] h-full  relative  transition duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute bottom-[-8%] left-5 w-[40%] h-[30%]  flex gap-1 justify-around items-center rounded-full p-1 backdrop-blur-xs border border-neutral-200">
                  <p className="text-[0.8rem] font-semibold line-clamp-1">
                    {product.title}
                  </p>
                  <Button className="bg-blue-700 h-[98%] rounded-full ">
                    ${product.price}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}