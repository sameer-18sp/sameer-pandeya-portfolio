import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, Instagram } from "lucide-react";

const Travel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="travel" className="py-14 border-t border-border" ref={ref}>
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          <p className="section-title">Wandering Nepali</p>

          <div className="space-y-4">
            <h2 className="text-base font-semibold text-foreground">
              Life beyond the keyboard.
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              When I'm not pushing commits, you'll find me somewhere in the Himalayas with a camera.
              I document treks, trails, and travel stories across Nepal and South Asia — the kind of
              places that don't show up in travel guides.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              The channel is called <span className="text-foreground font-medium">Wandering Nepali</span>.
              It started as a way to remember where I'd been, and turned into something people
              actually watch. Mountains reset me. Trekking taught me patience that no code review
              ever could.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              I also share travel photos, short clips, and behind-the-scenes on Instagram.
              If you love Nepal, the outdoors, or just want to see someone's life outside
              their IDE — come along.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.youtube.com/@WanderingNepali"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs"
              >
                <Youtube size={13} />
                Watch on YouTube
              </a>
              <a
                href="https://www.instagram.com/sameerpandeya_sp1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs"
              >
                <Instagram size={13} />
                @sameerpandeya_sp1
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Travel;
