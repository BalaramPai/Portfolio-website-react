const tech = [
  "Python",
  "FastAPI",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "Redis",
  "AWS",
];

export default function HeroTechRibbon() {
  return (
    <div className="flex flex-wrap gap-3 pt-3">
      {tech.map((item) => (
        <div
          key={item}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-md"
        >
          {item}
        </div>
      ))}
    </div>
  );
}