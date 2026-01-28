import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Use Link for internal navigation
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import Logo from "../../src/asset/hero/coll-logo.png";

// --- NAVIGATION DATA ---
// Updated structure to include specific 'href' for every dropdown item
const navigation = [
  { name: "About", href: "/about", type: "link" },
  {
    name: "Solutions",
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
    name: "Products",
    type: "dropdown",
    cols: 2, 
    items: [
      { label: "Car Aroma Diffusers", href: "/products" },
      { label: "Desktop & Small Space", href: "/products" },
      { label: "Wall-Mounted & Ceiling", href: "/products" },
      { label: "Commercial Diffusers", href: "/products" },
      { label: "Large Area & HVAC", href: "/products" },
      { label: "Floor-Standing Diffusers", href: "/products" },
      { label: "Passive / No-Power", href: "/products" },
    ],
  },
  {
    name: "Aroma Oils",
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
    name: "Industries",
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b ${
        scrolled
          ? "bg-black border-white/10 py-3" 
          : "bg-black border-transparent py-6"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* --- LEFT: LOGO --- */}
          <div className="flex-shrink-0 z-20">
            <Link to="/">
              <img
                src={Logo}
                alt="CoolMax"
                className={`transition-all duration-300 object-contain ${
                  scrolled ? "h-8 md:h-10" : "h-10 md:h-12"
                }`} 
              />
            </Link>
          </div>

          {/* --- MIDDLE: CENTERED NAV (Desktop) --- */}
          <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2">
            <nav className="flex items-center gap-8">
              {navigation.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group h-full py-4"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href || "/"}
                    className={`relative flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                        activeDropdown === idx ? "text-blue-500" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {item.type === "dropdown" && (
                      <ChevronDownIcon className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === idx ? "rotate-180 text-blue-500" : "text-gray-500"}`} />
                    )}
                    <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full ${activeDropdown === idx ? "w-full" : ""}`}></span>
                  </Link>

                  {/* MEGA MENU DROPDOWN */}
                  {item.type === "dropdown" && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 transform origin-top
                      ${activeDropdown === idx ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"}
                      ${item.cols > 1 ? "w-[500px]" : "w-64"}
                      `}
                    >
                      <div className="bg-neutral-900 rounded-sm border border-white/10 shadow-xl overflow-hidden">
                        <div className="h-[2px] w-full bg-blue-500" />
                        <div className={`p-6 grid ${item.cols === 2 ? "grid-cols-2 gap-x-8 gap-y-2" : "grid-cols-1 gap-y-2"}`}>
                          {item.items.map((sub, subIdx) => (
                            <Link
                              key={subIdx}
                              to={sub.href} // Unique link for each item
                              className="group flex items-center text-sm text-gray-400 hover:text-white transition-colors py-1.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* --- RIGHT: ACTIONS (Desktop) --- */}
          <div className="hidden xl:flex items-center gap-6 z-20">
            <div className="flex items-center gap-4 border-r border-white/10 pr-6">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a key={i} href="/" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
            <Link 
                to="/contact" 
                className="flex items-center gap-2 px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
                <PhoneIcon className="w-3 h-3" />
                Contact
            </Link>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden p-2 text-white hover:text-blue-500 transition"
          >
            <Bars3Icon className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* --- MOBILE DRAWER (Improved UI) --- */}
      <div className={`fixed inset-0 z-[60] transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80" onClick={() => setMobileMenuOpen(false)} />

        {/* Drawer Panel */}
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-neutral-900 border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
                <img src={Logo} alt="CoolMax" className="h-8 object-contain" />
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-white transition bg-white/5 rounded-full">
                    <XMarkIcon className="w-5 h-5" />
                </button>
            </div>

            {/* Links Container (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                <div className="flex flex-col space-y-2">
                    {navigation.map((item, idx) => (
                        <div key={idx} className="border-b border-white/5 last:border-0 pb-2">
                            {item.type === "link" ? (
                                <Link 
                                    to={item.href} 
                                    className="block py-3 text-base font-semibold text-gray-200 hover:text-blue-500 tracking-wide transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <div>
                                    <button 
                                        onClick={() => setMobileActive(mobileActive === idx ? null : idx)}
                                        className={`w-full flex items-center justify-between py-3 text-base font-semibold transition-colors ${mobileActive === idx ? "text-blue-500" : "text-gray-200"}`}
                                    >
                                        {item.name}
                                        <ChevronDownIcon 
                                            className={`w-4 h-4 transition-transform duration-300 ${mobileActive === idx ? "rotate-180 text-blue-500" : "text-gray-500"}`} 
                                        />
                                    </button>
                                    
                                    {/* Mobile Accordion */}
                                    <div 
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            mobileActive === idx ? "max-h-[800px] opacity-100 mb-4" : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        <div className="flex flex-col gap-1 pl-4 border-l-2 border-white/10 ml-1 mt-1">
                                            {item.items.map((sub, i) => (
                                                <Link 
                                                    key={i} 
                                                    to={sub.href} // Specific link for mobile item 
                                                    className="block py-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Drawer Footer (Sticky Bottom) */}
            <div className="p-6 bg-black border-t border-white/10 flex-shrink-0">
                <div className="flex justify-center gap-8 mb-6 text-gray-500">
                    <FaFacebookF className="hover:text-blue-500 cursor-pointer transition text-lg" />
                    <FaInstagram className="hover:text-blue-500 cursor-pointer transition text-lg" />
                    <FaLinkedinIn className="hover:text-blue-500 cursor-pointer transition text-lg" />
                </div>
                <Link to="/contact">
                    <button className="w-full py-3.5 bg-blue-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors shadow-lg shadow-blue-900/20">
                        Request Demo
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </header>
  );
}