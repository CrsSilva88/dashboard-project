import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-indigo-600 dark:text-indigo-400"
      >
        GameTracker+
      </motion.div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">Carregando...</p>
    </div>
  );
}
