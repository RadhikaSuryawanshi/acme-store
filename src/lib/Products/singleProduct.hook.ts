"use client";
import { useQuery } from "@tanstack/react-query";
import SingleProduct from "./singleProduct.function";

export default function useSingleProduct(id: string) {
  return useQuery({
    queryKey: ["SingleProduct", id],
    queryFn: () => SingleProduct(id),
    enabled: !!id,
  });
}
