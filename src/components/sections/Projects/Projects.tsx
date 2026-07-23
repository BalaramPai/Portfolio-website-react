import { PROJECTS } from "../../../constants/project";
import Card from "../../common/Card";
import { H2, Body } from "../../common/Typography";
import Section from "../../layout/Section";

export default function Projects() {
  return (
    <Section
    id="projects"
    spacing="sm"
>
      <H2 className="mb-12">Featured Projects</H2>

      <div className="grid gap-8">
        {PROJECTS.map((project) => (
          <Card key={project.title} className="p-8">
            <h3 className="text-2xl font-semibold text-white">
              {project.title}
            </h3>

            <Body className="mt-4">
              {project.description}
            </Body>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}