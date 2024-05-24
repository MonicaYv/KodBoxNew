export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex">
        <aside>Sidebar</aside>
        {children}
      </main>
    </>
  );
}
