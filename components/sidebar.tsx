"use client";

import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="drawer-side z-20">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <ul className="menu bg-base-200 min-h-full w-64">
        <li>
          <Link href="/">
            <HomeIcon className="w-4" />
            <span className="">Home</span>
          </Link>
        </li>
        <li>
          <details open>
            <summary>UI Elements</summary>
            <ul>
              <li>
                <Link
                  href="/ui/general"
                  className={pathname === "/ui/general" ? "menu-active" : ""}
                >
                  General
                </Link>
              </li>
              <li>
                <Link
                  href="/ui/buttons"
                  className={pathname === "/ui/buttons" ? "menu-active" : ""}
                >
                  Buttons
                </Link>
              </li>
              <li>
                <Link
                  href="/ui/combobox"
                  className={pathname === "/ui/combobox" ? "menu-active" : ""}
                >
                  Combobox
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link
            href="/forms"
            className={pathname === "/forms" ? "menu-active" : ""}
          >
            <HomeIcon className="w-4" />
            <span className="">Forms</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
