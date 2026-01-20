"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { ProductData } from "@/lib/data";
import { useProducts } from "@/lib/Products/products.hook";

export default function ProductPage() {
  const { data, isLoading } = useProducts();
  if (isLoading) return <p>Loading products...</p>;
  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="w-[98%] h-full  flex justify-between">
        <section className="w-[125px] h-full ">
          <nav className="w-full h-full ">
            <h3 className="text-[0.8rem] text-neutral-400">Collections</h3>
            <ul className="w-full text-[0.9rem] leading-7">
              <li>
                <a href={"search"} >
                  All
                </a>
              </li>
              <li>
                <a href={"search"} >
                  Bags
                </a>
              </li>
              <li>Drinkware</li>
              <li>Electronics</li>
              <li>Footware</li>
              <li>Headwear</li>
              <li>Hoodies</li>
              <li>Jackets</li>
              <li>Kids</li>
              <li>Pets</li>
              <li>Shirts</li>
              <li>Stickers</li>
            </ul>
          </nav>
        </section>
        <section className="w-[75%] h-full ">
          <div className="grid grid-cols-3 space-y-[-40px] ">
            {data.map((product: ProductData) => (
              <CardContainer
                key={product.id}
                className="w-[90%] inter-var mt-[-26%] rounded-xl hover:border hover:border-blue-700"
              >
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={product.image}
                      height="1000"
                      width="1000"
                      className="relative h-60 w-full object-fill rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="absolute bottom-[5px] left-[4%] w-[80%] h-[%] flex gap-1 justify-around items-center bg-neutral-300/40 rounded-full p-1 backdrop-blur-xs border border-neutral-300">
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
            ))}
          </div>
        </section>
        <section className="w-[125px] h-full">
          <nav className="w-full h-full ">
            <h3 className="text-[0.8rem] text-neutral-400">Sort by</h3>
            <ul className="w-full text-[0.9rem] leading-7">
              <li>Relevance</li>
              <li>Trending</li>
              <li>Latest arrivals</li>
              <li>Price: Low to high</li>
              <li>Price: High to low</li>
            </ul>
          </nav>
        </section>
      </div>
    </main>
  );
}
