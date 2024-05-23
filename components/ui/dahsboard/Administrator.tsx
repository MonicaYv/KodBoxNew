import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import Image from "next/image";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card>;

export default function Administrator({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[300px] md:w-[480px]", className)} {...props}>
      <CardHeader>
        <div className="flex items-center justify-start gap-5">
          <Image src="/profile.png" alt="Profile" width={70} height={70} />
          <div>
            <CardTitle className="text-2xl font-normal underline decoration-4 decoration-yellow-400">
              Administrator
            </CardTitle>
            <CardDescription className="text-md">Username</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="border-t-2 border-slate-400 p-5">
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
      </CardContent>
    </Card>
  );
}
