import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import profilePhoto from "@/assets/sameer-profile.jpg";

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: "9.001", label: "CGPA" },
  { value: "SAP", label: "STAR Scholar" },
  { value: "BITS", label: "M.Tech SE" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
    >
      {/* Subtle background dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* Left — Text */}
          <motion.div variants={stagger} initial="initial" animate="animate">

            {/* Location badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-1.5 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-muted text-xs font-medium text-muted-foreground">
                <MapPin size={11} /> Bengaluru, India
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold leading-[0.95] tracking-tight mb-6 text-foreground"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
              Sameer<br />
              <span className="gradient-text">Pandeya.</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-muted-foreground font-medium mb-2"
            >
              SAP STAR Scholar · M.Tech @ BITS Pilani
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-base text-muted-foreground mb-10 max-w-lg"
            >
              AI &amp; Full Stack Developer — building intelligent, enterprise-grade software.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                View Projects <ArrowRight size={15} />
              </button>
              <a href="#" className="btn-outline">
                <Download size={15} /> Resume
              </a>
              <a
                href="https://github.com/sameer-18sp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/sameer-sp18"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 pt-8 border-t border-border"
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  {i > 0 && <div className="stat-divider" />}
                  <div>
                    <p className="font-display font-bold text-xl text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Rectangular photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Accent block behind photo */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-primary/15" />

              {/* Photo frame */}
              <div className="relative w-72 h-[420px] rounded-2xl overflow-hidden border border-border shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Sameer Pandeya"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Overlay card at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <p className="text-white font-display font-semibold text-sm">Sameer Pandeya</p>
                  <p className="text-white/70 text-xs mt-0.5">AI &amp; Full Stack Developer</p>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-3 -right-3 bg-card border border-border rounded-xl px-3 py-2 shadow-lg">
                <p className="text-xs font-display font-bold text-primary">SAP</p>
                <p className="text-[10px] text-muted-foreground">STAR Scholar</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
