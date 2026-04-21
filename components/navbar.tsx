"use client";

import { MenuIcon } from "lucide-react";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="navbar w-full bg-base-100 shadow sticky top-0 z-10">
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
  );
}
