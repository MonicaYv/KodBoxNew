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
      <main className=" w-full h-screen">
        <div className="flex items-center w-full h-18 px-10 py-5">
          <FileHeader />
        </div>
        <div className="flex flex-grow">
          <FileSidebar />
          {children}
        </div>
          <Taskbar />
      </main>
    </>
  );
}
