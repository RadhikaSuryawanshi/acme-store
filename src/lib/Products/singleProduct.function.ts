export default async function SingleProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Products not found");
  }
  return res.json();
}
