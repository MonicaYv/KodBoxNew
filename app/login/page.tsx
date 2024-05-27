"use client"

import useToast from "@/lib/zustand/useToast";
import { url } from "inspector";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import img from "../../public/images/Wallpaper.png"
import Profile from "../../public/images/profile.png"
import GoldBg from "../../public/images/Goldbg.png"
import Logo from "../../public/images/logo.png"

export default function Login() {

   const { push } = useRouter();
   const { showToast } = useToast();
   const { data: session } = useSession();
   useEffect(() => {
     if (session?.user) {
       push("/");
     }
   }, [session, push]);
  
  
  
  async function onSubmit() {
        const res = await signIn("credentials", {
          name:"azam72",password:"123456789",
          redirect: false,
        });
        if (res?.ok) {
          push("/");
          showToast({
            type: "success",
            title: "Success",
            message: "Login Successfull !",
          });
        } else {
          showToast({
            type: "error",
            title: "Failure",
            message: res?.error ?? "An error occurred while signing in.",
          });
        }
      }

  return (
    <div className="flex relative gap-1">
      <div
        style={{
          backgroundImage: `url(${img.src})`,
        }}
        className="bg-no-repeat bg-cover bg-center w-1/2 h-screen flex items-center justify-center rounded-tr-[100px]"
      >
        <div className="w-full max-w-xl  bg-gray-200 bg-opacity-50 h-2/3 md:h-1/2 lg:h-3/4 xl:h-2/3 rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-24 flex items-center justify-center">
            <Image
              src={Logo}
              alt="logo"
              width={70}
              height={40}
            />
          </div>
          <div className="flex min-h-min">
            <div className="relative w-2/5 flex items-center justify-center">
              <Image
                className="absolute z-0"
                src={GoldBg}
                alt="GoldBackground Image"
                width={200}
                height={200}
              />
              <Image
                className="z-10"
                src={Profile}
                alt="Profile"
                width={100}
                height={100}
                
              />
            </div>
            <div className="w-3/5">
              <form action="#" className="mt-8 space-y-6" method="POST">
                <input defaultValue="true" name="remember" type="hidden" />
                <div className="-space-y-px rounded-md shadow-sm p-3">
                  <h1 className="text-2xl font-normal pb-4">Welcome back...</h1>
                  <div>
                    <label className="sr-only" htmlFor="username">
                      Username
                    </label>
                    <input
                      autoComplete="username"
                      className="relative block w-full appearance-none rounded-2xl bg-zinc-400 px-3 py-2 text-gray-900 placeholder-gray-800 focus:z-10 focus:outline-none sm:text-sm"
                      id="username"
                      name="username"
                      placeholder="Username"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="password">
                      Password
                    </label>
                    <input
                      autoComplete="current-password"
                      className="relative block w-full appearance-none rounded-2xl bg-zinc-400 px-3 py-2 text-gray-900 placeholder-gray-800 focus:z-10 focus:outline-none sm:text-sm mt-7"
                      id="password"
                      name="password"
                      placeholder="Password"
                      required
                      type="password"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between pl-3">
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                    />
                    <label
                      className="ml-2 block text-sm text-gray-900"
                      htmlFor="remember-me"
                    >
                      Remember me
                    </label>
                  </div>
                  {/* <div className="text-sm">
                      <Link
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        href="#"
                      >
                        Forgot your password?
                      </Link>
                    </div> */}
                </div>
                <div className="p-3">
                  <button
                    onClick={onSubmit}
                    className="group relative flex w-full justify-center rounded-2xl border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    type="button"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${img.src})`,
        }}
        className=" w-1/2 h-screen bg-no-repeat bg-cover bg-center  rounded-tl-[100px]"
      ></div>
    </div>
  );
}
