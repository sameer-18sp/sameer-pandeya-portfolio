import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "AgroCare AI",
    description:
      "An AI system that detects crop diseases from leaf photos in real-time using Convolutional Neural Networks. Farmers upload an image, get an instant diagnosis and treatment plan. Built to make agricultural expertise accessible to anyone with a phone.",
    stack: "Python · TensorFlow · CNN · React.js · Node.js · MongoDB",
    live: "https://agro-care-ai-final.vercel.app",
    github: "https://github.com/sameer-18sp",
    featured: true,
  },
  {
    name: "Shangri La Edu Park",
    description:
      "Professional consultancy website for an educational services company. Clean, modern interface built with React and deployed on Vercel.",
    stack: "React.js · Tailwind CSS · Vercel",
    live: "https://shangrila-launchpad.vercel.app",
    github: "#",
    featured: false,
  },
];

const FeaturedProject = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="py-14 border-t border-border" ref={ref}>
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          <p className="section-title">Projects</p>

          <div className="space-y-px">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group py-5 border-b border-border last:border-b-0"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-foreground">{p.name}</h3>
                    {p.featured && (
                      <span className="tag text-[10px] px-1.5 py-0">Featured</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {p.github !== "#" && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={14} />
                      </a>
                    )}
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Live"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  {p.description}
                </p>
                <p className="text-xs text-muted-foreground/60">{p.stack}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="https://github.com/sameer-18sp"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link text-xs"
            >
              More on GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
