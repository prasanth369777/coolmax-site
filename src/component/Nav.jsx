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
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import Logo from "../../src/asset/hero/coll-logo.png";

/* ---------------- NAV DATA ---------------- */
const navigation = [
  { name: "Home", href: "/", type: "link" },
  {
    name: "Products",
    href: "/products",
    type: "dropdown",
    cols: 2,
    items: [
       { label: "Commercial Diffusers", href: "/commercial-diffusers" },
        { label: "Large Area & HVAC", href: "/large-area-diffusers" },
      { label: "Car Aroma Diffusers", href: "/car-diffusers" },
      { label: "Desktop & Small Space", href: "/desktop-small-diffusers" },
      { label: "Wall-Mounted & Ceiling", href: "/wall-mounted-diffusers" },
      { label: "Floor-Standing Diffusers", href: "/floor-standing-diffusers" },
      { label: "Passive/No-Power", href: "/passive-diffusers" },
    ],
  },
  {
    name: "Aroma Oils",
    href: "/aromas",
    type: "dropdown",
    cols: 2,
    items: [
      { label: "Oriental Fragrances", href: "/Oriental-Fragrances" },
      { label: "Fresh Fragrances", href: "/Fresh-Fragrances" },
      { label: "Perfumers Choice", href: "/Perfumers-Choice" },
      { label: "Fruity Fragrances", href: "/Fruity-Fragrances" },
      { label: "Food & Beverage Fragrances", href: "/Food-BeverageFragrances" },
      { label: "Premium Collection", href: "/Premium-Collection" },
    
    ],
  },
  {
    name: "Solution",
    href: "/solution",
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
  { name: "Industries", href: "/industries", type: "link" },
  { name: "About", href: "/about-us/", type: "link" },
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

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/coolmaxscent" },
    { icon: FaInstagram, href: "https://www.instagram.com/coolmaxscent/" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/cool-max-scent/" },
    { icon: FaWhatsapp, href: "https://wa.me/971522286401" }
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center py-0 lg:py-0 transition-all duration-300 pointer-events-none text-left">
        <div 
          className={`relative pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
        ${scrolled 
            ? "w-[95%] lg:w-[90%] max-w-[1400px] bg-white/95 backdrop-blur-xl border border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-lg py-2 px-6" 
            : "w-full bg-white border-b border-slate-100 py-4 px-6 lg:px-12"
          }`}
        >
          {/* LOGO - Filters removed to show original colors */}
          <div className="flex-shrink-0 z-50">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img src={Logo} alt="CoolMax" className={`object-contain transition-all duration-300 ${scrolled ? "h-7" : "h-8 lg:h-10"}`} />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex items-center gap-1 text-left">
            {navigation.map((item, idx) => (
              <div
                key={idx}
                className="relative group px-1 text-left"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href || "/"}
                  className={`relative px-4 py-2.5 rounded-full flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeDropdown === idx ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-blue-900"
                  }`}
                >
                  {item.name}
                  {item.type === "dropdown" && (
                    <ChevronDownIcon className={`w-3 h-3 stroke-[3px] transition-transform duration-300 ${activeDropdown === idx ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {item.type === "dropdown" && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 transform origin-top text-left
                    ${activeDropdown === idx ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"}
                    ${item.cols > 1 ? "w-[580px]" : "w-72"}`}
                  >
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden text-left">
                      <div className={`p-6 grid ${item.cols === 2 ? "grid-cols-2 gap-x-8 gap-y-2" : "grid-cols-1 gap-2"}`}>
                        {item.items.map((sub, subIdx) => (
                          <Link key={subIdx} to={sub.href} className="group/link flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-all text-left">
                            <span className="text-sm font-medium text-slate-500 group-hover/link:text-blue-600 transition-colors">{sub.label}</span>
                            <span className="relative w-4 h-4 flex items-center justify-center">
                                <span className="absolute w-1 h-1 rounded-full bg-slate-300 group-hover/link:scale-0 transition-all" />
                                <ArrowRightIcon className="w-3.5 h-3.5 text-blue-500 scale-0 group-hover/link:scale-100 transition-all" />
                            </span>
                          </Link>
                        ))}
                      </div>
                      <Link to={item.href} className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between hover:bg-blue-50 transition-colors group/all">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest group-all:text-blue-600">View All {item.name}</span>
                        <span className="flex items-center gap-1.5">
                          <SparklesIcon className="w-3.5 h-3.5 text-blue-400 group-all:text-blue-600" />
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4 text-left">
            <div className="hidden lg:flex items-center gap-3 border-r border-slate-200 pr-4 mr-1">
              {socialLinks.map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
                >
                  <item.icon size={14} />
                </a>
              ))}
            </div>
            <Link
              to="/contact"
              className={`hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300
                ${scrolled ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-900/10" : "bg-slate-900 text-white hover:bg-blue-600"}`}
            >
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>Get Quote</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(true)} className="xl:hidden p-2 rounded-full transition-colors text-blue-600">
              <Bars3Icon className="w-6 h-6 stroke-2 stroke-blue-600" />
            </button>
          </div>
        </div>
      </header> 

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${mobileMenuOpen ? "visible" : "invisible pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-full sm:w-[420px] bg-white transform transition-transform duration-500 flex flex-col ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            {/* Logo filters removed here as well */}
            <img src={Logo} alt="CoolMax" className="h-8 object-contain" />
            <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 border border-slate-200"><XMarkIcon className="w-5 h-5 text-slate-600" /></button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 pb-24 text-left">
            <div className="flex flex-col gap-3 mt-2 text-left">
              {navigation.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-100 overflow-hidden bg-slate-50/50 text-left">
                  <div className="flex items-center text-left">
                    <Link to={item.href} onClick={() => setMobileMenuOpen(false)} className="flex-1 px-5 py-4 text-[16px] font-semibold text-slate-700">{item.name}</Link>
                    {item.type === "dropdown" && (
                      <button onClick={() => setMobileActive(mobileActive === idx ? null : idx)} className="px-5 py-4 border-l border-slate-100">
                        <ChevronDownIcon className={`w-5 h-5 text-slate-400 transition-transform ${mobileActive === idx ? "rotate-180 text-blue-600" : ""}`} />
                      </button>
                    )}
                  </div>
                  {item.type === "dropdown" && (
                    <div className={`grid transition-all duration-500 text-left ${mobileActive === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden bg-white/60 text-left">
                        <div className="flex flex-col py-2 text-left">
                          {item.items.map((sub, i) => (
                            <Link key={i} to={sub.href} onClick={() => setMobileMenuOpen(false)} className="px-10 py-3 text-sm text-slate-500 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 text-left">{sub.label}</Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-100">
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg">Get A Quote</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}