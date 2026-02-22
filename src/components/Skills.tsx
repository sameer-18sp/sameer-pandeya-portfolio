import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind", "JavaScript"],
    icon: "🎨",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
    icon: "⚙️",
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
    icon: "🗄️",
  },
  {
    title: "AI & ML",
    skills: ["Python", "Machine Learning Basics", "CNN (Computer Vision)"],
    icon: "🧠",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            My <span className="glow-text">tech stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="text-lg font-display font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tech-tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
