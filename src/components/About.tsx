import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 section-gradient" />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Getting to know <span className="glow-text">me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">6th semester Computer Science Engineering</span> student 
              with a strong passion for building technology that matters. My interests span across 
              <span className="text-primary"> AI, Machine Learning</span>, and 
              <span className="text-primary"> Full Stack Development</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I'm building <span className="text-foreground font-medium">AgroCare AI</span> — an AI-powered 
              agriculture disease detection system that helps farmers identify and treat crop diseases early, 
              potentially saving millions in crop losses.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in solving real-world problems with elegant, scalable technology. 
              Every line of code I write is aimed at creating meaningful impact.
            </p>
          </motion.div>

          {/* Geometric abstract pattern */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Abstract geometric shapes */}
              <div className="absolute inset-0 rounded-2xl border border-primary/20 rotate-6 animate-float" />
              <div className="absolute inset-4 rounded-2xl border border-secondary/20 -rotate-3" style={{ animationDelay: "1s" }} />
              <div className="absolute inset-8 rounded-2xl glass-card flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="text-5xl font-display font-bold glow-text">CS</div>
                  <div className="text-xs text-muted-foreground tracking-widest uppercase">Engineering</div>
                  <div className="flex gap-2 justify-center mt-4">
                    {["AI", "ML", "Web"].map((tag) => (
                      <span key={tag} className="tech-tag text-[10px]">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating dots */}
              <div className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-primary animate-pulse_glow" />
              <div className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-secondary animate-pulse_glow" style={{ animationDelay: "1s" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
