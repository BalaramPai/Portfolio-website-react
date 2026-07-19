import type { EngineeringProject } from "../types/engineering";

export const engineeringProjects: EngineeringProject[] = [
  {
    id: "distributed",
    title: "Distributed Task Execution Platform",
    fileName: "distributed-system.json",
    status: "RUNNING",
    accent: "emerald",

    json: `{
  "scheduler": "Priority Queue",
  "workers": 4,
  "queue_length": 17,
  "database": "PostgreSQL",
  "status": "RUNNING"
}`,

    metrics: [
      { label: "Workers", value: "4" },
      { label: "Queue", value: "17" },
      { label: "Retries", value: "2" },
    ],
  },

  {
    id: "erp",
    title: "ERP Maintenance System",
    fileName: "erp-system.json",
    status: "HEALTHY",
    accent: "blue",

    json: `{
  "maintenance_orders": 143,
  "operations": 39,
  "technicians": 18,
  "database": "MongoDB",
  "status": "HEALTHY"
}`,

    metrics: [
      { label: "Orders", value: "143" },
      { label: "Operations", value: "39" },
      { label: "Users", value: "18" },
    ],
  },

  {
    id: "portfolio",
    title: "Portfolio Website",
    fileName: "portfolio.json",
    status: "LIVE",
    accent: "violet",

    json: `{
  "framework": "React",
  "animations": "Framer Motion",
  "styling": "Tailwind CSS",
  "deployment": "Vercel",
  "status": "LIVE"
}`,

    metrics: [
      { label: "Pages", value: "4" },
      { label: "Components", value: "26" },
      { label: "FPS", value: "60" },
    ],
  },
];