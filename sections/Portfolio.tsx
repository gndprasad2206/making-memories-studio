"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Weddings", "Events", "Baby Shoots", "Studio Portraits"];

const portfolioImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop", category: "Weddings" },
  { id: 2, src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop", category: "Studio Portraits" },
  { id: 3, src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", category: "Weddings" },
  { id: 4, src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop", category: "Events" },
  { id: 5, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop", category: "Weddings" },
  { id: 6, src: "https://plus.unsplash.com/premium_photo-1663100516638-34863f6fa0a3?q=80&w=800&auto=format&fit=crop", category: "Baby Shoots" },
  { id: 7, src: "https://images.unsplash.com/photo-1533512948622-c322bca63a24?q=80&w=800&auto=format&fit=crop", category: "Events" },
  { id: 8, src: "https://images.unsplash.com/photo-1621609764121-655eebd3f91e?q=80&w=800&auto=format&fit=crop", category: "Studio Portraits" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredImages = portfolioImages.filter(
    (img) => filter === "All" || img.category === filter
  );

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rosegold font-medium uppercase tracking-widest text-sm mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
            Timeless <span className="text-gradient">Collections</span>
          </h2>
          <p className="text-lg text-foreground/80 font-light">
            A glimpse into the magical moments we've beautifully captured.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                filter === cat
                  ? "bg-rosegold text-white shadow-md scale-105"
                  : "bg-cream text-foreground/70 hover:bg-rosegold/10 hover:text-rosegold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                onClick={() => setLightboxImg(img.src)}
                className={`relative group cursor-pointer overflow-hidden rounded-[1.5rem] bg-cream shadow-sm hover:shadow-xl transition-all ${
                  index % 3 === 0 ? "md:col-span-2 md:row-span-2 h-64 md:h-[34rem]" : "h-64 md:h-[16.5rem]"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full w-12 h-12 flex items-center justify-center text-white mx-auto transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 mb-2">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span className="text-white font-medium text-center uppercase tracking-wider text-sm">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImg}
              alt="Preview"
              className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
