// RecognitionMarquee.jsx
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Images
import cert1 from "../assets/recognition/cert1.png";
import surya from "../assets/recognition/surya.png";
import lidt from "../assets/recognition/lidt.png";
import tata from "../assets/recognition/tata.png";
import isroc from "../assets/recognition/isroc.png";
import wind from "../assets/recognition/wind.png";
import spin from "../assets/recognition/spin.png";

gsap.registerPlugin(ScrollTrigger);

const recognitions = [
  { src: cert1, label: "AS 9100D and ISO 9001:2015 Certificate" },
  { src: surya, label: "Optica Sponsored Surya Tilak Project" },
  { src: lidt, label: "LIDT Certificate" },
  { src: tata, label: "Appreciation Award from TATA" },
  { src: isroc, label: "Appreciation Award from ISRO" },
  { src: wind, label: "Appreciation Award for the Hypersonic Wind Tunnel " },
  { src: spin, label: "Defence Technology Spin-Off Award" },
];

export default function RecognitionMarquee() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      // show immediately for reduced-motion users
      const el = sectionRef.current;
      if (el) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
      return;
    }

    const ctx = gsap.context(() => {
      const el = sectionRef.current;
      if (!el) return;

      // Timeline for the whole section + items
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",          // same feel as your other sections
          toggleActions: "play none none none",
        },
      });

      // Section fade-up
      tl.from(el, { autoAlpha: 0, y: 40, duration: 0.7 });

      // Stagger the item wrappers
      const items = el.querySelectorAll("[data-marquee-item]");
      if (items?.length) {
        tl.from(
          items,
          { autoAlpha: 0, y: 16, duration: 0.5, stagger: 0.08 },
          "-=0.2"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-transparent py-20 will-change-transform">
      <h2
        className="text-center text-[30px] font-bold text-[#EF4343] mb-8"
        style={{ fontFamily: "Clash" }}
      >
        Contribution & Recognitions
      </h2>

      <Marquee
        gradient={false}
        speed={50}
        direction="right"
        pauseOnHover
        className="overflow-visible"
      >
        {recognitions.map((item, index) => (
          <div
            key={index}
            data-marquee-item
            className="flex flex-col items-center justify-center w-[400px] mx-6"
          >
            <div className="rounded-sm overflow-hidden h-[auto]  flex items-center justify-center">
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="object-cover max-h-full "
              />
            </div>
            <p
              className="mt-4 text-center text-[#002D7B] font-semibold text-[16px] leading-"
              style={{ fontFamily: "Clash" }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
