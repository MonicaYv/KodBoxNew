import { MoveLeft, MoveRight, MoveUp, Star, RefreshCw } from "lucide-react";
import Image from "next/image";
import FileappsData from "@/data/data.json";

export default function Applications() {
  const apps = FileappsData.Fileapps;

  return (
    <div className="flex-1">
      <div className="w-full bg-[url('/images/yellowbar.png')] bg-no-repeat bg-cover">
        <div className="flex items-center p-5 gap-5">
          <div className="flex flex-2 items-center gap-2 h-8 bg-white p-1">
            <MoveLeft />
            <MoveRight />
          </div>
          <div className="flex items-center justify-between flex-1 h-8 bg-white p-1">
            <div className="flex items-center gap-4">
              <MoveUp />
              <h5>Applications</h5>
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
      <div>
        <div className="flex gap-12 flex-wrap p-10 text-center">
          {apps.map((app) => {
            return (
              <div
                key={app.id}
                className=" object-cover w-20 h-20 flex flex-col items-center gap-2"
              >
                <Image src={app.image} alt={app.name} width={70} height={70} />
                <h5>{app.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
