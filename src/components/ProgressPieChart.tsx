import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface Task {
  label: string;
  status: "done" | "inprogress" | "pending";
}

interface ProgressPieChartProps {
  tasks: Task[];
}

export default function ProgressPieChart({ tasks }: ProgressPieChartProps) {
  const counts = {
    done: tasks.filter((t) => t.status === "done").length,
    inprogress: tasks.filter((t) => t.status === "inprogress").length,
    pending: tasks.filter((t) => t.status === "pending").length,
  };

  const data = [
    { name: "Concluído", value: counts.done },
    { name: "Em andamento", value: counts.inprogress },
    { name: "Pendente", value: counts.pending },
  ];

  const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-center mb-4">
        Progresso Geral
      </h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
