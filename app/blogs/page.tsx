"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export const dummyBlogs = [
  {
    slug: "best-wedding-photography-tips",
    title: "10 Best Wedding Photography Tips for Real Moments",
    description: "Learn how to capture the raw emotions during your big day with these expert tips.",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    content: "Content goes here...",
  },
  {
    slug: "preparing-for-baby-shoot",
    title: "How to Prepare for Your Baby's First Photoshoot",
    description: "Keep your little one smiling with our comprehensive checklist for a smooth studio session.",
    date: "March 10, 2026",
    image: "https://plus.unsplash.com/premium_photo-1663100516638-34863f6fa0a3?q=80&w=800&auto=format&fit=crop",
    content: "Content goes here...",
  },
];

export default function BlogList() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rosegold font-medium uppercase tracking-widest text-sm mb-4 block">
            Journal
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
            Latest <span className="text-gradient">Stories & Tips</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dummyBlogs.map((blog, idx) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div className="h-56 relative overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-rosegold text-sm mb-4 font-medium">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </div>
                <h2 className="text-2xl font-serif font-bold leading-tight mb-3 group-hover:text-rosegold transition-colors">
                  {blog.title}
                </h2>
                <p className="text-foreground/70 font-light mb-6 flex-grow">
                  {blog.description}
                </p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-foreground font-medium hover:text-rosegold transition-colors uppercase text-sm tracking-wider"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
