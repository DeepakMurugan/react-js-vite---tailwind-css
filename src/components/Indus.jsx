// ProductPortfolioFade.jsx
import { useEffect, useMemo, useRef, useState, memo, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ====== IMPORT YOUR FILES ====== */
// BACKGROUNDS
import bgTurnkey   from "../assets/portfolio/turnkey/bg.png";
import bgAero      from "../assets/portfolio/aerospace/bg.png";
import bgLaser     from "../assets/portfolio/laser/bg.png";
import bgPrecision from "../assets/portfolio/precision/bg.png";
import bgAstro     from "../assets/portfolio/astro/bg.png";

// TURNKEY (4)
import tk1 from "../assets/portfolio/turnkey/1.png";
import tk2 from "../assets/portfolio/turnkey/2.png";
import tk3 from "../assets/portfolio/turnkey/3.png";
import tk4 from "../assets/portfolio/turnkey/4.png";

// AEROSPACE (5)
import a1 from "../assets/portfolio/aerospace/1.png";
import a2 from "../assets/portfolio/aerospace/2.png";
import a3 from "../assets/portfolio/aerospace/3.png";
import a4 from "../assets/portfolio/aerospace/4.png";
import a5 from "../assets/portfolio/aerospace/5.png";

// LASER (5)
import l1 from "../assets/portfolio/laser/1.png";
import l2 from "../assets/portfolio/laser/2.png";
import l3 from "../assets/portfolio/laser/3.png";
import l4 from "../assets/portfolio/laser/4.png";
import l5 from "../assets/portfolio/laser/5.png";

// PRECISION (9)
import p1 from "../assets/portfolio/precision/1.png";
import p2 from "../assets/portfolio/precision/2.png";
import p3 from "../assets/portfolio/precision/3.png";
import p4 from "../assets/portfolio/precision/4.png";
import p5 from "../assets/portfolio/precision/5.png";
import p6 from "../assets/portfolio/precision/6.png";
import p7 from "../assets/portfolio/precision/7.png";
import p8 from "../assets/portfolio/precision/8.png";
import p9 from "../assets/portfolio/precision/9.png";

// ASTRONOMICAL (4)
import as1 from "../assets/portfolio/astro/1.png";
import as2 from "../assets/portfolio/astro/2.png";
import as3 from "../assets/portfolio/astro/3.png";
import as4 from "../assets/portfolio/astro/4.png";

gsap.registerPlugin(ScrollTrigger);
/* ================================= */

const TILES = Object.freeze([
  {
    title: "Turnkey Projects",
    bg: bgTurnkey,
    bullets: ["Schlieren Systems", "LiDARS", "Missile Trackers", "Electro Optical Systems"],
    variants: [{ img: tk1, h: 0 }, { img: tk2, h: 1 }, { img: tk3, h: 2 }, { img: tk4, h: 3 }],
  },
  {
    title: "Aerospace Optics",
    bg: bgAero,
    bullets: [" EOTS & Domes", "Space optics", "Mirror Assemblies", "NAV cam lenses", "TIR Optics"],
    variants: [{ img: a1, h: 0 }, { img: a2, h: 1 }, { img: a3, h: 2 }, { img: a4, h: 3 }, { img: a5, h: 4 }],
  },
  {
    title: "High - Power Laser Optics",
    bg: bgLaser,
    bullets: ["High power laser BDOC", "AO BDOC", "Off-axis telescope for BDOC", " Laser Scan Mirror", "High LIDT Optics"],
    variants: [{ img: l1, h: 0 }, { img: l2, h: 1 }, { img: l3, h: 2 }, { img: l4, h: 3 }, { img: l5, h: 4 }],
  },
  {
    title: "Precision Optics",
    bg: bgPrecision,
    bullets: ["UV-VIS-IR Optics", "High Precision Prisms", "Cylindrical Lenses", "Large Optics" , "Sight windows" ,"ZNS Domes" ,"Mirrors" ,"Filters" ,"Optics Assemblies" ],
    variants: [{ img: p1, h: 0 }, { img: p2, h: 1 }, { img: p3, h: 2 }, { img: p4, h: 3 }, { img: p5, h: 4 }, { img: p6, h: 5 }, { img: p7, h: 6 }, { img: p8, h: 7 }, { img: p9, h: 8 }],
  },
  {
    title: "Astronomical Optics",
    bg: bgAstro,
    bullets: ["Telescope", " Optics for TMT", " NISP", " Mirrors for Tactics Telescope"],
    variants: [{ img: as1, h: 0 }, { img: as2, h: 1 }, { img: as3, h: 2 }, { img: as4, h: 3 }],
  },
]);

export default function ProductPortfolioFade() {
  const sectionRef = useRef(null);

  // Fade-up the whole section on scroll (plays once)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(el, {
        autoAlpha: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-transparent will-change-transform">
      <div className="px-4 sm:px-6 md:px-8 pt-8">
        <h2
          className="text-center text-[#EF4343] font-semibold text-2xl sm:text-3xl md:text-4xl pb-2"
          style={{ fontFamily: "Clash" }}
        >
          Product Portfolio
        </h2>
      </div>

      <div className="max-w-full mx-auto px-0 justify-center">
        <div
          className="
            mt-2
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
            gap-0
            border-y border-white/10
          "
        >
          {TILES.map((tile) => (
            <Tile key={tile.title} data={tile} />
          ))}
        </div>
      </div>

      <div className="h-6 sm:h-8" />
    </section>
  );
}

