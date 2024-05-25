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

import {
  Copy,
  ClipboardPaste,
  Scissors,
RefreshCcw,
  Printer,
  Share,
  CirclePlus,
} from "lucide-react";

export default function Home() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <ContextMenuContent className="w-64 rounded-md shadow-lg dark:bg-gray-950">
          <ContextMenuItem className="flex items-center gap-2">
            <CirclePlus />
            New
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>
                File and Folder
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>File</ContextMenuItem>
                <ContextMenuItem>Folder</ContextMenuItem>
                <ContextMenuItem>Document</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuItem>
          <ContextMenuItem className="flex items-center gap-2">
            <Copy />
            Copy
          </ContextMenuItem>
          <ContextMenuItem className="flex items-center gap-2">
            <ClipboardPaste />
            Paste
          </ContextMenuItem>
          <ContextMenuItem className="flex items-center gap-2">
            <Scissors />
            Cut
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem className="flex items-center gap-2">
            <RefreshCcw />
           Refresh
          </ContextMenuItem>
          <ContextMenuItem className="flex items-center gap-2">
            <Printer />
            Print
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem className="flex items-center gap-2">
            <Share />
            Share
          </ContextMenuItem>
        </ContextMenuContent>
        <main className="w-full h-screen">
          <div
            style={{
              background: "url(/images/Wallpaper.png)",
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
            <div className="absolute top-1/3 left-1/2 -transalte-y-1/2 -translate-x-1/2  w-1/2 md:top-1/4 lg:top-1/3 md:w-1/3">
              <SearchBar />
            </div>
          </div>
        </main>
      </ContextMenuTrigger>
    </ContextMenu>
  );
}
