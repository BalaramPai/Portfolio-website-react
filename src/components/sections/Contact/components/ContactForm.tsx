import { useState } from "react";
import emailjs from "@emailjs/browser";

import ContactCard from "./ContactCard";
import MagneticButton from "../../../common/MagneticButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !formData.from_name.trim() ||
      !formData.from_email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully!");

      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    }

    setLoading(false);
  }

  return (
    <ContactCard>
      <form onSubmit={handleSubmit} className="space-y-6">

        <h3 className="text-2xl font-bold text-white">
          Send a Message
        </h3>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Name
          </label>

          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
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
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
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
            transition-all
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
            name="message"
            value={formData.message}
            onChange={handleChange}
            maxLength={1000}
            placeholder="Write your message here..."
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
            transition-all
            focus:border-blue-500
            "
          />
        </div>

        {status && (
          <p
            className={`text-sm ${
              status.includes("successfully")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}

        <MagneticButton
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </MagneticButton>

      </form>
    </ContactCard>
  );
}