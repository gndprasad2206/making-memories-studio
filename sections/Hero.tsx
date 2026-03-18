"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-cream -z-10">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-rose-100/40 rounded-full blur-3xl opacity-60 translate-x-1/4 -translate-y-1/4 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] bg-orange-100/40 rounded-full blur-3xl opacity-60 -translate-x-1/4 translate-y-1/4 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-rosegold/10 text-rosegold font-medium uppercase tracking-widest text-sm shadow-sm border border-rosegold/20">
              Welcome to the Studio
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6">
              Turning Your Special Moments Into <br className="hidden md:block" />
              <span className="text-gradient">Life's Magic</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
              We capture your most precious moments with elegance. From weddings and pre-weddings to joyful celebrations, our lenses tell your unique story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
          >
            <Link
              href="/#portfolio"
              className="px-8 py-3.5 w-full sm:w-auto bg-foreground text-white rounded-full font-medium shadow-xl hover:shadow-2xl hover:bg-black transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="https://wa.me/918814222560"
              target="_blank"
              className="px-8 py-3.5 w-full sm:w-auto bg-white text-rosegold border border-rosegold/30 rounded-full font-medium shadow-md hover:shadow-lg hover:border-rosegold transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </Link>
          </motion.div>
        </div>
        
        {/* Placeholder for Hero Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <div className="h-64 sm:h-80 md:h-[28rem] rounded-[2rem] bg-gray-200 overflow-hidden shadow-2xl relative md:mt-12 group">
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/0 z-10" />
            <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop" alt="Cute baby" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="h-64 sm:h-80 md:h-[32rem] rounded-[2rem] bg-gray-200 overflow-hidden shadow-2xl relative z-10 group">
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/0 z-10" />
            <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop" alt="Child laughing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="h-64 sm:h-80 md:h-[28rem] rounded-[2rem] bg-gray-200 overflow-hidden shadow-2xl relative md:mt-12 group">
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/0 z-10" />
            <img src="https://images.unsplash.com/photo-1603513492128-ba7bfafadd09?q=80&w=800&auto=format&fit=crop" alt="Child playing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
