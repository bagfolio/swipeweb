import { ReactNode, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA]">
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#F5F7FA] bg-opacity-95 backdrop-blur-sm border-b border-[#E1E4E8]" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-[#4CB0A3]">swipe</span>
              <span className="text-[#2A6F79]">folio</span>
            </span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-[#4CB0A3] hover:bg-[#2A6F79] text-white rounded-full transition-all duration-300 font-medium"
            onClick={scrollToWaitlist}
          >
            Join Waitlist
          </motion.button>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
