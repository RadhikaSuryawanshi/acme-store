"use client";

export async function login(data: LoginData) {
  const res = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: data.username,
      password: data.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log( res);

  if (!res.ok) {
    const text = await res.text();
    // console.error("Login failed:", text);
    throw new Error(text || "Invalid username or password");
  }
  return res.json();
}
