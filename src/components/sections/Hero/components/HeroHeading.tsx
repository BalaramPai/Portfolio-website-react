import AnimatedGradientText from "./AnimatedGradientText";

export default function HeroHeading() {
  return (
    <div className="space-y-5">
      <h1 className="leading-[0.9] tracking-[-0.05em]">
        <div className="text-6xl font-black text-white xl:text-[5.5rem]">
          Engineering
        </div>

        <div className="mt-1 text-6xl font-black xl:text-[5.5rem]">
          <AnimatedGradientText>
            Software
          </AnimatedGradientText>
        </div>

        <div className="mt-1 text-6xl font-black text-white xl:text-[5.5rem]">
          That Scales.
        </div>
      </h1>
    </div>
  );
}