/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CLINIC_DATA } from "../data/clinicData";
import { Smile, ArrowUp, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* COLUMN 1: BRAND LOGO & CORE SLOGAN */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight hover:text-blue-400 transition-colors"
            >
              <Smile className="h-6 w-6 text-blue-500" />
              <span>{CLINIC_DATA.clinicNamePlaceholder}</span>
            </a>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              State-of-the-art biological oral care. We deliver exceptional aesthetic and wellness transformations within a boutique, anxiety-free atmosphere.
            </p>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              {CLINIC_DATA.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CLINIC DEPARTMENTS */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Departments</h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors">
                  Cosmetic Porcelain Veneers
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors">
                  Guided Biological Implants
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors">
                  3D Invisalign Clear Aligners
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors">
                  Micro-Endodontic Therapy
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors">
                  Gentle Pediatric Cleanings
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: DIRECT ASSISTANCE DETAILS */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Help Desk</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-blue-500 shrink-0" />
                <span className="text-slate-500 leading-relaxed">
                  {CLINIC_DATA.addressPlaceholder}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-blue-500 shrink-0" />
                <a href={`tel:${CLINIC_DATA.phonePlaceholder}`} className="font-mono hover:text-white transition-colors">
                  {CLINIC_DATA.phonePlaceholder}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4.5 w-4.5 text-blue-500 shrink-0" />
                <a href={`mailto:${CLINIC_DATA.emailPlaceholder}`} className="hover:text-white transition-colors break-all">
                  {CLINIC_DATA.emailPlaceholder}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM METRICS & LICENSE CLAUSES */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[10px] text-slate-600 space-y-1 text-center sm:text-left">
            <p>
              &copy; {currentYear} {CLINIC_DATA.clinicNamePlaceholder}. All rights reserved worldwide.
            </p>
            <p>
              Licensed Dental Facility Practice Preview · Client Demonstrative Template.
            </p>
          </div>

          {/* Back to top scroll trigger */}
          <button
            type="button"
            onClick={handleScrollToTop}
            className="p-2.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shadow-sm focus:outline-none"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="h-4.5 w-4.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
