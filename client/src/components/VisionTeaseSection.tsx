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
      className="pt-40 pb-28 md:pt-48 md:pb-36 relative overflow-hidden bg-gradient-to-b from-[#FAFBFC] to-[#F5F7FA]"
    >
      {/* Smooth theme transition gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-[#0D1214] via-[#12191B]/50 to-transparent -z-0" />
      
      {/* Diagonal dividing line to create visual continuity */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-20 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <svg className="w-full h-72 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
          <motion.path 
            d="M0,0 L100,30 L100,0 L0,0 Z" 
            fill="#0D1214" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path 
            d="M0,0 L100,30 L100,100 L0,100 Z" 
            fill="none" 
            stroke="#2A6F79"
            strokeWidth="0.2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </svg>
      </motion.div>
      
      {/* Background elements - with adjusted position to account for transition area */}
      <div className="absolute top-72 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E1E4E8] to-transparent opacity-30"></div>
      
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
                
                {/* Card content with enhanced styling and effects */}
                <div className="feature-card h-full flex flex-col p-8 md:p-10 backdrop-blur-sm bg-white/90 rounded-2xl border border-[#6FCFC3]/20 shadow-lg shadow-[#6FCFC3]/5 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#6FCFC3]/10 group-hover:bg-white group-hover:border-[#6FCFC3]/30">
                  {/* Icon with enhanced animated gradient */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:rounded-[22px]`}>
                      <motion.div
                        animate={{ 
                          rotate: [0, 5, 0, -5, 0],
                          scale: [1, 1.05, 1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 6, 
                          repeat: Infinity,
                          delay: index * 1.5
                        }}
                      >
                        <feature.icon className="h-10 w-10 text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Enhanced animated glow effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-2xl"
                      animate={{ 
                        boxShadow: [
                          `0 0 0 rgba(111, 207, 195, 0)`,
                          `0 0 30px rgba(111, 207, 195, 0.6)`,
                          `0 0 0 rgba(111, 207, 195, 0)`
                        ]
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 3,
                        delay: index * 0.5
                      }}
                    />
                    
                    {/* Subtle floating background element */}
                    <div className="absolute -z-10 -right-4 -bottom-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#6FCFC3]/10 to-[#2A6F79]/5 blur-sm floating-element-slow"></div>
                  </div>
                  
                  {/* Title and description with enhanced typography */}
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold mb-5 text-[#2A353A] group-hover:text-[#2A6F79] transition-colors duration-300"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <p className="text-[#2A353A]/80 text-lg leading-relaxed flex-grow mb-8 group-hover:text-[#2A353A]/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Enhanced learn more button */}
                  <motion.div 
                    className="flex items-center text-[#4CB0A3] font-medium px-4 py-2 rounded-lg bg-[#6FCFC3]/10 w-fit group-hover:bg-[#6FCFC3]/20 transition-colors duration-300"
                    whileHover={{ 
                      x: 5, 
                      backgroundColor: "rgba(111, 207, 195, 0.2)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span>Learn more</span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    >
                      <ArrowUpRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Animated accent line with enhanced visual */}
                  <motion.div 
                    className={`h-1.5 w-0 bg-gradient-to-r ${feature.color} mt-8 rounded-full`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 1.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Visually distinct "Coming Soon" section - fixes hierarchy confusion */}
          <motion.div 
            className="mt-28 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F0F7F6] to-[#E7F3F2] border border-[#6FCFC3]/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#6FCFC3]/10 to-[#2A6F79]/5 rounded-full blur-[80px] -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-[#4CB0A3]/10 to-[#2A6F79]/5 rounded-full blur-[100px] -z-10" />
            
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left side - text content with enhanced styling */}
              <div>
                <motion.div 
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#2A6F79]/10 text-[#2A6F79] font-medium text-sm mb-6 border border-[#2A6F79]/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Sparkles size={16} className="mr-1" />
                  COMING SOON
                </motion.div>
                
                <motion.h3 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2A353A] mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Where finance meets your life, <span className="text-[#2A6F79]">not the other way around</span>
                </motion.h3>
                
                <motion.p 
                  className="text-[#2A353A]/80 text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  We're reimagining what investing can be when it's built for your generation from the ground up.
                </motion.p>
                
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-[#4CB0A3] to-[#2A6F79] text-white rounded-lg font-medium shadow-lg shadow-[#2A6F79]/20 flex items-center gap-2"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(42, 111, 121, 0.3)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <span>Get early access</span>
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatType: "loop" 
                    }}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </motion.div>
                </motion.button>
              </div>
              
              {/* Right side - feature overview with list instead of cards */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-[#6FCFC3]/20 p-8 shadow-xl">
                  <h4 className="text-xl font-bold text-[#2A353A] mb-6 flex items-center">
                    <motion.div 
                      className="bg-gradient-to-r from-[#4CB0A3] to-[#2A6F79] w-8 h-8 rounded-lg mr-3 flex items-center justify-center text-white"
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    >
                      <Sparkles size={16} />
                    </motion.div>
                    Key Platform Features
                  </h4>
                  
                  {/* Feature list instead of separate cards */}
                  <ul className="space-y-6">
                    <motion.li 
                      className="flex gap-4"
                      variants={fadeInScale}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="bg-gradient-to-br from-[#4CB0A3]/20 to-[#2A6F79]/10 rounded-lg p-3 h-fit">
                        <BrainCircuit className="h-6 w-6 text-[#2A6F79]" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2A353A] mb-1">Smart insights</h5>
                        <p className="text-[#2A353A]/70 text-sm">
                          Personalized guidance that adapts to your goals and risk tolerance.
                        </p>
                      </div>
                    </motion.li>
                    
                    <motion.li 
                      className="flex gap-4"
                      variants={fadeInScale}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-gradient-to-br from-[#4CB0A3]/20 to-[#2A6F79]/10 rounded-lg p-3 h-fit">
                        <TrendingUp className="h-6 w-6 text-[#2A6F79]" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2A353A] mb-1">Value alignment</h5>
                        <p className="text-[#2A353A]/70 text-sm">
                          Invest in what matters to you while growing your wealth responsibly.
                        </p>
                      </div>
                    </motion.li>
                    
                    <motion.li 
                      className="flex gap-4"
                      variants={fadeInScale}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="bg-gradient-to-br from-[#4CB0A3]/20 to-[#2A6F79]/10 rounded-lg p-3 h-fit">
                        <LightbulbIcon className="h-6 w-6 text-[#2A6F79]" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2A353A] mb-1">Decision clarity</h5>
                        <p className="text-[#2A353A]/70 text-sm">
                          Clear explanations that help you understand the 'why' behind each move.
                        </p>
                      </div>
                    </motion.li>
                  </ul>
                  
                  {/* Animated decorative line */}
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-[#4CB0A3] to-[#2A6F79] rounded-full mt-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#6FCFC3]/30 to-[#4CB0A3]/20 blur-sm floating-element-slow"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#2A6F79]/30 to-[#4CB0A3]/20 blur-sm floating-element"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
