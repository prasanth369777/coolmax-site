import React from "react";
import { motion } from "framer-motion";
import { 
  SparklesIcon, 
  BuildingOffice2Icon, 
 
  ArrowPathIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  StarIcon,
  GlobeAsiaAustraliaIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- UPDATED IMAGE IMPORTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/4.webp"; 
import FeatureImg1 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/4.webp"; 
import FeatureImg2 from "../../asset/productimg/CMwebpimg/Titan Diffuser/1.webp"; 


export default function ScentMarketingPage() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND (White/Grey) ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= NEW HERO SECTION (SPLIT: TEXT LEFT, IMAGE RIGHT) ================= */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center pt-32 lg:pt-0 gap-16 text-left">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:w-1/2 flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] font-sans">
                  Since 2020
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-9xl font-serif text-slate-900 tracking-tighter mb-8 leading-[0.95]">
                Scent <br />
                <span className="italic text-slate-400 font-light pr-2">Marketing</span> <br />
                Solutions.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-10 leading-relaxed font-sans">
                Create Memorable Experiences with Professional Scent Systems.
              </p>

              <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] mb-10 max-w-xl shadow-sm text-left">
                <p className="text-base text-slate-600 leading-relaxed italic font-sans">
                  Scent marketing is more than adding fragrance—it's about creating a consistent and positive experience that people remember across the UAE.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 font-sans">
                <a href="#explore" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
                  Explore Services
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

          {/* RIGHT: IMAGE STAGE (HIGH VISIBILITY) */}
          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full aspect-square max-w-[600px] p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[4rem] shadow-inner border border-slate-50" />
              <img 
                src={HeroImg} 
                alt="Professional Scent Marketing Solution" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_50px_50px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-slate-900/5 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: INTRO (EDITORIAL) ================= */}
        <section className="py-24 border-t border-slate-100" id="explore">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-lg md:text-xl leading-relaxed text-slate-600 space-y-10 text-left font-sans"
          >
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-blue-600 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify">
              Scent marketing is more than adding fragrance to a space—it is about creating a consistent and positive experience that people remember. At Cool Max Scent, we provide professional scent marketing solutions in UAE designed for homes, hotels, offices, retail spaces, and commercial environments. Our solutions combine advanced scent diffuser machines, carefully selected fragrances, and ongoing support to help businesses create welcoming and pleasant indoor atmospheres.
            </p>
            <div className="p-8 bg-slate-50 border-l-4 border-blue-600 rounded-r-3xl shadow-sm">
              <p className="italic text-slate-500 font-light">
                Since 2020, Cool Max has been working with businesses across the UAE to deliver reliable commercial scent machines, hotel scent machines, and home fragrance systems that perform consistently in real-world environments. Whether you operate a hotel, office, clinic, retail store, or corporate facility, our scent marketing solutions help enhance comfort, brand perception, and overall experience.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHAT IS IT? ================= */}
        <section className="py-24">
          <div className="bg-slate-50 border border-slate-100 rounded-[4rem] p-10 md:p-20 overflow-hidden relative shadow-sm text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tighter">What Is Scent Marketing?</h2>
                <div className="space-y-6 text-slate-500 text-lg font-light leading-relaxed font-sans">
                  <p>
                    Scent marketing is the strategic use of fragrance to influence how people feel within a space. A carefully chosen scent can make an environment feel more welcoming, relaxing, professional, or energizing—without being overpowering.
                  </p>
                  <p>
                    Using professional aroma scent diffusers and air scent machines, fragrance is distributed evenly across a space to create a subtle and consistent experience. Unlike traditional air fresheners, scent marketing systems are designed for controlled diffusion, long-lasting performance, and commercial use.
                  </p>
                  <p className="text-blue-600 font-medium font-serif italic text-2xl border-l-4 border-blue-100 pl-6 py-2">
                    At Cool Max, we design scent marketing solutions that suit both home scent systems and large-scale scent machines for business.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[550px] rounded-[3rem] border border-white overflow-hidden shadow-2xl group"
              >
                 <img src={FeatureImg1} alt="Scent Strategy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900/80 to-transparent">
                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4 shadow-xl">
                       <div className="p-3 bg-blue-600 rounded-xl">
                         <GlobeAsiaAustraliaIcon className="w-6 h-6 text-white" />
                       </div>
                       <p className="text-slate-900 font-serif text-lg">Impacting perception through sense.</p>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHY IT MATTERS ================= */}
        <section className="py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-5">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[650px] rounded-[4rem] overflow-hidden border border-slate-100 shadow-xl"
                >
                    <img src={FeatureImg2} alt="Floor Standing Scenting" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <div className="lg:col-span-7">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tighter">Why Scent <br/> Marketing Matters</h2>
                    <p className="text-slate-500 text-xl font-light leading-relaxed font-sans max-w-xl">
                        In today’s competitive environment, customer experience plays a key role. Scent influences how people perceive a space the moment they enter.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-sans">
                    {[
                      { title: "First Impression", desc: "A pleasant fragrance immediately makes a space feel clean, comfortable, and professional. Whether it’s a hotel air freshener machine or commercial diffuser." },
                      { title: "Brand Identity", desc: "Consistent fragrance helps businesses create a recognizable atmosphere. Many hotels use signature scents to reinforce brand memory." },
                      { title: "Well-being", desc: "A balanced scent environment supports relaxation and focus, making it suitable for offices, clinics, gyms, and hospitality spaces." },
                      { title: "Total Experience", desc: "From customers to employees, scent contributes to a more enjoyable indoor environment without visual or auditory distractions." }
                    ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        className="group p-8 bg-slate-50 border border-slate-100 hover:border-blue-200 rounded-[2.5rem] transition-all duration-300"
                    >
                        <div className="w-10 h-1 bg-blue-600 rounded-full mb-6 group-hover:w-full transition-all duration-500" />
                        <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{item.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                    </motion.div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: OUR SOLUTIONS ================= */}
        <section className="py-24 border-t border-slate-100">
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6 font-sans">End-to-End Service</h2>
            <h3 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter">Our Solutions</h3>
            <p className="text-lg text-slate-500 mt-8 font-light font-sans">
              Cool Max provides end-to-end scent marketing services designed to be simple, reliable, and effective across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-sans">
            {[
              { title: "Scent Machines", desc: "We supply a wide range of machines suitable for different sizes, including compact home diffusers and powerful HVAC systems.", icon: <WrenchScrewdriverIcon /> },
              { title: "Fragrance Selection", desc: "Our team helps you select fragrances that match your space and purpose—whether calming, refreshing, or premium.", icon: <SparklesIcon /> },
              { title: "Pro Installation", desc: "We ensure proper placement, timing, and intensity so fragrance is distributed evenly without being inconsistent.", icon: <LightBulbIcon /> },
              { title: "Support & Refills", desc: "Scent marketing works best when it is consistent. We provide regular refill services and technical system adjustments.", icon: <ArrowPathIcon /> }
            ].map((sol, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:border-blue-200 transition-all text-left shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-white text-blue-600 flex items-center justify-center rounded-2xl mb-8 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <div className="w-8 h-8">{sol.icon}</div>
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-4">{sol.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: SPACES SERVED ================= */}
        <section className="py-32">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6 font-sans">Versatility</h2>
            <h3 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter">Spaces We Serve</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-10 font-sans">
            {[
              { title: "Hotels & Hospitality", desc: "Lobbies, corridors, and common guest areas." },
              { title: "Offices & Corporate", desc: "Professional and comfortable work environments." },
              { title: "Retail & Malls", desc: "Improving dwell time and customer shopping experience." },
              { title: "Healthcare Facilities", desc: "Calming scent environments supporting hygiene." },
              { title: "Residential Homes", desc: "Consistent and pleasant daily living atmospheres." },
            ].map((space, i) => (
              <div key={i} className="w-full md:w-[45%] lg:w-[18%] p-10 bg-slate-50 border border-slate-100 rounded-[3rem] flex flex-col items-center text-center hover:bg-white hover:border-blue-200 transition-all duration-500 shadow-sm">
                <BuildingOffice2Icon className="w-12 h-12 text-blue-600 mb-8" />
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4">{space.title}</h3>
                <p className="text-[10px] text-slate-400 leading-relaxed font-bold">{space.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 7: PROCESS ================= */}
        <section className="py-24 border-t border-slate-100 text-left">
          <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-20 tracking-tighter text-center">The Scent Process</h2>
          <div className="max-w-5xl mx-auto space-y-6 font-sans">
            {[
              { step: "01", title: "Space Evaluation", desc: "We assess the size, layout, and purpose of your space." },
              { step: "02", title: "Recommendation", desc: "We recommend the most suitable scent machine for business or home use." },
              { step: "03", title: "Installation", desc: "We install and configure the system to ensure even fragrance coverage." },
              { step: "04", title: "Ongoing Support", desc: "Regular refills and maintenance keep the system working smoothly." }
            ].map((proc, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col md:flex-row gap-10 items-center p-10 rounded-[3rem] border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200 transition-all group"
              >
                <span className="text-6xl font-serif text-slate-200 group-hover:text-blue-100 transition-colors duration-500">{proc.step}</span>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-2">{proc.title}</h3>
                  <p className="text-lg text-slate-500 font-light">{proc.desc}</p>
                </div>
                <ArrowRightIcon className="w-8 h-8 text-slate-300 group-hover:translate-x-2 group-hover:text-blue-600 transition-all hidden md:block" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 8: WHY COOL MAX ================= */}
        <section className="py-24">
          <div className="bg-slate-900 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 tracking-tighter leading-none">Why Choose Cool Max?</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-16 font-sans">
                {[
                  "UAE-based support", 
                  "Professional-grade machines", 
                  "Scalable solutions", 
                  "Consistent performance", 
                  "Expert installation"
                ].map((reason, i) => (
                  <div key={i} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-3 backdrop-blur-md">
                    <StarIcon className="w-5 h-5 text-blue-400"/> {reason}
                  </div>
                ))}
              </div>
              <p className="text-2xl font-serif italic text-white/50 max-w-2xl mx-auto">"Businesses across the UAE trust us for reliability, simplicity, and expert service."</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: MASTER CTA ================= */}
        <section className="py-32 text-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto relative z-10"
          >
            <h2 className="text-5xl md:text-8xl font-serif text-slate-900 mb-10 tracking-tighter leading-none">
              Let’s Build a <br /> <span className="italic text-blue-600 font-light">Scent Experience.</span>
            </h2>
            <p className="text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed font-sans">
              Whether you are looking for a scent machine for home or a full-scale machine for business, Cool Max is here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-sans">
              <a href="/contact" className="w-full sm:w-auto px-16 py-8 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-blue-600 hover:shadow-2xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-5 h-5"/>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-16 py-8 bg-[#25D366] text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-[#128C7E] hover:shadow-2xl flex items-center justify-center gap-3 shadow-xl"
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