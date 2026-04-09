"use client";

export async function getProducts() {
  const res = await fetch("/api/products");
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Products not found");
  }
  return res.json();
}
