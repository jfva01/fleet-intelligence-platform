import { useUIStore } from "../../store/uiStore";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useUIStore();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="cursor-pointer relative flex items-center w-14 h-8 rounded-full bg-slate-300 border border-slate-200 transition-colors duration-300 p-1"
    >
      {/* Slider */}
      <div className={`absolute left-1 w-6 h-6 rounded-full bg-slate-950 flex 
        items-center justify-center shadow-md transition-transform duration-300
          ${isDark ? "translate-x-0" : "translate-x-6"}`}
      >{isDark ? (
          <Moon
            size={16}
            className="text-slate-300"
          />
        ) : (
          <Sun
            size={16}
            className="text-yellow-400"
          />
        )}
      </div>
    </button>
  );
}
