import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import chartPath from "../assets/bluechart.png";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Enhanced parallax and scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // More dramatic, responsive parallax effects
  const y1 = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "10%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 0.25, 1], ["0%", "5%", "25%"]);
  
  // Smoother, more controlled opacity transition
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 0.8, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0.9, 0]);
  
  // Different speed for chart to create depth
  const chartY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  // Horizontal movement for text elements on scroll
  const textX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);
  
  useEffect(() => {
    // Trigger animation sequence
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProblem = () => {
    const problemSection = document.getElementById("problem-statement");
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  // Line animation for pattern background
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay: number) => ({
      pathLength: 1,
      opacity: 0.3,
      transition: { 
        pathLength: {
          delay: delay,
          duration: 1.5, 
          ease: "easeInOut"
        },
        opacity: {
          delay: delay,
          duration: 0.8
        }
      }
    })
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center overflow-hidden relative bg-swipefolio-dark-deep"
    >
      {/* Market chart background with overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* Chart background image with duotone treatment */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: chartY }}
        >
          <div className="absolute inset-0 bg-blend-color-burn">
            <motion.div
              className="w-full h-full bg-cover bg-center opacity-20"
              style={{
                backgroundImage: `url(${chartPath})`,
                filter: "contrast(150%) brightness(40%)",
              }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-swipefolio-teal-darkest/40 to-swipefolio-dark-deep/60 mix-blend-color-dodge"></div>
          </div>
        </motion.div>

        {/* Dark overlay with subtle pattern */}
        <div className="absolute inset-0 bg-swipefolio-dark-deep/90 section-pattern opacity-15" />
        
        {/* Enhanced animated diagonal lines with glow effect */}
        <svg className="absolute inset-0 w-full h-full z-1 opacity-20" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(111, 207, 195, 0.8)" />
              <stop offset="100%" stopColor="rgba(42, 111, 121, 0.4)" />
            </linearGradient>
          </defs>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.line
              key={i}
              x1={0}
              y1={100 + i * 150}
              x2={1920}
              y2={-200 + i * 150}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              custom={0.1 + i * 0.05}
              strokeLinecap="round"
              filter="drop-shadow(0 0 3px rgba(111, 207, 195, 0.3))"
            />
          ))}
        </svg>
        
        {/* Enhanced animated gradient pulsing orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-swipefolio-teal-dark/8 to-swipefolio-teal/4 blur-[150px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.5, 0]) }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[60rem] h-[60rem] rounded-full bg-gradient-to-br from-swipefolio-teal/6 to-swipefolio-teal-darkest/3 blur-[160px]"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.4, 0]) }}
        />
      </div>

      {/* Main content with enhanced parallax effect */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto flex flex-col items-start justify-center md:pl-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              }
            }
          }}
          style={{ opacity }}
        >
          {/* Enhanced animated badge with glow effect */}
          <motion.div
            className="mb-12 self-start"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <motion.div
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-swipefolio-teal/15 to-swipefolio-teal-dark/10 backdrop-blur-sm border border-swipefolio-teal/30 text-swipefolio-teal font-semibold tracking-wider"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(111, 207, 195, 0.4)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: ["0 0 5px rgba(111, 207, 195, 0.2)", "0 0 20px rgba(111, 207, 195, 0.4)", "0 0 5px rgba(111, 207, 195, 0.2)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <span className="text-white/90 font-bold mr-1">INTRODUCING</span> SWIPEFOLIO
            </motion.div>
          </motion.div>
          
          {/* Simplified hero heading with better visibility */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 text-white tracking-tight text-left font-poppins leading-[1.1]"
            variants={fadeInUp}
            style={{ y: y1, x: textX, opacity: headingOpacity }}
          >
            <span className="block">Investing Made</span>
            <motion.div
              className="mt-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="gradient-text-modern">Clear & Intuitive</span>
            </motion.div>
          </motion.h1>
          
          {/* Enhanced subtitle with better typography and visual weight */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-16 max-w-xl font-normal leading-relaxed"
            variants={fadeInUp}
            style={{ y: y1, x: textX, opacity: headingOpacity }}
          >
            Take control of your financial future with confidence and clarity.
          </motion.p>
          
          {/* Enhanced CTA buttons with premium styling */}
          <motion.div
            className="flex flex-col sm:flex-row items-start justify-start gap-8 self-start"
            variants={fadeInUp}
            style={{ y: y2 }}
          >
            <motion.button
              onClick={scrollToWaitlist}
              className="relative px-14 py-5 bg-[#4CB0A3] text-white rounded-xl text-lg font-medium shadow-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center font-poppins">
                Join Waitlist
                <ChevronRight size={20} className="ml-2" />
              </span>
            </motion.button>
            
            {/* Enhanced secondary CTA */}
            <motion.button
              onClick={scrollToProblem}
              className="text-[#4CB0A3] hover:text-white transition-all duration-300 flex items-center gap-2 px-5 py-3 rounded-lg border border-[#4CB0A3]/20"
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="font-medium">Learn More</span>
              <ArrowDown className="h-4 w-4" />
            </motion.button>
          </motion.div>
          
          {/* Simplified scroll indicator */}
          <div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <div className="text-white/60 text-sm mb-2">Scroll to explore</div>
            <div className="w-6 h-10 rounded-full border border-white/30 flex justify-center pt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4CB0A3]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
