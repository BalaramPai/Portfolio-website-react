import MagneticButton from "../../../common/MagneticButton";

export default function HeroActions() {
  return (
    <div className="flex items-center gap-5 pt-3">

      <MagneticButton>

        View Projects

      </MagneticButton>

      <MagneticButton variant="secondary">

        Download Resume

      </MagneticButton>

    </div>
  );
}