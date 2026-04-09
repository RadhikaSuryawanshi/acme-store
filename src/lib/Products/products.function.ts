export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Products not found");
  }

  const json = await res.json(); // ✅ FIXED
  return json.products; // ✅ return array
}
