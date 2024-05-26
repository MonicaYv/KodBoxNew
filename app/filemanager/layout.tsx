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
        <div className="flex items-center w-full px-10 py-5 h-20">
          <FileHeader />
        </div>
        <div className="flex h-[calc(90vh_-_theme(spacing.16))]">
          <FileSidebar />
          {children}
        </div>
        <div className="fixed bottom-0 w-full">
          <Taskbar />
        </div>
      </main>
    </>
  );
}
