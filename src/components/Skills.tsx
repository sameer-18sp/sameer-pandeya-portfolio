import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Python", "REST APIs"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "Keras", "CNN", "Computer Vision", "Scikit-learn", "OpenCV"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Vercel", "Linux", "Postman", "VS Code"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-eyebrow">
            <span className="font-mono text-primary">03</span> Skills
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Category header with top accent */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-primary/30" />
                <h3 className="text-xs font-mono font-semibold text-primary tracking-widest uppercase">
                  {group.title}
                </h3>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
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
