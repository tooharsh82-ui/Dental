/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CLINIC_DATA } from "../data/clinicData";
import { ShieldCheck, Calendar, ArrowRight, Star } from "lucide-react";
import { MEDIA_CONFIG } from "../data/mediaConfig";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-slate-50 overflow-hidden py-12 sm:py-20 lg:py-24">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] rounded-full bg-indigo-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: BRAND PROPOSITION */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-semibold text-blue-800 tracking-wide uppercase">
                {CLINIC_DATA.hero.badgeText}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-none text-wrap-balance">
              {CLINIC_DATA.hero.headline}
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {CLINIC_DATA.hero.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#booking"
                onClick={(e) => handleCtaClick(e, "#booking")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-lg shadow-md whitespace-nowrap text-center"
              >
                <Calendar className="h-4 w-4" />
                {CLINIC_DATA.hero.ctaPrimary}
              </a>
              <a
                href="#services"
                onClick={(e) => handleCtaClick(e, "#services")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 border border-slate-200 transition-colors duration-200 rounded-lg shadow-sm whitespace-nowrap text-center"
              >
                {CLINIC_DATA.hero.ctaSecondary}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Trust Indicator without fake statistics */}
            <div className="pt-4 border-t border-slate-200 w-full">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500" />
                </div>
                <span>·</span>
                <span className="text-slate-600">{CLINIC_DATA.hero.trustLabel}</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PROFESSIONAL DENTAL IMAGERY */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[450px] lg:max-w-none">
              
              {/* Outer Decorative Card Wrapper with shadow math */}
              <div className="relative p-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                {!imgError ? (
                  <img
                    src={MEDIA_CONFIG.heroImageUrl}
                    alt="Premium dentist clinic modern surgical-grade suite"
                    className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-[320px] sm:h-[400px] rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-800 flex flex-col items-center justify-center p-6 text-white text-center">
                    <ShieldCheck className="h-16 w-16 text-blue-200 mb-4 animate-pulse" />
                    <h3 className="text-xl font-bold mb-2">Modern Care Studio</h3>
                    <p className="text-xs text-blue-100 max-w-xs">
                      State-of-the-art clinic setting utilizing low-radiation 3D mapping and patient-first relaxation suites.
                    </p>
                  </div>
                )}

                {/* Micro-Interaction Highlight Overlay Panel */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Emergency On-Call</h4>
                      <p className="text-[10px] text-slate-500 font-medium">Active clinical triage lines</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold bg-blue-50 text-blue-800 px-2.5 py-1 rounded-md border border-blue-100">
                    24/7 Support
                  </span>
                </div>
              </div>

              {/* Backing decorative shapes */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
