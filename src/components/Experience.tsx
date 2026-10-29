import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    role: "STAR Scholar",
    org: "SAP Labs India",
    period: "2026 – Present",
    type: "Full-time",
    description:
      "Working in the STAR Scholar program — a competitive graduate track combining real enterprise software development with structured mentorship. Building and contributing to SAP's enterprise technology stack.",
    tags: ["Enterprise Software", "SAP Technologies", "Full-time"],
    dot: "bg-blue-500",
  },
  {
    role: "M.Tech, Software Engineering",
    org: "BITS Pilani",
    period: "2026 – Present",
    type: "Parallel Program",
    description:
      "Pursuing a master's degree alongside full-time work. Deepening expertise in software architecture, distributed systems, and algorithms at one of India's most respected institutions.",
    tags: ["Software Architecture", "Distributed Systems", "BITS Pilani"],
    dot: "bg-violet-500",
  },
  {
    role: "B.E., Computer Science Engineering",
    org: "CMR Institute of Technology, Bengaluru · VTU",
    period: "2022 – 2026",
    type: "CGPA 9.01",
    description:
      "Graduated First Class with Distinction. Built a strong foundation in algorithms, AI/ML, and full-stack development. Final project: AgroCare AI — an AI-powered crop disease detection system.",
    tags: ["AI & ML", "Full Stack", "First Class Distinction"],
    dot: "bg-emerald-500",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" className="py-20 border-t border-border" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <p className="section-label">Experience</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">Work &amp; Education</h2>

          <div className="space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-hover p-6"
              >
                <div className="flex items-start gap-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${item.dot} mt-1.5 flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <p className="font-semibold text-foreground">{item.role}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{item.org}</p>
                      </div>
                      <div className="sm:text-right flex-shrink-0">
                        <p className="text-xs text-muted-foreground">{item.period}</p>
                        <p className="text-xs text-muted-foreground/60 mt-0.5">{item.type}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
