import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const nowItems = [
  {
    dot: "bg-blue-500",
    title: "SAP Labs India",
    sub: "STAR Scholar Program",
    desc: "Building enterprise-scale software systems in a competitive graduate track with structured mentorship.",
  },
  {
    dot: "bg-violet-500",
    title: "BITS Pilani",
    sub: "M.Tech, Software Engineering",
    desc: "Deepening expertise in software architecture, distributed systems, and algorithms.",
  },
  {
    dot: "bg-amber-500",
    title: "AI Side Projects",
    sub: "AgroCare AI & more",
    desc: "Exploring practical AI applications — from computer vision in agriculture to full-stack web tools.",
  },
  {
    dot: "bg-emerald-500",
    title: "Wandering Nepali",
    sub: "YouTube & Instagram",
    desc: "Documenting Himalayan treks and travel stories across Nepal and South Asia.",
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-20 border-t border-border" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <p className="section-label">Currently</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">What I'm up to</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {nowItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-hover p-6"
              >
                <div className="flex items-start gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${item.dot} mt-1.5 flex-shrink-0`} />
                  <div>
                    <p className="font-semibold text-foreground mb-0.5">{item.title}</p>
                    <p className="text-xs text-muted-foreground mb-3 font-medium">{item.sub}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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

export default About;
