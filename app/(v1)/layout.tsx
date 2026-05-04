"use client";

import ThemeToggle from "@/components/theme-toggle";
import { uuid } from "@tanstack/react-form";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: "Components",
    children: [
      { label: "Buttons", href: "/components/buttons" },
      { label: "Forms", href: "/components/forms" },
    ],
  },
  {
    label: "Foo",
    href: "/foo",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        {/* Page content here */}
        <nav className="navbar sticky top-0 z-10 backdrop-blur-sm shadow">
          <div className="navbar-start">
            <label
              htmlFor="my-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost lg:hidden"
            >
              <MenuIcon />
            </label>
          </div>
          <div className="navbar-center">Navbar Title</div>
          <div className="navbar-end">
            <ThemeToggle />
          </div>
        </nav>
        <main className="p-4">{children}</main>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        {/* Sidebar content here */}
        {<Menu pathname={pathname} items={navItems} />}
      </div>
    </div>
  );
}

function Menu({ pathname, items }: { pathname: string; items: NavItem[] }) {
  return (
    <ul className="menu bg-base-200 w-64 min-h-full p-4">
      <RenderMenuItems items={items} pathname={pathname} />
    </ul>
  );
}

function RenderMenuItems({
  items,
  pathname,
}: {
  items: NavItem[];
  pathname: string;
}) {
  return items.map((item) => {
    if (item.children) {
      return (
        <li key={uuid()}>
          <details open>
            <summary>{item.label}</summary>
            <ul>
              <RenderMenuItems items={item.children} pathname={pathname} />
            </ul>
          </details>
        </li>
      );
    }

    return (
      <li key={uuid()}>
        <Link
          href={item.href!}
          className={pathname === item.href ? "menu-active" : ""}
        >
          {item.label}
        </Link>
      </li>
    );
  });
}
