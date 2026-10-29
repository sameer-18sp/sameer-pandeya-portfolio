import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const now = [
  "STAR Scholar at SAP Labs India — building enterprise-scale software systems",
  "Pursuing M.Tech, Software Engineering at BITS Pilani (parallel program)",
  "Exploring AI applications in real-world agriculture and beyond",
  "Vlogging treks and travels across Nepal — Wandering Nepali on YouTube",
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-14 border-t border-border" ref={ref}>
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          <p className="section-title">Currently</p>
          <ul className="space-y-3">
            {now.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
              >
                <span className="text-foreground/30 mt-0.5 flex-shrink-0">—</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
