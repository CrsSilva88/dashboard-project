import Header from "../components/Header";
import StatusCard from "../components/StatusCard";
import ProgressPieChart from "../components/ProgressPieChart";
import { FaCode, FaDatabase, FaProjectDiagram } from "react-icons/fa";
import { tasks } from "../data/tasks";

export default function Home() {
  const allTasks = [...tasks.frontend, ...tasks.backend, ...tasks.database];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatusCard
            icon={<FaCode />}
            title="Frontend"
            items={tasks.frontend}
          />
          <StatusCard
            icon={<FaProjectDiagram />}
            title="Backend"
            items={tasks.backend}
          />
          <StatusCard
            icon={<FaDatabase />}
            title="Banco de Dados"
            items={tasks.database}
          />
        </div>

        {/* Gráfico de Pizza */}
        <div className="max-w-lg mx-auto">
          <ProgressPieChart tasks={allTasks} />
        </div>
      </div>
    </div>
  );
}
