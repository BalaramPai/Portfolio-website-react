import TypingCursor from "./TypingCursor";
import JsonLine from "./JsonLine";

const lines = [
  { keyName: "engineer", value: '"Balaram Pai"' },
  { keyName: "focus", value: '["Distributed Systems", "Backend"]' },
  { keyName: "project", value: '"Distributed Task Execution Platform"' },
  { keyName: "scheduler", value: '"Priority Queue"' },
  { keyName: "workers", value: "4" },
  { keyName: "database", value: '"PostgreSQL"' },
  { keyName: "status", value: '"RUNNING"' },
];

export default function JsonViewer() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#09101D]">

      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">

        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Payload
        </span>

        <div className="flex items-center gap-2">

          <div className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-xs font-medium text-emerald-400">
            Synced
          </span>

        </div>

      </div>

      <div className="space-y-1 p-5 font-mono text-[15px]">

        <p className="text-slate-500">{"{"}</p>

        {lines.map((line) => (
          <JsonLine
            key={line.keyName}
            keyName={line.keyName}
            value={line.value}
          />
        ))}

        <div className="flex items-center">

          <span className="text-slate-500">{"}"}</span>

          <TypingCursor />

        </div>

      </div>

    </div>
  );
}