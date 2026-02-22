import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Sparkles } from "lucide-react";

const FeaturedProject = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = ["Python", "CNN", "TensorFlow", "React.js", "Node.js", "MongoDB"];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 featured-gradient" />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-primary" />
            <p className="text-primary text-sm font-medium tracking-widest uppercase">Featured Project</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            <span className="glow-text">AgroCare AI</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 glow-border"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-foreground">
                AI-Based Agriculture Disease Detection & Control System
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AgroCare AI leverages Convolutional Neural Networks to analyze images of crop leaves 
                and accurately detect diseases in real-time. Farmers can simply upload a photo of an 
                affected plant and receive instant diagnosis along with recommended treatment options.
              </p>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Problem it Solves</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Crop diseases cause billions in agricultural losses annually. Early detection is critical 
                  but most farmers lack access to expert diagnosis. AgroCare AI democratizes this knowledge.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Future Scalability</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Plans include drone integration for large-scale field scanning, multi-language support, 
                  and expansion to livestock disease detection.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {techStack.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 self-start">
                View Project <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
