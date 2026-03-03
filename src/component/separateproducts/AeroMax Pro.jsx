import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { 
  SparklesIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  CloudIcon,
  ScaleIcon,
  GlobeAltIcon,
  Squares2X2Icon,
  CubeIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS MAPPED TO AEROMAX PRO A315L ================= */
import AeroMax1 from "../../asset/productimg/CMwebpimg/AeroMax Pro/2.webp"; // Using mapped paths as per previous context
import AeroMax2 from "../../asset/productimg/CMwebpimg/AeroMax Pro/5.webp";
import AeroMax3 from "../../asset/productimg/CMwebpimg/AeroMax Pro/3.webp";
import AeroMax4 from "../../asset/productimg/CMwebpimg/AeroMax Pro/4.webp";

const AeroMaxProPage = () => {
  const [activeImg, setActiveImg] = useState(AeroMax1);
  const gallery = [AeroMax1, AeroMax2, AeroMax3, AeroMax4];

  // Redirection Links
  const whatsappNumber = "+971509282702";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20AeroMax%20Pro%20A315L%20Diffuser.`;
  const contactPath = "/contact/";

  // SEO Implementation
  useEffect(() => {
    document.title = "AeroMax Pro A315L Diffuser in Dubai | Cool Max";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "High-capacity AeroMax Pro A315L Diffuser in Dubai for large commercial spaces. Wall-mounted design, strong coverage, and efficient scent diffusion.");
    }
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden text-left">
      <link rel="canonical" href="https://www.coolmaxscent.com/wall-mounted-and-ceiling-aroma-diffusers/aeromax-pro-diffuser/"/>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <SparklesIcon className="w-4 h-4" /> Wall-Mounted & Ceiling Series
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight uppercase">
              AeroMax Pro A315L Diffuser
            </h1>
            <h2 className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Wall-Mounted & Ceiling Aroma Diffuser for Large Commercial Spaces
            </h2>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-light text-justify">
              The AeroMax Pro A315L Diffuser is a powerful wall-mounted and ceiling aroma diffuser designed for large commercial environments that require consistent, high-performance scent coverage. Built with a robust metal and glass body, higher oil capacity, and strong diffusion output, this diffuser is ideal for hotels, malls, showrooms, offices, and public buildings across Dubai and the UAE.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#25D366] text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3">
                Talk to Our Scent Experts <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-2 font-sans shadow-lg">
                Get a Custom Quote <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden">
              <img src={activeImg} alt="AeroMax Pro A315L Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="AeroMax Pro variant" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: PRODUCT OVERVIEW ================= */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-[1000px] mx-auto text-center text-left md:text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight uppercase">Product Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light text-justify md:text-center">
              The AeroMax Pro A315L is the largest and most powerful variant in the AeroMax Pro series, engineered specifically for high-footfall and large-area commercial scenting. 
              With a 1000 ml fragrance bottle, higher power output, and wide diffusion range, this wall-mounted fragrance machine ensures long-lasting aroma performance while minimizing refill frequency. Its ceiling or wall-mounted design keeps interiors clean and uncluttered, while delivering consistent scent coverage across large spaces.
              Built for durability and efficiency, AeroMax Pro A315L combines industrial-grade performance with a clean, professional appearance suitable for premium environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY FEATURES ================= */}
      <section className="py-16 bg-[#0c101b] text-white px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight uppercase">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { icon: GlobeAltIcon, text: "Wall-mounted or ceiling-mounted installation" },
              { icon: BeakerIcon, text: "Large 1000 ml fragrance bottle capacity" },
              { icon: ScaleIcon, text: "High diffusion power for large commercial areas" },
              { icon: CloudIcon, text: "Strong and stable scent distribution" },
              { icon: ShieldCheckIcon, text: "Metal + glass construction for durability" },
              { icon: SparklesIcon, text: "Designed for continuous commercial operation" },
              { icon: CheckCircleIcon, text: "Efficient oil consumption for long working hours" },
              { icon: WrenchScrewdriverIcon, text: "Suitable for professional scenting requirements" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: PREMIUM DESIGN & BUILD QUALITY ================= */}
      <section className="py-20 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-serif mb-16 text-center tracking-tight uppercase">Premium Design & Build Quality</h2>
        
        <div className="grid gap-20">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-2xl font-serif mb-4 uppercase font-bold">High-Capacity Fragrance System</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light text-justify">
                AeroMax Pro A315L features a large 1000 ml fragrance bottle, making it ideal for commercial spaces that operate long hours. The higher capacity reduces refill frequency and ensures uninterrupted scenting performance in busy environments.
              </p>
              <div className="space-y-3">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">This makes it especially suitable for:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Hotels and hotel lobbies", "Shopping malls", "Corporate offices", "Large showrooms", "Commercial corridors"].map((li, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-[10px] uppercase tracking-widest">
                       <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-100 p-8 order-1 md:order-2 h-72 flex items-center justify-center">
               <img src={AeroMax2} alt="High Capacity Scent System" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-8 h-72 flex items-center justify-center">
               <img src={AeroMax3} alt="Aroma Diffusion mechanism" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-serif mb-4 uppercase font-bold">Strong & Even Aroma Diffusion</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light text-justify">
                Designed for large coverage areas, the A315L variant delivers strong, even fragrance distribution across wide spaces. Its powerful diffusion mechanism ensures that scent spreads effectively without creating overpowering concentration in one spot.
              </p>
              <p className="text-slate-400 text-xs italic font-light">This balanced diffusion helps maintain a pleasant and professional atmosphere throughout the space.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-2xl font-serif mb-4 uppercase font-bold">Durable Metal + Glass Construction</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light text-justify">
                Built using metal and glass materials, the AeroMax Pro A315L is designed for long-term commercial use. The sturdy construction enhances durability, improves heat resistance, and maintains stable performance even in demanding environments.
              </p>
              <p className="text-slate-400 text-xs italic font-light">Its professional design blends well with both modern and functional interiors.</p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-8 order-1 md:order-2 h-72 flex items-center justify-center">
               <img src={AeroMax4} alt="Durable Construction" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-slate-100 p-8 h-72 flex items-center justify-center">
               <Squares2X2Icon className="w-32 h-32 text-slate-300" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-serif mb-4 uppercase font-bold">Wall & Ceiling Installation Flexibility</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 font-light">The diffuser can be installed as:</p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-3 text-xs font-bold uppercase text-slate-700 tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Wall-mounted fragrance machine
                </li>
                <li className="flex items-center gap-3 text-xs font-bold uppercase text-slate-700 tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Ceiling aroma diffuser
                </li>
              </ul>
              <p className="text-slate-400 text-xs font-light italic text-justify">
                This flexibility allows businesses to optimize scent placement without affecting floor layouts or customer movement. It is especially useful in areas where space optimization and safety are critical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-20 bg-slate-100 px-6 font-sans">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center tracking-tight uppercase">Technical Specifications</h2>
          <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Specification</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Details</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Product Name", "AeroMax Pro A315L Diffuser"],
                  ["Product Category", "Wall-Mounted & Ceiling Aroma Diffusers"],
                  ["Bottle Capacity", "1000 ml"],
                  ["Voltage", "DC 12V"],
                  ["Power", "15W"],
                  ["Material", "Metal + Glass"],
                  ["Oil Consumption", "0.3 – 3.7 g/h"],
                  ["Coverage Area", "Up to 2400 m³"],
                  ["Net Weight", "4500 g"],
                  ["Dimensions", "371 × 260 × 100 mm"],
                  ["Color Options", "Black / White / Black & White"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-400 uppercase tracking-widest text-[10px]">{row[0]}</td>
                    <td className="p-5 text-slate-700 font-medium">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: IDEAL APPLICATIONS ================= */}
      <section className="py-20 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-12 tracking-tight uppercase">Ideal Applications</h2>
        <p className="text-slate-500 mb-12 font-light max-w-2xl mx-auto">The AeroMax Pro A315L Diffuser is best suited for large environments where consistent scent presence is essential:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Hotels & Lobbies", "Shopping Malls", "Large Office Floors", "Commercial Corridors", "Showrooms", "Corporate Buildings", "Public Facilities", "High-Traffic Spaces"].map((item, i) => (
            <span key={i} className="px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest flex items-center justify-center">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ================= SECTION 6: WHY CHOOSE ================= */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 tracking-tight uppercase">Why Choose AeroMax Pro A315L Diffuser</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left font-sans">
            {[
              "Designed for large commercial spaces",
              "High fragrance capacity reduces maintenance frequency",
              "Strong and stable diffusion performance",
              "Durable construction for long-term use",
              "Space-saving wall or ceiling installation",
              "Ideal for professional scent marketing applications"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <CheckCircleIcon className="w-6 h-6 text-blue-600 shrink-0" />
                <span className="text-sm font-light leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-slate-500 font-light max-w-3xl mx-auto text-justify md:text-center italic">
            AeroMax Pro A315L is the right choice for businesses looking for a high-capacity wall-mounted aroma diffuser that delivers reliable performance day after day.
          </p>
        </div>
      </section>

      {/* ================= SECTION 7: RELATED PRODUCTS ================= */}
      <section className="py-20 bg-slate-50 px-6 font-sans">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-12 tracking-tight uppercase">Part of Our Wall-Mounted & Ceiling Aroma Diffusers Range</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "CeilAir Pro Diffuser", path: "/wall-mounted-and-ceiling-aroma-diffusers/ceil-air-pro-diffuser/" },
              { name: "Aerocube Diffuser", path: "/wall-mounted-and-ceiling-aroma-diffusers/aerocube-diffuser/" },
              { name: "Zenbox Mini Diffuser", path: "/wall-mounted-and-ceiling-aroma-diffurers/zenbox-mini-diffuser/" }
            ].map((product, i) => (
              <Link key={i} to={product.path} className="p-8 bg-white rounded-3xl border border-slate-200 hover:border-blue-600 transition-all flex flex-col items-center group shadow-sm">
                <CubeIcon className="w-10 h-10 text-slate-300 mb-4 group-hover:text-blue-600" />
                <h4 className="text-[11px] font-black uppercase tracking-widest">{product.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: MASTER CTA ================= */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight uppercase">Upgrade Large Commercial Spaces with Powerful Wall-Mounted Scenting</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed font-light font-sans">
            Looking for a high-capacity wall-mounted aroma diffuser in Dubai that delivers strong, consistent fragrance coverage?
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10 font-sans">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3">
               <ChatBubbleLeftRightIcon className="w-6 h-6" /> WhatsApp Expert
            </a>
            <a href={contactPath} className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-3">
              Contact Cool Max <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AeroMaxProPage;