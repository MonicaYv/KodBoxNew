import { MoveLeft, MoveRight, MoveUp, Star, RefreshCw } from "lucide-react";
import Image from "next/image";

export default function FileManager() {
  return (
    <>
      <div className="w-[83vw] h-[700px]">
        <div className="w-full bg-[url('/yellowbar.png')] bg-no-repeat bg-cover">
          <div className="flex items-center p-5 gap-5">
            <div className="flex flex-2 items-center gap-2 h-8 bg-white p-1">
              <MoveLeft />
              <MoveRight />
            </div>
            <div className="flex items-center justify-between flex-1 h-8 bg-white p-1">
              <div className="flex items-center gap-4">
                <MoveUp />
                <h5>File</h5>
              </div>
              <div className="flex items-center gap-4">
                <Star />
                <RefreshCw />
              </div>
            </div>
            <input
              className="p-1 outline-none"
              type="search"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Image src="/Folder.png" alt="folder" width={70} height={70} />
            <p>Folder is empty</p>
          </div>
        </div>
      </div>
    </>
  );
}
