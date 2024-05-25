import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function UserAccount() {
  return (
    <div className="w-full h-screen bg-black text-white p-7">
      <Popover>
        <PopoverTrigger>
          <button className="bg-gray-700 p-2 rounded">Open</button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4 bg-white text-black rounded shadow-lg">
            Place content for the popover here.
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
