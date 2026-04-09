// export async function GET() {
//   try {
//     const res = await fetch("https://dummyjson.com/products");

//     if (!res.ok) {
//       throw new Error("Failed to fetch from external API");
//     }

//     const data = await res.json();

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error: "Failed to load products" }, { status: 500 });
//   }
// }
