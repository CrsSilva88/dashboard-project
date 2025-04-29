import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StatusCardProps {
  icon: ReactNode;
  title: string;
  items: { label: string; status: "done" | "inprogress" | "pending" }[];
}

export default function StatusCard({ icon, title, items }: StatusCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col items-center cursor-pointer"
    >
      <div className="text-5xl mb-4 text-indigo-500">{icon}</div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {title}
      </h2>
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
    </motion.div>
  );
}
