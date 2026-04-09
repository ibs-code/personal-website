"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import photo1 from "./56E3DDAA-E1D2-44EA-A4E6-40800BA37F35_1_105_c.jpeg";
import photo2 from "./825F108A-B692-44F6-B939-5F04285463BA_1_105_c.jpeg";
import photo3 from "./CB170ED7-3262-489E-A446-CE04852991D0_1_105_c.jpeg";
import photo4 from "./7AA43FC7-0CC7-4434-BDE8-765F0E504402_1_105_c.jpeg";
import photo5 from "./DO01050388-2.jpg";
import photo6 from "./DO01051439.jpg";
import photo7 from "./DO01051451.jpg";
import photo8 from "./L1000187.jpg";
import photo9 from "./L1000775.jpg";
import photo10 from "./L1000813.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

// Visual left-to-right order across the masonry columns
const visualOrder = [0, 4, 8, 1, 5, 9, 2, 6, 3, 7];

export default function Photography() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setSelectedIndex((i) => {
    if (i === null) return null;
    const pos = visualOrder.indexOf(i);
    return visualOrder[(pos - 1 + visualOrder.length) % visualOrder.length];
  });
  const next = () => setSelectedIndex((i) => {
    if (i === null) return null;
    const pos = visualOrder.indexOf(i);
    return visualOrder[(pos + 1) % visualOrder.length];
  });
  const close = () => setSelectedIndex(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const selected = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-stone-100">Photography</h1>
        <p className="text-sm text-stone-400 mt-1">Images from the road.</p>
      </div>

      <hr className="border-stone-800" />

      {/* Masonry layout using CSS columns */}
      <div className="columns-2 sm:columns-3 gap-3 space-y-3">
        {photos.map((photo, i) => (
          <button
            key={i}
            className="break-inside-avoid w-full block cursor-zoom-in overflow-hidden rounded-lg group"
            onClick={() => setSelectedIndex(i)}
          >
            <Image
              src={photo}
              alt={`Photo ${i + 1}`}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto transition-opacity duration-300 group-hover:opacity-90"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Prev button */}
          <button
            className="absolute left-4 text-stone-400 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 4 8 14 18 24" />
            </svg>
          </button>

          <Image
            src={selected}
            alt={`Photo ${selectedIndex + 1}`}
            width={selected.width}
            height={selected.height}
            className="max-w-full max-h-[90vh] object-contain rounded-sm cursor-zoom-out"
          />

          {/* Next button */}
          <button
            className="absolute right-4 text-stone-400 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="10 4 20 14 10 24" />
            </svg>
          </button>

          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <line x1="3" y1="3" x2="17" y2="17" />
              <line x1="17" y1="3" x2="3" y2="17" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
