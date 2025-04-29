import { ReactNode } from "react";

interface StatusCardProps {
  icon: ReactNode;
  title: string;
  items: { label: string; status: "done" | "inprogress" | "pending" }[];
}

export default function StatusCard({ icon, title, items }: StatusCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform hover:scale-105 duration-300">
      <div className="text-5xl mb-4 text-indigo-500">{icon}</div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{title}</h2>
      <ul className="text-center space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300">
            {item.status === "done" && "✅ "}
            {item.status === "inprogress" && "🕑 "}
            {item.status === "pending" && "🔜 "}
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
