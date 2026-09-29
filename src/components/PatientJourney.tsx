/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CLINIC_DATA } from "../data/clinicData";
import { ArrowRight } from "lucide-react";

export default function PatientJourney() {
  return (
    <section className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-3">
            How We Care For You
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            {CLINIC_DATA.journey.title}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            {CLINIC_DATA.journey.subtitle}
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded mx-auto mt-6" />
        </div>

        {/* TIMELINE STEPS LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[1.5px] bg-slate-100 z-0" />

          {CLINIC_DATA.journey.steps.map((step, index) => {
            const isLast = index === CLINIC_DATA.journey.steps.length - 1;
            return (
              <div key={index} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group">
                
                {/* Bubble Icon with sequential numbers */}
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm tracking-tight mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm shrink-0">
                  {step.stepNumber}
                </div>

                {/* Info block */}
                <h3 className="text-sm font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs lg:max-w-none">
                  {step.desc}
                </p>

                {/* Simple mobile chevron connector */}
                {!isLast && (
                  <div className="lg:hidden my-4 text-blue-200">
                    <ArrowRight className="h-5 w-5 transform rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
