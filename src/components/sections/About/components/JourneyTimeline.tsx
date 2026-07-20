import { motion } from "framer-motion";

const journey = [
  {
    year: "2024",
    title: "Started Programming",
    desc: "Python • Web Development",
  },
  {
    year: "2025",
    title: "ERP Internship",
    desc: "React Native • Flask",
  },
  {
    year: "2025",
    title: "IEEE Research",
    desc: "AI Research Paper",
  },
  {
    year: "2026",
    title: "Distributed Systems",
    desc: "Backend Engineering",
  },
];

export default function JourneyTimeline() {
  return (
    <section>
      <h3 className="mb-8 text-2xl font-bold text-white">
        My Journey
      </h3>

      <div className="relative border-l border-white/10 pl-8">
        {journey.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="relative mb-8"
          >
            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-blue-500 shadow-lg shadow-blue-500/40" />

            <p className="text-sm font-semibold text-blue-400">
              {item.year}
            </p>

            <h4 className="text-xl font-bold text-white">
              {item.title}
            </h4>

            <p className="text-slate-400">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}