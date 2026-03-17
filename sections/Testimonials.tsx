"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Bride",
    content: "Bezawada Kids Studio captured our child's moments exceptionally well. Their team was professional, friendly, and made us feel so comfortable. The photos look straight out of a fairy tale!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Vikram Reddy",
    role: "Pre-Wedding Client",
    content: "We hired them for our pre-wedding shoot, and I couldn't be happier with the results. The candid moments they caught matched our personality perfectly. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sneha Sharma",
    role: "Mother",
    content: "Our baby's first birthday shoot was chaotic but the team was so patient! The frames we received are stunning and premium quality. They truly live up to their name.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rosegold font-medium uppercase tracking-widest text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
            Words From Our <span className="text-gradient">Clients</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-4 md:px-16">
          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream text-rosegold flex items-center justify-center hover:bg-rosegold hover:text-white transition-all shadow-sm z-10"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream text-rosegold flex items-center justify-center hover:bg-rosegold hover:text-white transition-all shadow-sm z-10"
          >
            <ChevronRight />
          </button>

          <div className="relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
              >
                <div className="mb-8 relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-rosegold/20 mx-auto">
                    <img src={testimonials[current].image} alt={testimonials[current].name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-rosegold rounded-full flex items-center justify-center text-white shadow-md">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="flex gap-1 mb-6 justify-center">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={testimonials[current].id + "-star-" + i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-serif text-foreground/80 font-light italic leading-relaxed mb-6 max-w-2xl px-4 md:px-12">
                  "{testimonials[current].content}"
                </p>

                <div>
                  <h4 className="font-bold text-foreground tracking-wide">{testimonials[current].name}</h4>
                  <span className="text-rosegold/80 text-sm font-light">{testimonials[current].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === idx ? "bg-rosegold w-8" : "bg-rosegold/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
