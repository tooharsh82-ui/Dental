/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CLINIC_DATA } from "../data/clinicData";
import { Star, MessageSquare, BadgeAlert } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-3">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Discover the experiences of our dental families. All customer feedback below is provided as sample demonstrative content.
          </p>
          
          {/* Warning notice to avoid fabricated results claims */}
          <div className="inline-flex items-center gap-2 mt-4 text-xs text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg">
            <BadgeAlert className="h-4 w-4 text-slate-400 shrink-0" />
            <span>Demonstrative Sample Testimonials · Patient names and quotes are mock placeholders</span>
          </div>

          <div className="h-1 w-12 bg-blue-600 rounded mx-auto mt-6" />
        </div>

        {/* TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINIC_DATA.testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group"
            >
              <div>
                {/* Review Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Treatment - unboxed text metadata with separators */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">
                    {review.author}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 uppercase tracking-wide">
                    <span>{review.treatment}</span>
                  </div>
                </div>
                
                <span className="text-[10px] text-slate-400 font-mono font-medium">
                  {review.date}
                </span>
              </div>

              {/* Float quote icon subtle design detail */}
              <div className="absolute right-6 top-6 text-slate-100 group-hover:text-blue-50/50 transition-colors pointer-events-none">
                <MessageSquare className="h-8 w-8 stroke-1 fill-current" />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
