"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignup } from "@/lib/auth/signup.hook";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


const signupSchema = z.object({
  username: z.string(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
type SignupFormData = z.infer<typeof signupSchema>;
export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();
  const { mutateAsync: signup, isPending } = useSignup();
  const signupform = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = signupform;

  const onSubmit = async (data: SignupFormData) => {
    try {
      const res = await signup(data);
      if (res) {
        // console.log("Signup Success", res);
        // toast.success("User Created successfully",{position:"top-right"});
        router.push("/");
      }
    } catch (err:any) {
      // console.log("Signup error:", err);
      toast.error(err.message,{position:"top-right"});
    }
  };
  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Username</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
          <FieldDescription>
            We&apos;ll use this to contact you. We will not share your email
            with anyone else.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          <FieldDescription>
            Must be at least 6 characters long.
          </FieldDescription>
        </Field>

        <Field>
          <Button type="submit" disabled={isSubmitting || isPending}>
            {isSubmitting || isPending ? "Submitting..." : "Create Account"}
          </Button>
        </Field>
        <FieldSeparator>Or </FieldSeparator>
        <Field>
         
          <FieldDescription className="px-6 text-center">
            Already have an account? <a href="/">Sign in</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
