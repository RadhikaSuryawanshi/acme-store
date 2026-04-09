export default async function SingleProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Products not found");
  }
  return res.json();
}

// export default async function SingleProduct(id: string) {
//   const res = await fetch(`https://dummyjson.com/products/${id}`);

//   if (!res.ok) {
//     const text = await res.text();
//     throw new Error(text || "Products not found");
//   }

//   const json = await res.json();
//   return json.products;
// }
