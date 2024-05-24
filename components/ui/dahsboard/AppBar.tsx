import appsData from "@/data/data.json";
import Image from "next/image";

export default function AppBar() {
  const apps = appsData.apps;
  return (
    <aside className="flex flex-col gap-2">
      {apps.map((app) => (
        <Image src={app.image} alt={app.name} width={70} height={70} />
      ))}
    </aside>
  );
}
