import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const items = [
  {
    role: "STAR Scholar",
    org: "SAP Labs India",
    period: "2025 – Present",
    type: "Full-time",
    description:
      "Working in the STAR Scholar program — a competitive graduate track combining real enterprise software development with structured mentorship. Building and contributing to SAP's enterprise technology stack.",
    tags: ["Enterprise Software", "SAP Technologies", "Full-time"],
  },
  {
    role: "M.Tech, Software Engineering",
    org: "BITS Pilani",
    period: "2025 – Present",
    type: "Parallel",
    description:
      "Pursuing a master's degree alongside work. Deepening expertise in software architecture, distributed systems, and algorithms at one of India's most respected institutions.",
    tags: ["Software Architecture", "Distributed Systems", "BITS Pilani"],
  },
  {
    role: "B.E., Computer Science Engineering",
    org: "CMR Institute of Technology, Bengaluru · VTU",
    period: "2020 – 2024",
    type: "CGPA 9.001",
    description:
      "Graduated First Class with Distinction. Built a strong foundation in algorithms, AI/ML, and full-stack development. Final project: AgroCare AI — an AI-powered crop disease detection system.",
    tags: ["AI & ML", "Full Stack", "First Class Distinction"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="work" className="py-14 border-t border-border" ref={ref}>
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          <p className="section-title">Work &amp; Education</p>

          <div>
            {items.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border-b border-border last:border-b-0"
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full py-5 flex items-start gap-4 text-left group"
                >
                  {/* Period */}
                  <div className="w-28 flex-shrink-0 pt-0.5">
                    <p className="text-xs text-muted-foreground">{item.period}</p>
                    <p className="text-xs text-muted-foreground/60 mt-0.5">{item.type}</p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground group-hover:opacity-70 transition-opacity">
                      {item.role}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.org}</p>
                  </div>

                  {/* Expand indicator */}
                  <span className="text-muted-foreground/40 text-xs mt-0.5 flex-shrink-0 select-none">
                    {expanded === i ? "−" : "+"}
                  </span>
                </button>

                {/* Expanded detail */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expanded === i ? "max-h-48 pb-5" : "max-h-0"
                  }`}
                >
                  <div className="pl-32">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
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
