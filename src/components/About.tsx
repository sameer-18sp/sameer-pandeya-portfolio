import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, Instagram } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } } : {},
  });

  return (
    <section id="about" className="py-28 relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container mx-auto px-6" ref={ref}>

        {/* Section header */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="section-eyebrow">
            <span className="font-mono text-primary">01</span> About
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Engineer. Scholar. Creator.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* Left — Large decorative statement + stat cards */}
          <motion.div {...fadeUp(0.1)}>
            <p className="font-display font-bold text-4xl md:text-5xl leading-tight text-foreground/10 select-none mb-12">
              Building<br />tomorrow's<br />tech,<br />today.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {[
                { val: "9.001", top: "CGPA", bot: "BE CSE" },
                { val: "SAP", top: "STAR", bot: "Scholar" },
                { val: "BITS", top: "M.Tech", bot: "Pilani" },
              ].map((s) => (
                <div key={s.val} className="card p-4 text-center">
                  <p className="font-display font-bold text-xl gradient-text">{s.val}</p>
                  <p className="text-xs font-semibold text-foreground mt-1">{s.top}</p>
                  <p className="text-xs text-muted-foreground">{s.bot}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Story */}
          <motion.div {...fadeUp(0.15)} className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              I'm a{" "}
              <span className="text-foreground font-semibold">Computer Science Engineer</span> who
              graduated with a CGPA of{" "}
              <span className="text-primary font-semibold">9.001 / 10</span> from{" "}
              <span className="text-foreground font-medium">CMR Institute of Technology, Bengaluru</span>{" "}
              (VTU), with a deep passion for building technology that creates real impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've joined <span className="text-foreground font-semibold">SAP Labs India</span> as a{" "}
              <span className="text-primary font-semibold">STAR Scholar</span> — a highly competitive
              program that combines hands-on enterprise software work with academic mentorship. At the
              same time, I'm pursuing my{" "}
              <span className="text-foreground font-semibold">M.Tech in Software Engineering</span> from{" "}
              <span className="text-primary font-semibold">BITS Pilani</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My core interests are{" "}
              <span className="text-primary">AI & Machine Learning</span>,{" "}
              <span className="text-primary">Full Stack Development</span>, and{" "}
              <span className="text-primary">enterprise-scale software systems</span>. I write
              purposeful code that solves real problems elegantly.
            </p>

            {/* Hobby card */}
            <div className="card p-5 mt-4">
              <p className="font-display font-semibold text-sm text-foreground mb-1">
                ✈️ &nbsp;Beyond the code
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                I run a travel vlog called{" "}
                <span className="text-foreground font-medium">Wandering Nepali</span> — sharing
                adventures from Nepal and across the world. Travel keeps me grounded.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.youtube.com/@WanderingNepali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-colors dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20"
                >
                  <Youtube size={12} /> Wandering Nepali
                </a>
                <a
                  href="https://www.instagram.com/sameerpandeya_sp1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-pink-50 text-pink-600 border border-pink-200 hover:bg-pink-100 transition-colors dark:bg-pink-500/10 dark:text-pink-400 dark:border-pink-500/20"
                >
                  <Instagram size={12} /> @sameerpandeya_sp1
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
