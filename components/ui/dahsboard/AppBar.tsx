import appsData from "@/data/data.json";
import Image from "next/image";

export default function AppBar() {
  const apps = appsData.apps;
  return (
    <aside className="flex flex-col gap-2 items-center">
      {apps.map((app) => (
        <Image key={app.id} src={app.image} alt={app.name} width={60} height={60} />
      ))}
    </aside>
  );
}
