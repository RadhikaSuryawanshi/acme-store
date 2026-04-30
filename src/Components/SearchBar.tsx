"use client";

import { ProductData } from "@/lib/data";
import { useProducts } from "@/lib/Products/products.hook";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const { data } = useProducts();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    router.push(`/search?q=${search}`);

    setSearch("");
  };

  const suggestions = data?.filter((product: ProductData) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <form
      onSubmit={handleSearch}
      className="w-[60%] lg:w-[40%] h-full flex justify-center items-center"
    >
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border w-full p-2 md:p-3 rounded-md text-sm md:text-base outline-none"
        />

        {search && (
          <div className="absolute top-12 md:top-14 left-0 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
            {suggestions?.length ? (
              suggestions.slice(0, 5).map((product: ProductData) => (
                <button
                  type="button"
                  key={product.id}
                  className="p-3 w-full text-start hover:bg-gray-100 border-b text-sm md:text-base"
                  onClick={() => {
                    router.push(`/search?q=${product.title}`);
                    setSearch("");
                  }}
                >
                  {product.title}
                </button>
              ))
            ) : (
              <p className="p-3 text-gray-500 text-sm md:text-base">
                No products found
              </p>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
