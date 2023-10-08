import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import "../assets/css/darkmode.css";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="flex items-center">
      <label className="toggle">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <span></span>
      </label>
    </div>
  );
};

export default ThemeChanger;
