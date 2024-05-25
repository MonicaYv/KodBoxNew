"use client";

import AppBar from "@/components/ui/dahsboard/AppBar";
import Clock from "@/components/ui/dahsboard/Clock";
import HeaderToolbar from "@/components/ui/dahsboard/HeaderToolbar";
import Taskbar from "@/components/ui/global/Taskbar";
import SearchBar from "@/components/ui/dahsboard/SearchBar";


import appsData from "@/data/data.json";
import Image from "next/image";

export default function Home() {
  const apps = appsData.Desktopapps;

  return (
    <main className="w-full h-screen">
      <div
        style={{
          background: "url(/images/Wallpaper.png)",
          backgroundSize: "100% 100%",
        }}
        className="h-full relative"
      >
        <div className="w-full h-20 p-4">
          <HeaderToolbar />
        </div>
        <div className=" w-0 flex flex-col flex-wrap gap-5 h-[calc(100vh_-_theme(spacing.16))] md:h-[calc(95vh_-_theme(spacing.16))] md:p-5">
          {apps.map((app) => (
            <div
              key={app.id}
              className="w-20 h-20 text-center flex flex-col items-center mb-10 cursor-pointer"
            >
              <Image src={app.image} alt={app.name} width={60} height={60} />
              <h5 className="text-white text-md">{app.name}</h5>
            </div>
          ))}
        </div>
        <div className="absolute top-32 left-1/2 -transalte-y-1/2 -translate-x-1/2">
          <Clock />
        </div>
        <div className="absolute top-1/3 right-5 bg-gray-200 bg-opacity-50 w-20 md:w-24 h-min rounded-3xl p-3">
          <AppBar />
        </div>
        <div className="absolute bottom-0 w-full bg-gray-200 bg-opacity-50">
          <Taskbar />
        </div>
        <div className="absolute top-1/3 left-1/2 -transalte-y-1/2 -translate-x-1/2  w-1/2 md:top-1/4 lg:top-1/3 md:w-1/3">
          {/* <SearchBar /> */}
        </div>
      </div>
    </main>
  );
}
