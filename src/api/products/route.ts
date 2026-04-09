export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    console.error("API error:", error);
    return Response.json([], { status: 200 });
  }
}
