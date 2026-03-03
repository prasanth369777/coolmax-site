import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { 
    CheckBadgeIcon, 
    ArrowRightIcon, 
    BuildingOffice2Icon,
    ChatBubbleLeftRightIcon,
    BeakerIcon,
    ShieldCheckIcon,
    ShoppingBagIcon,
    UserGroupIcon,

    SparklesIcon,
    HomeIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORT ---
import P_Rose_Spray from "../../asset/Aerosol Spray/rose.webp"; 

const RoseAerosolSprayDetail = () => {
    // Redirection Links
    const whatsappNumber = "+971509282702";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20Rose%20Aerosol%20Spray.`;
    const contactPath = "/contact/";

    const fadeUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="mt-16 bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden tracking-tight text-left">
       
                <title>Rose Aerosol Spray | Fresh Floral Air Freshener</title>
                <meta name="description" content="Rose Aerosol Spray by Cool Max blends fresh rose petals, green leaves, jasmine, and sandalwood to deliver a soft, elegant, and long-lasting floral freshness." />
                <link rel="canonical" href="https://www.coolmaxscent.com/rose-aerosol-spray" />
        

            {/* ================= HERO SECTION ================= */}
            <section className="relative pt-24 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeUp} className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 font-sans">
                            <SparklesIcon className="w-4 h-4" /> Category: Floral Aerosol Air Freshener
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif text-slate-950 mb-6 leading-[1.1] tracking-tighter uppercase">
                            Rose <span className="italic font-light text-slate-700">Aerosol Spray</span>
                        </h1>
                        <p className="text-xl text-blue-600 font-medium mb-4 uppercase tracking-wider font-sans">
                            Elegant Floral Air Freshener – Classic Rose Freshness with a Natural Green Touch
                        </p>
                        <div className="flex gap-6 mb-8 text-[11px] font-bold uppercase tracking-widest text-slate-400 font-sans">
                            <span>Type: <span className="text-slate-900">Commercial Aerosol Dispenser Refill</span></span>
                            <span>System: <span className="text-blue-500 font-black">Automatic Air Freshener Spray</span></span>
                        </div>
                        <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light mb-8 font-sans">
                            Rose Aerosol Spray by Cool Max Scent captures the timeless beauty of fresh rose petals combined with soft green and woody notes. Designed to create a calm, refined atmosphere, this fragrance delivers gentle floral freshness that feels natural, clean, and sophisticated.
                        </p>
                        <p className="text-base text-slate-500 leading-relaxed font-light mb-10 italic font-sans">
                            Ideal for daily and professional use, Rose Aerosol Spray enhances indoor spaces with consistent fragrance while maintaining a balanced and comfortable scent presence.
                        </p>
                        <div className="flex flex-wrap gap-5 font-sans">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center gap-2 shadow-lg shadow-blue-100">
                                <ChatBubbleLeftRightIcon className="w-4 h-4" /> For Order Now
                            </a>
                            <Link to={contactPath} className="px-10 py-4 border border-slate-200 text-slate-900 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-blue-50 transition-all">
                                Contact Expert
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div {...fadeUp} className="order-1 lg:order-2 flex justify-center">
                        <div className="relative group font-sans">
                            <div className="absolute -inset-4 bg-blue-100/50 rounded-[4rem] blur-2xl group-hover:bg-blue-200/50 transition-all duration-1000"></div>
                            <img 
                                src={P_Rose_Spray} 
                                alt="Rose Aerosol Spray" 
                                className="relative w-full max-w-md rounded-[3rem] shadow-2xl z-10 group-hover:scale-105 transition-transform duration-700 object-cover" 
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= SECTION 1: FRAGRANCE PROFILE ================= */}
            <section className="py-24 bg-slate-50 px-6 lg:px-12 text-center">
                <div className="max-w-[1200px] mx-auto font-sans">
                    <h2 className="text-3xl md:text-5xl font-serif mb-16 text-slate-950 uppercase text-center">
                        Fragrance <span className="italic font-light text-blue-700 font-serif">Notes</span>
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6 mb-16 font-sans">
                        {[
                            { label: "Star Note", notes: "Fresh Rose Petals", color: "bg-blue-400" },
                            { label: "Top Accents", notes: "Green Leaves", color: "bg-blue-300" },
                            { label: "Core Blossom", notes: "Jasmine", color: "bg-blue-500" },
                            { label: "Smooth Base", notes: "Sandalwood", color: "bg-blue-700" }
                        ].map((note, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-blue-300 transition-all group text-center">
                                <div className={`w-12 h-12 rounded-full ${note.color} mx-auto mb-6 flex items-center justify-center text-white`}>
                                    <BeakerIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">{note.label}</h3>
                                <p className="text-xl font-serif text-slate-900 leading-snug">{note.notes}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light italic font-sans text-center">
                        "The fragrance opens with fresh rose and green leafy notes, followed by delicate jasmine, and settles into a smooth sandalwood base for lasting elegance."
                    </p>
                </div>
            </section>

            {/* ================= SECTION 2: PRODUCT HIGHLIGHTS ================= */}
            <section className="py-24 bg-white px-6 font-sans">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-5xl font-serif mb-10 text-slate-950 leading-tight uppercase">
                            Product <br/><span className="italic font-light text-slate-700 font-serif">Highlights</span>
                        </h2>
                        <ul className="space-y-6">
                            {[
                                "Compatible with LED & LCD aerosol dispensers",
                                "Delivers instant floral freshness and odor control",
                                "Wide fragrance dispersion for uniform coverage",
                                "Long-lasting, well-balanced scent performance",
                                "Leaves no residue",
                                "Suitable for continuous and daily use"
                            ].map((text, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg text-slate-700 font-light font-sans">
                                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]" /> {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-6 text-left">
                        <div className="aspect-square bg-slate-950 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-700 transition-all duration-500 font-sans">
                            <BuildingOffice2Icon className="w-12 h-12 text-blue-400 group-hover:text-white" />
                            <span className="text-[11px] font-bold uppercase text-slate-200">Offices & Corporate</span>
                        </div>
                        <div className="aspect-square bg-blue-50 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-700 transition-all duration-500 font-sans">
                            <HomeIcon className="w-12 h-12 text-blue-600 group-hover:text-white" />
                            <span className="text-[11px] font-bold uppercase text-slate-400 group-hover:text-blue-100">Restrooms</span>
                        </div>
                        <div className="aspect-square bg-slate-100 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-blue-600 transition-all duration-500 font-sans">
                            <ShoppingBagIcon className="w-12 h-12 text-blue-600 group-hover:text-white" />
                            <span className="text-[11px] font-bold uppercase text-slate-400 group-hover:text-blue-50">Retail & Showrooms</span>
                        </div>
                        <div className="aspect-square bg-blue-600 rounded-[2.5rem] p-8 flex flex-col justify-end gap-3 group hover:bg-slate-950 transition-all duration-500 font-sans">
                            <UserGroupIcon className="w-12 h-12 text-white" />
                            <span className="text-[11px] font-bold uppercase text-blue-50">Common Spaces</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 3: IDEAL FOR ================= */}
            <section className="py-24 bg-slate-950 text-white px-6 font-sans">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-serif mb-10 tracking-tight text-blue-400 italic font-light uppercase text-center">Ideal For</h2>
                    <p className="text-slate-400 mb-16 text-lg max-w-2xl mx-auto text-center">Rose Aerosol Spray is well suited for environments that require a soft, elegant fragrance that supports cleanliness and a premium feel.</p>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {["Washrooms & Restrooms", "Offices & Corporate", "Hotels & Hospitality", "Retail & Showrooms", "Reception Areas"].map((item, i) => (
                            <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col items-center gap-4 hover:bg-white/10 transition-colors text-center">
                                <CheckBadgeIcon className="w-10 h-10 text-blue-400" />
                                <h4 className="text-xs font-bold uppercase tracking-widest text-white text-center leading-tight">{item}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SECTION 4: WHY CHOOSE ================= */}
            <section className="py-28 bg-white px-6 font-sans">
                <div className="max-w-[1000px] mx-auto">
                    <div className="bg-slate-50 rounded-[3rem] p-12 md:p-16 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
                        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            <ShieldCheckIcon className="w-12 h-12 text-blue-600" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-2xl font-serif font-bold mb-4 uppercase text-slate-900 tracking-tight">Why Choose <span className="italic font-light text-blue-700">Cool Max Aerosol Sprays?</span></h2>
                            <p className="text-slate-500 font-light leading-relaxed font-sans">
                                Cool Max aerosol sprays are developed for dependable performance in professional dispenser systems. They help businesses maintain consistent fragrance quality while enhancing hygiene perception and indoor comfort.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 5: CTA ================= */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-[1200px] mx-auto bg-slate-950 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl font-sans">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
                    <h2 className="text-4xl md:text-7xl font-serif mb-10 relative z-10 tracking-tighter leading-tight uppercase text-slate-100 text-center">Looking for a <br/><span className="italic font-light text-slate-300 font-serif">complete solution?</span></h2>
                    <p className="text-slate-400 text-lg md:text-2xl mb-12 relative z-10 max-w-3xl mx-auto leading-relaxed font-light font-sans text-center">
                        For automated fragrance delivery and reliable freshness, pair Rose Aerosol Spray with Cool Max LED or LCD Aerosol Dispensers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 relative z-10 font-sans">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-slate-900 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-3">
                            <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Scent Expert
                        </a>
                        <Link to={contactPath} className="px-12 py-5 bg-white/5 text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-3">
                            Consultation & Installation <ArrowRightIcon className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RoseAerosolSprayDetail;