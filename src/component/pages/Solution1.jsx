import React from "react";
import { Link } from "react-router-dom";

// --- Data Structure (Content Unchanged) ---
const solutions = [
  {
    title: "Scent Marketing Solutions",
    path: "/scent-marketing",
    description: "We help businesses create a unique sensory identity through professional scent marketing. Our solutions allow you to select fragrances that match your brand personality while ensuring even diffusion throughout your space.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    ),
  },
  {
    title: "Commercial Aroma Diffusion",
    path: "/commercial-diffusion",
    description: "Our commercial scent diffusers are built for daily use in offices, hotels, malls, clinics, and large facilities. These systems provide steady fragrance output without overpowering the environment.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
  },
  {
    title: "HVAC Scenting Solutions",
    path: "/hvac-scenting",
    description: "For large spaces, we offer HVAC scent diffuser systems that integrate directly with air-conditioning units. These air scent machines distribute fragrance evenly across large areas such as hotel lobbies, shopping malls, airports, and cinemas.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
    ),
  },
  {
    title: "Washroom Hygiene & Air Freshening",
    path: "/washroom-hygiene",
    description: "We provide professional hotel air freshener machines and washroom hygiene solutions to neutralize odors and maintain cleanliness in high-traffic restrooms.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    ),
  },
  {
    title: "Car & Personal Space Scenting",
    path: "/car-scenting",
    description: "Compact car aroma diffusers and small-space diffusers designed for vehicles, cabins, elevators, and personal rooms. Bringing luxury fragrance to your daily commute.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
    ),
  },
  {
    title: "Maintenance & Support",
    path: "/Maintenance",
    description: "With Cool Max, fragrance management becomes simple, controlled, and reliable. We offer full support to ensure your systems perform perfectly year-round.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
];

export default function SolutionsSection() {
  return (
    <section className="relative py-28 text-slate-600 font-sans bg-[#F8FAFC]" id="solutions">
      
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 h-full w-full opacity-40" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      {/* Soft Blue Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* --- Header Section --- */}
        <div className="mb-20 max-w-4xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-4">
             <span className="w-8 h-px bg-blue-600"></span>
             <h2 className="text-xs font-mono font-bold tracking-widest text-blue-600 uppercase">
               Designed for Comfort, Consistency, and Control
             </h2>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
            Complete Scent Solutions for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Homes & Businesses</span>
          </h3>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-blue-600">
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              At Cool Max, we offer end-to-end home scent systems and commercial scenting solutions that are practical, effective, and easy to maintain. Our focus is not just on selling machines, but on helping our clients achieve a consistently fresh and pleasant indoor environment.
            </p>
          </div>
        </div>

        {/* --- Solutions Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start p-10 bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-300 rounded-[2rem] overflow-hidden"
            >
              {/* Top Blue Line On Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon Container */}
              <div className="mb-8 p-4 rounded-2xl bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                {item.icon}
              </div>

              {/* Title: Sans-Serif Bold */}
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors tracking-tight">
                {item.title}
              </h4>

              {/* Description: Sans-Serif Relaxed */}
              <p className="text-slate-500 leading-relaxed mb-10 text-base font-normal">
                {item.description}
              </p>

              {/* Link: Correct and proper redirections */}
              <Link
                to={item.path}
                className="mt-auto inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 group-hover:border-blue-500 group-hover:text-blue-600 transition-all"
              >
                Learn more
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}