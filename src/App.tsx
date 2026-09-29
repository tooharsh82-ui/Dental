/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import OurTeam from "./components/OurTeam";
import PatientJourney from "./components/PatientJourney";
import BeforeAfterGallery from "./components/BeforeAfterGallery";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  // Funnel State for patient pre-selections
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [selectedDoctorName, setSelectedDoctorName] = useState("");

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  const handleSelectDoctor = (doctorName: string) => {
    setSelectedDoctorName(doctorName);
  };

  const handleClearSelections = () => {
    setSelectedServiceId("");
    setSelectedDoctorName("");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white flex flex-col font-sans antialiased scroll-smooth">
      {/* Dynamic Header */}
      <Navbar />

      {/* Main Pages Flow */}
      <main className="flex-grow">
        {/* Proposition Section */}
        <Hero />

        {/* Introduction Section */}
        <About />

        {/* Mechanism / Capabilities Bento Grid */}
        <Services onSelectServiceForBooking={handleSelectService} />

        {/* Medical standards & features */}
        <WhyChooseUs />

        {/* Visual Workflow Steps */}
        <PatientJourney />

        {/* Specialist Clinicians */}
        <OurTeam onSelectDoctorForBooking={handleSelectDoctor} />

        {/* Before & After Interactive drag-sliders */}
        <BeforeAfterGallery />

        {/* Evidence & Reviews */}
        <Testimonials />

        {/* Lead Capture Interactive Form Engine */}
        <BookingForm
          selectedServiceId={selectedServiceId}
          selectedDoctorName={selectedDoctorName}
          onClearSelections={handleClearSelections}
        />

        {/* Expandable accordions */}
        <FAQSection />

        {/* Direct contact info, opening hours, local transit map */}
        <ContactSection />
      </main>

      {/* Sitemap Footer */}
      <Footer />
    </div>
  );
}
