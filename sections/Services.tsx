"use client";
import { motion } from "framer-motion";
import { Camera, Image as ImageIcon, Video, Heart, Sparkles, Star } from "lucide-react";

const services = [
  {
    title: "Wedding Photography",
    description: "Capturing the magic and emotion of your special day with elegant precision.",
    icon: <Heart className="w-7 h-7" />,
    color: "bg-rose-50 text-rose-500",
  },
  {
    title: "Pre-Wedding Shoots",
    description: "Romantic and creative storytelling sessions before you tie the knot.",
    icon: <Sparkles className="w-7 h-7" />,
    color: "bg-orange-50 text-orange-500",
  },
  {
    title: "Event Video Coverage",
    description: "High-definition cinematic event coverage to relive your best memories.",
    icon: <Video className="w-7 h-7" />,
    color: "bg-purple-50 text-purple-500",
  },
  {
    title: "Baby Photoshoots",
    description: "Adorable, safe, and beautifully styled shoots for your little ones.",
    icon: <Star className="w-7 h-7" />,
    color: "bg-blue-50 text-blue-500",
  },
  {
    title: "Birthday Photography",
    description: "Vibrant and fun photos ensuring every smile is saved forever.",
    icon: <Camera className="w-7 h-7" />,
    color: "bg-green-50 text-green-500",
  },
  {
    title: "Premium Photo Frames",
    description: "High-quality custom frames to bring your digital memories to life on walls.",
    icon: <ImageIcon className="w-7 h-7" />,
    color: "bg-amber-50 text-amber-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-rosegold font-medium uppercase tracking-widest text-sm mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6"
          >
            Our Professional <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/80 leading-relaxed font-light"
          >
            We offer a comprehensive suite of photography and videography services tailored to families, couples, and individuals seeking exceptional quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-rosegold/5 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-rosegold transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
