import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Folder,
  BarChart2,
  User,
  LayoutGrid,
  Globe,
  Maximize,
  ArrowDownToLine,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function Taskbar() {
  return (
    <div className="flex items-center justify-between p-2">
      <button className=" hover:bg-black hover:text-white text-black px-5 py-3 rounded-md">
        File
      </button>
      <Popover>
        <PopoverTrigger>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={40}
            height={20}
            style={{width:"auto",height:"auto"}}
          />
        </PopoverTrigger>
        <PopoverContent className="w-[300px] mr-26 md:w-[500px] md:mr-32">
          <div className="flex items-center justify-start gap-5">
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={70}
              height={70}
            />
            <div>
              <h1 className="text-2xl font-normal underline decoration-4 decoration-yellow-400">
                Administrator
              </h1>
              <p className="text-md">Username</p>
            </div>
          </div>
          <div className="w-full mt-2 border-t-2 border-slate-400 p-5">
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-6">
                <Folder />
                <Link href="#">File manage</Link>
              </li>
              <li className="flex items-center gap-6">
                <BarChart2 strokeWidth={2.75} />
                <Link href="#">Backend</Link>
              </li>
              <li className="flex items-center gap-6">
                <User />
                <Link href="#">User manage</Link>
              </li>
              <li className="flex items-center gap-6">
                <LayoutGrid />
                <Link href="#">Plugin</Link>
              </li>
              <li className="flex items-center gap-6">
                <Globe />
                <Link href="#">Language</Link>
              </li>
              <li className="flex items-center gap-6">
                <Maximize />
                <Link href="#">Full Screen</Link>
              </li>
              <li className="flex items-center gap-6">
                <ArrowDownToLine />
                <Link href="#">About</Link>
              </li>
              <li className="flex items-center gap-6">
                <ArrowDownToLine />
                <Link href="#">Downloads</Link>
              </li>
              <li className="flex items-center gap-6">
                <Mail />
                <Link href="#">Free edition</Link>
              </li>
            </ul>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
