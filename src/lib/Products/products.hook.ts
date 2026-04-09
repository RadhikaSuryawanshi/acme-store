import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./products.function";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialData: [],
  });
}
