"use client";

import AppBar from "@/components/ui/dahsboard/AppBar";
import Clock from "@/components/ui/dahsboard/Clock";
import HeaderToolbar from "@/components/ui/dahsboard/HeaderToolbar";
import Notification from "@/components/ui/dahsboard/Notification";
import Taskbar from "@/components/ui/global/Taskbar";
import Administrator from "@/components/ui/dahsboard/Administrator";
import SearchBar from "@/components/ui/dahsboard/SearchBar";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div
        style={{
          background: "url(/Wallpaper.png)",
          backgroundSize: "100% 100%",
        }}
        className="h-full relative"
      >
        <div className="w-full h-16 p-4">
          <HeaderToolbar />
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
        <div className="absolute right-5 md:right-10">
          <Notification />
        </div>
        <div className="absolute bottom-20 right-12 md:right-32">
          <Administrator />
        </div>
        <div className="absolute top-1/3 left-1/2 -transalte-y-1/2 -translate-x-1/2  w-1/2 md:top-1/4 lg:top-1/3 md:w-1/3">
          <SearchBar />
        </div>
      </div>
    </main>
  );
}
