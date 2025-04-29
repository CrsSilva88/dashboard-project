import { useTheme } from "../lib/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="mb-8 flex flex-col items-center gap-2">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
        🎮 Dashboard GameTracker+
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
        Acompanhe seu progresso nos projetos 🚀
      </p>
      <button
        onClick={toggleTheme}
        className="mt-2 px-4 py-1 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm font-medium shadow hover:scale-105 transition"
      >
        Alternar para modo {theme === "dark" ? "claro" : "escuro"}
      </button>
    </header>
  );
}
