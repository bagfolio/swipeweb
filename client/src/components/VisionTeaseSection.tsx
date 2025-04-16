import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Smile, Clock, LightbulbIcon, ArrowUpRight, BrainCircuit, TrendingUp, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function VisionTeaseSection() {
  // Parallax scroll effects
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Enhanced animation variants with more fluid motion
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const featureItem = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15
      }
    }
  };
  
  // New slide-in animation variants
  const slideIn = {
    hidden: (direction: "left" | "right") => ({
      x: direction === "left" ? -80 : 80,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.8
      }
    }
  };
  
  // Fade in with scale animation
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  // Feature data
  const features = [
    {
      title: "Learn",
      description: "Knowledge that makes sense, delivered in ways that respect your time and intelligence. No jargon, no gatekeeping.",
      icon: BookOpen,
      color: "from-[#6FCFC3] to-[#2A6F79]",
      bgColor: "from-[#6FCFC3]/20 via-[#4CB0A3]/10 to-transparent"
    },
    {
      title: "Practice",
      description: "Build confidence through experience, not intimidating theory. Learn by doing in a safe, guided environment.",
      icon: Smile,
      color: "from-[#4CB0A3] to-[#2A6F79]",
      bgColor: "from-[#4CB0A3]/20 via-[#3A8F89]/10 to-transparent"
    },
    {
      title: "Empower",
      description: "Take control with tools that adapt to your goals and values, not someone else's definition of financial success.",
      icon: Clock,
      color: "from-[#2A6F79] to-[#1A6366]",
      bgColor: "from-[#2A6F79]/20 via-[#1A6366]/10 to-transparent"
    }
  ];

  return (
    <section 
      id="vision-tease" 
      ref={sectionRef}
      className="py-28 md:py-36 relative overflow-hidden bg-gradient-to-b from-[#FAFBFC] to-[#F5F7FA]"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E1E4E8] to-transparent opacity-30"></div>
      
      {/* Animated grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2A353A" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-0 w-[40rem] h-[40rem] rounded-full bg-[#6FCFC3]/10 blur-[120px]"
        style={{ y: y1, opacity }}
      />
      <motion.div 
        className="absolute bottom-20 right-0 w-[30rem] h-[30rem] rounded-full bg-[#2A6F79]/10 blur-[150px]"
        style={{ y: y2, opacity }}
      />
      
      {/* Decorative floating elements */}
      <div className="absolute top-1/4 right-[10%] floating-element-slow">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6FCFC3]/30 to-[#4CB0A3]/20 backdrop-blur-md"></div>
      </div>
      <div className="absolute bottom-1/3 left-[15%] floating-element">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2A6F79]/20 to-[#4CB0A3]/10 backdrop-blur-md"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Section badge */}
            <motion.div 
              className="inline-block mb-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#6FCFC3]/20 text-[#2A6F79] text-sm font-medium border border-[#6FCFC3]/30">
                <Sparkles size={14} />
                OUR VISION
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7 text-[#2A353A] leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              We're building <span className="gradient-text-shine">something different</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-[#2A353A]/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Not just a platform, but a whole new way to think about growing your money—designed by and for people who've been ignored by traditional finance.
            </motion.p>
          </motion.div>
          
          {/* Cards with brilliant features */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="group relative"
                variants={featureItem}
              >
                {/* Card background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-2xl transform transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] -z-10`} />
                
                {/* Card content */}
                <div className="feature-card h-full flex flex-col p-8 md:p-10">
                  {/* Icon with animated gradient */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Animated glow effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-full"
                      animate={{ 
                        boxShadow: [
                          `0 0 0 rgba(111, 207, 195, 0)`,
                          `0 0 20px rgba(111, 207, 195, 0.5)`,
                          `0 0 0 rgba(111, 207, 195, 0)`
                        ]
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 3,
                        delay: index * 0.5
                      }}
                    />
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-2xl font-bold mb-4 text-[#2A353A] group-hover:text-[#2A6F79] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[#2A353A]/80 text-lg leading-relaxed flex-grow mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Learn more link */}
                  <motion.div 
                    className="flex items-center text-[#4CB0A3] font-medium group-hover:text-[#2A6F79]"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Learn more
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </motion.div>
                  
                  {/* Animated progress bar */}
                  <motion.div 
                    className={`h-1 w-0 bg-gradient-to-r ${feature.color} mt-6 rounded-full`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Bottom showcase section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12 items-center">
            {/* Left side text */}
            <motion.div 
              className="md:col-span-2 lg:pr-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#2A6F79]/10 text-[#2A6F79] font-medium text-sm mb-4">
                COMING SOON
              </span>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#2A353A] mb-5 leading-tight">
                Where finance meets your life, not the other way around
              </h3>
              
              <p className="text-[#2A353A]/70 text-lg mb-8">
                We're reimagining what investing can be when it's built for your generation from the ground up.
              </p>
              
              <motion.button
                className="btn-secondary flex items-center gap-2 group"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 8px 30px rgba(76, 176, 163, 0.2)" 
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get early access</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="h-4 w-4 text-[#2A6F79]" />
                </motion.div>
              </motion.button>
            </motion.div>
            
            {/* Right side showcase boxes */}
            <motion.div 
              className="md:col-span-3 relative grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Features preview boxes */}
              <motion.div 
                className="glass-card p-6 flex flex-col hover-lift border-[#6FCFC3]/20"
                custom="left"
                variants={slideIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-gradient-to-br from-[#4CB0A3]/20 to-[#2A6F79]/10 rounded-lg p-3 w-fit mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <BrainCircuit className="h-6 w-6 text-[#2A6F79]" />
                  </motion.div>
                </div>
                <h4 className="text-xl font-bold text-[#2A353A] mb-2">Smart insights</h4>
                <p className="text-[#2A353A]/60 text-sm">
                  Personalized guidance that adapts to your goals and risk tolerance.
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6 flex flex-col hover-lift sm:mt-10 border-[#6FCFC3]/20"
                custom="right"
                variants={slideIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-gradient-to-br from-[#4CB0A3]/20 to-[#2A6F79]/10 rounded-lg p-3 w-fit mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <TrendingUp className="h-6 w-6 text-[#2A6F79]" />
                  </motion.div>
                </div>
                <h4 className="text-xl font-bold text-[#2A353A] mb-2">Value alignment</h4>
                <p className="text-[#2A353A]/60 text-sm">
                  Invest in what matters to you while growing your wealth responsibly.
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6 flex flex-col hover-lift sm:mt-4 border-[#6FCFC3]/20"
                custom="left"
                variants={slideIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-gradient-to-br from-[#4CB0A3]/20 to-[#2A6F79]/10 rounded-lg p-3 w-fit mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <LightbulbIcon className="h-6 w-6 text-[#2A6F79]" />
                  </motion.div>
                </div>
                <h4 className="text-xl font-bold text-[#2A353A] mb-2">Decision clarity</h4>
                <p className="text-[#2A353A]/60 text-sm">
                  Clear explanations that help you understand the 'why' behind each move.
                </p>
              </motion.div>
              
              {/* Animated hint */}
              <motion.div 
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#6FCFC3]/20 to-[#2A6F79]/10 blur-[60px] pulsing-element"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
