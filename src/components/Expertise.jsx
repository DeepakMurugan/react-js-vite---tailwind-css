// CustomerMarquee.jsx
import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import elbit from "../assets/customers/elbit.png";
import hal from "../assets/customers/hal.png";
import drdo from "../assets/customers/drdo.png";
import isro from "../assets/customers/isro.png";
import ametek from "../assets/customers/ametek.png";
import schneider from "../assets/customers/schneider.png";
import thales from "../assets/customers/thales.png";
import bel from "../assets/customers/bel.png";
import tmt from "../assets/customers/tmt.png";
import collins from "../assets/customers/collins.png";
import adani from "../assets/customers/adani.png";

gsap.registerPlugin(ScrollTrigger);

const customers = [
  { src: elbit, alt: "Elbit Systems" },
  { src: hal, alt: "HAL" },
  { src: drdo, alt: "DRDO" },
  { src: isro, alt: "ISRO" },
  { src: ametek, alt: "AMETEK" },
  { src: schneider, alt: "Schneider Electric" },
  { src: thales, alt: "THALES" },
  { src: bel, alt: "Bharat Electronics" },
  { src: tmt, alt: "TMT Telescope" },
  { src: collins, alt: "Collins Aerospace" },
  { src: adani, alt: "Adani" },
];

export default function CustomerMarquee() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion users: show title without animation
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced) return;

    const ctx = gsap.context(() => {
      if (!titleRef.current) return;
      gsap.from(titleRef.current, {
        autoAlpha: 0,
        y: 24,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none", // play once
        },
      });
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-0 pb-20 px-0 bg-transparent">
      {/* Only this animates */}
      <h2
        ref={titleRef}
        className="text-center text-[30px] font-semibold text-[#EF4343] mb-6 will-change-transform"
        style={{ fontFamily: "Clash" }}
      >
        Prominent Customers
      </h2>

      {/* Marquee and logos = no animations */}
      <Marquee gradient={false} speed={40} pauseOnHover className="flex items-center">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="mx-6 flex items-center justify-center h-[130px] w-[200px] rounded-lg"
          >
            <img
              src={customer.src}
              alt={customer.alt}
              loading="lazy"
              className="object-contain max-h-full max-w-full"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
