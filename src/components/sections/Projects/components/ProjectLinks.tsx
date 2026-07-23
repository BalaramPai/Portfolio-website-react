// import MagneticButton from "../../../common/MagneticButton";

type Props = {
  github: string;
  demo: string;
};

export default function ProjectLinks({
  github,
  demo,
}: Props) {
  return (
    <div className="flex gap-4">

<a
  href={github}
  target="_blank"
  className="rounded-xl border border-white/10 px-6 py-3 text-white transition hover:border-blue-500"
>
  GitHub
</a>

<a
  href={demo}
  target="_blank"
  className="rounded-xl border border-white/10 px-6 py-3 text-white transition hover:border-blue-500"
>
  Live Demo
</a>

    </div>
  );
}