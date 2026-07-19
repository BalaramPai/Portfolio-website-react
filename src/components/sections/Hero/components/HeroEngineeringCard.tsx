import { useRef } from "react";

import CardBackground from "./EngineeringCard/CardBackground";
import CardHeader from "./EngineeringCard/CardHeader";
import JsonViewer from "./EngineeringCard/JsonViewer";
import MetricsGrid from "./EngineeringCard/MetricsGrid";
import MouseGlow from "./EngineeringCard/MouseGlow";
import ProjectSwitcher from "./EngineeringCard/ProjectSwitcher";

export default function HeroEngineeringCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-white/10
        bg-[#0B1220]/90
        shadow-[0_30px_120px_rgba(0,0,0,0.45)]
        backdrop-blur-xl
        transition-all
        duration-500
        group-hover:scale-[1.015]
        group-hover:border-blue-500/20
      "
    >
      {/* ADD THESE TWO DIVS HERE */}

      <div className="pointer-events-none absolute inset-0 rounded-[34px] ring-1 ring-white/5" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />

      {/* EXISTING COMPONENTS */}

      <CardBackground />

      <MouseGlow containerRef={cardRef} />

      <div className="relative z-10">

        <CardHeader />

        <div className="space-y-2 p-3">

          <ProjectSwitcher />

          <JsonViewer />

          <MetricsGrid />


        </div>

      </div>

    </div>
  );
}