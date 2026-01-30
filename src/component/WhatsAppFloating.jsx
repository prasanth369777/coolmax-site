import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function FloatingContactButtons() {
  const phoneNumber = "971522286401";
  const message = encodeURIComponent(
    "Hello Cool Max! I'm interested in your scenting solutions."
  );

  return (
    <div
      className="
        fixed z-[100] flex flex-col items-end gap-4
        bottom-8 right-4
        sm:bottom-10 sm:right-6
        lg:bottom-12 lg:right-8
        pb-safe
      "
    >
      {/* ================= WHATSAPP ================= */}
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
        {/* Tooltip (Desktop only) */}
        <span
          className="
            hidden sm:block
            absolute right-14 px-3 py-1.5
            bg-white text-slate-800 text-xs font-bold rounded-lg shadow-lg
            opacity-0 translate-x-4
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300
            whitespace-nowrap
          "
        >
          Chat on WhatsApp
        </span>

        <div className="relative">
          {/* Pulse */}
          <span className="absolute inset-0 rounded-full animate-ping bg-green-500/30" />

          {/* Button */}
          <div
            className="
              relative flex items-center justify-center rounded-full
              w-12 h-12
              sm:w-14 sm:h-14
              bg-gradient-to-tr from-[#25D366] to-[#4ade80]
              shadow-[0_8px_25px_-5px_rgba(37,211,102,0.5)]
              border border-green-400/50
              transform transition-all duration-300
              group-hover:scale-110
            "
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
            </svg>
          </div>
        </div>
      </motion.a>

      {/* ================= CALL ================= */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: "spring" }}
        href={`tel:+${phoneNumber}`}
        aria-label="Call Us"
        className="group relative flex items-center justify-end"
      >
        {/* Tooltip (Desktop only) */}
        <span
          className="
            hidden sm:block
            absolute right-14 px-3 py-1.5
            bg-white text-slate-800 text-xs font-bold rounded-lg shadow-lg
            opacity-0 translate-x-4
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300
            whitespace-nowrap
          "
        >
          Call Now
        </span>

        <div
          className="
            flex items-center justify-center rounded-full
            w-12 h-12
            sm:w-14 sm:h-14
            bg-gradient-to-tr from-indigo-600 to-blue-500
            shadow-[0_8px_25px_-5px_rgba(79,70,229,0.5)]
            border border-indigo-400/50
            transform transition-all duration-300
            group-hover:scale-110
          "
        >
          <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:animate-wiggle" />
        </div>
      </motion.a>

      {/* Wiggle Animation */}
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
