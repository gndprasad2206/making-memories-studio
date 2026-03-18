import Link from "next/link";
import { Instagram, MapPin, Phone, Mail, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FAF7F2] pt-20 pb-10 border-t border-rosegold/20 mt-20">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Camera className="w-8 h-8 text-rosegold" />
            <span className="font-serif text-2xl font-bold tracking-wide">
              Sri Raj Photography
            </span>
          </div>
          <p className="text-foreground/80 leading-relaxed font-light mt-2 max-w-sm">
            Capturing the magic and wonder of life's special moments with professional photography and video coverage.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="https://instagram.com" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-rosegold hover:bg-rosegold hover:text-white transition-all shadow-sm">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://wa.me/919912249414" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-rosegold hover:bg-rosegold hover:text-white transition-all shadow-sm">
              <Phone className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-serif text-xl font-bold mb-6 relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-rosegold"></span>
          </h3>
          <ul className="flex flex-col gap-3 font-light text-foreground/80">
            <li><Link href="/" className="hover:text-rosegold transition-colors">Home</Link></li>
            <li><Link href="/#services" className="hover:text-rosegold transition-colors">Our Services</Link></li>
            <li><Link href="/#portfolio" className="hover:text-rosegold transition-colors">Portfolio</Link></li>
            <li><Link href="/blogs" className="hover:text-rosegold transition-colors">Blog</Link></li>
            <li><Link href="/#contact" className="hover:text-rosegold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-serif text-xl font-bold mb-6 relative inline-block">
            Reach Out
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-rosegold"></span>
          </h3>
          <ul className="flex flex-col gap-4 font-light text-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-rosegold shrink-0 mt-1" />
              <span>
                Main Rd, Palakollu,<br/>
                Andhra Pradesh 534260
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-rosegold shrink-0" />
              <span>99122 49414</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-rosegold shrink-0" />
              <span>hello@srirajphotography.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center pt-8 border-t border-rosegold/10 text-foreground/60 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Sri Raj Photography. All rights reserved.</p>
      </div>
    </footer>
  );
}
