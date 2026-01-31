"use client";
import { ProductData } from "@/lib/data";
import { useProducts } from "@/lib/Products/products.hook";
import { useState } from "react";

export default function SearchBar() {
  const { data, isLoading } = useProducts();

  const [search, setSearch] = useState("");

  const filteredProducts = data?.filter((product: ProductData) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-[35%]   mr-80 h-full   flex justify-center items-center">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border  w-full "
      />
    </div>
  );
}
