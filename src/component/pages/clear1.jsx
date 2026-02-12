import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import { 
  SwatchIcon, 
  WrenchScrewdriverIcon, 
  HeartIcon,
  ArrowLongRightIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  HomeModernIcon,
  CpuChipIcon,
  ChatBubbleBottomCenterTextIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import AeroBlackPro from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp";
import AirPulse150 from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp";
import ZenBoxMini from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/1.webp";
import DriveMist from "../../asset/productimg/CMwebpimg/AeroMax Pro/1.webp";

const ProcessAndInsights = () => {
  return (
    <div className="bg-[#F8FAFC] font-sans selection:bg-blue-200 selection:text-blue-900 overflow-hidden text-slate-600">
      
      {/* ================= SECTION 1: HOW IT WORKS ================= */}
      <section className="relative py-24 lg:py-16 px-6">
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              The Process
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
              How Our Scent <br/> <span className="italic text-blue-600">Solutions Work</span>
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              Simple, Clear, and Effective
            </p>
          </div>

          {/* Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Consultation", 
                desc: "Understand your space and scenting goals", 
                icon: ChatBubbleBottomCenterTextIcon 
              },
              { 
                title: "Solution Design", 
                desc: "Choose the right diffuser and fragrance", 
                icon: SwatchIcon 
              },
              { 
                title: "Installation", 
                desc: "Professional setup and configuration", 
                icon: WrenchScrewdriverIcon 
              },
              { 
                title: "Ongoing Support", 
                desc: "Refills, maintenance, and adjustments", 
                icon: HeartIcon 
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                className="group relative bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(30,58,138,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(30,58,138,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full border border-slate-100"
              >
                <div>
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-500">
                       <step.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-medium text-slate-900 mb-4 font-serif">{step.title}</h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed">
                       {step.desc}
                    </p>
                </div>
                
                <div className="mt-8 h-1 w-12 bg-slate-100 group-hover:w-full group-hover:bg-blue-500 transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: INSIGHTS ================= */}
      <section className="relative py-24 lg:py-32 bg-white px-6">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-100 pb-12">
             <div>
                <div className="flex items-center gap-2 mb-4">
                    <SparklesIcon className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Resources</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
                  Insights from the World of <br/> <span className="text-blue-600 italic">Scent Marketing.</span>
                </h2>
                <p className="text-slate-500 text-lg">Learn, Explore, and Make Better Decisions</p>
             </div>
             <div className="text-right">
                <p className="text-blue-900 text-xs font-bold uppercase tracking-widest mb-2">Our blog shares practical insights on:</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {[
                { title: "Choosing the right scent diffuser machine", img: AeroBlackPro, icon: CpuChipIcon },
                { title: "Benefits of HVAC scent diffusers", img: AirPulse150, icon: BuildingOfficeIcon },
                { title: "How scent impacts customer experience", img: ZenBoxMini, icon: SparklesIcon },
                { title: "Selecting the best home fragrance system", img: DriveMist, icon: HomeModernIcon }
              ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="group cursor-pointer"
               >
                 <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F8FAFC] mb-6 border border-slate-100">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-contain p-8 mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm text-slate-400 group-hover:text-blue-600 transition-colors">
                        <item.icon className="w-4 h-4" />
                    </div>
                 </div>

                 <h3 className="text-xl font-serif text-slate-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                   {item.title}
                 </h3>
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-slate-600 transition-colors flex items-center gap-2">
                    Read More <ArrowLongRightIcon className="w-4 h-4" />
                 </span>
               </motion.div>
              ))}
          </div>

          <div className="mt-16 text-center">
             <p className="text-slate-400 font-medium text-lg tracking-wide italic">
               Stay informed and make confident decisions.
             </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: CTA ================= */}
      <section className="relative py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="relative bg-[#0F172A] rounded-[3rem] p-12 md:p-24 overflow-hidden text-center shadow-2xl shadow-blue-900/20">
              
             <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] pointer-events-none opacity-20" />
             <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[100px] pointer-events-none opacity-20" />
             <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>

             <div className="relative z-10 max-w-4xl mx-auto">
                
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
                  Let’s Create a Fresher <br/>
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Environment Together.</span>
                </h2>
                
                <p className="text-blue-100/80 text-lg md:text-xl font-light leading-relaxed mb-8">
                  Whether you are looking for a home scent diffuser, a hotel scent diffuser, or a powerful commercial scent machine, Cool Max has the right solution for you.
                </p>

                <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed mb-12 italic">
                   Our team will help you select the right system, plan installation, and ensure long-term performance.
                </p>

                <div className="flex flex-col items-center gap-6">
                   <p className="text-blue-400 text-xs font-extrabold uppercase tracking-[0.2em]">
                      Looking for professional scent solutions in the UAE?
                   </p>

                   <Link to="/contact">
                     <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-50 transition-all flex items-center gap-3 transform hover:scale-105 duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                       Contact Cool Max today for a consultation
                       <ArrowLongRightIcon className="w-4 h-4" />
                     </button>
                   </Link>
                </div>
             </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ProcessAndInsights;