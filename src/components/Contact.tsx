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
    <section id="contact" className="py-14 border-t border-border" ref={ref}>
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          <p className="section-title">Contact</p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left */}
            <div>
              <h2 className="text-base font-semibold text-foreground mb-2">Get in touch</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Open to new opportunities, collaborations, freelance work, or just a good
                conversation about tech, AI, or Nepal.
              </p>

              <a
                href="mailto:pandeyasameer4@gmail.com"
                className="text-sm font-medium text-foreground hover:opacity-60 transition-opacity block mb-6 prose-link"
              >
                pandeyasameer4@gmail.com
              </a>

              <div className="flex flex-wrap gap-4">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    aria-label={label}
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <form onSubmit={submit} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2.5 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm glow-input transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2.5 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm glow-input transition-all"
              />
              <textarea
                placeholder="Message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3 py-2.5 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm glow-input transition-all resize-none"
              />
              <button
                type="submit"
                disabled={sent}
                className="btn-solid w-full justify-center disabled:opacity-50"
              >
                {sent ? "Sent!" : <><Send size={13} /> Send</>}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
