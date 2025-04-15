import { ReactNode, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0.3]);

  // Handle scroll events
  const handleScroll = useCallback(() => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Set loaded state after a slight delay for animation sequence
    const timer = setTimeout(() => setIsLoaded(true), 150);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [handleScroll]);

  const scrollToWaitlist = () => {
    setMobileMenuOpen(false);
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationLinks = [
    { name: "Features", id: "vision-tease" },
    { name: "Problem", id: "problem-statement" },
    { name: "Testimonials", id: "testimonials-section" },
    { name: "FAQ", id: "footer" },
  ];

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative min-h-screen flex flex-col overflow-hidden"
      >
        {/* Background gradient with parallax effect */}
        <motion.div 
          className="fixed inset-0 w-full h-full bg-gradient-to-b from-[#F5F7FA] to-[#F9FAFB] -z-20"
          style={{ y: backgroundY }}
        />
        
        {/* Background decorative elements with parallax effects */}
        <motion.div 
          className="fixed top-0 right-0 w-2/3 h-2/3 bg-gradient-to-b from-[#6FCFC3]/10 to-transparent rounded-full blur-[120px] -z-10"
          style={{ 
            x: useTransform(smoothProgress, [0, 1], ["0%", "10%"]),
            opacity 
          }}
        />
        
        <motion.div 
          className="fixed bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-t from-[#2A6F79]/10 to-transparent rounded-full blur-[100px] -z-10"
          style={{ 
            x: useTransform(smoothProgress, [0, 1], ["0%", "-10%"]),
            opacity: useTransform(smoothProgress, [0, 0.5], [1, 0.4])
          }}
        />
        
        {/* Background pattern */}
        <div className="fixed inset-0 w-full h-full section-pattern -z-10 opacity-[0.07]" />

        {/* Header */}
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled 
              ? "py-3" 
              : "py-5"
          }`}
        >
          <div className={`absolute inset-0 transition-all duration-500 ${
            isScrolled 
              ? "glass-effect border-b border-[#E1E4E8]/40 opacity-100" 
              : "bg-black/20 backdrop-blur-sm opacity-80"
          }`}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.a 
                  href="/"
                  className="text-2xl md:text-3xl font-bold relative group"
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                  }}
                >
                  <span className="text-[#4CB0A3]">swipe</span>
                  <span className="text-[#2A6F79]">folio</span>
                  <motion.span 
                    className={`absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79] rounded-full transition-opacity duration-300 ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isLoaded ? 1 : 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79] rounded-full opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.a>
              </motion.div>
              
              {/* Desktop Navigation */}
              <motion.nav 
                className="hidden md:flex items-center space-x-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {navigationLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    className="text-white hover:text-[#6FCFC3] transition-colors duration-300 font-medium gradient-border-bottom"
                    onClick={() => scrollToSection(link.id)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.1 * index + 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </motion.nav>
              
              {/* CTA Button */}
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.button 
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 8px 30px rgba(76, 176, 163, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary text-sm"
                  onClick={scrollToWaitlist}
                >
                  Join Waitlist
                </motion.button>
              </motion.div>
              
              {/* Mobile Menu Toggle */}
              <motion.button
                className="md:hidden text-white z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                whileTap={{ scale: 0.95 }}
              >
                {mobileMenuOpen ? (
                  <X size={24} className="text-white" />
                ) : (
                  <Menu size={24} />
                )}
              </motion.button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                className="fixed inset-0 bg-[#2A353A] z-40 flex flex-col justify-center overflow-hidden md:hidden"
                initial={{ clipPath: "circle(0% at top right)" }}
                animate={{ clipPath: "circle(150% at top right)" }}
                exit={{ clipPath: "circle(0% at top right)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="container mx-auto px-6 py-10">
                  <div className="space-y-8">
                    {navigationLinks.map((link, index) => (
                      <motion.div
                        key={link.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.05 * index,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        <button
                          className="text-white text-2xl font-medium flex items-center w-full justify-between"
                          onClick={() => scrollToSection(link.id)}
                        >
                          {link.name}
                          <ChevronRight size={20} className="text-[#6FCFC3]" />
                        </button>
                        <div className="divider mt-8" />
                      </motion.div>
                    ))}
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="pt-4"
                    >
                      <button 
                        className="btn-primary w-full py-5 text-center font-semibold text-lg"
                        onClick={scrollToWaitlist}
                      >
                        Join Waitlist
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
        
        {/* Main Content */}
        <main className="flex-grow relative">
          {children}
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
