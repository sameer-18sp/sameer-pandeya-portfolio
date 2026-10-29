import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Mail, Twitter } from "lucide-react";
import profilePhoto from "@/assets/sameer-profile.jpg";

const socials = [
  { href: "https://github.com/sameer-18sp", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/sameer-sp18", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.youtube.com/@WanderingNepali", icon: Youtube, label: "YouTube" },
  { href: "mailto:pandeyasameer4@gmail.com", icon: Mail, label: "Email" },
];

const Hero = () => (
  <section id="hero" className="pt-32 pb-16">
    <div className="max-w-2xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Avatar + name row */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={profilePhoto}
            alt="Sameer Pandeya"
            className="w-14 h-14 rounded-full object-cover border border-border"
          />
          <div>
            <h1 className="text-lg font-semibold text-foreground leading-tight">Sameer Pandeya</h1>
            <p className="text-sm text-muted-foreground">Software Engineer &amp; Traveler</p>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-4 mb-8">
          <p className="text-foreground/80 leading-relaxed">
            I build AI-powered systems and full-stack applications. Currently a STAR Scholar at{" "}
            <span className="text-foreground font-medium">SAP Labs India</span>, pursuing M.Tech
            at <span className="text-foreground font-medium">BITS Pilani</span>, and documenting
            Himalayan adventures on{" "}
            <a
              href="https://www.youtube.com/@WanderingNepali"
              target="_blank"
              rel="noopener noreferrer"
              className="prose-link"
            >
              Wandering Nepali
            </a>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Graduated B.E. Computer Science from CMR Institute of Technology, Bengaluru
            (VTU). I care about clean code, meaningful products, and the stories between
            the lines of a commit history.
          </p>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap gap-4">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="icon-link"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
