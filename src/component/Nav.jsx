import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../../src/asset/hero/coll-logo.png";

/* ---------------- NAV DATA ---------------- */
const navigation = [
  { name: "Home", href: "/", type: "link" },
  {
    name: "Products",
    href: "/products", // Now clickable
    type: "dropdown",
    cols: 2,
    items: [
      { label: "Car Aroma Diffusers", href: "/car-diffusers" },
      { label: "Desktop & Small Space", href: "/desktop-small-diffusers" },
      { label: "Wall-Mounted & Ceiling", href: "/wall-mounted-diffusers" },
      { label: "Commercial Diffusers", href: "/commercial-diffusers" },
      { label: "Large Area & HVAC", href: "/large-area-diffusers" },
      { label: "Floor-Standing Diffusers", href: "/floor-standing-diffusers" },
      { label: "Passive/No-Power", href: "/passive-diffusers" },
    ],
  },
  {
    name: "Aroma Oils",
    href: "/aroma-oils", // Now clickable
    type: "dropdown",
    cols: 2,
    items: [
      { label: "Fresh & Clean Scents", href: "/oils/fresh" },
      { label: "Floral Comfort Scents", href: "/oils/floral" },
      { label: "Energy & Citrus Scents", href: "/oils/citrus" },
      { label: "Warm & Luxury Scents", href: "/oils/luxury" },
      { label: "Relaxation & Wellness", href: "/oils/wellness" },
      { label: "Signature Business Scents", href: "/oils/signature" },
      { label: "Car & Personal Scents", href: "/oils/car" },
      { label: "Trial & Sample Sets", href: "/oils/samples" },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions", // Now clickable
    type: "dropdown",
    cols: 1,
    items: [
      { label: "Scent Marketing Strategy", href: "/scent-marketing" },
      { label: "Commercial Aroma Diffusion", href: "/commercial-diffusion" },
      { label: "HVAC Scenting Solutions", href: "/hvac-scenting" },
      { label: "Washroom Hygiene Solutions", href: "/washroom-hygiene" },
      { label: "Car & Personal Space Scenting", href: "/car-scenting" },
      { label: "Maintenance & Refill Support", href: "/Maintenance" },
    ],
  },
  {
    name: "Industries",
    href: "/industries", // Now clickable
    type: "dropdown",
    cols: 1,
    items: [
      { label: "Offices & Corporate", href: "/industries" },
      { label: "Hotels & Hospitality", href: "/industries" },
      { label: "Hospitals & Clinics", href: "/industries" },
      { label: "Schools & Education", href: "/industries" },
      { label: "Retail & Showrooms", href: "/industries" },
      { label: "Restaurants & Cafes", href: "/industries" },
      { label: "Malls & Commercial", href: "/industries" },
    ],
  },
  { name: "About", href: "/about", type: "link" },
  { name: "Blog", href: "/blog", type: "link" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActive, setMobileActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center py-4 lg:py-6 transition-all duration-300 pointer-events-none">
        <div 
          className={`relative pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${scrolled 
            ? "w-[95%] lg:w-[90%] max-w-[1400px] bg-[#0f111a]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] rounded-full py-2 px-6" 
            : "w-[95%] lg:w-[90%] max-w-[1600px] bg-transparent border-transparent py-4 px-4 lg:px-0"
          }`}
        >
          {/* LOGO */}
          <div className="flex-shrink-0 z-50">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img src={Logo} alt="CoolMax" className={`object-contain transition-all duration-300 ${scrolled ? "h-7" : "h-8 lg:h-10"}`} />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex items-center gap-1">
            {navigation.map((item, idx) => (
              <div
                key={idx}
                className="relative group px-1"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href || "/"}
                  className={`relative px-4 py-2.5 rounded-full flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeDropdown === idx ? "text-white bg-blue-500/60" : "text-slate-600 hover:text-blue-500"
                  }`}
                >
                  {item.name}
                  {item.type === "dropdown" && (
                    <ChevronDownIcon className={`w-3 h-3 stroke-[3px] transition-transform duration-300 ${activeDropdown === idx ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {item.type === "dropdown" && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 transform origin-top
                    ${activeDropdown === idx ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"}
                    ${item.cols > 1 ? "w-[580px]" : "w-72"}`}
                  >
                    <div className="bg-[#0c101b] rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
                      <div className={`p-6 grid ${item.cols === 2 ? "grid-cols-2 gap-x-8 gap-y-2" : "grid-cols-1 gap-2"}`}>
                        {item.items.map((sub, subIdx) => (
                          <Link key={subIdx} to={sub.href} className="group/link flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all">
                            <span className="text-sm font-medium text-slate-400 group-hover/link:text-blue-300 transition-colors">{sub.label}</span>
                            <span className="relative w-4 h-4 flex items-center justify-center">
                                <span className="absolute w-1 h-1 rounded-full bg-slate-600 group-hover/link:scale-0 transition-all" />
                                <ArrowRightIcon className="w-3.5 h-3.5 text-blue-400 scale-0 group-hover/link:scale-100 transition-all" />
                            </span>
                          </Link>
                        ))}
                      </div>
                      <Link to={item.href} className="bg-black/40 px-6 py-3 border-t border-white/5 flex items-center justify-between hover:bg-blue-600/10 transition-colors group/all">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest group-hover/all:text-blue-500">View All {item.name}</span>
                        <SparklesIcon className="w-3.5 h-3.5 text-blue-500/60 group-hover/all:text-blue-400" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-3 border-r border-white/10 pr-4 mr-1">
              {[FaFacebookF, FaInstagram, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="/contact" className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"><Icon size={14} /></a>
              ))}
            </div>
            <Link
              to="/contact"
              className={`hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300
                ${scrolled ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/20" : "bg-white text-black hover:bg-slate-400"}`}
            >
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>Get Quote</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(true)} className={`xl:hidden p-2 rounded-full transition-colors ${scrolled ? "bg-white/5 text-white" : "text-white"}`}>
              <Bars3Icon className="w-6 h-6 stroke-2" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${mobileMenuOpen ? "visible" : "invisible pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-[#000000]/80 backdrop-blur-sm transition-opacity duration-500 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-full sm:w-[420px] bg-[#0f111a] transform transition-transform duration-500 flex flex-col ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <img src={Logo} alt="CoolMax" className="h-8 object-contain" />
            <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5"><XMarkIcon className="w-5 h-5 text-slate-300" /></button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 pb-24">
            <div className="flex flex-col gap-3 mt-2">
              {navigation.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-white/5 overflow-hidden bg-white/[0.02]">
                  <div className="flex items-center">
                    <Link to={item.href} onClick={() => setMobileMenuOpen(false)} className="flex-1 px-5 py-4 text-[16px] font-semibold text-slate-200">{item.name}</Link>
                    {item.type === "dropdown" && (
                      <button onClick={() => setMobileActive(mobileActive === idx ? null : idx)} className="px-5 py-4 border-l border-white/5">
                        <ChevronDownIcon className={`w-5 h-5 text-slate-500 transition-transform ${mobileActive === idx ? "rotate-180 text-blue-400" : ""}`} />
                      </button>
                    )}
                  </div>
                  {item.type === "dropdown" && (
                    <div className={`grid transition-all duration-500 ${mobileActive === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden bg-black/20">
                        <div className="flex flex-col py-2">
                          {item.items.map((sub, i) => (
                            <Link key={i} to={sub.href} onClick={() => setMobileMenuOpen(false)} className="px-10 py-3 text-sm text-slate-400 hover:text-white border-l-2 border-transparent hover:border-blue-500">{sub.label}</Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#0f111a]">
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl shadow-xl">Get A Quote</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}