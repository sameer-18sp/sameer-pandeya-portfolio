import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, Instagram, ArrowUpRight } from "lucide-react";

const platforms = [
  {
    icon: Youtube,
    name: "Wandering Nepali",
    handle: "YouTube Channel",
    desc: "Treks, trails, and travel stories across Nepal and South Asia. The kind of places that don't show up in travel guides.",
    href: "https://www.youtube.com/@WanderingNepali",
    cta: "Watch on YouTube",
    primary: true,
  },
  {
    icon: Instagram,
    name: "@sameerpandeya_sp1",
    handle: "Instagram",
    desc: "Travel photos, short clips, and behind-the-scenes. A window into life between commits.",
    href: "https://www.instagram.com/sameerpandeya_sp1",
    cta: "Follow on Instagram",
    primary: false,
  },
];

const Travel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="travel" className="py-20 border-t border-border" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <p className="section-label">Travel</p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Left: Story */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Life beyond the keyboard.
              </h2>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not pushing commits, you'll find me somewhere in the Himalayas
                  with a camera. I document treks, trails, and travel stories across Nepal
                  and South Asia — the kind of places that don't show up in travel guides.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The channel is called{" "}
                  <a
                    href="https://www.youtube.com/@WanderingNepali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prose-link font-medium"
                  >
                    Wandering Nepali
                  </a>. It started as a way to remember where I'd been, and turned into
                  something people actually watch. Mountains reset me. Trekking taught me
                  patience that no code review ever could.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you love Nepal, the outdoors, or just want to see someone's life
                  outside their IDE — come along.
                </p>
              </div>
            </div>

            {/* Right: Platform cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="space-y-4"
            >
              {platforms.map((p) => (
                <div key={p.name} className="card-hover p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <p.icon size={18} className="text-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.handle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70 ${p.primary ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {p.cta}
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Travel;
