import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award, Youtube, Instagram } from "lucide-react";

const stats = [
  { value: "9.001", label: "CGPA", sub: "BE CSE" },
  { value: "SAP", label: "STAR Scholar", sub: "Currently" },
  { value: "BITS", label: "M.Tech SE", sub: "Pilani" },
];

const highlights = [
  {
    icon: Briefcase,
    title: "SAP STAR Scholar",
    sub: "Currently at SAP Labs India",
    color: "text-blue-500",
    bg: "bg-blue-500/8",
  },
  {
    icon: GraduationCap,
    title: "M.Tech, Software Engineering",
    sub: "BITS Pilani · In Progress",
    color: "text-violet-500",
    bg: "bg-violet-500/8",
  },
  {
    icon: Award,
    title: "BE CSE · CGPA 9.001 / 10",
    sub: "First Class with Distinction",
    color: "text-emerald-500",
    bg: "bg-emerald-500/8",
  },
];

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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-semibold">Computer Science Engineer</span> who
              graduated with a CGPA of{" "}
              <span className="text-primary font-semibold">9.001 / 10</span> and a deep passion for
              building technology that creates real impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've joined <span className="text-foreground font-semibold">SAP</span> as a{" "}
              <span className="text-primary font-semibold">STAR Scholar</span> — a highly competitive
              program that combines hands-on enterprise software development with academic mentorship.
              Simultaneously, I'm pursuing my{" "}
              <span className="text-foreground font-semibold">M.Tech in Software Engineering</span> from{" "}
              <span className="text-primary font-semibold">BITS Pilani</span>, one of India's most
              prestigious institutes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My interests span{" "}
              <span className="text-primary">AI & Machine Learning</span>,{" "}
              <span className="text-primary">Full Stack Development</span>, and{" "}
              <span className="text-primary">enterprise-grade software systems</span>. I write purposeful
              code that solves real problems at scale.
            </p>

            {/* Hobby card */}
            <div className="glass-card p-5 mt-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base">✈️</span>
                <h4 className="font-display font-semibold text-foreground text-sm">Beyond the Code</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                I'm also a travel vlogger! I run a YouTube channel called{" "}
                <span className="text-foreground font-medium">Wandering Nepali</span> where I share
                adventures and stories from Nepal and around the world.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.youtube.com/@WanderingNepali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20 transition-colors"
                >
                  <Youtube size={12} /> Wandering Nepali
                </a>
                <a
                  href="https://www.instagram.com/sameerpandeya_sp1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-pink-500/10 text-pink-500 border border-pink-500/20 hover:bg-pink-500/20 transition-colors"
                >
                  <Instagram size={12} /> @sameerpandeya_sp1
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <div className="text-2xl font-display font-bold glow-text">{stat.value}</div>
                  <div className="text-xs font-semibold text-foreground mt-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.sub}</div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.65 + i * 0.12 }}
                  className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.bg} ${item.color}`}
                  >
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
