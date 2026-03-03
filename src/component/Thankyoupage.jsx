import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { 
  CheckBadgeIcon, 
  ArrowLeftIcon, 
  ChatBubbleLeftRightIcon,
  ShoppingBagIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

export default function ThankYouPage() {
  const whatsappNumber = "971509282702";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden flex items-center justify-center pt-20">
      
      {/* ================= SEO METADATA ================= */}
   
        <title>Thank You | Cool Max Scent Solutions</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.coolmaxscent.com/thank-you/" />
   

      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        
        {/* SUCCESS ICON ANIMATION */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-10 inline-flex items-center justify-center w-24 h-24 bg-blue-600 rounded-full shadow-2xl shadow-blue-200"
        >
          <CheckBadgeIcon className="w-14 h-14 text-white" />
        </motion.div>

        {/* MAIN TEXT CONTENT */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <SparklesIcon className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Submission Received</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tighter mb-6 leading-tight">
            Thank You for <br />
            <span className="italic text-slate-400 font-light">Connecting With Us.</span>
          </h1>

          <p className="text-xl text-slate-500 font-light leading-relaxed mb-12 max-w-xl mx-auto">
            Your inquiry has been successfully received. One of our scent specialists will review your details and get back to you within 24 hours.
          </p>
        </motion.div>

        {/* ACTION BUTTONS */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link 
            to="/" 
            className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3"
          >
            <ArrowLeftIcon className="w-4 h-4" /> Back to Home
          </Link>

          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-3"
          >
            <ChatBubbleLeftRightIcon className="w-5 h-5" /> Instant WhatsApp
          </a>
        </motion.div>

        {/* QUICK LINKS GRID */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-12 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          <Link to="/products" className="group flex items-start gap-5 p-6 rounded-3xl hover:bg-slate-50 transition-all">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <ShoppingBagIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1 uppercase tracking-wider">Browse Catalogue</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Explore our full range of diffusers and aroma oils.</p>
            </div>
          </Link>

          <Link to="/industries" className="group flex items-start gap-5 p-6 rounded-3xl hover:bg-slate-50 transition-all">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <SparklesIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1 uppercase tracking-wider">Our Solutions</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">See how we transform retail, hotels, and office spaces.</p>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* ADDITIONAL BACKGROUND ELEMENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] border border-slate-100 rounded-[5rem] pointer-events-none" />
    </div>
  );
}