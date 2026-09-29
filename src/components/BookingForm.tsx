/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { CLINIC_DATA } from "../data/clinicData";
import {
  CalendarDays,
  Clock,
  User,
  Mail,
  Phone,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
  Stethoscope,
  Smile,
  Users
} from "lucide-react";

interface BookingFormProps {
  selectedServiceId: string;
  selectedDoctorName: string;
  onClearSelections?: () => void;
}

export default function BookingForm({
  selectedServiceId,
  selectedDoctorName,
  onClearSelections
}: BookingFormProps) {
  // Form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceId: "",
    doctorName: "",
    date: "",
    timeSlot: "",
    notes: ""
  });

  // Validation & Submission States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any | null>(null);

  // Sync incoming pre-selected service and doctor props
  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  useEffect(() => {
    if (selectedDoctorName) {
      setFormData((prev) => ({ ...prev, doctorName: selectedDoctorName }));
    }
  }, [selectedDoctorName]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    // Email format matching
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone digits matching (approximate)
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 7) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.serviceId) {
      newErrors.serviceId = "Please select a dental service";
    }

    if (!formData.doctorName) {
      newErrors.doctorName = "Please select a dentist preference";
    }

    // Must be a future date
    if (!formData.date) {
      newErrors.date = "Please select a date";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Appointment date must be today or in the future";
      }
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = "Please choose a preferred time slot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error inline as they type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate clinical triage database queue submission delay (1.2 seconds)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      if (onClearSelections) {
        onClearSelections();
      }
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceId: "",
      doctorName: "",
      date: "",
      timeSlot: "",
      notes: ""
    });
    setSubmittedData(null);
  };

  // Get service name from ID for confirmation screen
  const selectedServiceObj = CLINIC_DATA.services.find((s) => s.id === formData.serviceId);
  const serviceDisplayName = selectedServiceObj ? selectedServiceObj.title : formData.serviceId;

  // Form input classes
  const inputClass = (fieldName: string) => `
    w-full pl-10 pr-4 py-3 text-xs border rounded-lg transition-all duration-200 outline-none
    ${
      errors[fieldName]
        ? "border-red-300 bg-red-50/10 focus:ring-2 focus:ring-red-200"
        : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:bg-white"
    }
    bg-slate-50 text-slate-700 font-medium
  `;

  // Standard label class
  const labelClass = "block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2";

  return (
    <section id="booking" className="py-20 sm:py-24 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-3">
            Schedule Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Book an Appointment
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            Fill in the required information to reserve your clinical session. Our financial coordinator will coordinate with your insurance provider.
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded mx-auto mt-6" />
        </div>

        {/* BOOKING INTERACTIVE CONTAINER */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          
          {/* SUCCESS STATE DISPLAY */}
          {submittedData ? (
            <div className="text-center space-y-8 animate-in fade-in duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-emerald-50 rounded-2xl text-emerald-600 border border-emerald-100 mb-2">
                <CheckCircle className="h-10 w-10" />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Appointment Request Received
                </h3>
                <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
                  Excellent! Your dental inquiry has successfully entered our template triage queue. A coordinator will verify your information soon.
                </p>
              </div>

              {/* Patient details block (Tabular-nums formatting) */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 max-w-xl mx-auto text-left space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200/60 pb-2">
                  Session Reservation Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Full Name</span>
                    <span className="text-slate-800">{submittedData.name}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Contact Info</span>
                    <span className="text-slate-800">{submittedData.phone}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Selected Service</span>
                    <span className="text-blue-600 font-semibold">{serviceDisplayName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Dentist Preference</span>
                    <span className="text-slate-800">{submittedData.doctorName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Preferred Date</span>
                    <span className="text-slate-800 font-mono">{submittedData.date}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Time Frame</span>
                    <span className="text-slate-800">{submittedData.timeSlot}</span>
                  </div>
                </div>
              </div>

              {/* Strict Notice regarding simulated state */}
              <div className="max-w-md mx-auto p-4 bg-blue-50/60 border border-blue-100 text-[11px] text-slate-500 rounded-xl leading-relaxed">
                <strong>Please Note:</strong> This is a client-ready preview template. Real appointment systems require backend scheduling APIs or CRM integrations. Your browser is storing this local demo request securely.
              </div>

              {/* Reset trigger */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-6 py-2.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer focus:outline-none"
                >
                  Book Another Session
                </button>
              </div>
            </div>
          ) : (
            
            /* DYNAMIC BOOKING FORM INPUTS */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name field */}
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="h-4.5 w-4.5" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass("name")}
                    />
                  </div>
                  {errors.name && (
                    <span className="text-[10px] font-semibold text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="h-4.5 w-4.5" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass("email")}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-[10px] font-semibold text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone field */}
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="h-4.5 w-4.5" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass("phone")}
                    />
                  </div>
                  {errors.phone && (
                    <span className="text-[10px] font-semibold text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.phone}
                    </span>
                  )}
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className={labelClass}>Select Department / Service *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Stethoscope className="h-4.5 w-4.5" />
                    </div>
                    <select
                      name="serviceId"
                      value={formData.serviceId}
                      onChange={handleChange}
                      className={inputClass("serviceId")}
                    >
                      <option value="">-- Choose Dental Service --</option>
                      {CLINIC_DATA.services.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.serviceId && (
                    <span className="text-[10px] font-semibold text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.serviceId}
                    </span>
                  )}
                </div>

                {/* Doctor Selection */}
                <div>
                  <label className={labelClass}>Select Preferred Dentist *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Users className="h-4.5 w-4.5" />
                    </div>
                    <select
                      name="doctorName"
                      value={formData.doctorName}
                      onChange={handleChange}
                      className={inputClass("doctorName")}
                    >
                      <option value="">-- Choose Preferred Clinician --</option>
                      <option value="No Preference">No Preference (First Available)</option>
                      {CLINIC_DATA.dentists.map((doc) => (
                        <option key={doc.id} value={doc.name}>
                          {doc.name} ({doc.specialty.split("&")[0]})
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.doctorName && (
                    <span className="text-[10px] font-semibold text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.doctorName}
                    </span>
                  )}
                </div>

                {/* Date Selection */}
                <div>
                  <label className={labelClass}>Preferred Date *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <CalendarDays className="h-4.5 w-4.5" />
                    </div>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={inputClass("date")}
                    />
                  </div>
                  {errors.date && (
                    <span className="text-[10px] font-semibold text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.date}
                    </span>
                  )}
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label className={labelClass}>Preferred Time Slot *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Clock className="h-4.5 w-4.5" />
                    </div>
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className={inputClass("timeSlot")}
                    >
                      <option value="">-- Select Time Slot --</option>
                      <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                      <option value="Mid-day (12:00 PM - 3:00 PM)">Mid-day (12:00 PM - 3:00 PM)</option>
                      <option value="Late Afternoon (3:00 PM - 6:00 PM)">Late Afternoon (3:00 PM - 6:00 PM)</option>
                    </select>
                  </div>
                  {errors.timeSlot && (
                    <span className="text-[10px] font-semibold text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.timeSlot}
                    </span>
                  )}
                </div>

              </div>

              {/* Text Area Additional Notes */}
              <div>
                <label className={labelClass}>Additional Notes & Symptoms (Optional)</label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 text-slate-400 pointer-events-none">
                    <FileText className="h-4.5 w-4.5" />
                  </div>
                  <textarea
                    name="notes"
                    placeholder="Briefly explain any relevant dental pain, history of sensitive teeth, or cosmetic goals..."
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 text-xs border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:bg-white bg-slate-50 text-slate-700 font-medium transition-all duration-200"
                  />
                </div>
              </div>

              {/* Submit triggers */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                <span className="text-[10px] text-slate-400 font-medium max-w-sm">
                  * By submitting, you acknowledge this is a clinic demo template. Real calendar sync occurs upon patient validation.
                </span>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 transition-colors duration-200 rounded-lg flex items-center justify-center gap-2 shadow-md cursor-pointer shrink-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4.5 w-4.5 animate-spin" />
                      Queuing Diagnostic Triage...
                    </>
                  ) : (
                    "Submit Appointment Request"
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
