export default function GroupCompanies() {
  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#EF4343] mb-12">
          Group Of Companies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <img
            src="/logos/gaggione.png"
            alt="Gaggione"
            className="h-8 md:h-10 object-contain"
          />
          <img
            src="/logos/optica.png"
            alt="Optica"
            className="h-10 md:h-12 object-contain"
          />
          <img
            src="/logos/quadratec.png"
            alt="Quadratec"
            className="h-8 md:h-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
