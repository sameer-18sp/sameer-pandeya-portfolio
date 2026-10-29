import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Mail, Instagram, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/sameer-profile.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const socials = [
  { href: "https://github.com/sameer-18sp", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/sameer-sp18", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.youtube.com/@WanderingNepali", icon: Youtube, label: "YouTube" },
  { href: "https://www.instagram.com/sameerpandeya_sp1", icon: Instagram, label: "Instagram" },
  { href: "mailto:pandeyasameer4@gmail.com", icon: Mail, label: "Email" },
];

const Hero = () => (
  <section id="hero" className="min-h-[90vh] flex items-center pt-20 pb-20">
    <div className="max-w-5xl mx-auto px-6 w-full">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 lg:gap-24">

        {/* Left: Content */}
        <motion.div
          className="flex-1 min-w-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className="text-sm text-muted-foreground mb-5 tracking-wider uppercase">
            Based in Bengaluru, India
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight text-foreground mb-5"
          >
            Sameer
            <br />
            Pandeya.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-7 font-medium">
            Software Engineer &amp; Travel Vlogger
          </motion.p>

          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed mb-9 max-w-lg">
            I build AI-powered systems and full-stack applications at{" "}
            <span className="text-foreground font-medium">SAP Labs India</span>, study at{" "}
            <span className="text-foreground font-medium">BITS Pilani</span>, and document
            Himalayan adventures on{" "}
            <a
              href="https://www.youtube.com/@WanderingNepali"
              target="_blank"
              rel="noopener noreferrer"
              className="prose-link font-medium"
            >
              Wandering Nepali
            </a>.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-solid"
            >
              See my work <ArrowRight size={14} />
            </button>
            <a href="mailto:pandeyasameer4@gmail.com" className="btn-outline">
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-5">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="icon-link"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          className="flex-shrink-0"
        >
          <div className="relative group">
            <img
              src={profilePhoto}
              alt="Sameer Pandeya"
              className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 object-cover object-top rounded-2xl border border-border transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 rounded-2xl bg-foreground/0 group-hover:bg-foreground/[0.02] transition-colors duration-300" />
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Hero;
