import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/sameer-profile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-pulse_glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-[100px] animate-pulse_glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-medium tracking-widest uppercase mb-6"
            >
              Welcome to my portfolio
            </motion.p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="glow-text">Sameer Pandeya</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground font-semibold mb-2">
              SAP STAR Scholar &middot; M.Tech @ BITS Pilani
            </p>
            <p className="text-base sm:text-lg text-muted-foreground font-light mb-10 max-w-2xl">
              AI &amp; Full Stack Developer — Building Intelligent, Scalable Solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                View Projects
                <ArrowDown size={16} />
              </button>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            <div className="flex items-center gap-5 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/sameer-18sp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sameer-sp18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-[3px] bg-gradient-to-br from-primary via-secondary to-primary animate-float">
                <div className="w-full h-full rounded-full overflow-hidden bg-card group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                  <img
                    src={profilePhoto}
                    alt="Sameer Pandeya"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-primary animate-pulse_glow" />
              <div
                className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-secondary animate-pulse_glow"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
