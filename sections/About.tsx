"use client";
import { motion } from "framer-motion";
import { Users, FileImage, Video, Heart } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: <Users className="w-8 h-8 text-rosegold" />,
    title: "Experienced Photographers",
    description: "Our core team captures angles that speak words.",
  },
  {
    icon: <FileImage className="w-8 h-8 text-rosegold" />,
    title: "Quality Photo Frames",
    description: "Preserve memories in premium, perfectly crafted frames.",
  },
  {
    icon: <Video className="w-8 h-8 text-rosegold" />,
    title: "Professional Video Coverage",
    description: "Cinematic videos covering your most precious events.",
  },
  {
    icon: <Heart className="w-8 h-8 text-rosegold" />,
    title: "Friendly Service",
    description: "We ensure you're comfortable to capture your truest smile.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Images Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative">
            <div className="absolute w-[30vw] h-[30vw] md:w-[20vw] md:h-[20vw] rounded-full bg-rose-100/50 blur-3xl -top-10 -left-10 z-0" />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 pt-12 z-10"
            >
              <img src="https://images.unsplash.com/photo-1533512948622-c322bca63a24?q=80&w=600&auto=format&fit=crop" alt="Photographer in action" className="rounded-3xl shadow-lg w-full h-48 md:h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600&auto=format&fit=crop" alt="Studio setting" className="rounded-3xl shadow-lg w-full h-40 md:h-56 object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 z-10"
            >
              <img src="https://images.unsplash.com/photo-1621609764121-655eebd3f91e?q=80&w=600&auto=format&fit=crop" alt="Couples photoshoot" className="rounded-3xl shadow-lg w-full h-56 md:h-80 object-cover" />
              <div className="bg-cream rounded-3xl shadow-sm p-6 flex flex-col justify-center border border-rosegold/10 text-center items-center h-32 md:h-40">
                <span className="text-3xl font-serif font-bold text-gradient">10+</span>
                <span className="text-foreground/80 font-medium text-sm mt-1">Years of<br/>Experience</span>
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <span className="text-rosegold font-medium uppercase tracking-widest text-sm mb-4 block">
                About Our Studio
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                Capturing Real Life <br />
                <span className="text-gradient">Real Emotion</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                Welcome to <strong>Making Memories Photo Studio</strong>, located in the heart of Hyderabad. We are passionate about framing the true essence of your joy. 
                Our studio is more than just lights and cameras—it's a warm, family-oriented space where we make you feel completely at ease.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3 group">
                  <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium font-serif">{item.title}</h3>
                  <p className="text-foreground/70 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
