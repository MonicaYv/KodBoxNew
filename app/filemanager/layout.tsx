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
        <div className="flex items-center w-full px-10 py-5">
          <FileHeader />
        </div>
        <div className="flex h-4/5">
          <FileSidebar />
          {children}
        </div>
        <div className="fixed bottom-0 w-full">
          <Taskbar/>
        </div>
      </main>
    </>
  );
}
