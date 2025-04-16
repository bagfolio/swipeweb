import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import chartPath from "../assets/bluechart.png";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax effects for hero elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const chartY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  
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
      className="min-h-screen flex items-center justify-center overflow-hidden relative bg-[#0D1214]"
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
                filter: "contrast(120%) brightness(50%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A6F79]/30 to-[#0D1214]/50 mix-blend-color-dodge"></div>
          </div>
        </motion.div>

        {/* Dark overlay with subtle pattern */}
        <div className="absolute inset-0 bg-[#0D1214]/90 section-pattern opacity-15" />
        
        {/* Animated diagonal lines */}
        <svg className="absolute inset-0 w-full h-full z-1 opacity-20" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.line
              key={i}
              x1={0}
              y1={100 + i * 150}
              x2={1920}
              y2={-200 + i * 150}
              stroke="white"
              strokeWidth="1"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              custom={0.1 + i * 0.05}
            />
          ))}
        </svg>
        
        {/* Animated gradient pulsing orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-[#4CB0A3]/5 blur-[150px] pulsing-element"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.5, 0]) }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-[50rem] h-[50rem] rounded-full bg-[#6FCFC3]/5 blur-[160px] pulsing-element"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.4, 0]) }}
        />
      </div>

      {/* Main content with parallax effect */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto flex flex-col items-center justify-center"
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
          {/* Enhanced animated badge */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <motion.div 
              className="px-6 py-2 rounded-full bg-[#6FCFC3]/10 border border-[#6FCFC3]/30 text-[#6FCFC3] font-medium"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(111, 207, 195, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              SWIPEFOLIO
            </motion.div>
          </motion.div>
          
          {/* Hero heading - much more minimal */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white tracking-tight text-center"
            variants={fadeInUp}
            style={{ y: y1 }}
          >
            <span className="block">Investing Made</span>
            <motion.span 
              className="text-[#6FCFC3] relative inline-block mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="relative z-10">Clear & Intuitive</span>
              <motion.span 
                className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-2 md:h-2.5 bg-[#4CB0A3] opacity-40 z-0 rounded"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.span>
          </motion.h1>
          
          {/* Super minimalist subtitle - just one line */}
          <motion.p 
            className="text-xl md:text-2xl text-white/70 mb-14 max-w-xl mx-auto font-light"
            variants={fadeInUp}
            style={{ y: y1 }}
          >
            Take control of your financial future with confidence.
          </motion.p>
          
          {/* Call to action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
            variants={fadeInUp}
            style={{ y: y2 }}
          >
            <motion.button 
              onClick={scrollToWaitlist}
              className="relative px-14 py-5 bg-gradient-to-r from-[#4CB0A3] to-[#2A6F79] text-white rounded-lg text-lg font-medium shadow-xl group overflow-hidden"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 15px 30px -5px rgba(42, 111, 121, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center">
                Join Waitlist
                <motion.span
                  className="ml-2" 
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </span>
              
              {/* Background animation effect */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-[#2A6F79] to-[#4CB0A3] -z-10"
                initial={{ x: "100%", opacity: 0 }}
                whileHover={{ 
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.4 }
                }}
              />
              
              {/* Glowing effect */}
              <motion.span 
                className="absolute inset-0 -z-20"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(111, 207, 195, 0)", "0 0 25px rgba(111, 207, 195, 0.5)", "0 0 5px rgba(111, 207, 195, 0)"]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
            
            {/* Secondary CTA */}
            <motion.button
              onClick={scrollToProblem}
              className="text-[#6FCFC3] hover:text-white transition-colors duration-300 flex items-center gap-2 group"
              whileHover={{ y: 3 }}
              whileTap={{ y: 0 }}
            >
              <span className="font-medium">Learn More</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </motion.div>
            </motion.button>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isLoaded ? 0.6 : 0, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0.6, 0]) }}
          >
            <div className="text-white/50 text-sm mb-2">Scroll to explore</div>
            <motion.div 
              className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
              animate={{ borderColor: ["rgba(255,255,255,0.3)", "rgba(111,207,195,0.6)", "rgba(255,255,255,0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-[#6FCFC3]"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
