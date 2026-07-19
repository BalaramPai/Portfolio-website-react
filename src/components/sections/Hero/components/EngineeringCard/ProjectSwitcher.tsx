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
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">

      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-500">
        Current Project
      </p>

      <AnimatePresence mode="wait">

        <motion.div
          key={project.title}
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -12,
          }}
          transition={{
            duration: 0.35,
          }}
        >
          <h2 className="text-xl font-bold text-white">
            {project.title}
          </h2>

          <div
            className={`mt-4 h-1.5 rounded-full bg-gradient-to-r ${project.color}`}
          />

        </motion.div>

      </AnimatePresence>

    </div>
  );
}