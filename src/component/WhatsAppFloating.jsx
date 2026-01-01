import React from "react";

export default function FloatingContactButtons() {
  const phoneNumber = "971522286401"; // WhatsApp + Call number
  const message = encodeURIComponent(
    "Hello Cool Max! I'm interested in your scenting solutions."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* ================= WHATSAPP ================= */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group"
      >
        {/* Pulse */}
        <span className="absolute inset-0 rounded-full animate-ping bg-green-400/40"></span>

        {/* Glow */}
        <span className="absolute inset-0 rounded-full blur-lg bg-gradient-to-br from-green-400 to-emerald-500 opacity-70"></span>

        {/* Button */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl flex items-center justify-center transition group-hover:scale-110">
          {/* Custom WhatsApp Icon */}
          <div className="relative">
            <div className="w-7 h-7 rounded-full border-[3px] border-white"></div>
            <div className="absolute -bottom-1 left-1.5 w-3 h-3 bg-white rotate-45 rounded-sm"></div>
            <div className="absolute top-2 left-2 w-3 h-1 bg-white rounded-full rotate-45"></div>
          </div>
        </div>
      </a>

      {/* ================= CALL ================= */}
      <a
        href={`tel:+${phoneNumber}`}
        aria-label="Call Us"
        className="relative group"
      >
        {/* Pulse */}
        <span className="absolute inset-0 rounded-full animate-ping bg-indigo-400/40"></span>

        {/* Glow */}
        <span className="absolute inset-0 rounded-full blur-lg bg-gradient-to-br from-indigo-400 to-blue-600 opacity-70"></span>

        {/* Button */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 shadow-2xl flex items-center justify-center transition group-hover:scale-110">
          {/* Custom Call Icon */}
          <div className="relative w-7 h-7 border-[3px] border-white rounded-full flex items-center justify-center">
            <div className="w-3 h-5 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </a>

    </div>
  );
}
