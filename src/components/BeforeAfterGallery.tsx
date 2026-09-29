/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { CLINIC_DATA, GalleryItem } from "../data/clinicData";
import { Sparkles, ArrowRightLeft, Smile, CheckCircle2 } from "lucide-react";
import { MEDIA_CONFIG } from "../data/mediaConfig";

export default function BeforeAfterGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [activeItem, setActiveItem] = useState<GalleryItem>(CLINIC_DATA.gallery[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const categories = ["All", "Cosmetic", "Orthodontics", "Implants"];

  const filteredItems = CLINIC_DATA.gallery.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category.toLowerCase() === activeCategory.toLowerCase();
  });

  // Keep active item valid if category filter changes
  useEffect(() => {
    if (filteredItems.length > 0 && !filteredItems.find((i) => i.id === activeItem.id)) {
      setActiveItem(filteredItems[0]);
    }
  }, [activeCategory]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDraggingRef.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleMouseUp);
  };

  const handleMouseDown = () => {
    isDraggingRef.current = true;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-3">
            Clinical Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Before & After Transformations
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Examine our high-fidelity sample dental cases. These results represent standard outcomes that align with your personalized, custom dental goals.
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded mx-auto mt-6" />
        </div>

        {/* CATEGORY INTERACTIVE SELECTOR */}
        <div className="flex items-center justify-center gap-1.5 p-1 bg-slate-50 rounded-xl max-w-md mx-auto mb-12 border border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-white text-blue-600 shadow-sm border border-slate-100"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* COMPARATIVE LAYOUT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT AREA: INTERACTIVE SLIDER CONTAINER */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div
              ref={containerRef}
              className="relative w-full max-w-[550px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200 select-none cursor-ew-resize bg-slate-100"
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              {/* BEFORE IMAGE (Bottom Layer: Stylized, slightly desaturated representation) */}
              <div className="absolute inset-0 grayscale contrast-[0.85] brightness-[0.9]">
                <img
                  src={activeItem.beforeImage || MEDIA_CONFIG.smileShowcaseUrl}
                  alt="Clinical state prior to restorative veneers"
                  className="w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Labels */}
                <span className="absolute top-4 left-4 bg-slate-900/80 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider">
                  {activeItem.beforeLabel}
                </span>
              </div>

              {/* AFTER IMAGE (Top Layer with Clip-path clipping) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img
                  src={activeItem.afterImage || MEDIA_CONFIG.smileShowcaseUrl}
                  alt="Completed clinical smile restoration"
                  className="w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Labels */}
                <span className="absolute top-4 right-4 bg-blue-600/90 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider">
                  {activeItem.afterLabel}
                </span>
              </div>

              {/* SLIDER HANDLEBAR */}
              <div
                className="absolute top-0 bottom-0 w-[3px] bg-white cursor-ew-resize flex items-center justify-center shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 border-[3px] border-white text-white flex items-center justify-center shadow-lg transform -translate-x-1/2">
                  <ArrowRightLeft className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-400 mt-4 flex items-center gap-1.5 font-medium">
              <Sparkles className="h-3.5 w-3.5 text-blue-500 animate-pulse" />
              <span>Drag or swipe the center slider to compare before and after outcomes.</span>
            </p>
          </div>

          {/* RIGHT AREA: DETAIL PANELS & SELECTOR */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Active transformation card details */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
              <div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md uppercase tracking-wide inline-block mb-3">
                  {activeItem.category} Case Study
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                  {activeItem.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="pt-4 border-t border-slate-200/60 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-500">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                  <span>Personalized digital smile simulation completed.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-500">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                  <span>Micro-prep techniques utilized to save healthy enamel.</span>
                </div>
              </div>
            </div>

            {/* Grid of options to toggle between */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Select Case Study:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item)}
                    className={`p-3 text-left border rounded-xl transition-all cursor-pointer ${
                      activeItem.id === item.id
                        ? "border-blue-600 bg-blue-50/20 shadow-sm"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <h5 className="text-xs font-semibold text-slate-900 truncate">
                      {item.title}
                    </h5>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {item.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}
