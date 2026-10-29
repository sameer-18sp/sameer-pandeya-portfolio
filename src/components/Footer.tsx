import { Github, Linkedin, Youtube, Instagram, Mail } from "lucide-react";

const socials = [
  { href: "mailto:pandeyasameer4@gmail.com", icon: Mail, label: "Email" },
  { href: "https://github.com/sameer-18sp", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/sameer-sp18", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/sameerpandeya_sp1", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@WanderingNepali", icon: Youtube, label: "YouTube" },
];

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sameer Pandeya
      </p>
      <div className="flex items-center gap-5">
        {socials.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
