import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Quote, Users } from "lucide-react";
import { useRef } from "react";
import chartPath from "../assets/bluechart.png";

export default function ProblemStatementSection() {
  // Parallax scroll effects
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }
  };
  
  // Enhanced animation variants with more fluid motion
  const advancedItem = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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

  return (
    <section 
      id="problem-statement" 
      ref={sectionRef}
      className="py-28 md:py-36 relative overflow-hidden bg-[#0D1214]"
    >
      {/* Background pattern & effects */}
      <div className="absolute inset-0 opacity-30 z-0 section-pattern"></div>
      
      {/* Chart background image with lower opacity */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${chartPath})`,
            filter: "contrast(120%) brightness(60%)",
            transform: "scale(1.2) rotate(5deg)",
          }}
        />
        <div className="absolute inset-0 bg-[#0D1214]/80"></div>
      </div>
      
      {/* Animated diagonal lines */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-10" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.line
            key={i}
            x1={1920}
            y1={100 + i * 200}
            x2={0}
            y2={-200 + i * 200}
            stroke="white"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ 
              pathLength: 1, 
              opacity: 0.5,
              transition: { 
                delay: 0.1 * i,
                duration: 1.5, 
                ease: "easeInOut"
              }
            }}
            viewport={{ once: true }}
          />
        ))}
      </svg>
      
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-0 right-0 w-[35rem] h-[35rem] rounded-full bg-[#4CB0A3]/10 blur-[120px] pulsing-element"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-[#2A6F79]/10 blur-[100px] pulsing-element"
        style={{ y: y2 }}
      />
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header - more minimal and focused */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ opacity }}
          >
            {/* Section badge */}
            <motion.div 
              className="inline-block mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#6FCFC3]/20 text-[#6FCFC3] text-sm font-medium border border-[#6FCFC3]/30">
                <Users size={14} />
                THE PROBLEM
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Traditional Finance <span className="text-[#6FCFC3]">Needs Reinvention</span>
            </motion.h2>
          </motion.div>
          
          {/* Redesigned central quote - with more visual distinctiveness */}
          <motion.div 
            id="testimonials-section"
            className="max-w-4xl mx-auto mb-24 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0F1C1E]/80 to-[#162426]/60 -z-10 scale-105 transform rotate-1 blur-sm" />
            <div className="absolute inset-0 rounded-2xl border border-[#6FCFC3]/10 -z-10" />
            
            {/* Content container with left-border accent */}
            <div className="relative py-12 px-8 md:px-16 rounded-2xl bg-[#12191B]/90 border-l-4 border-[#6FCFC3]">
              {/* Accent elements */}
              <div className="absolute -top-6 -left-6">
                <motion.div 
                  className="p-3 rounded-full bg-[#0D1214] border border-[#6FCFC3]/30 text-[#6FCFC3]"
                  initial={{ rotate: -10 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.5,
                    type: "spring"
                  }}
                >
                  <Quote size={30} />
                </motion.div>
              </div>
              
              <motion.div
                className="relative z-10"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-tight mb-8 md:leading-relaxed">
                  We're building a platform that makes investing <motion.span 
                    className="text-[#6FCFC3] font-normal relative inline-block"
                    whileInView={{
                      color: ["#6FCFC3", "#4CB0A3", "#6FCFC3"],
                    }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >meaningful</motion.span>, <motion.span 
                    className="text-[#6FCFC3] font-normal relative inline-block"
                    whileInView={{
                      color: ["#6FCFC3", "#4CB0A3", "#6FCFC3"],
                    }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.5
                    }}
                  >intuitive</motion.span>, and aligned with <motion.span 
                    className="text-[#6FCFC3] font-normal relative inline-block"
                    whileInView={{
                      color: ["#6FCFC3", "#4CB0A3", "#6FCFC3"],
                    }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1
                    }}
                  >your values</motion.span>.
                </h3>
              </motion.div>
              
              {/* Bottom highlight bar with animation */}
              <motion.div 
                className="h-0.5 bg-gradient-to-r from-[#6FCFC3]/20 via-[#6FCFC3]/80 to-[#6FCFC3]/20 w-0"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            
            {/* Decoration elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#6FCFC3]/5 blur-[60px] pulsing-element" />
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#6FCFC3]/5 blur-[60px] pulsing-element" />
          </motion.div>
          
          {/* Clean, modern feature cards with enhanced animations */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Feature 1 - Enhanced with more sophisticated card design */}
            <motion.div 
              className="rounded-2xl overflow-hidden group relative"
              variants={item}
              whileHover={{ 
                y: -12, 
                scale: 1.03, 
                transition: { type: "spring", stiffness: 300, damping: 15 } 
              }}
            >
              {/* Card container with enhanced glassmorphism effect */}
              <div className="glass-effect-dark backdrop-blur-sm border border-white/10 p-8 md:p-10 relative h-full">
                {/* Card background elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#6FCFC3]/5 rounded-full blur-[60px] -z-10" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#4CB0A3]/5 rounded-full blur-[40px] -z-10" />
                
                {/* Icon with enhanced animation */}
                <motion.div 
                  className="mb-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79] flex items-center justify-center shadow-lg"
                  whileHover={{ 
                    rotate: [0, 5, -5, 0], 
                    scale: [1, 1.15, 1.1],
                    boxShadow: "0 0 20px rgba(111, 207, 195, 0.5)"
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut" 
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <MessageSquare className="h-7 w-7 text-white" />
                  </motion.div>
                </motion.div>
                
                {/* Text content with enhanced transitions */}
                <motion.h3 
                  className="text-xl font-medium mb-4 text-white group-hover:text-[#6FCFC3] transition-all duration-300"
                  whileHover={{ x: 3 }}
                >
                  Simplified Communication
                </motion.h3>
                
                <p className="text-white/70 mb-6 transition-all duration-300 group-hover:text-white/90">
                  Clear, jargon-free explanations that make finance accessible to everyone.
                </p>
                
                {/* Animated border glow */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ boxShadow: "inset 0 0 0px rgba(111, 207, 195, 0)" }}
                  whileHover={{ 
                    boxShadow: "inset 0 0 2px rgba(111, 207, 195, 0.5)" 
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Animated gradient bar with enhanced visual */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#6FCFC3] to-transparent"
                  initial={{ width: "0%", x: "-100%" }}
                  whileInView={{ width: "100%", x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
                
                {/* Subtle radial gradient reveal on hover */}
                <motion.div
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#6FCFC3]/0 blur-[40px]"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
            
            {/* Feature 2 - Enhanced with more sophisticated card design */}
            <motion.div 
              className="rounded-2xl overflow-hidden group relative"
              variants={item}
              whileHover={{ 
                y: -12, 
                scale: 1.03, 
                transition: { type: "spring", stiffness: 300, damping: 15 } 
              }}
            >
              {/* Card container with enhanced glassmorphism effect */}
              <div className="glass-effect-dark backdrop-blur-sm border border-white/10 p-8 md:p-10 relative h-full">
                {/* Card background elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#5FC0B6]/5 rounded-full blur-[60px] -z-10" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#3A8F89]/5 rounded-full blur-[40px] -z-10" />
                
                {/* Icon with enhanced animation */}
                <motion.div 
                  className="mb-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#5FC0B6]/80 to-[#3A8F89] flex items-center justify-center shadow-lg"
                  whileHover={{ 
                    rotate: [0, -5, 5, 0], 
                    scale: [1, 1.15, 1.1],
                    boxShadow: "0 0 20px rgba(95, 192, 182, 0.5)"
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut" 
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.5
                    }}
                  >
                    <Users className="h-7 w-7 text-white" />
                  </motion.div>
                </motion.div>
                
                {/* Text content with enhanced transitions */}
                <motion.h3 
                  className="text-xl font-medium mb-4 text-white group-hover:text-[#5FC0B6] transition-all duration-300"
                  whileHover={{ x: 3 }}
                >
                  User-Centered Design
                </motion.h3>
                
                <p className="text-white/70 mb-6 transition-all duration-300 group-hover:text-white/90">
                  Built around how people actually think about money, not how Wall Street does.
                </p>
                
                {/* Animated border glow */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ boxShadow: "inset 0 0 0px rgba(95, 192, 182, 0)" }}
                  whileHover={{ 
                    boxShadow: "inset 0 0 2px rgba(95, 192, 182, 0.5)" 
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Animated gradient bar with enhanced visual */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#5FC0B6] to-transparent"
                  initial={{ width: "0%", x: "-100%" }}
                  whileInView={{ width: "100%", x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
                
                {/* Subtle radial gradient reveal on hover */}
                <motion.div
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#5FC0B6]/0 blur-[40px]"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
            
            {/* Feature 3 - Enhanced with more sophisticated card design */}
            <motion.div 
              className="rounded-2xl overflow-hidden group relative"
              variants={item}
              whileHover={{ 
                y: -12, 
                scale: 1.03, 
                transition: { type: "spring", stiffness: 300, damping: 15 } 
              }}
            >
              {/* Card container with enhanced glassmorphism effect */}
              <div className="glass-effect-dark backdrop-blur-sm border border-white/10 p-8 md:p-10 relative h-full">
                {/* Card background elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#4CB0A3]/5 rounded-full blur-[60px] -z-10" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#2A6F79]/5 rounded-full blur-[40px] -z-10" />
                
                {/* Icon with enhanced animation */}
                <motion.div 
                  className="mb-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#4CB0A3] to-[#2A6F79] flex items-center justify-center shadow-lg"
                  whileHover={{ 
                    rotate: [0, 5, -5, 0], 
                    scale: [1, 1.15, 1.1],
                    boxShadow: "0 0 20px rgba(76, 176, 163, 0.5)"
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut" 
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1
                    }}
                  >
                    <Quote className="h-7 w-7 text-white" />
                  </motion.div>
                </motion.div>
                
                {/* Text content with enhanced transitions */}
                <motion.h3 
                  className="text-xl font-medium mb-4 text-white group-hover:text-[#4CB0A3] transition-all duration-300"
                  whileHover={{ x: 3 }}
                >
                  Value-Aligned Investing
                </motion.h3>
                
                <p className="text-white/70 mb-6 transition-all duration-300 group-hover:text-white/90">
                  Investment options that reflect your principles and goals, not just returns.
                </p>
                
                {/* Animated border glow */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ boxShadow: "inset 0 0 0px rgba(76, 176, 163, 0)" }}
                  whileHover={{ 
                    boxShadow: "inset 0 0 2px rgba(76, 176, 163, 0.5)" 
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Animated gradient bar with enhanced visual */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#4CB0A3] to-transparent"
                  initial={{ width: "0%", x: "-100%" }}
                  whileInView={{ width: "100%", x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
                
                {/* Subtle radial gradient reveal on hover */}
                <motion.div
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#4CB0A3]/0 blur-[40px]"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Bold stat - minimal, high impact */}
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="gradient-text-shine text-6xl md:text-7xl lg:text-8xl font-bold mb-4">94%</div>
            <p className="text-white/70 text-xl max-w-lg mx-auto">
              of our research participants expressed similar frustrations with traditional finance
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
