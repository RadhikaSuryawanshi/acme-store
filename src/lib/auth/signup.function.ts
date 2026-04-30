"use client";

import { SignupData } from "../data";

export async function signup(data: SignupData) {
  const res = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  //   console.log( res);
  if (!res.ok) {
    const text = await res.text();
    // console.log("Signup failed:", text);
    throw new Error(text || "Invalid username or password");
  }

  return res.json();
}
