import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    num: "01",
    role: "STAR Scholar",
    org: "SAP Labs India",
    period: "2025 – Present",
    badge: "Full-time",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
    description:
      "Selected as a STAR Scholar at SAP Labs — one of the most competitive graduate programs. Combining real-world enterprise software development with academic mentorship, working on cutting-edge SAP technologies and enterprise-grade systems.",
    tags: ["Enterprise Software", "SAP Technologies", "Software Engineering", "Agile"],
  },
  {
    num: "02",
    role: "M.Tech, Software Engineering",
    org: "BITS Pilani",
    period: "2025 – Present",
    badge: "Parallel Program",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/20",
    description:
      "Pursuing a Master of Technology in Software Engineering from one of India's most prestigious institutes, alongside my full-time role at SAP. Deepening expertise in software architecture, distributed systems, and advanced algorithms.",
    tags: ["Software Engineering", "System Design", "Distributed Systems", "BITS Pilani"],
  },
  {
    num: "03",
    role: "B.E., Computer Science Engineering",
    org: "CMR Institute of Technology, Bengaluru",
    period: "2020 – 2024",
    badge: "CGPA 9.001 / 10",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
    description:
      "Graduated First Class with Distinction from CMR Institute of Technology under Visvesvaraya Technological University (VTU), Bengaluru. Built a strong foundation across AI/ML, full-stack development, and data structures. Capstone: AgroCare AI.",
    tags: ["VTU", "CGPA 9.001", "First Class Distinction", "AI & ML", "Full Stack"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container mx-auto px-6" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-eyebrow">
            <span className="font-mono text-primary">02</span> Experience
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Education &amp; Career
          </h2>
        </motion.div>

        <div className="max-w-3xl space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="border-t border-border last:border-b"
            >
              {/* Row header — always visible, clickable */}
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-start gap-6 py-7 text-left group"
              >
                {/* Number */}
                <span className="font-mono text-xs text-muted-foreground mt-1 flex-shrink-0 w-6">
                  {exp.num}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded border ${exp.badgeColor}`}>
                      {exp.badge}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary">{exp.org}</p>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-sm text-muted-foreground hidden sm:block">{exp.period}</span>
                  <ChevronDown
                    size={16}
                    className={`text-muted-foreground transition-transform duration-300 ${
                      expanded === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Expandable detail */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  expanded === i ? "max-h-96 pb-7" : "max-h-0"
                }`}
              >
                <div className="pl-12 pr-4">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
