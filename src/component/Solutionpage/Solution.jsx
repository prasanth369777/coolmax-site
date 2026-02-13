import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CloudIcon, 
  BuildingOffice2Icon, 
  TruckIcon, 
  SparklesIcon, 
  WrenchScrewdriverIcon, 
  BoltIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  Square3Stack3DIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- CORRECTED IMAGE IMPORTS BASED ON CATEGORY MAPPING ---
import MarketingImg from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp"; 
import CommercialImg from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/1.webp";
import HVACImg from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp"; 
import WashroomImg from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/1.webp";
import PersonalImg from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/1.webp";
import MaintenanceImg from "../../asset/productimg/CMwebpimg/Titan Diffuser/1.webp";

export default function AllSolutionsPage() {
  const whatsappNumber = "971522286401";

  // --- SEO METADATA IMPLEMENTATION ---
  useEffect(() => {
    document.title = "Professional Scent & Hygiene Solutions in UAE | Cool Max";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional scent and hygiene solutions in UAE for offices, hotels, malls, and homes. Explore scent marketing, HVAC scenting, and washroom hygiene by Cool Max.");
    }
  }, []);

  const solutions = [
    {
      id: "marketing",
      title: "Scent Marketing Solutions",
      content: "Scent marketing is the strategic use of fragrance to enhance environment experience and brand perception. At Cool Max, our Scent Marketing Solutions UAE help businesses create welcoming, memorable, and comfortable spaces. We design scent strategies using professional aroma scent diffusers that deliver subtle and balanced fragrance.",
      usage: "Hotels and hospitality spaces, Retail stores and malls, Corporate offices, Healthcare and wellness environments.",
      focus: "Our scent marketing solutions focus on consistency, not overpowering fragrance, ensuring comfort for everyone in the space.",
      image: MarketingImg,
      icon: <SparklesIcon />,
      link: "/scent-marketing"
    },
    {
      id: "commercial",
      title: "Commercial Aroma Diffusion",
      content: "For offices, retail stores, clinics, and public facilities, we provide professional Commercial Scent Solutions UAE that operate reliably throughout the day.",
      designedFor: "Medium to large spaces, Continuous daily operation, Even fragrance distribution, Low maintenance requirements.",
      focus: "These systems are ideal for businesses looking for a professional alternative to manual air fresheners.",
      image: CommercialImg,
      icon: <BuildingOffice2Icon />,
      link: "/commercial-diffusion"
    },
    {
      id: "hvac",
      title: "HVAC Scenting Solutions",
      content: "Large commercial environments require centralized solutions. Our HVAC Scenting Solutions UAE integrate fragrance delivery directly into air-conditioning systems, ensuring uniform scent coverage across multiple zones.",
      usage: "Hotels and resorts, Shopping malls, Airports, Large office buildings, Hospitals.",
      focus: "Using professional HVAC scent diffusers, fragrance is distributed discreetly and consistently without visible machines.",
      image: HVACImg,
      icon: <CloudIcon />,
      link: "/hvac-scenting"
    },
    {
      id: "washroom",
      title: "Washroom Hygiene Solutions",
      content: "Washrooms are high-traffic areas that directly impact hygiene perception. Cool Max provides professional Washroom Hygiene Solutions UAE designed to control odors and maintain freshness throughout the day.",
      includes: "Automated air scent machines, Wall-mounted scent diffusers, Battery-operated hygiene systems.",
      usage: "Offices, Schools and colleges, Hospitals and clinics, Restaurants and food chains, Shopping malls.",
      image: WashroomImg,
      icon: <BoltIcon />,
      link: "/washroom-hygiene"
    },
    {
      id: "personal",
      title: "Car & Personal Space Scenting",
      content: "Small spaces also require the right fragrance balance. Our car and personal space scenting solutions are designed for controlled diffusion in compact environments. As a leading Scent Diffuser Supplier Dubai, we ensure quality in every unit.",
      usage: "Cars and company vehicles, Office cabins, Desks and meeting rooms, Home offices and study rooms.",
      focus: "Our car aroma diffusers and compact home diffuser machines offer convenience, portability, and subtle fragrance output.",
      image: PersonalImg,
      icon: <TruckIcon />,
      link: "/car-scenting"
    },
    {
      id: "maintenance",
      title: "Maintenance & Refill Support",
      content: "Scent systems require regular care to perform consistently. Cool Max offers professional maintenance and refill support services in UAE to ensure uninterrupted operation.",
      includes: "Scheduled fragrance refills, System inspection and cleaning, Performance optimization, Preventive maintenance.",
      focus: "Whether you use a hotel scent diffuser, commercial scent machine, or home fragrance system, our service team ensures reliable performance.",
      image: MaintenanceImg,
      icon: <WrenchScrewdriverIcon />,
      link: "/maintenance"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden text-left">
      <link rel="canonical" href="https://coolmaxscent.com/solutions" />
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full lg:w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-full lg:w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[70vh] flex flex-col lg:flex-row items-center pt-20 lg:pt-12 pb-12 gap-12 text-left">
          <div className="w-full lg:w-1/2 flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6 shadow-sm relative z-10 mt-16">
                <Square3Stack3DIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">
                  Professional Scent & Hygiene Solutions in UAE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl xl:text-6xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Professional Scent & <br />
                <span className="italic text-slate-400 font-light pr-2">Hygiene Solutions</span> <br />
                in UAE.
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 font-light max-w-xl mb-8 leading-relaxed">
                Complete Aroma, Air Freshening & Hygiene Systems for Homes and Businesses across the UAE.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#explore" className="px-8 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
                  Explore Solutions
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3 font-sans"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[450px] p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50" />
              <img src={HVACImg} alt="Professional HVAC Scenting" className="w-full h-auto object-contain relative z-10 drop-shadow-2xl" />
            </motion.div>
          </div>
        </section>

        {/* ================= INTRO SECTION ================= */}
        <section className="py-16 border-t border-slate-100 text-left">
          <div className="max-w-4xl">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-8 text-justify md:text-left">
              Creating a clean, fresh, and welcoming environment is no longer optional—it is an essential part of how people experience spaces. At Cool Max, we provide a complete range of Professional Scent & Hygiene Solutions in UAE, helping businesses and homeowners maintain pleasant indoor environments using reliable technology and consistent service.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-8 text-justify md:text-left">
              From Commercial Scent Solutions UAE and HVAC Scenting Solutions UAE to Washroom Hygiene Solutions UAE and car & personal space scenting, our solutions are designed to work in real environments. We focus on practical implementation, long-term performance, and easy maintenance rather than temporary fixes.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light text-justify md:text-left">
              This Solutions page gives you an overview of how Cool Max, your trusted Scent Diffuser Supplier Dubai, supports different spaces and requirements. Each solution is backed by professional equipment, expert guidance, and ongoing support.
            </p>
          </div>
        </section>

        {/* ================= APPROACH SECTION ================= */}
        <section className="py-16">
          <div className="bg-slate-50 rounded-[3rem] border border-slate-100 p-8 md:p-16 text-left relative overflow-hidden shadow-sm">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">Our Approach to Professional Scent & Hygiene Solutions in UAE</h2>
            <p className="text-lg text-slate-500 font-light mb-10 max-w-3xl">
              Every space is different. An office, hotel, hospital, shopping mall, or personal vehicle has unique requirements when it comes to fragrance, hygiene, and air quality. That is why Cool Max does not offer one-size-fits-all products.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-sans">
              {[
                "Understanding the space and usage",
                "Recommending the right scent diffuser machine",
                "Ensuring even and controlled fragrance diffusion",
                "Providing ongoing maintenance & refill support"
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold font-sans">{i+1}</div>
                  <p className="text-slate-700 font-medium text-sm leading-snug">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-slate-600 italic">
              Whether you need a home scent system, a commercial scent machine, or a hotel air freshener machine, our solutions are designed for consistency and reliability.
            </p>
          </div>
        </section>

        {/* ================= STAGGERED SOLUTIONS GRID ================= */}
        <section id="explore" className="py-16">
          {solutions.map((sol, idx) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-12 mb-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative p-8 bg-slate-50 rounded-[3rem] border border-slate-100 flex items-center justify-center h-[350px] md:h-[450px]">
                  <img src={sol.image} alt={sol.title} className="max-h-full w-auto object-contain drop-shadow-2xl" />
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-md">
                    {React.cloneElement(sol.icon, { className: "w-6 h-6" })}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 text-left space-y-6">
                <h3 className="text-4xl font-serif text-slate-900 tracking-tight leading-none">{sol.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed text-justify md:text-left">{sol.content}</p>
                
                {sol.usage && (
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
                    <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-2 font-sans">Commonly used in:</p>
                    <p className="text-sm text-slate-500 font-medium font-sans">{sol.usage}</p>
                  </div>
                )}

                {sol.designedFor && (
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
                    <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-2 font-sans">Designed for:</p>
                    <p className="text-sm text-slate-500 font-medium font-sans">{sol.designedFor}</p>
                  </div>
                )}

                {sol.includes && (
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
                    <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-2 font-sans">Includes:</p>
                    <p className="text-sm text-slate-500 font-medium font-sans">{sol.includes}</p>
                  </div>
                )}

                <div className="pt-4 font-sans">
                  <a href={sol.link} className="inline-flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors border-b-2 border-slate-100 pb-1 font-sans">
                    Explore This Solution <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* ================= WHY CHOOSE SECTION ================= */}
        <section className="py-16">
          <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl text-left font-sans">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 tracking-tight">Why Choose Cool Max Solutions?</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl font-light">
              Businesses choose Cool Max because we focus on long-term reliability and provide the most effective Scent Marketing Solutions UAE.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "UAE-based service and support",
                "Wide range of professional scent systems",
                "Solutions for small to large spaces",
                "Easy-to-maintain equipment",
                "Ongoing maintenance and refill programs",
                "Experience across multiple industries"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-5 rounded-2xl border border-white/10 text-left">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
            <p className="mt-12 text-blue-300 font-serif text-xl italic text-left">"Our goal is to deliver scent and hygiene solutions that work consistently, day after day."</p>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-24 text-center px-4 font-sans">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tighter leading-none text-center">One Partner. <br/><span className="italic text-blue-600 font-light">Complete Professional Scent & Hygiene Solutions in UAE</span></h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-light font-sans text-center">
              From home scent diffusers and hotel scent machines to HVAC Scenting Solutions UAE and washroom hygiene systems, Cool Max provides end-to-end solutions under one roof. We help you select the right system, install it professionally, and support it long after installation.
            </p>
            
            <p className="text-sm font-black uppercase text-blue-600 tracking-widest mb-8 text-center">Looking for professional scent and hygiene solutions in UAE?</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
              <a href="/contact" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-6 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-3">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}