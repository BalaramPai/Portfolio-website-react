import Section from "../../layout/Section";

import SocialLinks from "../../common/SocialLinks";

import HeroAvailability from "./HeroAvailability";
import HeroBadge from "./components/HeroBadge";
import HeroHeading from "./components/HeroHeading";
import HeroDescription from "./components/HeroDescription";
import HeroActions from "./components/HeroActions";
import HeroTechRibbon from "./HeroTechRibbon";
import HeroEngineeringCard from "./components/HeroEngineeringCard";
import HeroStats from "./components/HeroStats";
import HeroParallax from "./components/HeroParallax";
import HeroBackground from "./components/HeroBackground";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-24 pb-10">
      <HeroBackground />
      <div className="grid items-start gap-14 lg:grid-cols-2">
        {/* Left */}
        <div className="space-y-7 pt-10">
          <HeroAvailability />

          <HeroBadge />

          <HeroHeading />

          <HeroDescription />

      <div className="mt-14 space-y-9">
  <HeroActions />

  <div className="flex items-end justify-between gap-8">
    <HeroTechRibbon />
    <SocialLinks />
  </div>
</div>
        </div>

        {/* Right */}
        <HeroParallax>
          <HeroEngineeringCard />
        </HeroParallax>
      </div>

      <div className="mt-16">
    <HeroStats />
</div>

    </Section>
  );
}