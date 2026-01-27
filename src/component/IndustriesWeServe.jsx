import React from "react";

export default function IndustriesSection() {
  const industries = [
    {
      name: "Offices & Corporate Spaces",
      desc: "Enhance productivity and focus with subtle, clean fragrances.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      )
    },
    {
      name: "Hotels & Hospitality",
      desc: "Create a memorable welcome and signature brand atmosphere.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
      )
    },
    {
      name: "Hospitals & Clinics",
      desc: "Promote hygiene and comfort with fresh, neutralizing scents.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      )
    },
    {
      name: "Schools & Institutions",
      desc: "Improve air quality and create a pleasant learning environment.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
      )
    },
    {
      name: "Retail Stores & Showrooms",
      desc: "Increase dwell time and sales with strategic scent marketing.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
      )
    },
    {
      name: "Restaurants & Cafes",
      desc: "Enhance the dining experience without overpowering flavors.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      )
    },
    {
      name: "Malls & Commercial Spaces",
      desc: "Uniform scent coverage for large-scale public areas.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      )
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950 text-white">

      {/* ================= 3D VECTOR BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 perspective-[1200px]">
        {/* Animated Grid Floor */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] transform rotate-x-60 animate-gridMove opacity-60" />
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* HEADING */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 backdrop-blur-md">
            Where We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
            Industries We Serve
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            From intimate retail boutiques to sprawling commercial complexes, we engineer scent solutions tailored to every environment.
          </p>
        </div>

        {/* INDUSTRIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <div 
              key={idx}
              className={`group relative p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm 
                         hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2
                         ${idx === industries.length - 1 ? "lg:col-span-3 xl:col-span-1 md:col-span-2" : ""}`} // Logic to handle the last item responsibly
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

              {/* Icon */}
              <div className="mb-6 p-4 bg-slate-900/50 rounded-2xl w-fit border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-300 shadow-lg">
                <div className="text-slate-400 group-hover:text-blue-400 transition-colors">
                  {ind.icon}
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">
                {ind.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-20 text-center">
            <p className="text-slate-500 mb-6">Don't see your industry listed?</p>
            <button className="px-8 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-blue-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Contact Us for Custom Solutions
            </button>
        </div>

      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes gridMove {
          0% {
            transform: rotateX(60deg) translateY(0);
          }
          100% {
            transform: rotateX(60deg) translateY(60px);
          }
        }
        .animate-gridMove {
          animation: gridMove 10s linear infinite;
        }
      `}</style>
    </section>
  );
}