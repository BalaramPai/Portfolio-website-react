import { SKILLS } from "../../../constants/skills";
import Card from "../../common/Card";
import { H2 } from "../../common/Typography";
import Section from "../../layout/Section";

export default function Skills() {
  return (
    <Section id="skills">
      <H2 className="mb-12">Skills</H2>

      <div className="grid gap-8 md:grid-cols-2">
        {SKILLS.map((skill) => (
          <Card key={skill.category} className="p-8">
            <h3 className="mb-6 text-2xl font-semibold text-white">
              {skill.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skill.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
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