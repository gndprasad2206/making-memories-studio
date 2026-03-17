"use client";
import React from 'react';
import Link from "next/link";
import { dummyBlogs } from "../page";
import { ArrowLeft, Calendar } from "lucide-react";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  // Use React.use() to unwrap the params promise since metadata and params are Promises in Next.js 15
  const unwrappedParams = React.use(params as any) as { slug: string };
  
  const blog = dummyBlogs.find((b) => b.slug === unwrappedParams.slug) || dummyBlogs[0];

  return (
    <article className="pt-24 pb-24 bg-white min-h-screen">
      <div className="w-full h-[40vh] md:h-[60vh] relative">
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center pt-20">
          <div className="text-center px-4 max-w-4xl">
            <div className="flex items-center justify-center gap-2 text-white/90 text-sm md:text-base mb-6 font-medium">
              <Calendar className="w-5 h-5" />
              {blog.date}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-3xl pt-16">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-rosegold font-medium hover:text-foreground transition-colors uppercase text-sm tracking-wider mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>
        
        <div className="prose prose-lg prose-rose max-w-none text-foreground/80 font-light leading-relaxed">
          <p className="text-2xl font-serif text-foreground leading-snug mb-8">
            {blog.description}
          </p>
          <p>
            Photography is not just about having a decent camera; it's about anticipating the moment before it happens. Whether you are preparing for a wedding or a special studio portrait, the light, timing, and preparation play massive roles.
          </p>
          <p className="mt-6">
            In our experience at Bezawada Kids Studio, clients who feel relaxed often yield the best photographs. Ensure you get plenty of rest before shooting day. Drink water, be yourself, and let us handle all technical nuances.
          </p>
          <div className="my-10 p-8 bg-cream border-l-4 border-rosegold rounded-r-2xl">
            <p className="italic text-xl font-serif">
              "Every picture tells a story, make sure yours is told beautifully with the right light and the right smiles."
            </p>
          </div>
          <p>
            For couples, pre-wedding shoots are an excellent sandbox to become familiar with posing. Don't worry about being perfect. The imperfections are what make you uniquely you.
          </p>
        </div>
      </div>
    </article>
  );
}
