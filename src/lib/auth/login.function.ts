"use client";

import type { LoginData } from "../data";

export async function login(data: LoginData) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // console.log( res);

  if (!res.ok) {
    const text = await res.text();
    // console.error("Login failed:", text);
    throw new Error(text || "Invalid username or password");
  }

  return res.json();
}

