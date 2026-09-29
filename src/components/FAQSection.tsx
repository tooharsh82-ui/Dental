/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CLINIC_DATA } from "../data/clinicData";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Appointments", "Billing", "Technology", "Treatments"];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFAQs = CLINIC_DATA.faq.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section id="faq" className="py-20 sm:py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            Find rapid, clear answers to common inquiries regarding our patient hospitality options, clinical technologies, and billing policies.
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded mx-auto mt-6" />
        </div>

        {/* CATEGORY ACCORDION FILTERS */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100/80 rounded-xl max-w-xl mx-auto mb-10 border border-slate-200/50">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedId(null);
              }}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ ACCORDION LIST */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "border-blue-200 shadow-sm"
                    : "border-slate-200/60 hover:border-slate-300"
                }`}
              >
                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className={`h-4.5 w-4.5 shrink-0 ${isExpanded ? "text-blue-600" : "text-slate-400"}`} />
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1 rounded-lg bg-slate-50 text-slate-500 transition-colors">
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Animated Collapse Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-[300px] border-t border-slate-100 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="p-6 bg-slate-50/50 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
