import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "AgroCare AI",
    description:
      "An AI system that detects crop diseases from leaf photos in real-time using Convolutional Neural Networks. Farmers upload an image and get an instant diagnosis and treatment plan — making agricultural expertise accessible to anyone with a phone.",
    stack: ["Python", "TensorFlow", "CNN", "React.js", "Node.js", "MongoDB"],
    live: "https://agro-care-ai-final.vercel.app",
    github: "https://github.com/sameer-18sp",
    featured: true,
  },
  {
    name: "Shangri La Edu Park",
    description:
      "Professional consultancy website for an educational services company. Clean, modern interface built with React and deployed on Vercel.",
    stack: ["React.js", "Tailwind CSS", "Vercel"],
    live: "https://shangrila-launchpad.vercel.app",
    github: null,
    featured: false,
  },
];

const FeaturedProject = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="py-20 border-t border-border" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <p className="section-label">Projects</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">Things I've built</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="card-hover p-6 flex flex-col group"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    {p.featured && (
                      <span className="w-2 h-2 rounded-full bg-foreground flex-shrink-0" />
                    )}
                    <h3 className="font-semibold text-foreground text-lg">{p.name}</h3>
                    {p.featured && (
                      <span className="tag text-[10px] px-1.5 py-0">Featured</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://github.com/sameer-18sp"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link text-sm"
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