/* --------------------------- Tile (memoized) --------------------------- */
const Tile = memo(function Tile({ data, cycleMs = 1500 }) {
  const { title, bg, bullets, variants } = data;
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const reduceMotion = useMemo(
    () =>
      (typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) || false,
    []
  );

  // bullet index -> variant index mapping
  const bulletToVariantIndex = useMemo(() => {
    const map = new Map();
    variants.forEach((v, idx) => map.set(v.h, idx));
    return map;
  }, [variants]);

  // cycle images only while revealed and not paused
  useEffect(() => {
    if (revealed && !paused && variants.length > 1 && !reduceMotion) {
      timerRef.current = setInterval(
        () => setActive((i) => (i + 1) % variants.length),
        cycleMs
      );
    }
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [revealed, paused, variants.length, cycleMs, reduceMotion]);

  const onEnter = useCallback(() => setRevealed(true), []);
  const onLeave = useCallback(() => {
    setRevealed(false);
    setPaused(false);
    setActive(0);
  }, []);
  const onTap = useCallback(() => {
    setRevealed(true);
    setPaused(false);
    setActive((i) => (i + 1) % variants.length);
  }, [variants.length]);
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onTap();
      }
      if (e.key === "Escape") onLeave();
    },
    [onTap, onLeave]
  );

  // bullets -> freeze & show matching image
  const showBulletVariant = useCallback(
    (bulletIdx) => {
      setPaused(true);
      const vi = bulletToVariantIndex.get(bulletIdx);
      if (vi !== undefined) setActive(vi);
    },
    [bulletToVariantIndex]
  );
  const releaseBullet = useCallback(() => setPaused(false), []);

  const highlightIdx = revealed ? (variants[active]?.h ?? -1) : -1;

  return (
    <div
      className="
        group relative isolate overflow-hidden
        h-[750px] sm:h-[640px] lg:h-[750px]
        select-none
      "
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={onTap}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`${title} tile`}
    >
      {/* Background */}
      <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 group-hover:bg-[rgba(7,30,54,0.6)] transition-colors duration-800" />

      {/* ===== Idle TITLE overlay (same line across all tiles) ===== */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center px-4 text-center
          transition-opacity duration-800
          ${revealed ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <h3
          className="text-white leading-tight font-semibold text-2xl sm:text-3xl md:text-4xl"
          style={{ fontFamily: "Clash" }}
        >
          {title}
        </h3>
      </div>

      {/* ===== Hover/active CONTENT ===== */}
      <div
        className={`
          absolute inset-0 flex flex-col items-center justify-center px-4 text-center gap-2
          transition-opacity duration-800
          ${revealed ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Product image box */}
        <div
          className="
            relative pointer-events-none
            w-[clamp(180px,55%,340px)] aspect-square
            sm:w-[clamp(220px,55%,360px)] sm:aspect-square
            md:w-[clamp(240px,55%,380px)] md:aspect-square
            lg:w-[clamp(260px,60%,400px)] lg:aspect-square
          "
        >
          {variants.map((v, idx) => (
            <img
              key={idx}
              src={v.img}
              alt=""
              loading="lazy"
              className={`
                absolute inset-0 h-full w-full object-contain
                transition-opacity duration-800
                ${revealed && idx === active ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}
        </div>

        {/* Title under image (same text) */}
        <h3
          className="text-white leading-tight font-semibold text-xl sm:text-3xl md:text-4xl"
          style={{ fontFamily: "Clash" }}
        >
          {title}
        </h3>

        {/* Bullets */}
        <ul
          className="
            mt-0 space-y-0 text-white text-base sm:text-lg
            max-w-[420px] w-full mx-auto
          "

           style={{ fontFamily: "Gilroy" }}
        >
          {bullets.map((text, i) => (
            <li key={`${title}-${text}-${i}`}>
              <button
                type="button"
                className={`block w-full outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm ${
                  i === highlightIdx ? "font-semibold text-white" : ""
                }`}
                onMouseEnter={() => showBulletVariant(i)}
                onMouseLeave={releaseBullet}
                onFocus={() => showBulletVariant(i)}
                onBlur={releaseBullet}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Vertical separator (optional) */}
      <div className="absolute inset-y-0 left-0 w-1 bg-white/80 pointer-events-none" />
    </div>
  );
});
