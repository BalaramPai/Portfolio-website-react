export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  subtitle: string;

  status: "Completed" | "Active" | "Deployed";

  description: string;

  role: string;

  duration: string;

  github: string;

  demo: string;

  tech: string[];

  features: string[];

  metrics: ProjectMetric[];
}