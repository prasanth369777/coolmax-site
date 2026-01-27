import React from "react";
import { motion } from "framer-motion";
// Ensure you have this image or replace it
import AboutImg from "../../src/asset/about/about1.png"; 

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-slate-50 overflow-hidden">
      
      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white to-slate-50 z-0" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-gray-200/40 rounded-full blur-[80px] pointer-events-none" />

      {/* --- CHANGED: Increased max-width from 7xl to 1600px (approx 8xl/9xl) --- */}
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 py-24 z-10">

        {/* ================= 1. HEADER & INTRO ================= */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-widest uppercase mb-4 mt-10">
            Since 2020
          </span>
          <h1 className="text-4xl md:text-7xl font-serif text-gray-900 font-bold mb-6 leading-tight">
            Your Trusted Partner for <br/>
            <span className="text-slate-600">Professional Scent Solutions in UAE</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Cool Max General Trading is a Dubai-based company providing professional scent diffuser machines and fragrance solutions for homes and commercial spaces across the UAE. Since 2020, we have been supporting businesses with reliable home fragrance systems, commercial scent machines, and HVAC scent diffuser solutions designed for consistent performance.
          </p>
          <p className="mt-6 text-xl text-gray-800 font-medium">
            Our focus is simple—helping clients create fresh, comfortable, and welcoming environments using practical, easy-to-maintain scenting solutions.
          </p>
        </motion.div>

        {/* ================= 2. WHO WE ARE (Split Layout) ================= */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-28"
        >
          {/* Text Content */}
          <div className="lg:pr-10">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 relative inline-block">
              Who We Are
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Cool Max is not just a product supplier—we are a solution-driven scent partner. We work closely with our clients to understand their space, usage patterns, and expectations before recommending the right aroma scent diffuser or air scent machine. Our team focuses on matching the correct diffuser technology with suitable fragrance solutions to ensure effective and controlled scent diffusion.
              </p>
              <p>
                We provide professional home scent systems, commercial scent diffusers, and hotel air freshener machines that are suitable for small rooms, large commercial areas, and everything in between. Our range includes battery-operated diffusers, wall-mounted systems, floor-standing scent machines, and HVAC-integrated solutions.
              </p>
              <p className="font-medium text-gray-800 border-l-4 border-blue-600 pl-6 py-1">
                By combining the right equipment with ongoing service support, Cool Max ensures that scenting remains consistent and reliable—not overpowering, not inconsistent, and not complicated.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-2 opacity-10 scale-[1.02]"></div>
            <img
              src={AboutImg}
              alt="Cool Max Scent Machine"
              className="relative z-10 w-full rounded-3xl shadow-2xl border border-gray-100 bg-white object-cover max-h-[600px]"
            />
          </div>
        </motion.div>

        {/* ================= 3. OUR JOURNEY (Full Width Box) ================= */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="bg-white rounded-[2rem] p-10 md:p-16 shadow-lg border border-gray-100 mb-28"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">Our Journey</h2>
          <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-600 leading-relaxed">
            <p>
              Cool Max General Trading was founded in 2020 with a clear objective: to provide dependable and easy-to-manage scent and hygiene solutions tailored to the UAE market. We identified a growing demand for professional scent diffuser machines that could operate efficiently in commercial and institutional environments without requiring constant attention or complex maintenance.
            </p>
            <p>
              Starting with a focus on hygiene and washroom solutions, we gradually expanded our offerings to include home diffuser machines, commercial scent machines, and large-area HVAC scent diffuser systems. Over the years, we have built a diverse product portfolio that supports a wide range of applications—from residential homes to hotels, offices, hospitals, malls, and large facilities.
            </p>
          </div>
          <p className="mt-8 text-xl text-gray-800 font-medium pt-8 border-t border-gray-100">
            Today, Cool Max serves public and private hospitals, schools, corporate offices, retail spaces, listed companies, food chains, and facility management providers across the UAE. Our growth has been driven by consistent service, practical solutions, and long-term client relationships.
          </p>
        </motion.div>

        {/* ================= 4. WHAT WE DO (Grid) ================= */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900">What We Do</h2>
            <p className="text-xl text-gray-500 mt-3">End-to-end scenting solutions designed for simplicity and performance.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all flex items-start gap-5"
              >
                <div className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <p className="text-lg text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center mt-10 text-xl text-gray-600 italic max-w-4xl mx-auto">
            "From a single scent machine for home to large commercial scent diffuser installations, we ensure that each solution is tailored to the environment it serves."
          </p>
        </div>

        {/* ================= 5. HOW WE WORK (Process Steps) ================= */}
        <div className="mb-28 bg-slate-900 rounded-[2.5rem] p-10 md:p-20 text-white relative overflow-hidden">
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-serif font-bold mb-4">How We Work With Our Clients</h2>
            <p className="text-blue-200 text-lg mb-16 max-w-3xl">
              Our approach is structured, transparent, and client-focused. We believe successful scenting begins with understanding, not assumptions.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { step: "01", title: "Consultation", desc: "We evaluate the space, usage patterns, and expectations to understand the real requirement." },
                { step: "02", title: "Solution Design", desc: "Based on space size and purpose, we recommend the most suitable scent diffuser machine and fragrance options." },
                { step: "03", title: "Installation & Setup", desc: "Our team ensures correct placement, timing, and intensity for even fragrance distribution." },
                { step: "04", title: "Ongoing Support", desc: "We provide refill plans, maintenance support, and adjustments to ensure uninterrupted performance." }
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="text-6xl font-bold text-white/10 mb-4 group-hover:text-blue-500/20 transition-colors">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-blue-100 text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= 6. INDUSTRIES SERVED ================= */}
        <div className="mb-28">
          <h2 className="text-4xl font-serif font-bold text-gray-900 text-center mb-16">Industries We Serve</h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Offices & Corporate Spaces", desc: "Improve employee comfort and create a professional atmosphere with controlled fragrance diffusion." },
              { title: "Hotels & Hospitality", desc: "Enhance guest experience using premium hotel scent machines and hotel air freshener systems." },
              { title: "Retail Stores & Malls", desc: "Create a pleasant shopping environment that encourages longer customer visits." },
              { title: "Hospitals & Clinics", desc: "Support hygiene and comfort with subtle, calming fragrance solutions." },
              { title: "Schools & Institutions", desc: "Maintain clean, fresh indoor air in classrooms and common areas." },
              { title: "Residential Homes", desc: "Upgrade everyday living with reliable home diffuser machines and best home fragrance systems." },
            ].map((industry, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="group p-10 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {industry.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= 7. WHY CHOOSE COOL MAX (Feature List) ================= */}
        <div className="grid lg:grid-cols-2 gap-20 mb-28 items-start">
          <div className="lg:py-8">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">Why Choose Cool Max</h2>
            <p className="text-lg text-gray-600 mb-8">
              Businesses across the UAE choose Cool Max for our reliability, product range, and service quality. We aim to be a long-term scent partner, not just a one-time supplier.
            </p>
            <ul className="space-y-5">
              {[
                "UAE Market Experience – Deep understanding of local conditions",
                "Wide Product Portfolio – From home diffusers to commercial machines",
                "Scalable Solutions – Suitable for HVAC-connected spaces",
                "Low Maintenance Systems – Continuous, hassle-free operation",
                "Ongoing Support – Refills, service, and technical assistance",
                "Safe & Certified Products – Suitable for commercial environments"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-green-100 rounded-full">
                    <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Trust Box */}
          <div className="bg-gray-50 rounded-[2rem] p-10 border border-gray-200 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trusted by Businesses Across UAE</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Cool Max solutions are trusted by hospitals, schools, corporate offices, retail chains, food service brands, and facility management companies throughout the UAE. Our clients rely on us for practical solutions that work reliably in real-world environments.
            </p>
            <button className="w-full py-4 rounded-xl bg-white border border-gray-300 font-bold text-gray-800 hover:bg-gray-100 hover:shadow-md transition text-lg">
              View Our Clients
            </button>
          </div>
        </div>

        {/* ================= 8. VISION, MISSION & VALUES ================= */}
        <div className="mb-28">
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-xl hover:shadow-2xl transition">
              <h3 className="text-3xl font-serif font-bold mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To become a trusted provider of professional, cost-effective scent and hygiene solutions that support cleaner, healthier environments for future generations.
              </p>
            </div>
            <div className="bg-gray-900 rounded-3xl p-12 text-white shadow-xl hover:shadow-2xl transition">
              <h3 className="text-3xl font-serif font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To deliver reliable, eco-conscious, and high-quality home scent systems, commercial scent diffusers, and fragrance solutions with a strong focus on customer satisfaction and consistent service.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-10">Our Core Values</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { title: "Innovative Thinking", desc: "Improving solutions to meet evolving needs" },
                { title: "Strategic Partnerships", desc: "Working closely with suppliers & clients" },
                { title: "Dependable Delivery", desc: "Consistent product quality & service" },
                { title: "Environmental Responsibility", desc: "Efficient, eco-friendly solutions" }
              ].map((val, i) => (
                <div key={i} className="px-8 py-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition max-w-sm w-full md:w-auto">
                  <h4 className="text-xl font-bold text-gray-800">{val.title}</h4>
                  <p className="text-sm text-gray-500 mt-2">{val.desc}</p>
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
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-[2.5rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              Let’s Create Better Scent Experiences Together
            </h2>
            <p className="text-blue-100 text-xl mb-10 leading-relaxed">
              Whether you are looking for a scent machine for home, a hotel scent diffuser, or a scalable scent machine for business, Cool Max is here to help. Our team will guide you in choosing the right solution, setting it up correctly, and maintaining consistent performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-white text-blue-800 rounded-full font-bold hover:bg-gray-100 transition shadow-lg text-lg">
                Contact Cool Max Today
              </button>
              <button className="px-10 py-5 border border-white/40 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition backdrop-blur-sm text-lg">
                Request a Consultation
              </button>
            </div>
            <p className="mt-8 text-base text-blue-200 opacity-80">
              Looking for professional scent solutions in the UAE? Start creating fresher, more welcoming spaces.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}