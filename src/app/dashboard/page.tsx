"use client";

import ScrollProducts from "@/Components/ScrollProducts";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductData } from "@/lib/data";
import { useProducts } from "@/lib/Products/products.hook";

export default function DashboardPage() {
  const { data, isLoading } = useProducts();
  if (isLoading) return <p>Loading products...</p>;
  return (
    <div className="w-full h-[110%] flex bg-gray-50">
      <div className="w-full h-screen flex flex-col gap-4  ">
        <div className="w-full h-[68%] flex justify-between gap-4">
          <div className=" w-[98%] h-full flex justify-between gap-4">
            <div className="w-[65%] h-full    ">
              {data.slice(1, 2).map((product: ProductData) => (
                <Card
                  key={product.id}
                  className="w-full h-full rounded-lg hover:border hover:border-blue-600 "
                >
                  <CardContent className="relative group w-full h-full flex justify-center items-center ">
                    <img
                      src={product.image}
                      alt=""
                      className="w-[40%] h-[60%]  relative  transition duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute top-14 left-17 w-[27%] h-[11%] flex gap-1 justify-around items-center rounded-full p-1 backdrop-blur-xs border border-neutral-200">
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
            <div className="w-[35%] h-full ">
              <div className="flex flex-col h-[48%]  gap-4 ">
                {data.slice(3, 5).map((product: ProductData) => (
                  <Card
                    key={product.id}
                    className="w-full h-full hover:border hover:border-blue-600 "
                  >
                    <CardContent className="relative group w-full h-full flex justify-center items-center ">
                      <img
                        src={product.image}
                        alt=""
                        className="w-[40%] h-[60%]  relative  transition duration-300 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute bottom-[-5%] left-3 w-[45%] h-[25%] flex gap-1 justify-around items-center rounded-full p-1 backdrop-blur-xs border border-neutral-200">
                        <p className="text-[0.8rem] font-semibold line-clamp-1">
                          {product.title}
                        </p>
                        <Button className="bg-blue-700 h-[98%] rounded-full hover:bg-blue-700  ">
                          ${product.price}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ScrollProducts />
      </div>
    </div>
  );
}
