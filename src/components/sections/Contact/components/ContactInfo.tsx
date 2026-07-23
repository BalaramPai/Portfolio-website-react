import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";


import ContactItem from "./ContactItem";

export default function ContactInfo() {
  return (
    <div className="space-y-5">

      <ContactItem
        icon={<FaEnvelope />}
        title="Email"
        value="balarampai@gmail.com"
        href="mailto:balarampai@gmail.com"
      />

      <ContactItem
        icon={<FaGithub />}
        title="GitHub"
        value="github.com/BALUPAJI"
        href="https://github.com/BalaramPai"
      />

      <ContactItem
        icon={<FaLinkedin />}
        title="LinkedIn"
        value="linkedin.com/in/yourprofile"
        href="https://www.linkedin.com/in/balaram-pai-h/"
      />

      <ContactItem
        icon={<FaMapMarkerAlt />}
        title="Location"
        value="Bengaluru, Karnataka, India"
        href="https://maps.google.com/?q=Bengaluru,Karnataka,India"
      />

    </div>
  );
}