import { useMutation } from "@tanstack/react-query";
import { signup } from "./signup.function";
import { toast } from "sonner";


export function useSignup() {
  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
        toast.success("User Created successfully",{position:"top-right"});
    //   console.log("Signup Success", data);
    },
    // onError: (error: any) => {
    //   console.log("Signup failed:", error.message);
    // },
  });
}
