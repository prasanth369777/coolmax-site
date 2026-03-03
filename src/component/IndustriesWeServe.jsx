import React from "react";

// --- ASSET IMPORTS ---
import Client1 from "../asset/clientslogo/Mercure Hotels.webp";
import Client2 from "../asset/clientslogo/PAN HOME.webp";
import Client3 from "../asset/clientslogo/Ramada by Wyndham.webp";
import Client4 from "../asset/clientslogo/The Retreat Palm Dubai.webp";
import Client5 from "../asset/clientslogo/lulu.webp";

export default function IndustriesSection() {
  const whatsappNumber = "+971509282702";
  
  const clientLogos = [Client1, Client2, Client3, Client4, Client5];

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
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-hidden">
      
      
        <link rel="canonical" href="https://www.coolmaxscent.com/industries/" />
    

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[60%] h-[60%] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[50%] h-[50%] bg-slate-100/50 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0V0zm1 1h1v1H1V1z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center pt-28 lg:pt-0 gap-16 lg:gap-24">
          <div className="lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-600 text-white mb-8 shadow-xl shadow-blue-200">
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Atmospheric Standard</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif text-slate-900 tracking-tighter mb-10 leading-[0.85]">
              Industries We <br />
              <span className="italic text-blue-600 font-light pr-4">Transform.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-14 leading-relaxed">
              Scent is the most powerful bridge to the human subconscious. We build that bridge for world-class brands.
            </p>

            <div className="flex flex-wrap gap-5 mb-16">
              <a href="/contact/" className="px-12 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all shadow-2xl">
                Contact Us
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white border-2 border-slate-900 text-slate-900 font-black text-xs uppercase tracking-widest rounded-full hover:bg-slate-50 transition-all flex items-center gap-3">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43 0 9.856-4.426 9.858-9.855.002-5.43-4.425-9.856-9.855-9.856-5.431 0-9.856 4.426-9.858 9.855 0 2.046.594 3.542 1.591 5.319l-.994 3.634 3.942-.994z"/></svg>
                WhatsApp
              </a>
            </div>

            <div className="pt-10 border-t border-slate-100 hidden md:block">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Trusted Presence In UAE</p>
              <div className="flex gap-10 grayscale opacity-40">
                {clientLogos.slice(0, 3).map((logo, i) => (
                   <img key={i} src={logo} alt="client" className="h-8 w-auto object-contain" />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full h-[500px] lg:h-[700px] flex items-center justify-center">
            {/* GRID OF CLIENT LOGOS REPLACING ICONS */}
            <div className="relative z-10 grid grid-cols-2 gap-6 w-full max-w-md">
                {clientLogos.slice(0, 4).map((logo, i) => (
                    <div key={i} className={`p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl flex items-center justify-center transition-all duration-700 hover:scale-110 hover:-rotate-2 ${i % 2 === 0 ? "mt-12" : ""}`}>
                        <img src={logo} alt="Client Brand" className="w-full h-16 object-contain" />
                    </div>
                ))}
            </div>
            {/* Decorative background for the logo cluster */}
            <div className="absolute inset-0 bg-blue-50/50 rounded-[4rem] -rotate-3 scale-95 border border-blue-100/50 z-0 shadow-inner" />
          </div>
        </section>

        {/* ================= INDUSTRIES GRID ================= */}
        <section className="py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {industries.map((ind, idx) => (
              <div key={idx} className="group relative p-12 rounded-[4rem] bg-white border border-slate-100 hover:border-blue-500 hover:shadow-[0_40px_100px_-20px_rgba(37,99,235,0.1)] transition-all duration-700 text-left">
                <div className="absolute top-10 right-10 opacity-[0.04] group-hover:opacity-10 transition-opacity">
                  <span className="text-9xl font-serif italic font-black">0{idx + 1}</span>
                </div>
                <div className="mb-10 p-5 bg-slate-50 rounded-2xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 text-blue-600 shadow-inner">
                    {ind.icon}
                </div>
                <h3 className="text-3xl font-serif text-slate-900 mb-6 tracking-tight leading-none">{ind.name}</h3>
                <p className="text-slate-500 leading-relaxed font-light text-lg">{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= VALUE PROPOSITION ================= */}
        <section className="py-32 border-t border-slate-100">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2 text-left">
                    <h2 className="text-6xl md:text-7xl font-serif text-slate-900 mb-14 tracking-tighter leading-[0.9]">Why Scent <br/><span className="text-blue-600 italic font-light">Architecture Matters?</span></h2>
                    <div className="space-y-12">
                        {[
                            { t: "Emotional Connection", d: "75% of our daily emotions are generated by scent, creating deeper bonds with your clientele." },
                            { t: "Increased Brand Recall", d: "Customers are 100x more likely to remember a scented environment than a purely visual one." },
                            { t: "Dwell Time Optimization", d: "Pleasant aromas increase the time customers spend in your space by an average of 20%." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-8 group">
                                <div className="flex-shrink-0 w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 text-2xl border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-slate-900 mb-2 leading-none">{item.t}</h4>
                                    <p className="text-slate-500 font-light text-lg leading-relaxed">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2 w-full">
                    <div className="p-16 bg-slate-900 rounded-[5rem] text-white shadow-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 opacity-20 blur-[100px]" />
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-12 block">Performance Analytics</span>
                        <div className="space-y-16">
                            {[
                                { label: "Customer Satisfaction", val: "94%" },
                                { label: "Staff Productivity", val: "14%" },
                                { label: "Revenue Growth Potential", val: "15%" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-end mb-6">
                                        <span className="text-slate-200 font-light text-xl tracking-tight">{stat.label}</span>
                                        <span className="text-blue-400 font-serif italic text-4xl">{stat.val}</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: stat.val }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-32">
            <div className="bg-blue-600 rounded-[6rem] p-20 md:p-32 text-center relative overflow-hidden shadow-3xl">
                <div className="absolute inset-0 bg-slate-900 opacity-10" />
                <div className="relative z-10">
                    <h3 className="text-6xl md:text-8xl font-serif text-white mb-10 tracking-tighter leading-none">Start Your <br/> <span className="italic text-slate-900 font-light pr-2">Atmospheric Journey</span></h3>
                    <p className="text-3xl font-serif italic text-blue-50 mb-16 opacity-80">“Designing the invisible world of your brand.”</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                        <a href="/contact/" className="px-16 py-7 rounded-full bg-white text-slate-900 font-black text-xs uppercase tracking-[0.3em] hover:scale-110 transition-transform shadow-2xl">
                            Request Custom Scent Audit
                        </a>
                        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="px-16 py-7 rounded-full bg-transparent border-2 border-white text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-blue-600 transition-all">
                            Consult via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 6s infinite ease-in-out;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-30px) rotate(-2deg); }
        }
      `}</style>
    </div>
  );
}