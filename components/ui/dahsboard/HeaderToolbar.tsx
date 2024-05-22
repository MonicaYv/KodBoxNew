import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { Wifi } from "lucide-react";
import { Volume2 } from "lucide-react";
import { BatteryMedium } from "lucide-react";

export default function HeaderToolbar() {
  return (
    <div className="flex items-center justify-end gap-7">
      <Search color="#ffffff" />
      <Bell color="#ffffff" />
      <Wifi color="#ffffff" />
      <Volume2 color="#ffffff" />
      <BatteryMedium color="#ffffff" />
    </div>
  );
}
