import FileHeader from "@/components/ui/filesystem/FileHeader";
import FileSidebar from "@/components/ui/filesystem/FileSidebar";
import Taskbar from "@/components/ui/global/Taskbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="bg-[url('/Rectanglebg.png')] bg-no-repeat bg-cover bg-center w-full h-screen">
        <FileHeader />
        <div className="flex">
          <FileSidebar />
          {children}
        </div>
        <Taskbar />
      </main>
    </>
  );
}
