"use client";

import AppBar from "@/components/ui/dahsboard/AppBar";
import Clock from "@/components/ui/dahsboard/Clock";
import HeaderToolbar from "@/components/ui/dahsboard/HeaderToolbar";
import Taskbar from "@/components/ui/global/Taskbar";
import SearchBar from "@/components/ui/dahsboard/SearchBar";
import {
  ContextMenuTrigger,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuContent,
  ContextMenu,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/ui/context-menu";
import appsData from "@/data/data.json";
import Image from "next/image";
import { useState } from "react";
import IframeModal from "@/components/ui/iFrame/IframeModal";

interface App {
  id: number;
  name: string;
  image: string;
  url: string;
}

const apps: App[] = appsData.Desktopapps;

export default function Home() {
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    setIframeUrl(url);
  };

  const closeIframe = () => {
    setIframeUrl(null);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
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
            <ContextMenuContent className="w-64 p-2 rounded-md shadow-lg dark:bg-gray-950 ">
              <ContextMenuItem className="flex items-center gap-2">
                Refresh
              </ContextMenuItem>
              <ContextMenuItem>Upload file</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem className="flex items-center gap-2">
                New folder
              </ContextMenuItem>
              <ContextMenuItem className="flex items-center gap-2">
                New file
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset></ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>txt file</ContextMenuItem>
                    <ContextMenuItem>md file</ContextMenuItem>
                    <ContextMenuItem>html file</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Word doc file</ContextMenuItem>
                    <ContextMenuItem>Excel xlxs file</ContextMenuItem>
                    <ContextMenuItem>PowerPoint pptx</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Minder diagram</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Light app</ContextMenuItem>
                    <ContextMenuItem>New URL</ContextMenuItem>
                    <ContextMenuItem>File shortcut</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuItem>
              <ContextMenuItem className="flex items-center gap-2">
                Sort by
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset></ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48 p-3">
                    <ContextMenuItem>Name</ContextMenuItem>
                    <ContextMenuItem>Type</ContextMenuItem>
                    <ContextMenuItem>Size</ContextMenuItem>
                    <ContextMenuItem>Modification</ContextMenuItem>
                    <ContextMenuItem>Increasing</ContextMenuItem>
                    <ContextMenuItem>Decrement</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuItem>
              <ContextMenuItem className="flex items-center gap-2">
                Icon size
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset></ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48 p-3">
                    <ContextMenuItem>Tiny</ContextMenuItem>
                    <ContextMenuItem>Small icon</ContextMenuItem>
                    <ContextMenuItem>Medium icon</ContextMenuItem>
                    <ContextMenuItem>Big icon</ContextMenuItem>
                    <ContextMenuItem>Oversized icon</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuItem>
              <ContextMenuItem className="flex items-center gap-2">
                Attribute
              </ContextMenuItem>
              <ContextMenuItem className="flex items-center gap-2">
                More
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset></ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48 p-3">
                    <ContextMenuItem>Show Options</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuItem>
              <ContextMenuItem className="flex items-center gap-2">
                Light app
              </ContextMenuItem>
              <ContextMenuItem className="flex items-center gap-2">
                Wallpaper
              </ContextMenuItem>
              <ContextMenuItem className="flex items-center gap-2">
                Personal
              </ContextMenuItem>
            </ContextMenuContent>
            <div className=" w-0 flex flex-col flex-wrap gap-5 h-[calc(100vh_-_theme(spacing.16))] md:h-[calc(95vh_-_theme(spacing.16))] md:p-5">
              {apps.map((app) => (
                <div
                  key={app.id}
                  className="w-20 h-20 text-center flex flex-col items-center mb-10 cursor-pointer"
                  onClick={() => handleImageClick(app.url)}
                >
                  <Image
                    src={app.image}
                    alt={app.name}
                    width={60}
                    height={60}
                    style={{ width: "auto", height: "auto" }}
                  />
                  <h5 className="text-white text-md">{app.name}</h5>
                </div>
              ))}
            </div>
            {iframeUrl && <IframeModal url={iframeUrl} onClose={closeIframe} />}
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
      </ContextMenuTrigger>
    </ContextMenu>
  );
}
