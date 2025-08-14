import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Icons (keep them in src/assets/icons/)
import calIcon from "../assets/icons/cale.png";
import usersIcon from "../assets/icons/grpp.png";
import plantIcon from "../assets/icons/sqr.png";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const yearsRef = useRef(null);
  const empRef = useRef(null);
  const sqftRef = useRef(null);

  const animateCounter = (ref, endValue, suffix = "") => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: endValue,
      duration: 2,
      ease: "power1.out",
      scrollTrigger: { trigger: ref.current, start: "top 90%" },
      onUpdate: () => {
        ref.current.textContent = `${Math.floor(obj.val)}${suffix}`;
      },
    });
  };

  useEffect(() => {
    animateCounter(yearsRef, 40, "+");   // 40+
    animateCounter(empRef, 150, "+");    // 150+
    animateCounter(sqftRef, 60, "K");    // 60K
  }, []);

  const Item = ({ icon, numberRef, caption, iconWide = false }) => (
    <div
      className="flex flex-col items-center text-center"
      style={{ fontFamily: "clash" }} // ✅ force custom font
    >
      {/* icon + number in the same row, tight spacing, responsive sizes */}
      <div className="flex items-start gap-4 sm:gap-2 md:gap-2 leading-none">
        <img
          src={icon}
          alt=""
          className={`${iconWide ? "w-auto" : "w-9 sm:w-10 md:w-12"} h-9 sm:h-10 md:h-12 translate-y-[2px]`}
        />
        <span
          ref={numberRef}
          className="
            text-[#073A8D] font-semibold md:font-medium leading-none
            text-[35px] sm:text-[30px] md:text-[40px] lg:text-[50px]
          "
        >
          0
        </span>
      </div>

      <p
        className="
          mt-3 text-[#073A8D] font-medium leading-tight
          text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]
        "
      >
        {caption}
      </p>
    </div>
  );

  return (
    // <section className="py-6 md:py-10 bg-transparent">
    <section className="  pl-0 pr-0 pt-10 pb-20 bg-transparent">

  <div className="container  max-width: 1560px; mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">






      <Item icon={calIcon} numberRef={yearsRef} caption="Years of expertise" />
      <Item icon={usersIcon} numberRef={empRef} caption="Employees" iconWide />
      <Item icon={plantIcon} numberRef={sqftRef} caption="Square feet" />
    </div>
  </div>
</section>


  );
}
