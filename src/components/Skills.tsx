import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const groups = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { label: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { label: "AI & ML", items: ["TensorFlow", "Keras", "CNN", "Computer Vision", "Scikit-learn"] },
  { label: "Database", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { label: "Tools", items: ["Git", "GitHub", "Vercel", "Linux", "Postman"] },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-20 border-t border-border" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <p className="section-label">Skills</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">Technologies</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {groups.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-hover p-5"
              >
                <p className="text-xs font-semibold text-foreground mb-3 tracking-wide uppercase">
                  {g.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
