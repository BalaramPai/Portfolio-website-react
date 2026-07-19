import Card from "../../common/Card";
import Section from "../../layout/Section";
import { Body, H2 } from "../../common/Typography";
import { ABOUT } from "../../../constants/about";

export default function About() {
  return (
    <Section id="about">
      <div className="mb-12">
        <H2>{ABOUT.sectionTitle}</H2>

        <Body className="mt-4 max-w-3xl">
          {ABOUT.subtitle}
        </Body>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="p-8">
          <Body>{ABOUT.description}</Body>
        </Card>

        <div className="grid gap-5">
          {ABOUT.highlights.map((item) => (
            <Card key={item.title} className="p-6">
              <p className="text-sm uppercase tracking-wider text-blue-400">
                {item.title}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                {item.value}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}