"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";

export default function ThemeToggle() {
  const [checked, setChecked] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dim";
    }
    return false;
  });

  useEffect(() => {
    const theme = checked ? "dim" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [checked]);

  return (
    <button className="btn btn-ghost btn-circle">
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <SunIcon className="swap-off" />
        <MoonIcon className="swap-on" />
      </label>
    </button>
  );
}
