import { Star } from "lucide-react";

export function TrustSection() {
  const companies = [
    "Synergy",
    "Enigma",
    "Spectrum",
    "Velocity",
    "Spectrum",
    "Synergy"
  ];

  return (
    <section className="bg-dark-bg py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-center text-gray-300 text-lg mb-12">
          Trusted by Startups and Enterprises Worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {companies.map((company, index) => (
            <div key={index} className="text-gray-500 text-xl font-semibold opacity-60 hover:opacity-100 transition-opacity">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}