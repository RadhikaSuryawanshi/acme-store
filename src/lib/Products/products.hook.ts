import { useQuery } from "@tanstack/react-query";
import { getProducts  } from "./products.function";

export function useProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts,

    });
}

// export function useSingleProduct() {
//     return useQuery({
//         queryKey: ["single-product",4],
//         queryFn: ()=> getSingleProduct(4),

//     });
// }