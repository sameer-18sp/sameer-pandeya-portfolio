import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Instagram, Youtube, ArrowUpRight, Send } from "lucide-react";

const socials = [
  { href: "https://www.linkedin.com/in/sameer-sp18", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/sameer-18sp", icon: Github, label: "GitHub" },
  { href: "https://www.instagram.com/sameerpandeya_sp1", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@WanderingNepali", icon: Youtube, label: "YouTube" },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 3000);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-eyebrow">
            <span className="font-mono text-primary">05</span> Contact
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Let's Work Together
          </h2>
        </motion.div>

        {/* Large email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-muted-foreground text-sm mb-3">Drop me a line</p>
          <a
            href="mailto:pandeyasameer4@gmail.com"
            className="inline-flex items-center gap-3 font-display font-bold text-foreground hover:text-primary transition-colors group"
            style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
          >
            pandeyasameer4@gmail.com
            <ArrowUpRight
              size={28}
              className="opacity-40 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
            />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — Socials + info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-muted-foreground text-sm mb-6 max-w-sm leading-relaxed">
              Open to collaborations, full-time opportunities, freelance projects, and interesting
              conversations about tech, AI, or travel.
            </p>

            <div className="flex items-center gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm glow-input transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm glow-input transition-all"
              />
            </div>
            <textarea
              placeholder="Tell me about your project or idea..."
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm glow-input transition-all resize-none"
            />
            <button
              type="submit"
              disabled={sent}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {sent ? "Message Sent!" : <><Send size={14} /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
