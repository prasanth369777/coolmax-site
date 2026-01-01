import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import Logo from "../../src/asset/hero/coll-logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* GLASS NAV BAR */}
      <div className="backdrop-blur-xl bg-white border-blue-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="CoolMax"
              className="h-10 md:h-11 object-contain"
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-10 text-sm font-medium text-gray-900">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="relative hover:text-blue-600 transition"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">

            {/* SEARCH */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-52 px-4 py-2 rounded-full bg-white/10 text-sm text-blue-400 placeholder-gray-600
                           focus:outline-none focus:ring-1 focus:ring-indigo-400"
              />
              <MagnifyingGlassIcon className="w-4 h-4 absolute right-4 top-2.5 text-gray-900" />
            </div>

            {/* SOCIAL ICONS (BLACK) */}
            <div className="flex gap-2">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition"
                >
                  <Icon className="text-black text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* MOBILE TOGGLE (BLACK) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-black"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden backdrop-blur-xl bg-black/90 border-t border-white/10">
          <div className="px-6 py-6 space-y-5 text-gray-200">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="block text-lg font-medium hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* MOBILE SOCIAL ICONS (BLACK) */}
            <div className="flex gap-4 pt-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition"
                >
                  <Icon className="text-black" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
