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

/* ================= IMAGE IMPORTS ================= */
import D100Black from "../../asset/productimg/Model D100/Model D100 - 1.jpeg"; 
import M41BBlack from "../../asset/productimg/Model M41-B/Model M41-B - 1.jpeg"; 
import VS160Black from "../../asset/productimg/Model VS160/Model VS160 - 2.jpeg"; 
import H11Black from "../../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 1.jpeg"; 

const ProcessAndInsights = () => {
  return (
    <div className="bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      
      {/* ================= SECTION 1: HOW IT WORKS ================= */}
      <section className="relative py-24 lg:py-32 px-6">
        {/* Ambient Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 border-b border-blue-100/50 pb-8">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold text-blue-600 uppercase tracking-[0.2em] mb-4 block">
                The Process
              </span>
              {/* Font Style Change: Sans-Serif, Tighter Tracking, Bolder */}
              <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1] tracking-tighter mb-4">
                How Our Scent <br />
                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Solutions Work</span>
              </h2>
              <p className="text-xl font-medium text-slate-500 tracking-tight">
                Simple, Clear, and Effective
              </p>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Connecting Line (Desktop) - Blue Gradient */}
            <div className="absolute top-[3rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent hidden lg:block -z-10"></div>

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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white p-8 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-white rounded-full border border-blue-100 flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-800 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-500 relative z-10 group-hover:bg-gradient-to-tr group-hover:from-blue-50 group-hover:to-white">
                  <step.icon className="w-8 h-8" />
                </div>
                
                {/* Font Style Change: Sans-Serif Headings */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{step.title}</h3>
                
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: INSIGHTS ================= */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-blue-50 px-6 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">
        
        {/* Atmosphere */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-900/20 backdrop-blur-sm mb-6">
                <SparklesIcon className="w-4 h-4 text-blue-300" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Blog & Resources</span>
             </div>
             {/* Font Style Change: Modern Bold Sans */}
             <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white tracking-tighter">
               Insights from the World of <br/>
               <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Scent Marketing.</span>
             </h2>
             <p className="text-xl font-medium text-blue-200 mb-4 tracking-tight">
               Learn, Explore, and Make Better Decisions
             </p>
             <p className="text-blue-400 text-sm font-bold uppercase tracking-widest">
               Our blog shares practical insights on:
             </p>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "Choosing the right scent diffuser machine", img: D100Black, icon: CpuChipIcon },
               { title: "Benefits of HVAC scent diffusers", img: M41BBlack, icon: BuildingOfficeIcon },
               { title: "How scent impacts customer experience", img: VS160Black, icon: SparklesIcon },
               { title: "Selecting the best home fragrance system", img: H11Black, icon: HomeModernIcon }
             ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="group relative bg-gradient-to-br from-slate-800 to-blue-900 rounded-[2rem] border border-blue-400/10 hover:border-blue-400/30 overflow-hidden transition-all duration-500 shadow-lg shadow-blue-900/20"
               >
                  {/* Image Area */}
                  <div className="relative aspect-square overflow-hidden bg-blue-950/50 p-8">
                     <img 
                       src={item.img} 
                       alt={item.title} 
                       className="w-full h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" 
                     />
                     <div className="absolute top-4 right-4 p-2 bg-blue-950/80 rounded-full backdrop-blur-sm border border-blue-400/20">
                        <item.icon className="w-4 h-4 text-blue-200" />
                     </div>
                  </div>

                  {/* Text Area */}
                  <div className="p-8">
                     {/* Font Style Change: Bold Sans */}
                     <h3 className="text-lg font-bold text-white mb-4 group-hover:underline decoration-blue-400 underline-offset-4 transition-all leading-snug">
                       {item.title}
                     </h3>
                     <div className="flex items-center gap-2 text-[10px] font-extrabold text-blue-400 uppercase tracking-widest group-hover:text-blue-200 transition-colors">
                        Read More <ArrowLongRightIcon className="w-4 h-4" />
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-blue-300 font-medium text-lg tracking-wide">
              Stay informed and make confident decisions.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: CTA ================= */}
      <section className="relative py-24 lg:py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* CTA Background */}
          <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-[3rem] p-12 md:p-20 overflow-hidden text-center border border-blue-100/50 shadow-xl shadow-blue-100/20">
             
             {/* Decor */}
             <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15)_0%,transparent_60%)]"></div>
             
             <div className="relative z-10 max-w-4xl mx-auto">
                {/* Font Style Change: Modern Heavy Sans */}
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
                  Let’s Create a Fresher <br/>
                  <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Environment Together.</span>
                </h2>
                
                <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">
                  Whether you are looking for a home scent diffuser, a hotel scent diffuser, or a powerful commercial scent machine, Cool Max has the right solution for you.
                </p>
                
                <p className="text-slate-700 text-lg font-medium leading-relaxed mb-12">
                  Our team will help you select the right system, plan installation, and ensure long-term performance.
                </p>

                <div className="flex flex-col items-center gap-6">
                   <p className="text-blue-600 text-sm font-extrabold uppercase tracking-widest">
                     Looking for professional scent solutions in the UAE?
                   </p>
                   
                   <Link to="/contact">
                     <button className="px-10 py-5 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:from-blue-800 hover:to-blue-950 transition-all shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1 flex items-center gap-3">
                        <span></span> Contact Cool Max today for a consultation
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