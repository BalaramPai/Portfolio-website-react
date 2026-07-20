import MagneticButton from "../../../common/MagneticButton";
import resume from "../../../../assets/resume/Balaram_Pai_cv.pdf";

export default function HeroActions() {

  function downloadResume() {
    const link = document.createElement("a");

    link.href = resume;

    link.download = "Balaram_Pai_cv.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }

  return (
    <div className="flex items-center gap-5 pt-3">

      <MagneticButton>

        View Projects

      </MagneticButton>

      <MagneticButton
        variant="secondary"
        onClick={downloadResume}
      >

        Download Resume

      </MagneticButton>

    </div>
  );
}