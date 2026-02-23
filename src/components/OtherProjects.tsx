import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Shangri La Edu Park",
    description: "A professional consultancy website for Shangri La Edu Park, providing educational consulting services with a modern and clean interface.",
    stack: ["React.js", "Tailwind", "Vercel"],
    github: "#",
    live: "https://shangrila-launchpad.vercel.app",
  },
  {
    title: "BigBull Fitness Gym & Zumba",
    description: "A dynamic gym and fitness website for BigBull Fitness Gym and Zumba, showcasing services, schedules, and membership plans.",
    stack: ["React.js", "Tailwind", "JavaScript"],
    github: "#",
    live: "#",
  },
];

const OtherProjects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Other <span className="glow-text">work</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-tag text-[11px]">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
