"use client";
import { motion } from "framer-motion";
import { Camera, Edit3, DollarSign, Clock, MessageCircle } from "lucide-react";

const features = [
  { icon: <Camera />, title: "Professional Camera Equipment", desc: "Top-tier lenses and lighting." },
  { icon: <Edit3 />, title: "Creative Editing", desc: "Flawless touches that keep the real you shining." },
  { icon: <DollarSign />, title: "Affordable Packages", desc: "Premium quality without the premium price tag." },
  { icon: <Clock />, title: "Fast Delivery", desc: "Your memories ready sooner than you expect." },
  { icon: <MessageCircle />, title: "Friendly Support", desc: "We map out your vision patiently with you." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-cream/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-3xl -z-10 translate-x-1/4 -translate-y-1/4 mix-blend-multiply" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-t-full rounded-b-[4rem] overflow-hidden border-8 border-white shadow-2xl h-[500px]"
            >
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" alt="Vintage Camera" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Text/Features Side */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <span className="text-rosegold font-medium uppercase tracking-widest text-sm mb-4 block">
                Why Us?
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
                We Turn Seconds Into <span className="text-gradient">Eternity</span>
              </h2>
              <p className="text-lg text-foreground/80 font-light">
                Our approach blends technical mastery with warm compassion.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all group border border-transparent hover:border-rosegold/10"
                >
                  <div className="w-12 h-12 rounded-full bg-rosegold/10 text-rosegold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium font-serif mb-1 group-hover:text-rosegold transition-colors">{item.title}</h4>
                    <p className="text-foreground/70 font-light text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
