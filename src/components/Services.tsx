/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  Stethoscope,
  Sparkles,
  Activity,
  Smile,
  Sun,
  Grid,
  Baby,
  Scissors,
  ShieldAlert,
  ArrowRight,
  Clock,
  DollarSign,
  CheckCircle,
  X,
  CalendarDays
} from "lucide-react";
import { CLINIC_DATA, ServiceItem } from "../data/clinicData";

// Dynamic mapper for Lucide icons
const iconMap: Record<string, React.ComponentType<any>> = {
  Stethoscope: Stethoscope,
  Sparkles: Sparkles,
  Activity: Activity,
  Smile: Smile,
  Sun: Sun,
  Grid: Grid,
  Baby: Baby,
  Scissors: Scissors,
  ShieldAlert: ShieldAlert
};

interface ServicesProps {
  onSelectServiceForBooking?: (serviceId: string) => void;
}

export default function Services({ onSelectServiceForBooking }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleLearnMore = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleBookService = (serviceId: string) => {
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(serviceId);
    }
    setSelectedService(null);
    const target = document.querySelector("#booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-3">
            Clinical Departments
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Our Professional Services
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            We deliver a vast range of standard-setting oral care paths incorporating high diagnostic precision and state-of-the-art biological sterilization.
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded mx-auto mt-6" />
        </div>

        {/* 10 DENTAL SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {CLINIC_DATA.services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Stethoscope;
            const isEmergency = service.id === "emergency";

            return (
              <div
                key={service.id}
                className={`group relative bg-white border rounded-xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${
                  isEmergency
                    ? "border-red-200 bg-red-50/10 hover:bg-red-50/20"
                    : "border-slate-200 hover:border-blue-500"
                }`}
              >
                <div>
                  {/* Icon Lockup */}
                  <div
                    className={`p-2.5 rounded-lg inline-block mb-5 transition-transform group-hover:scale-110 duration-300 ${
                      isEmergency
                        ? "bg-red-50 text-red-600"
                        : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-sm font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Learn More Action Line */}
                <button
                  type="button"
                  onClick={() => handleLearnMore(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors cursor-pointer self-start focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1 py-0.5"
                >
                  Learn More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 duration-200" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* DETAIL MODAL DRAWER - ACCESSIBLE LIGHTBOX */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          {/* Backdrop Scrim */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
          />

          {/* Modal Box */}
          <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 transition-transform duration-300 p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                  {React.createElement(iconMap[selectedService.iconName] || Stethoscope, {
                    className: "h-6 w-6"
                  })}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                    {selectedService.title}
                  </h3>
                  <span className="text-xs font-medium text-slate-400">Clinical Guide</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  Procedure Overview
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedService.longDesc}
                </p>
              </div>

              {/* Estimate Details - Tabular presentation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Estimated Cost
                    </span>
                    <span className="text-xs font-semibold text-slate-700">
                      {selectedService.costPlaceholder}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Typical Duration
                    </span>
                    <span className="text-xs font-semibold text-slate-700 font-mono">
                      {selectedService.durationPlaceholder}
                    </span>
                  </div>
                </div>
              </div>

              {/* Procedural Bullet Lists */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
                  What is included in this treatment:
                </h4>
                <ul className="space-y-2.5">
                  {selectedService.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer actions */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleCloseModal}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors"
              >
                Close Clinical View
              </button>
              <button
                type="button"
                onClick={() => handleBookService(selectedService.id)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <CalendarDays className="h-4 w-4" />
                Select & Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
