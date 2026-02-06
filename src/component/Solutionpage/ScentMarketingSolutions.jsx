import React from "react";
import { motion } from "framer-motion";
import { 
  SparklesIcon, 
  BuildingOffice2Icon, 
  ArrowPathIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  GlobeAsiaAustraliaIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  BuildingOfficeIcon
} from "@heroicons/react/24/outline";

// --- UPDATED IMAGE IMPORTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/4.webp"; 
import FeatureImg1 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/4.webp"; 
import FeatureImg2 from "../../asset/productimg/CMwebpimg/Titan Diffuser/1.webp"; 

export default function ScentMarketingPage() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full lg:w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-full lg:w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[80vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-12 pb-12 gap-12 text-left">
          
          <div className="w-full lg:w-1/2 flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">
                  Since 2020
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Scent Marketing <br />
                <span className="italic text-slate-400 font-light pr-2">Solutions in UAE</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 font-light max-w-xl mb-8 leading-relaxed">
                Create Memorable Experiences with Professional Scent Systems.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#explore" className="px-8 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
                  Explore Services
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3"
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
              className="relative w-full max-w-[500px] p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50" />
              <img 
                src={HeroImg} 
                alt="Scent Marketing Solution" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-700" 
              />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: INTRO ================= */}
        <section className="py-16 border-t border-slate-100">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-base md:text-lg leading-relaxed text-slate-600 space-y-8 text-left"
          >
            <p className="first-letter:text-6xl md:first-letter:text-7xl first-letter:font-serif first-letter:text-blue-600 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify">
              Scent marketing is more than adding fragrance to a space—it is about creating a consistent and positive experience that people remember. At Cool Max Scent, we provide professional scent marketing solutions in UAE designed for homes, hotels, offices, retail spaces, and commercial environments. Our solutions combine advanced scent diffuser machines, carefully selected fragrances, and ongoing support to help businesses create welcoming and pleasant indoor atmospheres.
            </p>
            <div className="p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl shadow-sm">
              <p className="italic text-slate-500 font-light text-sm md:text-base">
                Since 2020, Cool Max has been working with businesses across the UAE to deliver reliable commercial scent machines, hotel scent machines, and home fragrance systems that perform consistently in real-world environments. Whether you operate a hotel, office, clinic, retail store, or corporate facility, our scent marketing solutions help enhance comfort, brand perception, and overall experience.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHAT IS IT? ================= */}
        <section className="py-16">
          <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-sm text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tighter">What Is Scent Marketing?</h2>
                <div className="space-y-6 text-slate-500 text-base md:text-lg font-light leading-relaxed">
                  <p>
                    Scent marketing is the strategic use of fragrance to influence how people feel within a space. A carefully chosen scent can make an environment feel more welcoming, relaxing, professional, or energizing—without being overpowering.
                  </p>
                  <p>
                    Using professional aroma scent diffusers and air scent machines, fragrance is distributed evenly across a space to create a subtle and consistent experience. Unlike traditional air fresheners, scent marketing systems are designed for controlled diffusion, long-lasting performance, and commercial use.
                  </p>
                  <p className="text-blue-600 font-medium font-serif italic text-xl border-l-4 border-blue-100 pl-6 py-2">
                    At Cool Max, we design scent marketing solutions that suit both home scent systems and large-scale scent machines for business, ensuring the fragrance complements the environment rather than dominating it.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] md:h-[500px] rounded-[2.5rem] border border-white overflow-hidden shadow-xl group"
              >
                 <img src={FeatureImg1} alt="Scent Branding" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl flex items-center gap-4 shadow-xl">
                       <div className="p-2 bg-blue-600 rounded-lg shadow-lg">
                         <GlobeAsiaAustraliaIcon className="w-5 h-5 text-white" />
                       </div>
                       <p className="text-slate-900 font-serif text-base">Enhancing atmospheres across the UAE.</p>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHY IT MATTERS ================= */}
        <section className="py-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-5 hidden lg:block">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[650px] rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl"
                >
                    <img src={FeatureImg2} alt="Professional Diffuser" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <div className="lg:col-span-7">
                <div className="mb-8">
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-4 tracking-tighter leading-none">Why Scent Marketing Matters for Businesses</h2>
                    <p className="text-slate-500 text-lg font-light leading-relaxed max-w-xl">
                        In today’s competitive environment, customer experience plays a key role in decision-making. Scent marketing supports this by influencing how people perceive a space the moment they enter.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { title: "Creates a Positive First Impression", desc: "A pleasant fragrance immediately makes a space feel clean, comfortable, and professional. Whether it’s a hotel air freshener machine in a lobby or a commercial scent diffuser in an office, scent sets the tone instantly." },
                      { title: "Strengthens Brand Identity", desc: "Consistent fragrance helps businesses create a recognizable atmosphere. Many hotels and retail brands use a signature scent to reinforce brand memory and familiarity." },
                      { title: "Enhances Comfort and Well-being", desc: "A balanced scent environment supports relaxation and focus, making it suitable for offices, clinics, gyms, and hospitality spaces." },
                      { title: "Improves Overall Experience", desc: "From customers to employees, scent contributes to a more enjoyable indoor environment without visual or auditory distractions." }
                    ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        className="group p-6 bg-slate-50 border border-slate-100 hover:border-blue-200 rounded-[2rem] transition-all duration-300 shadow-sm"
                    >
                        <div className="w-8 h-1 bg-blue-600 rounded-full mb-4 group-hover:w-full transition-all duration-500" />
                        <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{item.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed font-light">{item.desc}</p>
                    </motion.div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: OUR SOLUTIONS ================= */}
        <section className="py-16 border-t border-slate-100">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Our Scent Marketing Solutions at Cool Max</h2>
            <p className="text-base md:text-lg text-slate-500 font-light">
              Cool Max provides end-to-end scent marketing services designed to be simple, reliable, and effective. We do not follow a one-size-fits-all approach—each solution is tailored to the space, usage, and expectations of the client.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Professional Scent Diffuser Machines", desc: "We supply a wide range of scent diffuser machines suitable for different space sizes, including compact home diffuser machines, commercial scent machines, and powerful HVAC scent diffuser systems.", icon: <WrenchScrewdriverIcon /> },
              { title: "Custom Fragrance Selection", desc: "Our team helps you select fragrances that match your space and purpose—whether calming, refreshing, premium, or neutral. Each fragrance is designed to work efficiently with our home fragrance systems and commercial diffusers.", icon: <SparklesIcon /> },
              { title: "Installation & Configuration", desc: "We ensure proper placement, timing, and intensity so fragrance is distributed evenly without being too strong or inconsistent.", icon: <LightBulbIcon /> },
              { title: "Ongoing Maintenance & Refill Support", desc: "Scent marketing works best when it is consistent. We provide refill services, maintenance support, and system adjustments to ensure uninterrupted performance.", icon: <ArrowPathIcon /> }
            ].map((sol, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="group p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-lg transition-all text-left shadow-sm"
              >
                <div className="w-12 h-12 bg-white text-blue-600 flex items-center justify-center rounded-xl mb-6 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {React.cloneElement(sol.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-base font-black uppercase tracking-tight text-slate-900 mb-2">{sol.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: SPACES SERVED ================= */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 tracking-tighter leading-none">Types of Spaces We Serve with Scent Marketing</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our scent marketing solutions are designed for a wide range of environments across the UAE:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <BuildingOfficeIcon />, title: "Hotels & Hospitality", desc: "We provide premium hotel scent machines and hotel scent diffusers that enhance guest experience in lobbies, corridors, rooms, and common areas." },
              { icon: <BuildingOffice2Icon />, title: "Offices & Corporate Spaces", desc: "Our commercial scent diffusers help create a professional and comfortable work environment that supports focus and productivity." },
              { icon: <ShoppingBagIcon />, title: "Retail Stores & Shopping Malls", desc: "Scent marketing improves customer dwell time and enhances the shopping experience using subtle and controlled fragrance diffusion." },
              { icon: <BuildingOfficeIcon />, title: "Clinics & Healthcare Facilities", desc: "We design calming scent environments that support hygiene and patient comfort without overpowering sensitive spaces." },
              { icon: <SparklesIcon />, title: "Residential Homes & Apartments", desc: "Our scent machines for home and best home fragrance systems help homeowners enjoy a consistent, pleasant living environment." },
            ].map((space, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col items-center text-center hover:bg-white transition-all shadow-sm">
                <div className="w-10 h-10 text-blue-600 mb-6">
                  {React.cloneElement(space.icon, { className: "w-full h-full" })}
                </div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">{space.title}</h3>
                <p className="text-[10px] text-slate-500 leading-relaxed font-bold">{space.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 6: TECHNOLOGY ================= */}
        <section className="py-16 border-t border-slate-100">
           <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-left relative overflow-hidden">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-tighter">Technology Behind Our Scent Marketing Systems</h2>
              <p className="text-slate-400 mb-10 max-w-3xl">Cool Max uses modern scent air machines and diffuser technologies designed for performance and efficiency.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Even fragrance distribution",
                  "Low-noise operation",
                  "Energy-efficient systems",
                  "Adjustable intensity and scheduling",
                  "Compatibility with HVAC systems for large areas"
                ].map((tech, i) => (
                  <div key={i} className="flex items-center gap-3">
                    className="w-5 h-5 text-blue-400" 
                    <span className="text-white text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-slate-400 italic text-sm">From small home scent diffusers to large HVAC scent diffuser installations, our systems are designed for long-term use and easy maintenance.</p>
           </div>
        </section>

        {/* ================= SECTION 7: THE SCENT PROCESS ================= */}
        <section className="py-16">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-12 tracking-tighter text-center leading-none">How Our Scent Marketing Process Works</h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">We follow a clear and transparent process to ensure the right solution for every client.</p>
          <div className="max-w-5xl mx-auto space-y-4">
            {[
              { step: "Step 1", title: "Space Evaluation", desc: "We assess the size, layout, and purpose of your space." },
              { step: "Step 2", title: "Solution Recommendation", desc: "Based on your requirements, we recommend the most suitable scent machine for business or home use." },
              { step: "Step 3", title: "Installation & Testing", desc: "We install and configure the system to ensure even fragrance coverage." },
              { step: "Step 4", title: "Ongoing Support", desc: "Regular refills, maintenance, and performance checks keep the system working smoothly." }
            ].map((proc, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-center p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200 transition-all group"
              >
                <span className="text-4xl md:text-6xl font-serif text-slate-200 group-hover:text-blue-100 transition-colors duration-500">{proc.step}</span>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-1">{proc.title}</h3>
                  <p className="text-sm md:text-base text-slate-500 font-light">{proc.desc}</p>
                </div>
                <ArrowRightIcon className="w-6 h-6 text-slate-300 group-hover:translate-x-2 group-hover:text-blue-600 transition-all hidden md:block" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 8: WHY CHOOSE ================= */}
        <section className="py-16">
          <div className="bg-slate-50 rounded-[3rem] border border-slate-100 p-10 md:p-16 text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">Why Choose Cool Max for Scent Marketing Solutions?</h2>
            <p className="text-slate-500 mb-10 max-w-3xl">Businesses across the UAE choose Cool Max because we focus on reliability, simplicity, and service.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "UAE-based support and service",
                "Wide range of commercial scent machines and home fragrance systems",
                "Scalable solutions for small and large spaces",
                "Consistent fragrance performance",
                "Professional installation and after-sales support"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{reason}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-slate-500 font-serif italic text-lg">We aim to build long-term partnerships by delivering scent marketing solutions that actually work in everyday environments.</p>
          </div>
        </section>

        {/* ================= SECTION 9: MASTER CTA ================= */}
        <section className="py-24 text-center relative px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto relative z-10"
          >
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">
              Let’s Build a <br /> <span className="italic text-blue-600 font-light">Memorable Scent Experience</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Whether you are looking for a scent machine for home, a hotel scent machine, or a full-scale scent machine for business, Cool Max is here to help. Our scent marketing solutions are designed to enhance environments, support comfort, and leave a lasting impression.
            </p>
            
            <p className="text-sm font-black uppercase text-blue-600 tracking-widest mb-8">Looking for professional scent marketing solutions in UAE?</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4"/>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-6 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}