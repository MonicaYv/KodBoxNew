import { MoveLeft, MoveRight, MoveUp, Star, RefreshCw } from "lucide-react";
import Image from "next/image";
import FileDocsData from "@/data/data.json";

export default function Downloads() {
  const docs = FileDocsData.FileDocs;
  return (
    <div className="w-[83vw] h-[700px]">
      <div className="w-full h-[8vh] bg-[url('/yellowbar.png')] bg-no-repeat bg-cover">
        <div className="flex items-center p-5 gap-5">
          <div className="flex flex-2 items-center gap-2 h-8 bg-white p-1">
            <MoveLeft />
            <MoveRight />
          </div>
          <div className="flex items-center justify-between flex-1 h-8 bg-white p-1">
            <div className="flex items-center gap-4">
              <MoveUp />
              <h5>Downloads</h5>
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
      <div className="h-[73.1vh]">
        <div className="flex gap-12 flex-wrap p-10 text-center">
          {docs.map((doc) => {
            return (
              <div
                key={doc.id}
                className=" object-cover w-20 h-20 flex flex-col items-center gap-2"
              >
                <Image src={doc.image} alt={doc.name} width={70} height={70} />
                <h5>{doc.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
