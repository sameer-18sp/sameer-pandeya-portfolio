import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send, Instagram, Youtube } from "lucide-react";

const socialLinks = [
  {
    href: "mailto:pandeyasameer4@gmail.com",
    icon: Mail,
    label: "pandeyasameer4@gmail.com",
    hoverColor: "group-hover:text-red-500",
  },
  {
    href: "https://www.linkedin.com/in/sameer-sp18",
    icon: Linkedin,
    label: "linkedin.com/in/sameer-sp18",
    hoverColor: "group-hover:text-blue-500",
  },
  {
    href: "https://github.com/sameer-18sp",
    icon: Github,
    label: "github.com/sameer-18sp",
    hoverColor: "group-hover:text-foreground",
  },
  {
    href: "https://www.instagram.com/sameerpandeya_sp1",
    icon: Instagram,
    label: "@sameerpandeya_sp1",
    hoverColor: "group-hover:text-pink-500",
  },
  {
    href: "https://www.youtube.com/@WanderingNepali",
    icon: Youtube,
    label: "Wandering Nepali",
    hoverColor: "group-hover:text-red-600",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 section-gradient" />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Let's <span className="glow-text">connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            Open to collaborations, opportunities, and interesting conversations about tech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className={`flex items-center gap-3 text-muted-foreground transition-colors group ${link.hoverColor}`}
              >
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-primary/30 transition-all flex-shrink-0">
                  <link.icon size={18} />
                </div>
                <span className="text-sm">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm glow-input transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm glow-input transition-all duration-300"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm glow-input transition-all duration-300 resize-none"
            />
            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 w-full justify-center disabled:opacity-70"
            >
              {submitted ? "Message Sent!" : <><Send size={16} /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
