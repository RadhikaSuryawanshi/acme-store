"use client";

import { useMutation } from "@tanstack/react-query";
import { login } from "./login.function";
import { toast } from "sonner";


export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      // console.log("Login Success", data);
      toast.success("Logged in successfully",{ position: "top-left" });
    },
    // onError: (error: any) => {
      // console.log("Login failed:", error.message);
      // toast.error("Login failed");
    // },
  });
};
