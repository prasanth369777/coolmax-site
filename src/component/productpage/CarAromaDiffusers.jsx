import React from "react";
import { motion } from "framer-motion";
import { 
  TruckIcon, 
  ComputerDesktopIcon, 
  BriefcaseIcon, 
  CheckCircleIcon, 
  UserIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  BoltIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";

// --- PRODUCT IMAGES ---
import DriveMistHero from "../../asset/productimg/CMwebpimg//AeroMax Pro/1.webp"; 
import DriveMistProduct from "../../asset/productimg/CMwebpimg/AeroMax Pro/2.webp"; 
import VentoCarProduct from "../../asset/productimg/CMwebpimg/VentoCar/1.webp"; 
import DeskScentProduct from "../../asset/productimg/CMwebpimg/DeskScent/1.webp"; 
import NovaCarProduct from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/1.webp"; 
import FeatureImg from "../../asset/productimg/CMwebpimg/VentoCar/4.webp"; 

/**
 * Meta Data for SEO:
 * Title: Car Aroma Diffusers in UAE | Cool Max Scent
 * Description: Discover premium car aroma diffusers in UAE for personal and commercial vehicles. Compact, safe, and long-lasting scent solutions by Cool Max.
 * URL: https://coolmaxscent.com/car-aroma-diffusers
 */

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function CarAromaDiffusersPage() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[70vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-10 gap-10 text-left">
          
          <div className="lg:w-1/2 flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-sm mt-16">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
                  Smart, Compact Scent Solutions
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Car Aroma <br />
                <span className="italic text-slate-400 font-light pr-2">Diffusers in UAE</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-8 leading-relaxed">
                Smart, Compact Scent Solutions for Cars & Personal Spaces
              </p>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] mb-8 max-w-xl shadow-sm">
                <p className="text-base text-slate-600 leading-relaxed italic">
                  Cool Max offers a premium range of car aroma diffusers in UAE, designed to keep vehicle interiors fresh, clean, and comfortable. Our car scent diffusers are compact, easy to use, and ideal for both personal and professional vehicles where controlled fragrance is important.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#collection" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
                  View Collection
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[500px] p-6"
            >
              <div className="absolute inset-0 bg-slate-50 rounded-[3rem] border border-slate-200 shadow-inner" />
              <img 
                src={DriveMistHero} 
                alt="Professional Car Aroma Diffuser" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]" 
              />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: PRODUCT COLLECTION ================= */}
        <section id="collection" className="py-16 border-t border-slate-100">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter leading-none">Our Car Aroma Diffuser Collection</h2>
            <p className="text-lg text-slate-500 mt-4 font-light max-w-2xl mx-auto">
              Explore our range of professional car aroma diffusers, designed for vehicles and compact personal spaces. Each product focuses on comfort, safety, and long-lasting freshness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { img: DriveMistProduct, name: "DriveScent – Compact Car Aroma Diffuser", path: "/product/drivemist", desc: "A sleek and portable car aroma diffuser designed for everyday driving. It delivers subtle, even fragrance and blends seamlessly into modern vehicle interiors.", suits: "Personal cars • Daily commuters • Small cabins" },
              { img: VentoCarProduct, name: "VentoCar – Advanced Car & Personal Space Diffuser", path: "/product/ventocar", desc: "Designed for longer usage and consistent performance, this diffuser provides steady fragrance output throughout the day.", suits: "Company vehicles • Taxis • Ride-sharing cars" },
              { img: DeskScentProduct, name: "DeskScent – Multi-Use Personal Space Diffuser", path: "/product/deskmist", desc: "A versatile aroma diffuser that works perfectly in both vehicles and office environments. Easy to move, easy to maintain, and visually minimal.", suits: "Cars • Office desks • Meeting rooms • Small rooms" },
              { img: NovaCarProduct, name: "NovaCar – Modern Vehicle Aroma Diffuser", path: "/product/novacar", desc: "A compact and efficient diffuser designed for shared and frequently used vehicles. Provides reliable fragrance diffusion with minimal attention.", suits: "Fleet vehicles • Service cars • Commercial use" },
            ].map((product, idx) => (
              <motion.div key={idx} {...fadeInUp} className="group p-8 rounded-[3rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl text-left">
                <div className="h-72 w-full bg-white rounded-[2rem] mb-8 flex items-center justify-center p-12 border border-slate-100">
                  <img src={product.img} alt={product.name} className="h-full object-contain transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-4">{product.name}</h3>
                <p className="text-slate-500 mb-6 font-light leading-relaxed">{product.desc}</p>
                <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-8">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2">Best suited for:</span>
                  <p className="text-sm font-bold text-slate-700">{product.suits}</p>
                </div>
                <a href={product.path} className="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-600 transition-all">
                  View product details <ArrowRightIcon className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 2: WHY CHOOSE ================= */}
        <section className="py-16">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-left relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-tighter">Why Choose a Professional Car Aroma Diffuser?</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-3xl">Most car fresheners only mask odors temporarily and fade quickly. Cool Max car aroma diffusers offer a smarter and cleaner solution.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Consistent & Controlled Fragrance", desc: "Even scent diffusion without sudden strong smells.", icon: <ClockIcon /> },
                { title: "Long-Lasting Freshness", desc: "Designed for continuous use, not short bursts.", icon: <SparklesIcon /> },
                { title: "Clean & Safe Design", desc: "No liquid spills, no hanging chemicals, no mess.", icon: <ShieldCheckIcon /> },
                { title: "Professional Appearance", desc: "Ideal for business and fleet vehicles.", icon: <BriefcaseIcon /> }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                    {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHERE USED ================= */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 tracking-tighter leading-none">Where Car Aroma Diffusers Are Commonly Used</h2>
            <p className="text-slate-500">Cool Max car aroma diffusers are suitable for more than just vehicles:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <UserIcon />, title: "Personal cars" },
              { icon: <TruckIcon />, title: "Taxis and ride-sharing vehicles" },
              { icon: <BriefcaseIcon />, title: "Company and fleet vehicles" },
              { icon: <ComputerDesktopIcon />, title: "Office cabins and desks" },
              { icon: <UserIcon />, title: "Small meeting rooms" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col items-center hover:bg-white transition-all shadow-sm">
                <div className="w-10 h-10 text-blue-600 mb-6">{item.icon}</div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 text-center">{item.title}</h3>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-slate-500 italic">Many customers use these diffusers as personal space scenting solutions, not just inside cars.</p>
        </section>

        {/* ================= SECTION 4: HOW IT WORKS ================= */}
        <section className="py-16 bg-slate-50 rounded-[4rem] border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-16 items-center px-8 md:px-16 text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">How Car Aroma Diffusers Work</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                Our car aroma diffusers use controlled atomization technology to release fragrance in fine, even particles. This ensures the scent spreads gently throughout the space without becoming overwhelming.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Quiet operation", icon: <Cog6ToothIcon /> },
                  { title: "Efficient fragrance usage", icon: <BoltIcon /> },
                  { title: "Compact, discreet design", icon: <SparklesIcon /> },
                  { title: "Safe for enclosed environments", icon: <ShieldCheckIcon /> }
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={FeatureImg} alt="Diffuser technology" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: CHOOSING THE RIGHT ONE ================= */}
        <section className="py-16 text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">How to Choose the Right Car Aroma Diffuser</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Space Size", desc: "Designed for cars and small enclosed areas." },
              { title: "Usage Pattern", desc: "Daily-use vehicles benefit from steady fragrance systems." },
              { title: "Power Convenience", desc: "Battery or USB-powered options allow flexibility." },
              { title: "Fragrance Preference", desc: "Subtle scents work best in compact spaces." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
                <h3 className="text-blue-600 font-black text-xs uppercase mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-slate-600 font-medium">If you’re unsure, our team can help you select the right option.</p>
        </section>

        {/* ================= SECTION 6: WHY COOL MAX ================= */}
        <section className="py-16">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10 tracking-tighter">Why Choose Cool Max Car Aroma Diffusers?</h2>
            <p className="text-slate-500 mb-10 max-w-3xl">Customers across the UAE trust Cool Max because we focus on reliability and real-world usage.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "UAE-based company with local support",
                "Professional-grade scent diffuser machines",
                "Suitable for personal and commercial use",
                "Easy maintenance and refill support",
                "Trusted by businesses across multiple industries"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-blue-600 font-serif italic text-lg">We don’t just sell products — we support them.</p>
          </div>
        </section>

        {/* ================= SECTION 7: RELATED ================= */}
        <section className="py-16 text-center">
           <h2 className="text-2xl md:text-4xl font-serif text-slate-900 mb-12 tracking-tighter">Related Scenting Solutions</h2>
           <div className="flex flex-wrap justify-center gap-6">
             {["Car & Personal Space Scenting Solutions", "Desktop & Small Space Aroma Diffusers", "Maintenance & Refill Support"].map((sol, i) => (
               <div key={i} className="px-8 py-5 bg-white border border-slate-200 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm cursor-pointer">{sol}</div>
             ))}
           </div>
           <p className="mt-8 text-slate-400 text-sm">These solutions help maintain freshness across all environments.</p>
        </section>

        {/* ================= SECTION 8: MASTER CTA ================= */}
        <section className="py-24 text-center relative px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">
              Need Help Choosing the <br /> <span className="italic text-blue-600 font-light">Right Car Aroma Diffuser?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Whether you need a car aroma diffuser for personal use or for multiple vehicles, Cool Max offers dependable solutions designed for comfort and consistency. Our team will guide you in selecting the right product and provide ongoing support.
            </p>
            <p className="text-sm font-black uppercase text-blue-600 tracking-widest mb-8">Looking for car aroma diffusers in UAE?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4"/>
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