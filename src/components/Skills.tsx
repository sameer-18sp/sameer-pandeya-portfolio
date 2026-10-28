import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Brain, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "Express.js", "Python", "REST APIs"],
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "Keras", "CNN", "Computer Vision", "Scikit-learn"],
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "Linux", "Postman"],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card-hover p-6 group"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${cat.bg} ${cat.color} flex items-center justify-center mb-4`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-display font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
