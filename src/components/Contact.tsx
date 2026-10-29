import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Youtube, Instagram, Mail, Send } from "lucide-react";

const socials = [
  { href: "https://github.com/sameer-18sp", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/sameer-sp18", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.youtube.com/@WanderingNepali", icon: Youtube, label: "YouTube" },
  { href: "https://www.instagram.com/sameerpandeya_sp1", icon: Instagram, label: "Instagram" },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 3000);
  };

  return (
    <section id="contact" className="py-20 border-t border-border" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">Get in touch</h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Left */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Open to new opportunities, collaborations, freelance work, or just a good
                conversation about tech, AI, or Nepal. I try to respond to every message.
              </p>

              <a
                href="mailto:pandeyasameer4@gmail.com"
                className="block text-base font-medium text-foreground hover:opacity-60 transition-opacity mb-8 prose-link"
              >
                pandeyasameer4@gmail.com
              </a>

              <div className="flex flex-wrap gap-5">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    aria-label={label}
                  >
                    <Icon size={15} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={submit} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm glow-input transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm glow-input transition-all"
              />
              <textarea
                placeholder="Message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm glow-input transition-all resize-none"
              />
              <button
                type="submit"
                disabled={sent}
                className="btn-solid w-full justify-center disabled:opacity-50"
              >
                {sent ? "Sent!" : <><Send size={13} /> Send message</>}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
