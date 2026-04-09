"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

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

export default function Photography() {
  const [selected, setSelected] = useState<StaticImageData | null>(null);

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
            onClick={() => setSelected(photo)}
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
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setSelected(null)}
        >
          <Image
            src={selected}
            alt="Enlarged photo"
            width={selected.width}
            height={selected.height}
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
          />
        </div>
      )}
    </div>
  );
}
