import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "../assets/optica-vd.mp4";

// import heroVideo from "../assets/eg.gif";



gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [titleRef.current, subRef.current, btnRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white text-center px-4 overflow-hidden">
      {/* 🎬 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Overlay (optional for contrast) */}
      <div className="absolute top-0 left-0 w-full h-full  z-10"></div>

            {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div> */}


      {/* 💬 Content */}
      <div className="relative z-20 pt-60">
        <h1 ref={titleRef} className="text-3xl md:text-[40px] font-bold" style={{ fontFamily: "Clash" }}>
                  40+ Years of Innovation in Optics & Electro-Optics System
        </h1>
      
       
        <button
          ref={btnRef}
          style={{ fontFamily: "Clash" }}
          className="mt-8 bg-[#EF4343] hover:bg-red-700 px-8 py-3 text-[18px] rounded-sm   text-white transition-all"
        >
          Explore Our Solutions
        </button>
      </div>
    </section>
  );
}
