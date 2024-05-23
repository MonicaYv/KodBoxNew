import Image from "next/image";

export default function Taskbar() {
  return (
    <div className="flex items-center justify-between p-3">
      <button className=" hover:bg-black hover:text-white text-black px-5 py-3 rounded-md">
        File
      </button>
      <Image src="/logo.png" alt="logo" width={50} height={50} />
    </div>
  );
}
