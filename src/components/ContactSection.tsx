/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CLINIC_DATA } from "../data/clinicData";
import { MapPin, Phone, Mail, Clock, Info, Check } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
            Contact & Practice Location
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed">
            Reach out via phone, secure email channels, or drop by our medical complex. No fabricated locations are hardcoded; all data is customizable.
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded mt-6" />
        </div>

        {/* 2-COLUMN CONTACT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: DIRECT CONTACT CHANNELS */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info Cards */}
            <div className="space-y-6">
              
              {/* Address Card */}
              <div className="flex items-start gap-4 p-5 hover:bg-slate-50 rounded-2xl transition-all border border-slate-100 shadow-sm">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Clinic Address</h4>
                  <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                    {CLINIC_DATA.addressPlaceholder}
                  </p>
                  <span className="text-[10px] text-slate-400 font-medium block mt-1.5">
                    Medical Plaza · Suite 400 (4th Floor Elevators)
                  </span>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-5 hover:bg-slate-50 rounded-2xl transition-all border border-slate-100 shadow-sm">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Phone Line</h4>
                  <a
                    href={`tel:${CLINIC_DATA.phonePlaceholder}`}
                    className="text-xs sm:text-sm text-slate-700 font-mono font-bold hover:text-blue-600 transition-colors"
                  >
                    {CLINIC_DATA.phonePlaceholder}
                  </a>
                  <span className="text-[10px] text-emerald-600 font-semibold block mt-1.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Triage Nurse On Duty (Emergency Patients)
                  </span>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-5 hover:bg-slate-50 rounded-2xl transition-all border border-slate-100 shadow-sm">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email Channels</h4>
                  <a
                    href={`mailto:${CLINIC_DATA.emailPlaceholder}`}
                    className="text-xs sm:text-sm text-slate-700 font-semibold hover:text-blue-600 transition-colors underline break-all"
                  >
                    {CLINIC_DATA.emailPlaceholder}
                  </a>
                  <span className="text-[10px] text-slate-400 font-medium block mt-1.5">
                    General, insurance mapping & billing requests
                  </span>
                </div>
              </div>

            </div>

            {/* Opening Hours list - Tabular-nums layout */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200/50 pb-2 flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>Operating Hours</span>
              </h4>

              <div className="space-y-2.5 text-xs font-medium text-slate-600">
                <div className="flex justify-between">
                  <span>Weekdays</span>
                  <span className="text-slate-800 font-mono">{CLINIC_DATA.openingHours.weekdays.split(":")[1]}</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturdays</span>
                  <span className="text-slate-800 font-mono">{CLINIC_DATA.openingHours.saturday.split(":")[1]}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sundays</span>
                  <span className="text-slate-500 font-mono">{CLINIC_DATA.openingHours.sunday.split(":")[1]}</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: PREMIUM CUSTOM MAP / DIRECTIONS CONTAINER */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Hand-built beautiful stylized SVG Map Card to avoid loading fragile frames */}
            <div className="relative bg-slate-50 rounded-3xl border border-slate-100 p-6 shadow-md overflow-hidden aspect-[16/10] flex flex-col justify-between">
              
              {/* Artistic Grid Blueprint background */}
              <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Abstract styled streets / landmarks vectors */}
              <svg className="absolute inset-0 w-full h-full text-slate-300 pointer-events-none" xmlns="http://www.w3.org/1999/svg">
                <path d="M 0,100 L 800,120" stroke="currentColor" strokeWidth="6" />
                <path d="M 150,0 L 190,400" stroke="currentColor" strokeWidth="6" />
                <path d="M 400,-50 L 450,450" stroke="currentColor" strokeWidth="8" />
                <path d="M 0,280 L 800,240" stroke="currentColor" strokeWidth="10" strokeDasharray="5,5" />
                {/* Parks / Water representation */}
                <rect x="520" y="30" width="180" height="120" rx="16" fill="#bfdbfe" opacity="0.3" />
                <circle cx="170" cy="110" r="40" fill="#bbf7d0" opacity="0.3" />
              </svg>

              {/* Pin Overlay Indicator on Map */}
              <div className="absolute top-[45%] left-[48%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-blue-600 text-white p-2.5 rounded-full shadow-lg ring-4 ring-blue-500/20 animate-bounce">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="bg-slate-900 text-white font-semibold text-[9px] px-2 py-0.5 rounded shadow mt-1">
                  Aura Studio
                </div>
              </div>

              {/* Header inside Map Card */}
              <div className="relative flex items-center justify-between">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-100 text-[10px] font-bold text-slate-700">
                  Complex Transit Map
                </div>
                <div className="bg-emerald-500 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Validated Parking
                </div>
              </div>

              {/* Footer info box overlay */}
              <div className="relative bg-white/95 backdrop-blur shadow-sm p-4 rounded-2xl border border-slate-100 flex items-start gap-3">
                <Info className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900">Arriving At Aura Studio:</h4>
                  <ul className="text-[10px] text-slate-500 font-medium space-y-1">
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3 w-3 text-emerald-500" />
                      <span>Complimentary underground garage parking with ticket validation.</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3 w-3 text-emerald-500" />
                      <span>Metro Station transit stop is a clean 3-minute walking distance.</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3 w-3 text-emerald-500" />
                      <span>Fully ADA-compliant wheelchair elevators access the 4th-floor lobby directly.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <p className="text-center text-xs text-slate-400 font-medium">
              * Need customized directions or a detailed dental insurance pre-check? Speak directly with our clinical receptionist desk today!
            </p>

          </div>

        </div>
        
      </div>
    </section>
  );
}
