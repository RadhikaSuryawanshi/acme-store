"use client";
import ProductPage from "@/Components/ProductPage";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full">
        <ProductPage />
      </div>
    </Suspense>
  );
}
