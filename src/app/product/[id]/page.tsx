"use client";

import { Button } from "@/components/ui/button";

import { useProducts } from "@/lib/Products/products.hook";
import useSingleProduct from "@/lib/Products/singleProduct.hook";
import { CartItems, addItemtoCart, toggleCart } from "@/lib/redux/CartSlice";
import { slugify } from "@/lib/slug";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";

export default function ProductPage() {
  const params = useParams();
  const slug = params.id as string;
  const id = slug.split("-").pop()!;
  const { data, isLoading } = useSingleProduct(id);
  const { data: products } = useProducts();
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading...</div>;

  const relatedProducts = products?.filter(
    (item: any) => item.category === data.category && item.id !== data.id,
  );

  const handleAddtoCart = (product: Omit<CartItems, "quantity">) => {
    dispatch(addItemtoCart(product));
    dispatch(toggleCart(true));
  };

  return (
    <div className="w-full min-h-screen gap-7 flex flex-col justify-center items-center">
      <div
        key={data.id}
        className="w-[97%] bg-white border rounded-md border-neutral-200 flex gap-2 "
      >
        <section className="w-[72%] gap-10  flex flex-col justify-center items-center relative group/card">
          <img
            src={data.image}
            alt="product images"
            className="w-[45%] h-[55%] relative  transition duration-300 ease-in-out group-hover:scale-105"
          />
        </section>

        <section className="w-[38%]  py-10 flex flex-col gap-6">
          <div className=" w-[90%]  flex flex-col gap-2  py-6 border-b border-neutral-200">
            <h1 className="text-5xl font-semibold line-clamp-1">
              {data.title}
            </h1>
            <div className="w-[30%] bg-blue-600 text-[0.9rem] text-white py-2 rounded-full flex justify-center items-center p-1">
              $ {data.price} USD
            </div>
          </div>
          <div className="w-[80%]  flex flex-col gap-5 ">
            <p className="text-[0.9rem] text-neutral-900">SIZE</p>
            <div className=" flex gap-3 ">
              <button
                type="button"
                className="px-3 py-1 text-[0.9rem] rounded-full border border-neutral-200 hover:border-blue-700 bg-neutral-100"
              >
                NB
              </button>{" "}
              <button
                type="button"
                className="px-3 py-1 text-[0.9rem] rounded-full border border-neutral-200 bg-neutral-100 hover:border-blue-700"
              >
                3M
              </button>{" "}
              <button
                type="button"
                className="px-3 py-1 text-[0.9rem] rounded-full border border-neutral-200 bg-neutral-100 hover:border-blue-700"
              >
                6M
              </button>{" "}
              <button
                type="button"
                className="px-2 py-1 text-[0.9rem] rounded-full border border-neutral-200 bg-neutral-100 hover:border-blue-700"
              >
                12M
              </button>{" "}
              <button
                type="button"
                className="px-2 py-1 text-[0.9rem] rounded-full border border-neutral-200 bg-neutral-100 hover:border-blue-700"
              >
                18M
              </button>
              <button
                type="button"
                className="px-2 py-1 text-[0.9rem] rounded-full border border-neutral-200 bg-neutral-100 hover:border-blue-700"
              >
                24M
              </button>
            </div>
            <p className="text-[0.9rem] text-neutral-900">COLOR</p>
            <div className=" flex gap-3 ">
              <button
                type="button"
                className="px-2 py-1 text-[0.9rem] rounded-full border border-neutral-200 bg-neutral-100 hover:border-blue-700"
              >
                Black
              </button>
              <button
                type="button"
                className="px-2 py-1 text-[0.9rem] rounded-full border border-neutral-200 bg-neutral-100 hover:border-blue-700"
              >
                white
              </button>{" "}
              <button
                type="button"
                className="px-2 py-1 text-[0.9rem] rounded-full border border-neutral-200 bg-neutral-100 hover:border-blue-700"
              >
                Beige
              </button>
            </div>
            <p className="text-[0.9rem] line-clamp-1">{data.description}</p>
            <button
              onClick={() => handleAddtoCart(data)}
              type="button"
              className="w-full px-3 py-1 bg-blue-600 text-white rounded-full flex justify-start items-center gap-25"
            >
              {" "}
              <span className="text-[1.9rem]">+</span> Add to Cart
            </button>
          </div>
        </section>
      </div>
      <div className="w-[97%] mb-10">
        <h2 className="text-[1.6rem] font-bold mb-5">Related Products</h2>

        <div className="flex gap-4 overflow-x-auto scroll-smooth">
          {relatedProducts?.map((item: any) => (
            <Link
              href={`/product/${slugify(item.title)}-${item.id}`}
              key={item.id}
            >
              <div className="w-[290px] py-7 border rounded-md p-4 bg-white flex-shrink-0 relative group hover:border-blue-700">
                <img
                  src={item.image}
                  alt="product images"
                  className="h-50 mx-auto object-contain transition duration-300 ease-in-out group-hover:scale-110 "
                />

                <div className="absolute bottom-3 left-8 w-[75%]  flex gap-1 justify-around items-center rounded-full p-1 backdrop-blur-md border border-neutral-200">
                  <p className="text-[0.8rem] font-semibold line-clamp-1">
                    {item.title}
                  </p>
                  <Button className="bg-blue-700 h-[98%] rounded-full ">
                    ${item.price}
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
