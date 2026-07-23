import type { Project } from "../types/project";

export const PROJECTS: Project[] = [
  {
    title: "ERP Maintenance System",

    subtitle: "Enterprise Asset Management",

    status: "Completed",

    description:
      "SAP PM inspired enterprise maintenance platform developed during my internship featuring React Native, Flask and MongoDB.",

    role: "Full Stack Developer",

    duration: "6 Months",

    github: "#",

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
      "Parts Requisition",
      "Operator Toolkit",
      "JWT Authentication",
      "Offline Support",
    ],

    metrics: [
      {
        label: "Modules",
        value: "15+",
      },
      {
        label: "Collections",
        value: "20+",
      },
      {
        label: "APIs",
        value: "70+",
      },
    ],
  },

  {
    title: "Distributed Task Execution Platform",

    subtitle: "Distributed Scheduling Platform",

    status: "Active",

    description:
      "Production-style task execution platform implementing worker threads, priority queues, JWT authentication and Docker.",

    role: "Backend Engineer",

    duration: "Personal Project",

    github: "#",

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
    title: "Developer Portfolio",

    subtitle: "Interactive Engineering Portfolio",

    status: "Deployed",

    description:
      "Modern portfolio showcasing engineering projects using React, TypeScript, Tailwind CSS and Framer Motion.",

    role: "Frontend Engineer",

    duration: "2026",

    github: "#",

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