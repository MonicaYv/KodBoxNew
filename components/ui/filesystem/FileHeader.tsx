import Image from "next/image";

export default function FileHeader() {
  return (
    <div className="flex items-center w-full h-min px-10 py-5">
      <Image src="/logo.png" alt="logo" width={60} height={60} />
    </div>
  );
}
