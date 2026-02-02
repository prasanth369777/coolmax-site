import React from "react";

export default function IndustriesSection() {
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
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950 text-white">

      {/* ================= 3D VECTOR BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 perspective-[1200px]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] transform rotate-x-60 animate-gridMove opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* HEADING */}
        <div className="text-center mb-24">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 backdrop-blur-md">
            The Atmospheric Standard
          </span>
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
            Industries We Transform
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Scent is the most powerful bridge to the human subconscious. We build that bridge for world-class brands.
          </p>
        </div>

        {/* INDUSTRIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <div key={idx} className="group relative p-10 rounded-[2rem] border border-white/5 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:border-blue-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-bold font-mono">0{idx + 1}</span>
              </div>
              <div className="mb-6 p-4 bg-blue-500/10 rounded-2xl w-fit border border-blue-500/20 group-hover:bg-blue-500/20 transition-all">
                <div className="text-blue-400">
                  {ind.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                {ind.name}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= NEW SECTION: VALUE PROPOSITION ================= */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-t border-white/5 pt-24">
            <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Scent Architecture Matters?</h3>
                <div className="space-y-8">
                    {[
                        { t: "Emotional Connection", d: "75% of our daily emotions are generated by scent, creating deeper bonds with your clientele." },
                        { t: "Increased Brand Recall", d: "Customers are 100x more likely to remember a scented environment than a purely visual one." },
                        { t: "Dwell Time Optimization", d: "Pleasant aromas increase the time customers spend in your space by an average of 20%." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold border border-blue-600/30">
                                ✓
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-100 mb-1">{item.t}</h4>
                                <p className="text-slate-400 leading-relaxed">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="relative p-1 bg-gradient-to-br from-blue-500/20 to-transparent rounded-[3rem]">
                <div className="bg-slate-900/80 backdrop-blur-2xl rounded-[2.9rem] p-12 border border-white/10">
                    <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-8">Performance Metrics</h4>
                    <div className="space-y-10">
                        {[
                            { label: "Customer Satisfaction", val: "94%" },
                            { label: "Staff Productivity", val: "14%" },
                            { label: "Revenue Growth Potential", val: "11-15%" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-200 font-medium">{stat.label}</span>
                                    <span className="text-blue-400 font-bold">{stat.val}</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 rounded-full" style={{ width: stat.val }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* ================= NEW SECTION: SCENT PSYCHOLOGY ================= */}
        <div className="mt-32 text-center">
            <h3 className="text-3xl font-bold mb-12">Engineered Aromas. Proven Results.</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                {[
                    { label: "Citrus Notes", benefit: "Energy & Vigor" },
                    { label: "Lavender", benefit: "Calm & Trust" },
                    { label: "Sandalwood", benefit: "Luxury & Depth" },
                    { label: "White Tea", benefit: "Purity & Premium" }
                ].map((note, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-blue-600/10 transition-colors group">
                        <p className="text-blue-400 font-mono text-xs mb-2 uppercase tracking-tighter">Profile 0{i + 1}</p>
                        <h5 className="text-lg font-bold mb-1">{note.label}</h5>
                        <p className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors">{note.benefit}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-32 text-center bg-gradient-to-r from-blue-600/10 via-blue-600/20 to-blue-600/10 py-16 rounded-[3rem] border border-blue-500/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Start Your Atmospheric Journey</h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto italic">“Designing the invisible world of your brand.”</p>
            <button className="px-10 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                Request a Custom Scent Audit
            </button>
        </div>

      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes gridMove {
          0% { transform: rotateX(60deg) translateY(0); }
          100% { transform: rotateX(60deg) translateY(60px); }
        }
        .animate-gridMove {
          animation: gridMove 10s linear infinite;
        }
      `}</style>
    </section>
  );
}