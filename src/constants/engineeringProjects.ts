import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: 0,
    title: "ERP Maintenance System",
    subtitle: "Enterprise Asset Management",
    progress: 100,
    status: "LIVE",

    payload: [
      {
        keyName: "engineer",
        value: '"Balaram Pai"',
      },
      {
        keyName: "focus",
        value: '["ERP", "React Native", "Backend"]',
      },
      {
        keyName: "project",
        value: '"ERP Maintenance System"',
      },
      {
        keyName: "stack",
        value: '["Flask", "React Native"]',
      },
      {
        keyName: "database",
        value: '"MongoDB"',
      },
      {
        keyName: "status",
        value: '"LIVE"',
      },
    ],
  },

  {
    id: 1,
    title: "Distributed Task Execution Platform",
    subtitle: "Distributed Scheduling Platform",
    progress: 82,
    status: "RUNNING",

    payload: [
      {
        keyName: "engineer",
        value: '"Balaram Pai"',
      },
      {
        keyName: "focus",
        value: '["Distributed Systems", "Backend"]',
      },
      {
        keyName: "project",
        value: '"Distributed Task Execution Platform"',
      },
      {
        keyName: "stack",
        value: '["FastAPI", "Docker"]',
      },
      {
        keyName: "database",
        value: '"PostgreSQL"',
      },
      {
        keyName: "status",
        value: '"RUNNING"',
      },
    ],
  },

  {
    id: 2,
    title: "Developer Portfolio",
    subtitle: "Interactive Portfolio",
    progress: 100,
    status: "DEPLOYED",

    payload: [
      {
        keyName: "engineer",
        value: '"Balaram Pai"',
      },
      {
        keyName: "focus",
        value: '["Frontend", "UI Engineering"]',
      },
      {
        keyName: "project",
        value: '"Developer Portfolio"',
      },
      {
        keyName: "stack",
        value: '["React", "TypeScript"]',
      },
      {
        keyName: "database",
        value: '"N/A"',
      },
      {
        keyName: "status",
        value: '"DEPLOYED"',
      },
    ],
  },
];