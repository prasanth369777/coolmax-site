import React from "react";
import { motion } from "framer-motion";
import { 
  SparklesIcon, 
  BuildingOffice2Icon, 
  CheckCircleIcon,
  Cog6ToothIcon,
  ArrowPathIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  StarIcon,
  GlobeAsiaAustraliaIcon
} from "@heroicons/react/24/outline";

export default function ScentMarketingPage() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-indigo-500 selection:text-white overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-20 relative">
          
          {/* Decorative Glow Behind Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[150px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              <SparklesIcon className="w-4 h-4 text-indigo-400" />
              <span className="text-indigo-100 text-xs font-bold tracking-widest uppercase">
                Since 2020
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight mb-8 leading-[1.1] drop-shadow-2xl">
              Scent Marketing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 italic">
                Solutions in UAE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto border-t border-white/10 pt-8 mt-8">
              Create Memorable Experiences with Professional Scent Systems
            </p>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 animate-bounce"
          >
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/50 rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 1: INTRO (Editorial Style) ================= */}
        <section className="py-24 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 space-y-10"
          >
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-indigo-400 first-letter:float-left first-letter:mr-4 first-letter:leading-none">
              Scent marketing is more than adding fragrance to a space—it is about creating a consistent and positive experience that people remember. At Cool Max Scent, we provide professional scent marketing solutions in UAE designed for homes, hotels, offices, retail spaces, and commercial environments. Our solutions combine advanced scent diffuser machines, carefully selected fragrances, and ongoing support to help businesses create welcoming and pleasant indoor atmospheres.
            </p>
            <div className="p-8 bg-white/[0.02] border-l-2 border-indigo-500 rounded-r-2xl">
              <p className="italic text-slate-400">
                Since 2020, Cool Max has been working with businesses across the UAE to deliver reliable commercial scent machines, hotel scent machines, and home fragrance systems that perform consistently in real-world environments. Whether you operate a hotel, office, clinic, retail store, or corporate facility, our scent marketing solutions help enhance comfort, brand perception, and overall experience.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHAT IS IT? (Glass Card) ================= */}
        <section className="py-24">
          <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">What Is Scent Marketing?</h2>
                <div className="space-y-6 text-slate-400">
                  <p>
                    Scent marketing is the strategic use of fragrance to influence how people feel within a space. A carefully chosen scent can make an environment feel more welcoming, relaxing, professional, or energizing—without being overpowering.
                  </p>
                  <p>
                    Using professional aroma scent diffusers and air scent machines, fragrance is distributed evenly across a space to create a subtle and consistent experience. Unlike traditional air fresheners, scent marketing systems are designed for controlled diffusion, long-lasting performance, and commercial use.
                  </p>
                  <p className="text-indigo-300 font-medium">
                    At Cool Max, we design scent marketing solutions that suit both home scent systems and large-scale scent machines for business, ensuring the fragrance complements the environment rather than dominating it.
                  </p>
                </div>
              </motion.div>
              
              {/* Visual Abstract */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] bg-gradient-to-br from-indigo-500/10 to-transparent rounded-[2rem] border border-white/5 flex items-center justify-center"
              >
                <GlobeAsiaAustraliaIcon className="w-40 h-40 text-white/10" />
                <div className="absolute inset-0 bg-indigo-500/10 blur-[60px]" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHY IT MATTERS (Bento Grid) ================= */}
        <section className="py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Why Scent Marketing Matters</h2>
            <p className="text-slate-400">
              In today’s competitive environment, customer experience plays a key role in decision-making. Scent marketing supports this by influencing how people perceive a space the moment they enter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Creates a Positive First Impression", desc: "A pleasant fragrance immediately makes a space feel clean, comfortable, and professional. Whether it’s a hotel air freshener machine in a lobby or a commercial scent diffuser in an office, scent sets the tone instantly." },
              { title: "Strengthens Brand Identity", desc: "Consistent fragrance helps businesses create a recognizable atmosphere. Many hotels and retail brands use a signature scent to reinforce brand memory and familiarity." },
              { title: "Enhances Comfort and Well-being", desc: "A balanced scent environment supports relaxation and focus, making it suitable for offices, clinics, gyms, and hospitality spaces." },
              { title: "Improves Overall Experience", desc: "From customers to employees, scent contributes to a more enjoyable indoor environment without visual or auditory distractions." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 rounded-3xl transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1"
              >
                <div className="w-12 h-1 bg-indigo-500 rounded-full mb-6 group-hover:w-24 transition-all duration-300" />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 4: SOLUTIONS (Timeline/Grid) ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Scent Marketing Solutions at Cool Max</h2>
            <p className="text-slate-400 max-w-3xl">
              Cool Max provides end-to-end scent marketing services designed to be simple, reliable, and effective. We do not follow a one-size-fits-all approach—each solution is tailored to the space, usage, and expectations of the client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Professional Scent Diffuser Machines", desc: "We supply a wide range of scent diffuser machines suitable for different space sizes, including compact home diffuser machines, commercial scent machines, and powerful HVAC scent diffuser systems.", icon: <WrenchScrewdriverIcon className="w-6 h-6"/> },
              { title: "Custom Fragrance Selection", desc: "Our team helps you select fragrances that match your space and purpose—whether calming, refreshing, premium, or neutral. Each fragrance is designed to work efficiently with our home fragrance systems and commercial diffusers.", icon: <SparklesIcon className="w-6 h-6"/> },
              { title: "Installation & Configuration", desc: "We ensure proper placement, timing, and intensity so fragrance is distributed evenly without being too strong or inconsistent.", icon: <LightBulbIcon className="w-6 h-6"/> },
              { title: "Ongoing Maintenance & Refill Support", desc: "Scent marketing works best when it is consistent. We provide refill services, maintenance support, and system adjustments to ensure uninterrupted performance.", icon: <ArrowPathIcon className="w-6 h-6"/> }
            ].map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 bg-gradient-to-b from-white/[0.05] to-transparent rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {sol.icon}
                </div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  {sol.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{sol.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: SPACES SERVED ================= */}
        <section className="py-24 bg-white/[0.015]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 text-center">Types of Spaces We Serve</h2>
            <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">Our scent marketing solutions are designed for a wide range of environments across the UAE:</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { title: "Hotels & Hospitality", desc: "We provide premium hotel scent machines and hotel scent diffusers that enhance guest experience in lobbies, corridors, rooms, and common areas." },
                { title: "Offices & Corporate Spaces", desc: "Our commercial scent diffusers help create a professional and comfortable work environment that supports focus and productivity." },
                { title: "Retail Stores & Shopping Malls", desc: "Scent marketing improves customer dwell time and enhances the shopping experience using subtle and controlled fragrance diffusion." },
                { title: "Clinics & Healthcare Facilities", desc: "We design calming scent environments that support hygiene and patient comfort without overpowering sensitive spaces." },
                { title: "Residential Homes & Apartments", desc: "Our scent machines for home and best home fragrance systems help homeowners enjoy a consistent, pleasant living environment." },
              ].map((space, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02 }}
                  className="w-full md:w-[48%] lg:w-[30%] p-6 rounded-2xl bg-[#0B0F19] border border-white/5 hover:border-indigo-500/40 transition-all"
                >
                  <BuildingOffice2Icon className="w-8 h-8 text-indigo-500 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{space.title}</h3>
                  <p className="text-slate-400 text-sm">{space.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: TECHNOLOGY (Dark Card) ================= */}
        <section className="py-24">
          <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-[2.5rem] border border-white/10 p-10 md:p-20 overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Technology Behind Our Scent Marketing Systems</h2>
                <p className="text-slate-300 mb-8 text-lg">
                  Cool Max uses modern scent air machines and diffuser technologies designed for performance and efficiency. From small home scent diffusers to large HVAC scent diffuser installations, our systems are designed for long-term use and easy maintenance.
                </p>
                
                <ul className="space-y-4">
                  {["Even fragrance distribution", "Low-noise operation", "Energy-efficient systems", "Adjustable intensity and scheduling", "Compatibility with HVAC systems for large areas"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-indigo-100">
                      <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center">
                 <div className="w-64 h-64 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
                    <div className="absolute inset-0 rounded-full border border-white/5 scale-125" />
                    <Cog6ToothIcon className="w-20 h-20 text-white/50" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: PROCESS (Vertical Steps) ================= */}
        <section className="py-24">
          <h2 className="text-4xl font-serif text-white mb-16 text-center">How Our Scent Marketing Process Works</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: "01", title: "Space Evaluation", desc: "We assess the size, layout, and purpose of your space." },
              { step: "02", title: "Solution Recommendation", desc: "Based on your requirements, we recommend the most suitable scent machine for business or home use." },
              { step: "03", title: "Installation & Testing", desc: "We install and configure the system to ensure even fragrance coverage." },
              { step: "04", title: "Ongoing Support", desc: "Regular refills, maintenance, and performance checks keep the system working smoothly." }
            ].map((proc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
              >
                <span className="text-4xl font-black text-indigo-500/20">{proc.step}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{proc.title}</h3>
                  <p className="text-slate-400">{proc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 8: WHY CHOOSE US ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-white mb-8">Why Choose Cool Max for Scent Marketing Solutions?</h2>
              <p className="text-slate-400 mb-8 text-lg">
                Businesses across the UAE choose Cool Max because we focus on reliability, simplicity, and service. We aim to build long-term partnerships by delivering scent marketing solutions that actually work in everyday environments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["UAE-based support and service", "Wide range of commercial scent machines", "Scalable solutions for small and large spaces", "Consistent fragrance performance", "Professional installation"].map((reason, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-indigo-200 bg-indigo-950/30 px-4 py-3 rounded-lg border border-indigo-500/10">
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    {reason}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual */}
            <div className="h-full min-h-[300px] bg-gradient-to-tr from-white/[0.05] to-transparent rounded-3xl border border-white/10 flex items-center justify-center">
               <span className="text-9xl font-black text-white/5">UAE</span>
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: CTA (Premium) ================= */}
        <section className="pt-20 pb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-gradient-to-b from-indigo-950/50 to-[#020617] p-12 rounded-[3rem] border border-indigo-500/30 shadow-2xl shadow-indigo-900/20"
          >
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">Let’s Build a Memorable <br/> Scent Experience</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-light">
              Whether you are looking for a scent machine for home, a hotel scent machine, or a full-scale scent machine for business, Cool Max is here to help. Our scent marketing solutions are designed to enhance environments, support comfort, and leave a lasting impression.
            </p>
            
            <p className="text-indigo-400 font-bold mb-10 uppercase tracking-[0.2em] text-sm">
              Looking for professional scent marketing solutions in UAE?
            </p>
            
            <a href="/contact" className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-[#020617] font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
              <span className="relative z-10">Contact Cool Max Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </section>

      </div>
    </div>
  );
}