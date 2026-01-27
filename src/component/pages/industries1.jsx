import React from "react";
import { 
  BuildingOffice2Icon, 
  SparklesIcon, 
  ShoppingBagIcon, 
  HeartIcon,
  TrophyIcon,
  HomeIcon,
  TruckIcon,
  ArrowRightIcon,
  // New Icons for the Bottom Section
  MapPinIcon,
  SwatchIcon,
  ShieldCheckIcon,
  HandThumbUpIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

export default function IndustriesSection() {
  const industries = [
    {
      name: "Offices & Corporate Spaces",
      desc: "Improve focus, comfort, and professionalism with consistent fragrance diffusion.",
      icon: <BuildingOffice2Icon className="w-6 h-6" />,
    },
    {
      name: "Hotels & Hospitality",
      desc: "Enhance guest experience with premium hotel scent machines and hotel air freshener systems.",
      icon: <SparklesIcon className="w-6 h-6" />,
    },
    {
      name: "Retail Stores & Shopping Malls",
      desc: "Increase customer dwell time and improve shopping experience with ambient scenting.",
      icon: <ShoppingBagIcon className="w-6 h-6" />,
    },
    {
      name: "Hospitals & Clinics",
      desc: "Create a clean, calm environment that supports patient comfort.",
      icon: <HeartIcon className="w-6 h-6" />,
    },
    {
      name: "Gyms, Spas & Wellness Centers",
      desc: "Promote relaxation and freshness with balanced aroma diffusion.",
      icon: <TrophyIcon className="w-6 h-6" />,
    },
    {
      name: "Homes & Apartments",
      desc: "Upgrade everyday living with a reliable home scent system.",
      icon: <HomeIcon className="w-6 h-6" />,
    },
    {
      name: "Cars & Personal Spaces",
      desc: "Compact air scent machines for vehicles and small enclosed areas.",
      icon: <TruckIcon className="w-6 h-6" />,
    }
  ];

  // Data for the new "Why Choose Us" section
  const features = [
    {
        id: "01",
        title: "Deep UAE Market Understanding",
        desc: "We understand local commercial needs and environmental conditions.",
        icon: <MapPinIcon className="w-8 h-8" />,
        style: "md:col-span-2 bg-indigo-600 text-white border-indigo-600", // Featured Card
        iconStyle: "bg-white/20 text-white",
        textStyle: "text-indigo-100",
        numberColor: "text-white/10"
      },
      {
        id: "02",
        title: "Wide Product Range",
        desc: "From scent machines for home to large commercial scent diffuser systems.",
        icon: <SwatchIcon className="w-8 h-8" />,
        style: "bg-white text-slate-900 border-slate-100",
        iconStyle: "bg-indigo-50 text-indigo-600",
        textStyle: "text-slate-500",
        numberColor: "text-slate-100"
      },
      {
        id: "03",
        title: "Reliable Service & Support",
        desc: "Monthly refill plans, maintenance, and technical assistance.",
        icon: <UserGroupIcon className="w-8 h-8" />,
        style: "bg-white text-slate-900 border-slate-100",
        iconStyle: "bg-purple-50 text-purple-600",
        textStyle: "text-slate-500",
        numberColor: "text-slate-100"
      },
      {
        id: "04",
        title: "Safe & Certified Products",
        desc: "Low-noise, efficient oil consumption, and commercial-grade reliability.",
        icon: <ShieldCheckIcon className="w-8 h-8" />,
        style: "bg-white text-slate-900 border-slate-100",
        iconStyle: "bg-green-50 text-green-600",
        textStyle: "text-slate-500",
        numberColor: "text-slate-100"
      },
      {
        id: "05",
        title: "Practical, Not Complicated",
        desc: "Easy-to-use systems designed for real-world usage.",
        icon: <HandThumbUpIcon className="w-8 h-8" />,
        style: "md:col-span-2 bg-white text-slate-900 border-slate-100",
        iconStyle: "bg-blue-50 text-blue-600",
        textStyle: "text-slate-500",
        numberColor: "text-slate-100"
      }
  ];

  return (
    <section className="relative py-28 bg-[#F8FAFC] overflow-hidden font-sans">
      
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-100/60 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]" 
           style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* ================= PART 1: INDUSTRIES ================= */}
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-4">
               <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
               <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-xs">
                 Where Our Scent Solutions Are Used
               </h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              Tailored for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Real-World Environments
              </span>
            </h3>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-slate-500 text-base font-medium max-w-xs leading-relaxed text-right md:text-left">
              Our scent machines for business and home applications are trusted across a wide range of industries in the UAE.
            </p>
          </div>
        </div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {industries.map((item, idx) => (
            <div 
              key={idx}
              className={`group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-100 overflow-hidden
              ${idx === 0 ? "lg:col-span-2" : ""}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3.5 rounded-2xl transition-all duration-300 ${idx === 0 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" : "bg-slate-50 text-slate-400 group-hover:text-indigo-600 group-hover:bg-white group-hover:shadow-md"}`}>
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-indigo-500 text-xs font-bold uppercase tracking-wider">
                    View <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* ================= PART 2: WHY CHOOSE US (New Innovative Section) ================= */}
        
        {/* --- Header --- */}
        <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <span className="text-slate-800 text-xs font-bold tracking-widest uppercase">Why Choose Cool Max</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                Trusted Scent Diffuser <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    Supplier in UAE
                </span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Businesses and homeowners across the UAE choose Cool Max because we focus on performance, reliability, and service.
            </p>
        </div>

        {/* --- Innovative Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((item, idx) => (
                <div 
                    key={idx}
                    className={`group relative p-8 rounded-[2.5rem] border shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full min-h-[280px] ${item.style}`}
                >
                    {/* Giant Decorative Number */}
                    <div className={`absolute top-[-20px] right-[-10px] text-[150px] font-black leading-none opacity-10 select-none transition-transform duration-700 group-hover:scale-110 ${item.numberColor}`}>
                        {item.id}
                    </div>

                    {/* Content Top */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm backdrop-blur-sm ${item.iconStyle}`}>
                        {item.icon}
                    </div>

                    {/* Content Bottom */}
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-3 tracking-tight">{item.title}</h3>
                        <p className={`text-base font-medium leading-relaxed ${item.textStyle}`}>
                            {item.desc}
                        </p>
                    </div>

                    {/* Animated Bottom Line */}
                    <div className={`absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-700 ease-in-out ${item.id === "01" ? "bg-white/30" : "bg-gradient-to-r from-indigo-500 to-purple-500"}`} />
                </div>
            ))}
        </div>

        {/* --- Bottom Quote Banner --- */}
        <div className="relative rounded-3xl bg-white border border-slate-200 p-8 md:p-12 text-center shadow-xl shadow-indigo-500/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-purple-50 opacity-50" />
            <div className="relative z-10 max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-serif text-slate-800 leading-snug">
                    "Our goal is to be a dependable <span className="text-indigo-600 font-bold italic">long-term partner</span>—not just another supplier."
                </h3>
            </div>
        </div>

      </div>
    </section>
  );
}