export default function MissionVision() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#EF4343] mb-12">
          Our Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-10 justify-center items-start">
          {/* Vision Card */}
          <div className="relative bg-white rounded-2xl shadow-sm border border-[#E0E0E0] px-6 pt-16 pb-6 text-left">
            <div className="absolute -top-8 left-6">
              <div className="w-16 h-16 bg-[#0A3981] rounded-full flex items-center justify-center shadow-lg">
                <img src="/src/assets/vision.png" alt="Vision" className="h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#0A3981] mb-2">Vision</h3>
            <p className="text-sm text-[#313131]">To be a leader in Electro-Optics</p>
          </div>

          {/* Mission Card */}
          <div className="relative bg-white rounded-2xl shadow-sm border border-[#E0E0E0] px-6 pt-16 pb-6 text-left">
            <div className="absolute -top-8 left-6">
              <div className="w-16 h-16 bg-[#0A3981] rounded-full flex items-center justify-center shadow-lg">
                <img src="/src/assets/mission.png" alt="Mission" className="h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#0A3981] mb-2">Mission</h3>
            <p className="text-sm text-[#313131]">
              To fulfil the global photonics demand from UV (Ultraviolet) to IR (Infrared).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
