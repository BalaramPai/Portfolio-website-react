import Section from "../../layout/Section";
import HeroBadge from "./components/HeroBadge";
import HeroHeading from "./components/HeroHeading";
import HeroDescription from "./components/HeroDescription";
import HeroActions from "./components/HeroActions";
import HeroEngineeringCard from "./components/HeroEngineeringCard";
import HeroStats from "./components/HeroStats";
import ScrollIndicator from "./components/ScrollIndicator";
import SocialLinks from "../../common/SocialLinks";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-32">
      <div className="grid items-center gap-24 lg:grid-cols-2">

        <div className="space-y-10">

          <HeroBadge />

          <HeroHeading />

          <HeroDescription />

          <HeroActions />

          <SocialLinks />

        </div>

        <HeroEngineeringCard />

      </div>

      <HeroStats />

      <ScrollIndicator />

    </Section>
  );
}