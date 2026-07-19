import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SOCIALS } from "../../constants/socials";

const icons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  LeetCode: SiLeetcode,
  Email: FaEnvelope,
};

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {SOCIALS.map((social) => {
        const Icon = icons[social.name as keyof typeof icons];

        return (
          <a
            key={social.name}
            href={social.url}
            target={social.name !== "Email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-slate-400 transition-all duration-300 hover:scale-110 hover:text-blue-400"
          >
            <Icon size={22} />
          </a>
        );
      })}
    </div>
  );
}