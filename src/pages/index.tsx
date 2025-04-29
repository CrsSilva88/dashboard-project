import { useState, useEffect } from "react";
import Header from "../components/Header";
import StatusCard from "../components/StatusCard";
import ProgressPieChart from "../components/ProgressPieChart";
import SplashScreen from "../components/SplashScreen";
import { FaCode, FaDatabase, FaProjectDiagram } from "react-icons/fa";
import { tasks } from "../data/tasks";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<
    "all" | "done" | "inprogress" | "pending"
  >("all");

  const allTasks = [...tasks.frontend, ...tasks.backend, ...tasks.database];

  const filterTasks = (taskList: typeof allTasks) => {
    if (filter === "all") return taskList;
    return taskList.filter((t) => t.status === filter);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 segundos de Splash
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        <Header />

        {/* Botões de Filtro */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Todos
          </button>
          <button
            onClick={() => setFilter("done")}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            ✅ Concluídos
          </button>
          <button
            onClick={() => setFilter("inprogress")}
            className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
          >
            🕑 Em andamento
          </button>
          <button
            onClick={() => setFilter("pending")}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            🔜 Pendentes
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatusCard
            icon={<FaCode />}
            title="Frontend"
            items={filterTasks(tasks.frontend)}
          />
          <StatusCard
            icon={<FaProjectDiagram />}
            title="Backend"
            items={filterTasks(tasks.backend)}
          />
          <StatusCard
            icon={<FaDatabase />}
            title="Banco de Dados"
            items={filterTasks(tasks.database)}
          />
        </div>

        {/* Gráfico */}
        <div className="max-w-lg mx-auto">
          <ProgressPieChart tasks={filterTasks(allTasks)} />
        </div>
      </div>
    </div>
  );
}
