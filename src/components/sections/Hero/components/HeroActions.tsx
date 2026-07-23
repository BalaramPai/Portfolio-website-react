import MagneticButton from "../../../common/MagneticButton";
import resume from "../../../../assets/resume/Balaram_Pai_cv.pdf";

export default function HeroActions() {


  return (
    <div className="flex items-center gap-5 pt-3">

      <MagneticButton href="#projects">
      View Projects
    </MagneticButton>

      <MagneticButton
  href={resume}
  download="Balaram_Pai_cv.pdf"
  variant="secondary"
>
  Download Resume
</MagneticButton>

    </div>
  );
}