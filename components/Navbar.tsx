"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Camera } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Blog", href: "/blogs" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Camera className="w-8 h-8 text-rosegold" />
          <span className="font-serif text-2xl font-bold tracking-wide">
            Bezawada Kids Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-rosegold transition-colors font-medium text-sm tracking-widest uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://wa.me/919939904488"
            target="_blank"
            className="flex items-center gap-2 text-rosegold font-medium hover:text-rosegold-light transition-colors"
          >
            <Phone className="w-5 h-5" />
            99399 04488
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-2.5 bg-rosegold text-white rounded-full font-medium hover:bg-opacity-90 shadow-md transition-all hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-cream shadow-lg border-t border-rosegold/10 py-6 px-4 md:hidden flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-foreground p-2 border-b border-rosegold/10 text-center"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 py-3 bg-rosegold text-white text-center rounded-full font-medium shadow-md"
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </header>
  );
}
