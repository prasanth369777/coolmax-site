import React from "react";

export default function IndustriesSection() {
  const whatsappNumber = "971522286401";
  
  const industries = [
    {
      name: "Offices & Corporate Spaces",
      desc: "Enhance productivity and focus with subtle, clean fragrances that reduce stress and improve mental clarity.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      )
    },
    {
      name: "Hotels & Hospitality",
      desc: "Create a memorable welcome and signature brand atmosphere that encourages guest loyalty and premium reviews.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
      )
    },
    {
      name: "Hospitals & Clinics",
      desc: "Promote hygiene and patient comfort with fresh, neutralizing scents designed to alleviate clinical anxiety.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      )
    },
    {
      name: "Schools & Institutions",
      desc: "Improve air quality and create a pleasant learning environment that aids concentration and student well-being.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
      )
    },
    {
      name: "Retail Stores & Showrooms",
      desc: "Increase dwell time and sales by over 15% with strategic scent marketing tailored to your brand's demographic.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
      )
    },
    {
      name: "Malls & Public Hubs",
      desc: "Ensure uniform scent coverage for large-scale areas, creating a high-end atmosphere across expansive floors.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      )
    }
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center pt-32 lg:pt-0 gap-16 text-left">
          
          <div className="lg:w-1/2 flex flex-col items-start">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm">
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.2em]">
                The Atmospheric Standard
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-9xl font-serif text-slate-900 tracking-tighter mb-8 leading-[0.95]">
              Industries We <br />
              <span className="italic text-slate-400 font-light pr-2">Transform.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-12 leading-relaxed">
              Scent is the most powerful bridge to the human subconscious. We build that bridge for world-class brands.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl"
              >
                Contact Us
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43 0 9.856-4.426 9.858-9.855.002-5.43-4.425-9.856-9.855-9.856-5.431 0-9.856 4.426-9.858 9.855 0 2.046.594 3.542 1.591 5.319l-.994 3.634 3.942-.994z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full h-[500px] lg:h-[700px] flex items-center justify-center">
            <div className="absolute inset-0 bg-slate-100/50 rounded-[4rem] border border-slate-200 shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-gridScroll" />
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-4 p-8">
                {industries.slice(0, 4).map((ind, i) => (
                    <div key={i} className="p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-white shadow-xl flex items-center justify-center text-blue-600">
                        {ind.icon}
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* ================= INDUSTRIES GRID ================= */}
        <section className="py-24 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {industries.map((ind, idx) => (
              <div key={idx} className="group relative p-10 rounded-[3.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-700 text-left">
                <div className="absolute top-8 right-8 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-7xl font-black font-serif italic">0{idx + 1}</span>
                </div>
                <div className="mb-8 p-5 bg-white rounded-2xl w-fit shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 text-blue-600">
                    {ind.icon}
                </div>
                <h3 className="text-3xl font-serif text-slate-900 mb-4 tracking-tight leading-none">
                  {ind.name}
                </h3>
                <p className="text-slate-500 leading-relaxed font-light text-base">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= VALUE PROPOSITION ================= */}
        <section className="py-32 border-t border-slate-100">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2 text-left">
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-12 tracking-tighter leading-none">Why Scent <br/><span className="italic text-slate-400 font-light">Architecture Matters?</span></h2>
                    <div className="space-y-10">
                        {[
                            { t: "Emotional Connection", d: "75% of our daily emotions are generated by scent, creating deeper bonds with your clientele." },
                            { t: "Increased Brand Recall", d: "Customers are 100x more likely to remember a scented environment than a purely visual one." },
                            { t: "Dwell Time Optimization", d: "Pleasant aromas increase the time customers spend in your space by an average of 20%." }
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
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-10 block">Performance Metrics</span>
                        <div className="space-y-12">
                            {[
                                { label: "Customer Satisfaction", val: "94%" },
                                { label: "Staff Productivity", val: "14%" },
                                { label: "Revenue Growth Potential", val: "15%" }
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

        {/* ================= SCENT PSYCHOLOGY GRID ================= */}
        <section className="py-24 border-t border-slate-100 text-left">
            <h3 className="text-4xl font-serif text-slate-900 mb-16 tracking-tighter leading-none text-center">Engineered Aromas. <br/><span className="italic text-slate-400 font-light">Proven Results.</span></h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { label: "Citrus Notes", benefit: "Energy & Vigor" },
                    { label: "Lavender", benefit: "Calm & Trust" },
                    { label: "Sandalwood", benefit: "Luxury & Depth" },
                    { label: "White Tea", benefit: "Purity & Premium" }
                ].map((note, i) => (
                    <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-100 transition-all duration-500 group">
                        <p className="text-blue-600 font-black text-[10px] mb-4 uppercase tracking-tighter">Profile 0{i + 1}</p>
                        <h5 className="text-2xl font-serif text-slate-900 mb-2">{note.label}</h5>
                        <p className="text-slate-500 font-light text-sm group-hover:text-blue-700 transition-colors">{note.benefit}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-32">
            <div className="bg-slate-900 rounded-[5rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="relative z-10">
                    <h3 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tighter leading-none">Start Your <br/> <span className="italic text-blue-400 font-light pr-2">Atmospheric Journey</span></h3>
                    <p className="text-2xl font-serif italic text-white/50 mb-12">“Designing the invisible world of your brand.”</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                      <a 
                        href="/contact"
                        className="px-14 py-6 rounded-3xl bg-blue-600 text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl"
                      >
                        Request Custom Scent Audit
                      </a>
                      <a 
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-14 py-6 rounded-3xl bg-transparent border border-white/20 text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-2"
                      >
                        Consult via WhatsApp
                      </a>
                    </div>
                </div>
            </div>
        </section>

      </div>

      <style>{`
        @keyframes gridScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
        .animate-gridScroll {
          animation: gridScroll 4s linear infinite;
        }
      `}</style>
    </div>
  );
}