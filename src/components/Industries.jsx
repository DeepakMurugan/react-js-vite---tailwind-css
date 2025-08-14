import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

// Assets
import aerospace from "../assets/aerospace.png";
import defense from "../assets/defense.png";
import medical from "../assets/medical.png";
import automotive from "../assets/automotive.png";
import aerospace1 from "../assets/aerospace1.png";
import bgImage from "../assets/ind-bg1.jpg";

const industries = [
  { title: "Aerospace / Space", image: aerospace, description: "Precision optics for satellites and imaging systems." },
  { title: "Defense", image: defense, description: "Missile trackers, panoramic lenses, LIDAR, FTIR systems." },
  { title: "Laser", image: medical, description: "High-powered optics for industrial laser systems." },
  { title: "Scientific", image: automotive, description: "Optical systems for labs and scientific research." },
  { title: "Astronomy", image: aerospace1, description: "Telescope lenses and astronomical observation optics." },
];

export default function Industries() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      className="py-20 text-white bg-cover bg-center"
      ref={sectionRef}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center mb-10 text-white"
          style={{ fontFamily: "Clash" }}
        >
          Industries We Serve
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#002040]/80  hover:bg-black  transition-all duration-100 text-white  pt-5 pb-5 px-2 py-2 rounded-xl text-center overflow-hidden h-[400px] flex flex-col justify-start"
            >
              {/* Image & Title */}
              <div className="transition-transform duration-100 group-hover:-translate-y-6">
                <div className="h-28 flex items-start justify-center mb-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[100px] w-auto object-contain mx-auto"
                  />
                </div>
                <h3
                  className="text-[32px] font-semibold"
                  style={{ fontFamily: "Clash" }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description Reveal Like Shutter */}
              <div className="absolute bottom-0 left-5 right-5 h-[150px] overflow-hidden">
                <p
                  className="transform -translate-y-full group-hover:translate-y-0 transition-transform duration-100 ease-in-out text-[20px] opacity-0 group-hover:opacity-100"

                  style={{ fontFamily: "Gilroy" }}
                >
                  {item.description}
                </p>
              </div>
            </div>


          ))}
        </div>
      </div>
    </section>
  );
}
