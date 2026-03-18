"use client";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rosegold font-medium uppercase tracking-widest text-sm mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
            Let's Make <span className="text-gradient">Memories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-rosegold/5"
          >
            <h3 className="text-2xl font-serif font-bold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-foreground/80">Full Name</label>
                  <input id="fullName" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-cream/50 border border-rosegold/20 focus:outline-none focus:border-rosegold focus:ring-1 focus:ring-rosegold transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phoneNumber" className="text-sm font-medium text-foreground/80">Phone Number</label>
                  <input id="phoneNumber" type="tel" placeholder="+91 99122 49414" className="w-full px-4 py-3 rounded-xl bg-cream/50 border border-rosegold/20 focus:outline-none focus:border-rosegold focus:ring-1 focus:ring-rosegold transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="eventType" className="text-sm font-medium text-foreground/80">Event Type</label>
                <select id="eventType" className="w-full px-4 py-3 rounded-xl bg-cream/50 border border-rosegold/20 focus:outline-none focus:border-rosegold focus:ring-1 focus:ring-rosegold transition-all">
                  <option>Wedding</option>
                  <option>Pre-Wedding</option>
                  <option>Birthday</option>
                  <option>Baby Shoot</option>
                  <option>Corporate Event</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us about your event..." className="w-full px-4 py-3 rounded-xl bg-cream/50 border border-rosegold/20 focus:outline-none focus:border-rosegold focus:ring-1 focus:ring-rosegold transition-all resize-none"></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-rosegold text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-rosegold/5 space-y-6">
              <h3 className="text-2xl font-serif font-bold mb-2">Contact Info</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream flex shrink-0 items-center justify-center text-rosegold">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Studio Location</h4>
                    <p className="text-foreground/70 text-sm mt-1 leading-relaxed">
                      Main Rd, Palakollu,<br/>Andhra Pradesh 534260
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream flex shrink-0 items-center justify-center text-rosegold">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Phone Number</h4>
                    <p className="text-foreground/70 text-sm mt-1">99122 49414</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex shrink-0 items-center justify-center text-[#25D366]">
                    <MessageCircle />
                  </div>
                  <div className="flex flex-col items-start">
                    <h4 className="font-medium text-foreground">WhatsApp</h4>
                    <a href="https://wa.me/919912249414" target="_blank" rel="noopener noreferrer" className="text-sm mt-1 text-[#25D366] font-medium hover:underline">Chat with us instantly</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3500.0!2d81.9832000!3d16.5427000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710759000001!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
