import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, TrendingUp, Star, Shield, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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

  // Staggered animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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

  // Stats data
  const stats = [
    { value: "83%", text: "of Gen Z feel intimidated by traditional finance", icon: TrendingUp },
    { value: "68%", text: "want investing that aligns with their values", icon: Star },
    { value: "77%", text: "seek simplicity and meaning in financial decisions", icon: Shield }
  ];

  return (
    <section 
      ref={sectionRef}
      className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative dark-hero-gradient min-h-screen flex items-center"
    >
      {/* Animated pattern background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* Dark overlay with pattern */}
        <div className="absolute inset-0 bg-[#1A2225] section-pattern opacity-20" />
        
        {/* Animated diagonal lines */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.line
              key={i}
              x1={0}
              y1={100 + i * 120}
              x2={1920}
              y2={-200 + i * 120}
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
          className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[#4CB0A3]/5 blur-[150px] pulsing-element"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.4, 0]) }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-[#6FCFC3]/5 blur-[100px] pulsing-element"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.3, 0]) }}
        />
      </div>

      {/* Main content with parallax effect */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ opacity }}
        >
          {/* Animated badge */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#6FCFC3]/20 text-[#6FCFC3] text-sm font-medium border border-[#6FCFC3]/30">
              <Star className="h-3.5 w-3.5 mr-1.5" />
              Next Generation Investing
            </span>
          </motion.div>
          
          {/* Hero heading */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8 text-white tracking-tight"
            variants={fadeInUp}
            style={{ y: y1 }}
          >
            Investing Without{" "}
            <motion.span 
              className="text-[#6FCFC3] relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="relative z-10">The Nonsense</span>
              <motion.span 
                className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-2 md:h-2.5 bg-[#4CB0A3] opacity-40 z-0 rounded"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            variants={fadeInUp}
            style={{ y: y1 }}
          >
            A next-gen investing platform built for your generation. 
            <span className="block mt-3">No lectures. No jargon. Just clarity, meaning, and control.</span>
          </motion.p>
          
          {/* Call to action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
            variants={fadeInUp}
            style={{ y: y2 }}
          >
            <motion.button 
              onClick={scrollToWaitlist}
              className="relative px-10 py-5 bg-gradient-to-r from-[#4CB0A3] to-[#2A6F79] text-white rounded-lg text-lg font-medium shadow-xl group overflow-hidden"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 15px 30px -5px rgba(42, 111, 121, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center">
                Join the Waitlist
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
          
          {/* Statistics cards with staggered animation */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-4"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 1.2
                }
              }
            }}
            style={{ y: y2 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="glass-effect-dark rounded-xl p-6 border border-white/10 hover-lift group backdrop-blur-md"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      type: "spring",
                      stiffness: 50,
                      damping: 15,
                      delay: 0.2 * index
                    }
                  }
                }}
                whileHover={{ 
                  y: -10, 
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6FCFC3] to-[#2A6F79]/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#6FCFC3] transition-colors">{stat.value}</div>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
