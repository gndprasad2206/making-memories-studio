import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import WhyChooseUs from "@/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918367262022"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50 text-[32px] font-bold"
        aria-label="WhatsApp Contact"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M12.031 2.015A9.973 9.973 0 0 0 2.022 12c0 1.95.534 3.84 1.55 5.5l-2.022 6.5 6.643-1.74a10.038 10.038 0 0 0 3.838.74h.01a10.021 10.021 0 0 0 9.973-9.985c.01-4.89-3.794-8.98-8.682-9.98a10.05 10.05 0 0 0-1.302-.02zm.01 1.74h.005c4.116 0 7.458 3.33 7.458 7.456C19.504 15.33 16.17 18.66 12 18.66c-1.55 0-3.078-.396-4.42-1.144l-.316-.184-3.21.84.86-3.15-.205-.33A7.51 7.51 0 0 1 3.515 12c0-4.115 3.35-7.46 7.47-7.46.35 0 .706.035 1.056.105zM8.514 7.733c-.205-.015-.465.01-.735.09a1.64 1.64 0 0 0-1.01.99c-.19.46-.385 1.34.8 2.82 1.18 1.48 2.65 3.35 5.25 4.3 1.43.52 2.53.64 3.42.54.91-.11 1.63-.56 2.03-1.07.41-.5.41-.95.27-1.06-.14-.11-.53-.18-1.12-.48-.59-.3-3.48-1.72-4.02-1.91-.53-.19-.92-.28-1.3.28-.39.56-1.52 1.91-1.86 2.3-.35.39-.7.44-1.29.14-.59-.29-2.48-.91-4.73-2.92-.12-.11-.12-.22 0-.34.1-.1.22-.24.33-.36.12-.12.16-.21.24-.35.08-.14.04-.26-.02-.38-.06-.12-.58-1.42-.8-1.95-.21-.5-.43-.43-.63-.44-.19-.01-.4-.01-.6-.01z" />
        </svg>
      </a>
    </>
  );
}
