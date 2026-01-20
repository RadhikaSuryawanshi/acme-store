"use client";

import { SignupData } from "../data";

export async function signup(data: SignupData) {
  const res = await fetch("https://fakestoreapi.com/users", {
    method: "POST",
    body: JSON.stringify({
      username: data.username,
      email: data.email,
      password: data.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
//   console.log( res);
  if (!res.ok) {
    const text = await res.text();
    // console.log("Signup failed:", text);
    throw new Error(text || "Invalid username or password");
  }

  return res.json();
}
