import type { Project } from "../types/project";

export const PROJECTS: Project[] = [
  {
    title: "Distributed Task Execution Platform",

    subtitle: "Distributed Scheduling Platform",

    status: "Active",

    description:
      "Production-style task execution platform implementing worker threads, priority queues, JWT authentication and Docker.",

    role: "Backend Engineer",

    duration: "Personal Project",

    github: "https://github.com/BalaramPai/distributed-task-execution-platform",

    demo: "#",

    tech: [
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Redis",
      "JWT",
    ],

    features: [
      "Priority Scheduler",
      "Worker Threads",
      "Task Queue",
      "Authentication",
      "REST APIs",
    ],

    metrics: [
      {
        label: "Workers",
        value: "4",
      },
      {
        label: "Queues",
        value: "3",
      },
      {
        label: "Tasks",
        value: "1000+",
      },
    ],
  },

  {
    title: "ERP Maintenance System",

    subtitle: "Enterprise Asset Management",

    status: "In-Progress",

    description:
      "SAP PM inspired enterprise maintenance platform developed during my internship featuring React Native, Flask and MongoDB.",

    role: "Full Stack Developer",

    duration: "6 Months",

    github: "https://github.com/BalaramPai?tab=stars",

    demo: "#",

    tech: [
      "React Native",
      "Flask",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],

    features: [
      "Maintenance Orders",
      "Ticket Management",
      "WebFlow and OperatorFlow",
      "JWT Authentication",
      "Organisation Setup",
    ],

    metrics: [
      {
        label: "Modules",
        value: "15+",
      },
      {
        label: "Collections",
        value: "10+",
      },
      {
        label: "APIs",
        value: "70+",
      },
    ],
  },

  {
    title: "Developer Portfolio",

    subtitle: "Interactive Engineering Portfolio",

    status: "Deployed",

    description:
      "Modern portfolio showcasing engineering projects using React, TypeScript, Tailwind CSS and Framer Motion.",

    role: "Frontend Engineer",

    duration: "2026",

    github: "https://github.com/BalaramPai/Portfolio-website-react",

    demo: "#",

    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],

    features: [
      "Responsive Design",
      "Dark Theme",
      "Interactive UI",
      "Reusable Components",
      "Animations",
    ],

    metrics: [
      {
        label: "Sections",
        value: "5",
      },
      {
        label: "Components",
        value: "40+",
      },
      {
        label: "Animations",
        value: "20+",
      },
    ],
  },
];