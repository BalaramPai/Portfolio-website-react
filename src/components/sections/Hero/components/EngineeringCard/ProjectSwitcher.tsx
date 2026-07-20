import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Distributed Task Execution Platform",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "ERP Maintenance System",
    color: "from-violet-500 to-fuchsia-400",
  },
  {
    title: "Developer Portfolio",
    color: "from-emerald-500 to-teal-400",
  },
];

export default function ProjectSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const project = projects[index];

  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
      <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-slate-500">
        Current Project
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-lg font-bold text-white">
            {project.title}
          </h2>

          <div
            className={`mt-3 h-1 rounded-full bg-gradient-to-r ${project.color}`}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}