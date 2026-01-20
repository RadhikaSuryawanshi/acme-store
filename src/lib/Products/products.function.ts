"use client";

export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Products not found");
  }
  return res.json();
}

// export async function getSingleProduct(limit = 4) {
//   const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
//   if (!res.ok) {
//     const text = await res.text();
//     throw new Error(text || "Products not found");
//   }
//   return res.json();
// }
