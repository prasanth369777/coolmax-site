import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

import { 
  SparklesIcon, 
  UserGroupIcon, 
  GlobeAltIcon, 
  LightBulbIcon,
  BriefcaseIcon, 
  BuildingOffice2Icon,
  CheckBadgeIcon,
  ArrowRightIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";
import AboutImg from "../../src/asset/about/about1.png"; 

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, delayChildren: 0.2
    },
  },
};

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-white overflow-hidden font-sans selection:bg-indigo-500 selection:text-white text-slate-600">
      
      {/* ================= SEO METADATA ================= */}
    
        <link rel="canonical" href="https://www.coolmaxscent.com/about-us/" />
   
      {/* ================= GLOBAL BACKGROUND (White & Grey Gradient) ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-slate-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px]" />
        {/* Subtle Grid Pattern for light theme */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-100" />
      </div>

      {/* --- MAX WIDTH CONTAINER --- */}
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 py-24 z-10">

        {/* ================= 1. HEADER & INTRO ================= */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="max-w-5xl mx-auto text-center mb-24 relative"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-white/80 backdrop-blur-md mb-8 shadow-sm relative z-10 mt-16">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-indigo-600 text-xs font-bold tracking-widest uppercase">
              About Cool Max
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif text-slate-900 mb-8 leading-[1.1] tracking-tight relative z-10">
            Your Trusted Partner for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-slate-500 italic">
              Professional Scent Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-8xl mx-auto mb-10 relative z-10">
            Cool Max General Trading is a Dubai-based company providing professional scent diffuser machines and fragrance solutions for homes and commercial spaces across the UAE. Since 2020, we have been supporting businesses with reliable home fragrance systems, commercial scent machines, and HVAC scent diffuser solutions designed for consistent performance.
          </p>
          
          <div className="relative z-10 inline-block">
             <p className="text-lg md:text-xl text-slate-700 font-medium bg-slate-50 py-6 px-8 rounded-2xl border border-slate-200 shadow-sm">
               Our focus is simple—helping clients create fresh, comfortable, and welcoming environments using practical, easy-to-maintain scenting solutions.
             </p>
          </div>
        </motion.div>

        {/* ================= 2. WHO WE ARE (Split Layout) ================= */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32"
        >
          {/* Text Content */}
          <div className="lg:pr-10">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 relative inline-block">
              Who We Are
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-indigo-500 to-slate-400 rounded-full"></span>
            </h2>
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p>
                Cool Max is not just a product supplier—we are a solution-driven scent partner. We work closely with our clients to understand their space, usage patterns, and expectations before recommending the right aroma scent diffuser or air scent machine. Our team focuses on matching the correct diffuser technology with suitable fragrance solutions to ensure effective and controlled scent diffusion.
              </p>
              <p>
                We provide professional home scent systems, commercial scent diffusers, and hotel air freshener machines that are suitable for small rooms, large commercial areas, and everything in between. Our range includes battery-operated diffusers, wall-mounted systems, floor-standing scent machines, and HVAC-integrated solutions.
              </p>
              
              <div className="p-6 bg-slate-50 border-l-2 border-indigo-500 rounded-r-xl shadow-sm">
                <p className="text-slate-800 font-medium italic">
                  By combining the right equipment with ongoing service support, Cool Max ensures that scenting remains consistent and reliable—not overpowering, not inconsistent, and not complicated.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-slate-200 rounded-[2.5rem] rotate-3 opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white shadow-xl">
              <img
                src={AboutImg}
                alt="Cool Max Scent Machine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </motion.div>

        {/* ================= 3. OUR JOURNEY (Grey Theme Box) ================= */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="bg-slate-50 border border-slate-200 rounded-[3rem] p-10 md:p-20 relative overflow-hidden mb-32 shadow-sm"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-10 tracking-tight">Our Journey</h2>
            <div className="grid md:grid-cols-2 gap-16 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                Cool Max General Trading was founded in 2020 with a clear objective: to provide dependable and easy-to-manage scent and hygiene solutions tailored to the UAE market. We identified a growing demand for professional scent diffuser machines that could operate efficiently in commercial and institutional environments without requiring constant attention or complex maintenance.
              </p>
              <p>
                Starting with a focus on hygiene and washroom solutions, we gradually expanded our offerings to include home diffuser machines, commercial scent machines, and large-area HVAC scent diffuser systems. Over the years, we have built a diverse product portfolio that supports a wide range of applications—from residential homes to hotels, offices, hospitals, malls, and large facilities.
              </p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-slate-200">
                <p className="text-xl text-slate-800 font-medium leading-relaxed max-w-4xl">
                  Today, Cool Max serves public and private hospitals, schools, corporate offices, retail spaces, listed companies, food chains, and facility management providers across the UAE. Our growth has been driven by consistent service, practical solutions, and long-term client relationships.
                </p>
            </div>
          </div>
        </motion.div>

        {/* ================= 4. WHAT WE DO (Grid) ================= */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">What We Do</h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
              At Cool Max, we provide end-to-end scenting solutions designed for simplicity and performance.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              "Supplying professional scent diffuser machines for homes and businesses",
              "Designing home fragrance systems and commercial scenting plans",
              "Installing and configuring scent air machines based on space size",
              "Providing hotel scent diffusers and hotel air freshener machines",
              "Offering HVAC scent diffuser solutions for large areas",
              "Supporting clients with refills, maintenance, and technical assistance"
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="group p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-indigo-200 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-slate-50"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                   <CheckBadgeIcon className="w-5 h-5" />
                </div>
                <p className="text-lg text-slate-700 font-medium leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <p className="text-center mt-16 text-xl text-indigo-700 font-serif italic max-w-4xl mx-auto opacity-90">
            "From a single scent machine for home to large commercial scent diffuser installations, we ensure that each solution is tailored to the environment it serves."
          </p>
        </div>

        {/* ================= 5. HOW WE WORK (Grey/White Section) ================= */}
        <div className="mb-32 bg-slate-900 border border-slate-800 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          {/* Subtle Decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">How We Work With Our Clients</h2>
            <p className="text-slate-400 text-lg mb-16 max-w-3xl leading-relaxed font-light">
              Our approach is structured, transparent, and client-focused. We believe successful scenting begins with understanding, not assumptions.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              {/* Connecting Line (Desktop) */}
              <div className="absolute top-8 left-0 w-full h-px bg-white/5 hidden lg:block -z-10"></div>

              {[
                { step: "01", title: "Consultation", desc: "We evaluate the space, usage patterns, and expectations to understand the real requirement." },
                { step: "02", title: "Solution Design", desc: "Based on space size and purpose, we recommend the most suitable scent diffuser machine and fragrance options." },
                { step: "03", title: "Installation", desc: "Our team ensures correct placement, timing, and intensity for even fragrance distribution." },
                { step: "04", title: "Ongoing Support", desc: "We provide refill plans, maintenance support, and adjustments to ensure uninterrupted performance." }
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Number Circle */}
                  <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl font-bold text-white mb-8 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors shadow-lg">
                    {item.step}
                  </div>
                  
                  <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-base font-light leading-relaxed group-hover:text-white transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <p className="mt-20 text-lg text-indigo-300 font-medium text-center border-t border-white/5 pt-10">
               This process ensures our scent machines for business and home applications deliver consistent results over time.
            </p>
          </div>
        </div>

        {/* ================= 6. INDUSTRIES SERVED (Cards) ================= */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 text-center mb-16">Industries We Serve</h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Offices & Corporate Spaces", desc: "Improve employee comfort and create a professional atmosphere with controlled fragrance diffusion.", icon: <BuildingOffice2Icon className="w-6 h-6"/> },
              { title: "Hotels & Hospitality", desc: "Enhance guest experience using premium hotel scent machines and hotel air freshener systems.", icon: <SparklesIcon className="w-6 h-6"/> },
              { title: "Retail Stores & Malls", desc: "Create a pleasant shopping environment that encourages longer customer visits.", icon: <UserGroupIcon className="w-6 h-6"/> },
              { title: "Hospitals & Clinics", desc: "Support hygiene and comfort with subtle, calming fragrance solutions.", icon: <ShieldCheckIcon className="w-6 h-6"/> },
              { title: "Schools & Institutions", desc: "Maintain clean, fresh indoor air in classrooms and common areas.", icon: <LightBulbIcon className="w-6 h-6"/> },
              { title: "Residential Homes", desc: "Upgrade everyday living with reliable home diffuser machines and best home fragrance systems.", icon: <ArrowRightIcon className="w-6 h-6"/> },
            ].map((industry, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="group p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-indigo-300 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-slate-50"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform shadow-inner">
                   {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-indigo-700 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  {industry.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= 7. WHY CHOOSE COOL MAX ================= */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32 items-center border-t border-slate-200 pt-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">
               Why Choose Cool Max
            </h2>
            <p className="text-lg text-slate-500 font-light mb-12 leading-relaxed">
              Businesses across the UAE choose Cool Max for our reliability, product range, and service quality. We aim to be a long-term scent partner, not just a one-time supplier.
            </p>
            <ul className="space-y-6">
              {[
                { title: "UAE Market Experience", desc: "Deep understanding of local conditions and commercial needs" },
                { title: "Wide Product Portfolio", desc: "From home scent diffusers to large commercial scent machines" },
                { title: "Scalable Solutions", desc: "Suitable for small rooms and large HVAC-connected spaces" },
                { title: "Low Maintenance Systems", desc: "Designed for continuous, hassle-free operation" },
                { title: "Ongoing Support", desc: "Refills, service, and technical assistance" },
                { title: "Safe & Certified Products", desc: "Suitable for commercial environments" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <div className="mt-1 p-1 bg-indigo-100 rounded-full text-indigo-600 shrink-0">
                    <CheckBadgeIcon className="w-5 h-5" />
                  </div>
                  <div>
                      <span className="text-slate-900 font-bold text-lg block mb-1">{item.title}</span>
                      <span className="text-slate-500 font-light text-base">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Trust Box (Light Gradient Theme) */}
          <div className="bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 rounded-[3rem] p-12 text-slate-900 relative overflow-hidden h-full flex flex-col justify-center shadow-lg">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px]"></div>

            <h3 className="text-3xl font-serif text-slate-900 mb-8 relative z-10">Trusted by Businesses Across UAE</h3>
            <p className="text-lg text-slate-600 font-light mb-12 leading-relaxed relative z-10">
              Cool Max solutions are trusted by hospitals, schools, corporate offices, retail chains, food service brands, and facility management companies throughout the UAE. Our clients rely on us for practical solutions that work reliably in real-world environments.
            </p>
            <div className="relative z-10">
                <button className="w-full py-5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition shadow-xl text-lg uppercase tracking-widest">
                  View Our Clients
                </button>
            </div>
          </div>
        </div>

        {/* ================= 8. VISION, MISSION & VALUES ================= */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {/* Vision */}
            <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-200 hover:bg-white transition-all shadow-sm">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl mb-8 flex items-center justify-center text-indigo-600 text-2xl shadow-sm"><GlobeAltIcon className="w-8 h-8"/></div>
              <h3 className="text-3xl font-serif text-slate-900 mb-6">Our Vision</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                To become a trusted provider of professional, cost-effective scent and hygiene solutions that support cleaner, healthier environments for future generations.
              </p>
            </div>
            {/* Mission */}
            <div className="bg-slate-900 rounded-[2.5rem] p-12 border border-slate-800 hover:bg-slate-800 transition-all shadow-2xl relative overflow-hidden">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl mb-8 flex items-center justify-center text-white text-2xl relative z-10 shadow-lg"><BriefcaseIcon className="w-8 h-8"/></div>
              <h3 className="text-3xl font-serif text-white mb-6 relative z-10">Our Mission</h3>
              <p className="text-lg text-slate-300 font-light leading-relaxed relative z-10">
                To deliver reliable, eco-conscious, and high-quality home scent systems, commercial scent diffusers, and fragrance solutions with a strong focus on customer satisfaction and consistent service.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-serif text-slate-900 mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Innovative Thinking", desc: "We continuously improve our products and solutions to meet evolving needs.", icon: "💡" },
                { title: "Strategic Partnerships", desc: "We work closely with suppliers and clients to deliver better outcomes.", icon: "🤝" },
                { title: "Dependable Delivery", desc: "We ensure consistent product quality and reliable service.", icon: "📦" },
                { title: "Environmental Responsibility", desc: "We promote efficient, low-consumption, and eco-friendly scenting solutions.", icon: "🌿" }
              ].map((val, i) => (
                <div key={i} className="px-8 py-10 bg-white border border-slate-100 rounded-[2rem] hover:border-indigo-300 hover:bg-slate-50 shadow-sm transition-all duration-300">
                  <div className="text-4xl mb-6">{val.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= 9. FINAL CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-50 border border-slate-200 rounded-[3rem] p-12 md:p-24 text-center text-slate-900 relative overflow-hidden shadow-lg backdrop-blur-sm"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Let’s Create Better Scent <br/> 
              <span className="italic text-indigo-600">Experiences Together</span>
            </h2>
            <p className="text-slate-600 text-xl font-light mb-12 leading-relaxed max-w-3xl mx-auto">
              Whether you are looking for a scent machine for home, a hotel scent diffuser, or a scalable scent machine for business, Cool Max is here to help. Our team will guide you in choosing the right solution, setting it up correctly, and maintaining consistent performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact/">
                <button className="px-12 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition shadow-2xl text-lg uppercase tracking-wider transform hover:-translate-y-1">
                  Contact Cool Max Today
                </button>
              </Link>
              <Link to="/products">
                <button className="px-12 py-5 border border-slate-300 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-50 transition text-lg uppercase tracking-wider shadow-sm">
                  Browse Products
                </button>
              </Link>
            </div>
            
            <p className="mt-12 text-base text-slate-400 font-medium tracking-wide">
              Looking for professional scent solutions in the UAE? Start creating fresher, more welcoming spaces.
            </p>
          </div>
        </motion.div>

      </div>
   </section>
  );
}