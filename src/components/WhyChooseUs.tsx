/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Heart, Shield, CreditCard, Users } from "lucide-react";
import { CLINIC_DATA } from "../data/clinicData";

const iconMap: Record<string, React.ComponentType<any>> = {
  Heart: Heart,
  Shield: Shield,
  CreditCard: CreditCard,
  Users: Users
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-3">
            The Aura Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
            {CLINIC_DATA.whyChooseUs.title}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed">
            {CLINIC_DATA.whyChooseUs.subtitle}
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded mt-6" />
        </div>

        {/* REASONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLINIC_DATA.whyChooseUs.reasons.map((reason, index) => {
            const IconComponent = iconMap[reason.icon] || Heart;
            return (
              <div
                key={index}
                className="group p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col items-start"
              >
                {/* Dynamic Icon */}
                <div className="p-3 bg-white text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  <IconComponent className="h-5 w-5" />
                </div>

                <h3 className="text-sm font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
