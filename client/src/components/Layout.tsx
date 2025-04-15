import { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Set loaded state after a slight delay for animation sequence
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex flex-col bg-gradient-to-b from-[#F5F7FA] to-[#F9FAFB]"
      >
        <header 
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            isScrolled 
              ? "glass-effect border-b border-[#E1E4E8]/40 py-3" 
              : "bg-transparent py-5"
          }`}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.span 
                className="text-2xl font-bold relative"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-[#4CB0A3]">swipe</span>
                <span className="text-[#2A6F79]">folio</span>
                {isLoaded && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                )}
              </motion.span>
            </motion.div>
            
            <motion.button 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(76, 176, 163, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-sm"
              onClick={scrollToWaitlist}
            >
              Join Waitlist
            </motion.button>
          </div>
        </header>
        
        <main className="flex-grow relative">
          {children}
          
          {/* Decorative elements */}
          <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-[#6FCFC3]/10 to-transparent rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
          <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-[#2A6F79]/10 to-transparent rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
