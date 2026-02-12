import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BuildingOffice2Icon, 
  ShoppingBagIcon, 
  SparklesIcon, 
  BuildingStorefrontIcon, 
  GlobeAltIcon, 
  CheckCircleIcon, 
  ArrowsPointingOutIcon, 
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  BoltIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon
} from "@heroicons/react/24/outline";

// --- CORRECT IMAGE IMPORTS MAPPED TO PRODUCTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/1.webp"; 
import Product1 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/2.webp"; 
import Product2 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/1.webp"; 
import Product3 from "../../asset/productimg/CMwebpimg/Titan Diffuser/1.webp"; 
import Product4 from "../../asset/productimg/CMwebpimg/NanoPillar Diffuser/1.webp"; 
import FeatureImg from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/4.webp"; 

const smoothFadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, ease: "easeOut" }
};

export default function FloorStandingDiffusersPage() {
  const whatsappNumber = "971522286401";

  // --- SEO Implementation ---
  useEffect(() => {
    document.title = "Floor-Standing Aroma Diffusers in UAE | Cool Max";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore floor-standing aroma diffusers in UAE for hotel lobbies, malls, and showrooms. Premium scent diffuser machines with professional support by Cool Max.");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* Canonical URL */}
      <link rel="canonical" href="https://coolmaxscent.com/floor-standing-aroma-diffuser" />
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[75vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-12 pb-12 gap-12 text-left">
          <div className="lg:w-1/2 flex flex-col items-start z-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm mt-16 relative z-10">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">**Floor-Standing Aroma Diffusers in UAE**</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Floor-Standing <br />
                <span className="italic text-slate-400 font-light pr-2">Aroma Diffusers in UAE.</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6">
                **Premium Aroma Diffusers** for Large & Elegant Spaces
              </h2>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] mb-8 max-w-xl shadow-sm">
                <p className="text-base text-slate-600 leading-relaxed italic text-left">
                  Floor-standing aroma diffusers from Cool Max are designed for spaces where fragrance performance and visual appeal are equally important. These professional **Floor-Standing Scent Diffusers** are ideal for **Lobby Aroma Diffusers**, shopping malls, showrooms, sales offices, and premium commercial interiors.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 font-sans">
                <a href="#collection" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">Get a Quote</a>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative w-full aspect-square max-w-[500px] p-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50" />
              <img src={HeroImg} alt="Floor-Standing Aroma Diffusers in UAE" className="w-full h-full object-contain relative z-10 drop-shadow-2xl" />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: COLLECTION ================= */}
        <section id="collection" className="py-20 border-t border-slate-100 text-left">
          <motion.div {...smoothFadeUp} className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter leading-none">Our Floor-Standing Aroma Diffuser Collection</h2>
            <p className="text-lg text-slate-500 mt-4 font-light">Explore our range of **Premium Aroma Diffusers** designed for commercial and semi-commercial use.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { img: Product1, name: "AeroPillar Diffuser", desc: "A sleek floor-standing aroma diffuser designed to deliver consistent fragrance while blending seamlessly into modern interiors. Its vertical design makes it ideal for spaces where aesthetics matter.", suits: "Hotel lobbies • Showrooms • Reception areas • Sales offices" },
              { img: Product2, name: "AirPole Pro Diffuser", desc: "A powerful floor-standing scent diffuser built for open spaces that require steady and noticeable fragrance diffusion. Designed for professional environments with continuous foot traffic.", suits: "Shopping malls • Large retail spaces • Exhibition areas" },
              { img: Product3, name: "Titan Diffuser", desc: "A high-performance floor-standing aroma diffuser designed for wide coverage and long operating hours. Ideal for environments where strong scent presence is required without overpowering the space.", suits: "Corporate lobbies • Event venues • Hospitality spaces" },
              { img: Product4, name: "NanoPillar Diffuser", desc: "A compact yet powerful floor-standing aroma diffuser that combines modern design with efficient fragrance diffusion. Suitable for medium to large spaces where subtle elegance is preferred.", suits: "Boutiques • Premium offices • Small hotel lobbies" }
            ].map((product, idx) => (
              <motion.div key={idx} {...smoothFadeUp} className="group p-8 rounded-[3.5rem] bg-slate-50 border border-slate-200 transition-all hover:bg-white hover:shadow-2xl text-left flex flex-col h-full">
                <div className="h-80 w-full bg-white rounded-[2rem] mb-8 flex items-center justify-center p-8 border border-slate-100 shadow-sm">
                  <img src={product.img} alt={product.name} className="h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{product.name}</h3>
                <p className="text-slate-600 mb-6 font-light leading-relaxed flex-grow">{product.desc}</p>
                <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-8">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2">Best suited for:</span>
                  <p className="text-sm font-bold text-slate-700">{product.suits}</p>
                </div>
                <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 transition-all">View product details</button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 2: WHY CHOOSE ================= */}
        <section className="py-20">
          <div className="bg-slate-900 rounded-[3.5rem] p-10 md:p-20 text-left text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tighter leading-none">Why Choose **Floor-Standing Scent Diffusers**?</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-3xl">Our **Aroma Diffusers for Large Spaces** are ideal for environments where fragrance needs to be noticeable, balanced, and visually integrated into the space.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Wide Area Coverage", desc: "Designed to scent large open areas evenly and effectively.", icon: <GlobeAltIcon /> },
                { title: "Premium Design", desc: "Elegant structures enhance the overall interior appearance.", icon: <SparklesIcon /> },
                { title: "High Fragrance Capacity", desc: "Larger oil capacity reduces refill frequency.", icon: <BoltIcon /> },
                { title: "Flexible Placement", desc: "No wall or ceiling installation required.", icon: <ArrowsPointingOutIcon /> }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                    {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHERE USED ================= */}
        <section className="py-20 text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Where Our **Floor diffusers** Are Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <BuildingOffice2Icon />, title: "Hotel and resort lobbies" },
              { icon: <ShoppingBagIcon />, title: "Shopping malls and retail chains" },
              { icon: <BuildingStorefrontIcon />, title: "Showrooms and sales galleries" },
              { icon: <GlobeAltIcon />, title: "Event halls and exhibition spaces" },
              { icon: <UserGroupIcon />, title: "Corporate reception areas" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col items-center hover:bg-white transition-all shadow-sm">
                <div className="w-12 h-12 text-blue-600 mb-6">{item.icon}</div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 text-center leading-tight">{item.title}</h3>
              </div>
            ))}
          </div>
          <p className="mt-12 text-blue-600 font-serif italic text-lg text-center">These **Lobby Aroma Diffusers** help create strong first impressions and lasting brand experiences.</p>
        </section>

        {/* ================= SECTION 4: HOW IT WORKS ================= */}
        <section className="py-16 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-16 items-center px-8 md:px-16 text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">How **Floor-Standing Aroma Diffusers** Work</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                Floor-standing diffusers use advanced atomization technology to break fragrance oil into fine particles that spread evenly across open spaces. This ensures consistent scent diffusion without sudden intensity changes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Quiet operation despite high output", icon: <ClockIcon /> },
                  { title: "Adjustable fragrance intensity", icon: <AdjustmentsHorizontalIcon /> },
                  { title: "Efficient oil usage", icon: <BoltIcon /> },
                  { title: "Designed for daily commercial use", icon: <ShieldCheckIcon /> }
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{feat.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img src={FeatureImg} alt="Floor-Standing Scent Diffusers technology" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: CHOOSING THE RIGHT ONE ================= */}
        <section className="py-20 text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">How to Choose the Right **Lobby Aroma Diffusers**</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Space Size", desc: "Larger areas need higher diffusion capacity." },
              { title: "Interior Design", desc: "Choose a design that complements the décor." },
              { title: "Foot Traffic Level", desc: "High-traffic areas benefit from continuous scenting." },
              { title: "Maintenance Preference", desc: "High-capacity units reduce servicing needs." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
                <h3 className="text-blue-600 font-black text-[10px] uppercase mb-3 leading-tight">{item.title}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-slate-600 font-medium">Our team can help you choose the most suitable **Aroma Diffusers for Large Spaces** based on your environment.</p>
        </section>

        {/* ================= SECTION 6: WHY COOL MAX ================= */}
        <section className="py-16">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 text-left shadow-sm">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10 tracking-tighter leading-tight text-center lg:text-left">Why Choose Cool Max for **Floor-Standing Aroma Diffusers in UAE**?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "UAE-based company with local expertise",
                "**Premium Aroma Diffusers** and scent machines",
                "Suitable for hospitality, retail, and corporate spaces",
                "Maintenance and refill support available",
                "Trusted by leading businesses"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-blue-200">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-blue-600 font-serif italic text-lg text-center">We focus on long-term performance, aesthetics, and ease of use.</p>
          </div>
        </section>

        {/* ================= SECTION 7: RELATED ================= */}
        <section className="py-16 text-center">
           <h2 className="text-2xl md:text-4xl font-serif text-slate-900 mb-12 tracking-tighter leading-tight">Related Scenting Solutions</h2>
           <div className="flex flex-wrap justify-center gap-6">
             {["Large Area & HVAC Aroma Diffusers", "Commercial Aroma Diffusers", "Scent Marketing Solutions"].map((sol, i) => (
               <div key={i} className="px-8 py-5 bg-white border border-slate-200 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm cursor-pointer">{sol}</div>
             ))}
           </div>
           <p className="mt-8 text-slate-400 text-sm italic">These solutions work together to create a complete scenting strategy for **Aroma Diffusers for Large Spaces**.</p>
        </section>

        {/* ================= SECTION 8: MASTER CTA ================= */}
        <section className="py-24 text-center relative px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-5xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">
              Need a Floor-Standing <br /> <span className="italic text-blue-600 font-light">Aroma Diffuser?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed font-sans text-center">
              Whether you are upgrading a lobby, showroom, or commercial space, Cool Max offers professional **Floor-Standing Aroma Diffusers in UAE** tailored to your needs. Our team will help you select the right product and provide ongoing support.
            </p>
            <p className="text-sm font-black uppercase text-blue-600 tracking-widest mb-8">Looking for floor-standing aroma diffusers in UAE?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
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