/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Smile } from "lucide-react";
import { CLINIC_DATA } from "../data/clinicData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ZONE 1: BRAND ZONE (Wordmark + Simple inline graphic icon) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 font-semibold text-xl tracking-tight text-slate-900 group"
          >
            <Smile className="h-6 w-6 text-blue-600 transition-transform group-hover:scale-110 duration-300" />
            <span className="font-semibold text-slate-900">{CLINIC_DATA.clinicNamePlaceholder}</span>
          </a>

          {/* ZONE 2: PRIMARY NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-8">
            {CLINIC_DATA.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ZONE 3: PRIMARY ACTION */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, "#booking")}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-lg shadow-sm whitespace-nowrap"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Menu Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-screen opacity-100 border-b border-slate-100 bg-white"
            : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
          {CLINIC_DATA.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, "#booking")}
              className="w-full text-center px-4 py-3 rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
