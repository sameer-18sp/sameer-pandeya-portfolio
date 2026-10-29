import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const techStack = [
  "Python", "TensorFlow", "Keras", "CNN",
  "Computer Vision", "React.js", "Node.js", "MongoDB",
];

const FeaturedProject = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-eyebrow">
            <span className="font-mono text-primary">04</span> Projects
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Featured Work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="card overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary" />

          <div className="grid md:grid-cols-[1fr_1.3fr]">
            {/* Left — Visual accent panel */}
            <div className="relative bg-muted border-r border-border flex items-center justify-center p-12 min-h-[280px]">
              {/* Large faint text as background graphic */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <p
                  className="font-display font-black text-foreground/[0.04] select-none leading-none text-center"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
                >
                  AgroCare<br />AI
                </p>
              </div>
              {/* Centered badge */}
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <p className="font-display font-bold text-foreground text-lg">AgroCare AI</p>
                <p className="text-muted-foreground text-xs mt-1">Agriculture · AI · Computer Vision</p>
              </div>
            </div>

            {/* Right — Details */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-8">
              <div className="space-y-4">
                <div>
                  <span className="tag-accent mb-3 inline-block">Featured Project</span>
                  <h3 className="font-display font-bold text-xl text-foreground leading-snug">
                    AI-Based Agriculture Disease Detection &amp; Control System
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  AgroCare AI uses Convolutional Neural Networks to analyze crop leaf images and
                  detect diseases in real-time. Farmers upload a photo and get instant diagnosis
                  with actionable treatment recommendations — democratizing agricultural expertise.
                </p>

                <div>
                  <p className="text-xs font-semibold text-foreground mb-2">Impact</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Crop diseases cause billions in annual losses. Early, accessible diagnosis is
                    critical. Roadmap: drone integration, multi-language support, livestock detection.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-foreground mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {techStack.map((t) => (
                    <span key={t} className="tag-accent">{t}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://agro-care-ai-final.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a
                    href="https://github.com/sameer-18sp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <Github size={14} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* More projects teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/sameer-18sp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            See more on GitHub <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
