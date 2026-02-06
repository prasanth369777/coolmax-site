import React from "react";

// ================= IMAGE IMPORTS =================
import CarImg from "../../src/asset/categories/car.jpg";
import LobbyImg from "../../src/asset/categories/lobby.jpg";
import WallImg from "../../src/asset/categories/wall.jpg";
import HvacImg from "../../src/asset/categories/hvac.jpg";
import RoomImg from "../../src/asset/categories/room.jpg";
import AerosolImg from "../../src/asset/categories/aerosol.jpg";

// ================= DATA CONFIGURATION =================

const aromaCategories = [
  {
    title: "Fresh & Clean Scents",
    description: "Crisp, airy notes like linen, ocean breeze, and rain that evoke a sense of purity.",
    image: RoomImg,
  },
  {
    title: "Floral Comfort Scents",
    description: "Soft, blooming aromas like jasmine, rose, and lily designed for elegance and calm.",
    image: LobbyImg,
  },
  {
    title: "Energy & Citrus Scents",
    description: "Zesty blends of lemon, orange, and bergamot to boost productivity and mood.",
    image: WallImg,
  },
  {
    title: "Warm & Luxury Scents",
    description: "Rich notes of oud, amber, leather, and spices for a sophisticated, high-end atmosphere.",
    image: HvacImg,
  },
  {
    title: "Relaxation & Wellness",
    description: "Therapeutic blends featuring lavender, eucalyptus, and white tea for spas and homes.",
    image: RoomImg,
  },
  {
    title: "Signature Business Scents",
    description: "Bespoke olfactory logos created to define your brand identity.",
    image: LobbyImg,
  },
  {
    title: "Car & Personal Space",
    description: "Travel-friendly fragrance options for your commute and personal desk.",
    image: CarImg,
  },
  {
    title: "Trial & Sample Scents",
    description: "Discovery sets allowing you to experience our collection before committing.",
    image: AerosolImg,
  },
];

export default function ProductCategories() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION (SPLIT LAYOUT) ================= */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center pt-32 lg:pt-0 gap-16 text-left">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:w-1/2 flex flex-col items-start z-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm">
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.2em]">
                The Atmospheric Standard
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-9xl font-serif text-slate-900 tracking-tighter mb-8 leading-[0.95]">
              Curated <br />
              <span className="italic text-slate-400 font-light pr-2">Aroma Oils</span> <br />
              Collections.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-12 leading-relaxed">
              Curated scent collections designed to evoke emotion, trigger memory, and create the perfect atmosphere for your commercial or personal space.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl"
              >
                Contact Expert
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43 0 9.856-4.426 9.858-9.855.002-5.43-4.425-9.856-9.855-9.856-5.431 0-9.856 4.426-9.858 9.855 0 2.046.594 3.542 1.591 5.319l-.994 3.634 3.942-.994z"/></svg>
                Consult WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT: IMAGE STAGE */}
          <div className="lg:w-1/2 relative w-full h-[500px] lg:h-[700px] flex items-center justify-center">
            <div className="absolute inset-0 bg-slate-100/50 rounded-[4rem] border border-slate-200 shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
            <div className="relative z-10 w-full h-full p-8">
              <img 
                src={LobbyImg} 
                alt="Signature Scent Atmosphere" 
                className="w-full h-full object-cover rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </section>

        {/* ================= AROMA GRID ================= */}
        <section className="py-24 border-t border-slate-100">
          <div className="mb-20 text-left">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter leading-none mb-6">Explore Our <br/><span className="italic text-slate-400 font-light">Fragrance Library</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {aromaCategories.map((cat, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="flex-1 p-8 flex flex-col">
                  <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                    {cat.description}
                  </p>
                  
                  <button className="mt-auto self-start text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 border-b border-slate-200 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                    Discover Scent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ATMOSPHERIC BENEFITS ================= */}
        <section className="py-32 border-t border-slate-100">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2 text-left">
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-12 tracking-tighter leading-none">Why Professional <br/><span className="italic text-slate-400 font-light">Curation Matters?</span></h2>
                    <div className="space-y-10">
                        {[
                            { t: "Olfactory Branding", d: "Your signature scent is the first thing guests notice and the last thing they remember." },
                            { t: "Emotional Well-being", d: "Engineered aromas that reduce stress and elevate the cognitive experience of a space." },
                            { t: "UAE Climate Optimized", d: "Oils designed to remain stable and potent in Middle Eastern climatic conditions." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-8 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 font-black border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="text-2xl font-serif text-slate-900 mb-2 leading-none">{item.t}</h4>
                                    <p className="text-slate-500 font-light text-lg">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2 w-full">
                    <div className="p-12 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-sm text-left">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-10 block">Collection Performance</span>
                        <div className="space-y-12">
                            {[
                                { label: "Purity Level", val: "100%" },
                                { label: "Long-lasting Formula", val: "92%" },
                                { label: "Hypoallergenic Certified", val: "100%" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-end mb-4">
                                        <span className="text-slate-900 font-serif text-xl">{stat.label}</span>
                                        <span className="text-blue-600 font-black text-2xl font-serif italic">{stat.val}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-600 rounded-full" style={{ width: stat.val }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-32">
            <div className="bg-slate-900 rounded-[5rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="relative z-10">
                    <h3 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tighter leading-none">Find Your <br/> <span className="italic text-blue-400 font-light pr-2">Signature Note</span></h3>
                    <p className="text-2xl font-serif italic text-white/50 mb-12 max-w-2xl mx-auto">“Designing the invisible world of your environment.”</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                      <a 
                        href="/contact"
                        className="px-14 py-6 rounded-3xl bg-blue-600 text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl"
                      >
                        Request Custom Scent Curation
                      </a>
                      <a 
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-14 py-6 rounded-3xl bg-transparent border border-white/20 text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-3"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43 0 9.856-4.426 9.858-9.855.002-5.43-4.425-9.856-9.855-9.856-5.431 0-9.856 4.426-9.858 9.855 0 2.046.594 3.542 1.591 5.319l-.994 3.634 3.942-.994z"/></svg>
                        Instant Consultation
                      </a>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
}