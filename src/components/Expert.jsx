import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import spec from "../assets/spec.png";
import print from "../assets/print.png";
import proto from "../assets/proto.png";
import support from "../assets/support.png";
import research from "../assets/research.png";

gsap.registerPlugin(ScrollTrigger);

const expertiseList = [
  { title: "Build-To-Specification Capabilities", icon: spec },
  { title: "Build-To-Print Services", icon: print },
  { title: "Prototyping Expertise", icon: proto },
  { title: "Production Support", icon: support },
  { title: "Research Partnership", icon: research },
];

export default function Expertise() {
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
    <section className="pt-18 pb-22 px-25 bg-transparent" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#EF4343] text-[40px]"  style={{ fontFamily: "Clash" }} >
          Our Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {expertiseList.map((item, index) => (
            <div
              key={index}
              className="bg-[#3463B0] text-[26px]  font-bold text-white rounded pl-5 pr-5 pb-8 pt-5
               flex flex-col items-start  drop-shadow text-start shadow hover:shadow-xl transition-all duration-300
                hover:-translate-y-2 group "
                style={{ fontFamily: "clash" }}
            >
              <img
                src={item.icon}
                alt={item.title}
                className=" w-16 h-16 mb-4 transform transition-transform duration-[3000ms] group-hover:scale-125  text-white  "
              />
              <h3 className="text-[21px] font-400 leading-tight font-medium " style={{ fontFamily: "clash" }}>
                {item.title}
              </h3>
            </div>

            
          ))}
        </div>
      </div>
    </section>
  );
}
