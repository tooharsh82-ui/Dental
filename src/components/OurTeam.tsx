/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CLINIC_DATA } from "../data/clinicData";
import { Users, Languages, CalendarDays, Award } from "lucide-react";

interface OurTeamProps {
  onSelectDoctorForBooking?: (doctorName: string) => void;
}

export default function OurTeam({ onSelectDoctorForBooking }: OurTeamProps) {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleBookWithDoctor = (doctorName: string) => {
    if (onSelectDoctorForBooking) {
      onSelectDoctorForBooking(doctorName);
    }
    const target = document.querySelector("#booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="team" className="py-20 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-3">
            Clinical Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Meet Our Specialist Dentists
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Our board-eligible practitioners combine biological medical discipline with aesthetic artistry to deliver personalized wellness outcomes.
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded mx-auto mt-6" />
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINIC_DATA.dentists.map((dentist) => {
            const imageUrl = dentist.imagePath;
            const hasError = imgErrors[dentist.id] || !imageUrl;

            return (
              <div
                key={dentist.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Portrait Area */}
                  <div className="relative h-[280px] sm:h-[320px] bg-slate-100 overflow-hidden group">
                    {!hasError && imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={`Dentist portrait of ${dentist.name}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        onError={() => setImgErrors((prev) => ({ ...prev, [dentist.id]: true }))}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-tr from-slate-100 to-blue-50 flex flex-col items-center justify-center p-6 text-center text-slate-400">
                        <Users className="h-12 w-12 text-blue-300 mb-3 animate-pulse" />
                        <span className="text-xs font-semibold text-slate-600">Dental Specialist</span>
                        <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">{dentist.specialty}</span>
                      </div>
                    )}

                    {/* Left overlay Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700">
                        <Award className="h-3.5 w-3.5 text-blue-600" />
                        <span>{dentist.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        {dentist.name}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                        {dentist.specialty}
                      </p>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed min-h-[64px]">
                      {dentist.bio}
                    </p>

                    {/* Unboxed Metadata list with clean separators */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-4 text-[11px] font-medium text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Languages className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                        <span>{dentist.languages.join(" · ")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Button Footer */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleBookWithDoctor(dentist.name)}
                    className="w-full py-2.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Book Consultation
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
