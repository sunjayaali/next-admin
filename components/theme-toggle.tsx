"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";

export default function ThemeToggle() {
  const [isChecked, setChecked] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dim";
  });

  useEffect(() => {
    const theme = isChecked ? "dim" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isChecked]);

  return (
    <button className="btn btn-ghost btn-circle">
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <SunIcon className="swap-off" />
        <MoonIcon className="swap-on" />
      </label>
    </button>
  );
}
