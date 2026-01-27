import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function FloatingContactButtons() {
  const phoneNumber = "971522286401"; 
  const message = encodeURIComponent(
    "Hello Cool Max! I'm interested in your scenting solutions."
  );

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-5 items-end">

      {/* ================= WHATSAPP BUTTON ================= */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-end"
      >
        {/* Tooltip Label (Slides out on hover) */}
        <span className="absolute right-16 px-3 py-1.5 bg-white text-slate-800 text-xs font-bold rounded-lg shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          Chat on WhatsApp
        </span>

        <div className="relative">
          {/* Pulse Effect */}
          <span className="absolute inset-0 rounded-full animate-ping bg-green-500/30 duration-1000"></span>
          
          {/* Main Button */}
          <div className="relative w-14 h-14 bg-gradient-to-tr from-[#25D366] to-[#4ade80] rounded-full shadow-[0_8px_25px_-5px_rgba(37,211,102,0.5)] flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 border border-green-400/50">
            {/* WhatsApp SVG Icon */}
            <svg 
              className="w-7 h-7 text-white fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
        </div>
      </motion.a>

      {/* ================= CALL BUTTON ================= */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: "spring" }}
        href={`tel:+${phoneNumber}`}
        aria-label="Call Us"
        className="group relative flex items-center justify-end"
      >
        {/* Tooltip Label */}
        <span className="absolute right-16 px-3 py-1.5 bg-white text-slate-800 text-xs font-bold rounded-lg shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          Call Now
        </span>

        <div className="relative">
          {/* Main Button */}
          <div className="relative w-14 h-14 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-full shadow-[0_8px_25px_-5px_rgba(79,70,229,0.5)] flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 border border-indigo-400/50">
            {/* Heroicons Phone Icon */}
            <PhoneIcon className="w-6 h-6 text-white group-hover:animate-wiggle" />
          </div>
        </div>
      </motion.a>

      {/* Wiggle Animation for Phone */}
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .group:hover .group-hover\\:animate-wiggle {
          animation: wiggle 0.3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}