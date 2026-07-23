import ContactCard from "./ContactCard";
import MagneticButton from "../../../common/MagneticButton";

export default function ContactForm() {
  return (
    <ContactCard>

      <div className="space-y-6">

        <h3 className="text-2xl font-bold text-white">
          Send a Message
        </h3>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-900/80
            px-4
            py-3
            text-white
            outline-none
            transition-all

            focus:border-blue-500
            "
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Email
          </label>

          <input
            type="email"
            placeholder="john@example.com"
            className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-900/80
            px-4
            py-3
            text-white
            outline-none

            focus:border-blue-500
            "
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Message
          </label>

          <textarea
            rows={6}
            placeholder="Tell me about your project..."
            className="
            w-full
            resize-none
            rounded-xl
            border
            border-slate-700
            bg-slate-900/80
            px-4
            py-3
            text-white
            outline-none

            focus:border-blue-500
            "
          />
        </div>

        <MagneticButton>
          Send Message
        </MagneticButton>

      </div>

    </ContactCard>
  );
}