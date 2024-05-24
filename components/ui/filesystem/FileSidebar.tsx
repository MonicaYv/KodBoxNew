import Link from "next/link";

export default function FileSidebar() {
  return (
    <div className="w-[17vw] bg-[url('/sidebarimg.png')] bg-no-repeat bg-cover">
      <div className="px-10 py-7">
        <h1 className="text-lg text-slate-600">Favourites</h1>
      </div>
      <nav>
        <ul className="grid gap-5">
          <li>
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500 data-[active=true]:text-orange-500 hover:bg-black data-[active=true]:bg-black data-[active=true]:font-semibold"
              href="/filemanager/desktop"
            >
              <span className="text-lg font-medium px-10">Desktop</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500 data-[active=true]:text-orange-500 hover:bg-black data-[active=true]:bg-black data-[active=true]:font-semibold"
              href="/filemanager/recent"
            >
              <span className="text-lg font-medium hover:text-orange-500 data-[active=true]:text-orange-500  px-10">
                Recent
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:text-orange-500 data-[active=true]:text-orange-500 transition-colors hover:bg-black data-[active=true]:bg-black data-[active=true]:font-semibold"
              href="/filemanager/downloads"
            >
              <span className="text-lg font-medium hover:text-orange-500 data-[active=true]:text-orange-500  px-10">
                Downloads
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium  hover:text-orange-500 data-[active=true]:text-orange-500transition-colors hover:bg-black data-[active=true]:bg-black data-[active=true]:font-semibold"
              href="/filemanager"
            >
              <span className="text-lg font-medium hover:text-orange-500 data-[active=true]:text-orange-500  px-10">
                File
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:text-orange-500 data-[active=true]:text-orange-500 transition-colors hover:bg-black data-[active=true]:bg-black data-[active=true]:font-semibold"
              href="/filemanager/documents"
            >
              <span className="text-lg font-medium hover:text-orange-500 data-[active=true]:text-orange-500  px-10">
                Documents
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:text-orange-500 data-[active=true]:text-orange-500 transition-colors hover:bg-black data-[active=true]:bg-black data-[active=true]:font-semibold"
              href="/filemanager/applications"
            >
              <span className="text-lg font-medium hover:text-orange-500 data-[active=true]:text-orange-500  px-10">
                Applications
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
