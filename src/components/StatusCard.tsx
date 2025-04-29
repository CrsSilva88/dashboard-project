import { ReactNode } from "react";

interface StatusCardProps {
  icon: ReactNode;
  title: string;
  items: { label: string; status: "done" | "inprogress" | "pending" }[];
}

export default function StatusCard({ icon, title, items }: StatusCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="text-center space-y-2">
        {items.map((item, index) => (
          <li key={index}>
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
