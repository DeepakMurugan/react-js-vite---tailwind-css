import React from "react";

const coreValues = [
  {
    title: "Care",
    description: "We strive to show concern & build a foundation of trust.",
    icon: "/src/assets/care.png",
  },
  {
    title: "Innovation",
    description:
      "Our organization process encourages new ideas, methods, workflow, immediacy & velocity",
    icon: "/src/assets/innovation.png",
  },
  {
    title: "Speed",
    description:
      "A competitive advantage, a powerful metric, immediacy & velocity",
    icon: "/src/assets/speed.png",
  },
  {
    title: "Success",
    description:
      "Excellence in work we do drives us to deliver our vision to the world.",
    icon: "/src/assets/success.png",
  },
  {
    title: "Knowledge Sharing",
    description:
      "We foster collaboration thereby enhancing learning experience.",
    icon: "/src/assets/knowledge.png",
  },
];

const CoreValues = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center text-white py-12 px-4 md:px-12 lg:px-24 "
      // style={{
      //   backgroundImage: "url('/path-to-your-gif.gif')", // Replace with actual GIF path
      // }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-red-500" style={{ fontFamily: 'Clash' }}>Core Values</h2>
      </div>

      {/* Vision & Mission */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 mb-16">
        <div className="relative bg-white bg-opacity-10 backdrop-blur-md text-center text-white p-6 rounded-xl max-w-md mx-auto shadow-md">
          <div className="w-14 h-14 rounded-full bg-white bg-opacity-10 mx-auto -mt-12 mb-4 flex items-center justify-center shadow-md">
            <img src="/src/assets/vision.png" alt="Vision Icon" className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Clash' }}>Vision</h3>
          <p className="text-sm" style={{ fontFamily: 'Gilroy' }}>To be a leader in Electro-Optics</p>
        </div>

        <div className="relative bg-white bg-opacity-10 backdrop-blur-md text-center text-white p-6 rounded-xl max-w-md mx-auto shadow-md">
          <div className="w-14 h-14 rounded-full bg-white bg-opacity-10 mx-auto -mt-12 mb-4 flex items-center justify-center shadow-md">
            <img src="/src/assets/mission.png" alt="Mission Icon" className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Clash' }}>Mission</h3>
          <p className="text-sm" style={{ fontFamily: 'Gilroy' }}>To fulfil the global photonics demand from UV(Ultraviolet) to IR(Infrared).</p>
        </div>
      </div>

      {/* Core Values Icons Row */}
      <div className="relative flex flex-col md:flex-row justify-between items-start gap-y-14">
        <div className="hidden md:block absolute top-8 left-0 right-0 border-t-2 border-[#EF4343] z-0"></div>

        {coreValues.map((item, index) => (
          <div key={index} className="relative z-10 max-w-[180px] mx-auto">
            <div className="bg-[#0A3981] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
              <img src={item.icon} alt={item.title} className="h-6" />
            </div>
            <h3
              className="text-base font-semibold text-[#0A3981] mb-2 text-[20px]"
              style={{ fontFamily: "Clash" }}
            >
              {item.title}
            </h3>
            <p
              className="text-xs leading-relaxed text-[#ffffff] text-[18px]"
              style={{ fontFamily: "Gilroy" }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;