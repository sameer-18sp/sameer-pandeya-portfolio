const Footer = () => (
  <footer className="py-8 border-t border-border/30">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="glow-text font-semibold">Sameer Pandeya</span>. All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground">
        Built with React & Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;
