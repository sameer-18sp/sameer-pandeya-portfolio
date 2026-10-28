import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "STAR Scholar",
    org: "SAP Labs India",
    period: "2025 – Present",
    badge: "Full-time",
    description:
      "Selected as a STAR Scholar at SAP Labs — a highly competitive program combining real-world enterprise software development with academic mentorship. Working on cutting-edge SAP technologies and building enterprise-grade software systems.",
    tags: ["Enterprise Software", "SAP Technologies", "Software Engineering"],
    gradientFrom: "from-blue-500/10",
    gradientTo: "to-blue-600/5",
    dot: "bg-blue-500",
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
  },
  {
    icon: GraduationCap,
    role: "M.Tech, Software Engineering",
    org: "BITS Pilani",
    period: "2025 – Present",
    badge: "Parallel Program",
    description:
      "Pursuing a Master of Technology in Software Engineering from BITS Pilani — one of India's most prestigious institutes — alongside my full-time role at SAP. Deepening expertise in software design, distributed systems, and advanced CS fundamentals.",
    tags: ["Software Engineering", "System Design", "BITS Pilani"],
    gradientFrom: "from-violet-500/10",
    gradientTo: "to-violet-600/5",
    dot: "bg-violet-500",
    badgeColor: "bg-violet-500/10 text-violet-600 border-violet-500/20 dark:text-violet-400",
  },
  {
    icon: Award,
    role: "B.E., Computer Science Engineering",
    org: "Pokhara University",
    period: "2020 – 2024",
    badge: "Graduated · CGPA 9.001",
    description:
      "Completed Bachelor of Engineering in Computer Science with a CGPA of 9.001 / 10. Built a strong foundation in algorithms, AI/ML, full-stack development, and software systems. Graduated with First Class with Distinction.",
    tags: ["CGPA 9.001 / 10", "AI & ML", "Full Stack Dev", "First Class"],
    gradientFrom: "from-emerald-500/10",
    gradientTo: "to-emerald-600/5",
    dot: "bg-emerald-500",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 section-gradient" />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Journey</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Education &amp; <span className="glow-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Vertical timeline line */}
          <div className="absolute left-[18px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative sm:pl-14"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2.5 top-7 w-4 h-4 rounded-full ${exp.dot} border-[3px] border-background shadow-md hidden sm:block`}
                />

                <div
                  className={`glass-card-hover p-6 bg-gradient-to-br ${exp.gradientFrom} ${exp.gradientTo}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-display font-bold text-foreground leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold text-sm mt-0.5">{exp.org}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span className="text-xs text-muted-foreground font-medium">{exp.period}</span>
                      <span
                        className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium border ${exp.badgeColor}`}
                      >
                        {exp.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-tag text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
