"use client";

import { useTheme } from "@wrksz/themes/client";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme, themes } = useTheme();

  return (
    <button className="btn btn-ghost btn-circle">
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller"
          value="dim"
          checked={resolvedTheme === themes[1]}
          onChange={(e) => {
            setTheme(e.target.checked ? themes[1] : themes[0]);
          }}
        />
        <SunIcon className="swap-off" />
        <MoonIcon className="swap-on" />
      </label>
    </button>
  );
}
