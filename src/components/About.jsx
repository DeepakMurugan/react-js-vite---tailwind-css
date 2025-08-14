import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "../assets/about.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: textRef.current, start: "top 85%" },
      }
    );
    gsap.fromTo(
      imgRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: imgRef.current, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section className="pl-5 pr-5 md:pl-20 md:pr-20 pt-12 md:pt-20 pb-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Image FIRST on mobile, SECOND on desktop */}
        <div className="order-1 md:order-2 md:w-1/2" ref={imgRef}>
          <img
            src={aboutImg}
            alt="About Optica"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text SECOND on mobile, FIRST on desktop */}
        <div className="order-2 md:order-1 md:w-1/2" ref={textRef}>
          <h2
            className="mb-4 text-[22px] md:text-[28px] font-semibold   text-[#EF4343]"
            style={{ fontFamily: "Clash" }}
          >
            About Us
          </h2>

          <p
            className="text-[#364274] text-[15px] md:text-[18px] font-medium leading-8"
            style={{ fontFamily: "Gilroy-m" }}
          >
            Founded in 1985 and headquartered in Bangalore, Optics and Allied
            Engineering Pvt. Ltd. (OPTICA) is a pioneer in precision optics and
            electro-optic system integration. With a state-of-the-art 60,000 sq. ft.
            facility dedicated to advanced fabrication, glass machining,
            opto-mechanical assembly, and testing, OPTICA specializes in high-power
            laser optics, large optics, and complex electro-optic systems.
            Committed to supporting India's defense and aerospace programs, OPTICA
            continues to deliver innovation driven by precision, reliability, and
            technological excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
