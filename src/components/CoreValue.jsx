// CoreValues.jsx
import { useEffect, useRef, useState } from "react";

import careIcon from "../assets/care.png";
import innovationIcon from "../assets/innovation.png";
import speedIcon from "../assets/speed.png";
import successIcon from "../assets/success.png";
import knowledgeIcon from "../assets/knowledge.png";

import bgImg from "../assets/eg.gif";
import visionIcon from "../assets/vision.png";
import missionIcon from "../assets/mission.png";

const coreValues = [
  { title: "Care", description: "We strive to show concern & build a foundation of trust.", icon: careIcon },
  {
    title: "Innovation",
    description:
      "Our organization process encourages new ideas, methods, workflow, immediacy & velocity",
    icon: innovationIcon,
  },
  {
    title: "Speed",
    description: "A competitive advantage, a powerful metric, immediacy & velocity",
    icon: speedIcon,
  },
  {
    title: "Success",
    description: "Excellence in work we do drives us to deliver our vision to the world.",
    icon: successIcon,
  },
  {
    title: "Knowledge Sharing",
    description: "We foster collaboration thereby enhancing learning experience.",
    icon: knowledgeIcon,
  },
];

export default function CoreValues() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Reveal on scroll (once)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full bg-cover bg-no-repeat text-white py-10 px-5
                  transition-all duration-700 ease-out
                  motion-reduce:transition-none motion-reduce:transform-none
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        // gradient overlay + centered GIF
        backgroundImage: `linear-gradient(#00204099, #00204099), url(${bgImg})`,
        backgroundPosition: "center, center",
      }}
    >
      {/* Constrained content wrapper (anchors the red line too) */}
      <div className="max-w-7xl mx-auto pb-2 relative">
        {/* Title */}
        <h2
          className={`text-center text-4xl font-semibold text-[#EF4343] mb-16
                      transition-all duration-700 ease-out
                      ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: inView ? "80ms" : "0ms", fontFamily: "Clash" }}
        >
          Core Values
        </h2>

        {/* Vision + Mission cards */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-15 mb-[45px]">
          {/* Vision */}
          <div
            className={`
              group relative bg-[#FFFFFFCC] pl-8 py-6 rounded-2xl max-w-md w-full text-left
              will-change-transform
              transition-all duration-500 ease-out
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              hover:-translate-y-2 hover:shadow-xl
              focus-within:-translate-y-2 focus-within:shadow-xl
              hover:bg-[#FFFFFFE6] focus-within:bg-[#FFFFFFE6]
            `}
            style={{ transitionDelay: inView ? "140ms" : "0ms" }}
          >
            <div className="absolute -top-8 left-5 w-20 h-16 rounded-full flex items-center justify-center">
              <img
                src={visionIcon}
                alt="Vision Icon"
                loading="lazy"
                className="
                  w-20
                  transform-gpu will-change-transform
                  transition-transform duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)]
                  group-hover:scale-125 group-focus-within:scale-125
                "
              />
            </div>

            <h3 className="text-xl font-semibold text-[#0A3981] mt-4 mb-2">Vision</h3>
            <p
              className="text-base text-[#0A3981] text-[16px] font-medium pb-[24px]"
              style={{ fontFamily: "Gilroy" }}
            >
              To be a leader in Electro-Optics
            </p>
          </div>

          {/* Mission */}
          <div
            className={`
              group relative bg-[#FFFFFFCC] pl-8 py-6 rounded-2xl max-w-md w-full text-left
              will-change-transform
              transition-all duration-1000 ease-out
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              hover:-translate-y-2 hover:shadow-xl
              focus-within:-translate-y-2 focus-within:shadow-xl
              hover:bg-[#FFFFFFE6] focus-within:bg-[#FFFFFFE6]
            `}
            style={{ transitionDelay: inView ? "220ms" : "0ms" }}
          >
            <div className="absolute -top-8 left-5 w-20 h-16 rounded-full flex items-center justify-center">
              <img
                src={missionIcon}
                alt="Mission Icon"
                loading="lazy"
                className="
                  w-20
                  transform-gpu will-change-transform
                  transition-transform duration-[1000ms] ease-[cubic-bezier(.2,.8,.2,1)]
                  group-hover:scale-125 group-focus-within:scale-125
                "
              />
            </div>

            <h3 className="text-xl text-[#0A3981] mt-4 mb-2" style={{ fontFamily: "Clash" }}>
              Mission
            </h3>
            <p
              className="text-base text-[#0A3981] text-[16px] font-medium"
              style={{ fontFamily: "Gilroy" }}
            >
              To fulfil the global photonics demand from
              <br /> UV (Ultraviolet) to IR (Infrared).
            </p>
          </div>
        </div>

        {/* Red Line (anchored to this container) */}
        <div
          className={`hidden md:block absolute left-35 right-35 top-[65%] h-[2px] bg-[#EF4343] z-0
                      transition-all duration-700 ease-out
                      ${inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50"} pointer-events-none`}
          style={{ transformOrigin: "center", transitionDelay: inView ? "260ms" : "0ms" }}
        />

        {/* Core Values Icons */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-start gap-x-2 gap-y-14 relative z-10">
          {coreValues.map((item, index) => (
            <div
              key={item.title}
              className={`text-center w-[181px] mx-auto
                          transition-all duration-700 ease-out
                          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: inView ? `${300 + index * 90}ms` : "0ms" }}
            >
              <div className="w-17 h-16 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                <img src={item.icon} alt={item.title} loading="lazy" className="w-18" />
              </div>
              <h3 className="text-lg text-white mb-2" style={{ fontFamily: "Clash" }}>
                {item.title}
              </h3>
              <p className="text-[14px] font-light leading-snug text-white" style={{ fontFamily: "Gilroy" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
