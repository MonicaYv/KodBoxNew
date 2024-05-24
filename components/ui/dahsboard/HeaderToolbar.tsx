import { Search, Bell, Wifi, Volume2, BatteryMedium } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Notification from "./Notification";


export default function HeaderToolbar() {
  return (
    <div className="flex items-center justify-end gap-7">
      <Search color="#ffffff" />
      <Popover>
        <PopoverTrigger>
          <Bell color="#ffffff" />
        </PopoverTrigger>
        <PopoverContent>
          <Notification/>
        </PopoverContent>
      </Popover>
      <Wifi color="#ffffff" />
      <Volume2 color="#ffffff" />
      <BatteryMedium color="#ffffff" />
    </div>
  );
}
