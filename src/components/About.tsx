/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CLINIC_DATA } from "../data/clinicData";
import { ShieldCheck, Cpu, Coffee, Sparkles } from "lucide-react";
import { MEDIA_CONFIG } from "../data/mediaConfig";

// Map string representation of icons to actual Lucide components
const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  Coffee: Coffee
};

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER: Editorial styling, balanced text */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-3">
            {CLINIC_DATA.about.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
            {CLINIC_DATA.about.title}
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: GORGEOUS PORTRAIT & STATS GRID */}
          <div className="lg:col-span-6 space-y-8">
            <div className="relative p-2 bg-slate-50 border border-slate-100 rounded-2xl shadow-md overflow-hidden">
              {!imgError ? (
                <img
                  src={MEDIA_CONFIG.aboutImageUrl}
                  alt="Aura Dental Studio luxurious lounge waiting area"
                  className="w-full h-[300px] sm:h-[380px] object-cover rounded-xl transition-all duration-500 hover:brightness-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-[300px] sm:h-[380px] rounded-xl bg-gradient-to-br from-slate-800 to-blue-900 flex flex-col items-center justify-center p-8 text-white text-center">
                  <Sparkles className="h-12 w-12 text-blue-300 mb-4 animate-bounce" />
                  <h3 className="text-lg font-bold">Welcoming Patient Spaces</h3>
                  <p className="text-xs text-slate-300 max-w-sm mt-1">
                    Carefully designed to ease anxieties with relaxing ambient sounds, light oak wood elements, and refreshments.
                  </p>
                </div>
              )}
            </div>

            {/* STATS MATRIX: Standard tabular-nums and unboxed clean presentation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-slate-100">
              {CLINIC_DATA.about.stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 tracking-tight font-mono tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: EDITORIAL PROSE & VALUE HIGHLIGHTS */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6 text-slate-600 leading-relaxed text-base">
              <p>{CLINIC_DATA.about.description1}</p>
              <p>{CLINIC_DATA.about.description2}</p>
            </div>

            {/* HIGHLIGHTS CARDS (NO Cards within Cards, using neat whitespace list) */}
            <div className="space-y-6">
              {CLINIC_DATA.about.highlights.map((highlight, index) => {
                const IconComponent = iconMap[highlight.icon] || ShieldCheck;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-all duration-300 border-l-2 border-transparent hover:border-blue-600 group"
                  >
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors shrink-0">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {highlight.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
