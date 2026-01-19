import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <div className="w-[8%] h-[100%]  border border-neutral-800 rounded-md relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Acme Store logo"
              viewBox="0 0 32 35"
              className="h-full w-full absolute top-[1.3px] fill-black dark:fill-white h-[16px] w-[16px]"
            
            ><title>Acme Store logo</title>
              <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
              <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
            </svg>
          </div>
          <p className="font-semibold">ACME STORE</p>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="https://images.pexels.com/photos/6214387/pexels-photo-6214387.jpeg"
          alt="Login sideimage"
          className="absolute inset-0  h-full w-full object-cover dark:brightness-[0.2] dark:grayscale "
        />
      </div>
    </div>
  );
}
