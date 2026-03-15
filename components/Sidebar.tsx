"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/photography", label: "Photography" },
  { href: "/projects", label: "Projects" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-stone-100 border-r border-stone-200 flex flex-col px-6 py-10 z-10">
      <div className="mb-10">
        <span className="text-sm font-semibold tracking-widest uppercase text-stone-400">
          Menu
        </span>
      </div>
      <nav className="flex flex-col gap-1">
        {navLinks.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-stone-200 text-stone-900"
                  : "text-stone-500 hover:bg-stone-200/60 hover:text-stone-800"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto">
        <p className="text-xs text-stone-400">&copy; {new Date().getFullYear()}</p>
      </div>
    </aside>
  );
}
