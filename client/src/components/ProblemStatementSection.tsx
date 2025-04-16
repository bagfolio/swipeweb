import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Users, LightbulbIcon, Quote } from "lucide-react";

// Import chart image
import chartPath from "../assets/chart-pattern.svg";

export default function ProblemStatementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  // Responsive opacity for scroll effect
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Create staggered animations for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="problem-statement" 
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-[#0F1214]"
    >
      {/* Clean background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight tracking-tight font-poppins"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Traditional Finance <span className="text-[#4CB0A3]">Needs Reinvention</span>
          </motion.h2>
        </div>

        {/* Simplified testimonial section */}
        <motion.div 
          id="testimonials-section"
          className="max-w-4xl mx-auto mb-20 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Clean modern card styling */}
          <div className="py-12 px-8 md:px-16 rounded-xl bg-[#151A1D] border-l-2 border-[#4CB0A3]">
            {/* Simple quote icon */}
            <div className="absolute -top-5 -left-5">
              <div className="p-3 rounded-full bg-[#4CB0A3] text-white">
                <Quote size={24} />
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-tight mb-8 md:leading-relaxed font-poppins">
                We're building a platform that makes investing 
                <span className="text-[#4CB0A3] font-medium ml-2">meaningful</span>, 
                <span className="text-[#4CB0A3] font-medium mx-2">intuitive</span>, 
                and aligned with 
                <span className="text-[#4CB0A3] font-medium ml-2">your values</span>.
              </h3>
            </div>
            
            {/* Simple highlight bar */}
            <div className="h-1 bg-[#4CB0A3]/30 w-full rounded-full" />
          </div>
        </motion.div>

        {/* Feature cards with simplified styling */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Feature 1 */}
          <motion.div 
            className="rounded-xl overflow-hidden group"
            variants={item}
            whileHover={{ y: -8 }}
          >
            <div className="bg-[#151A1D] p-8 md:p-10 relative h-full rounded-xl border border-white/5">
              {/* Icon */}
              <div className="mb-6 w-16 h-16 rounded-xl bg-[#4CB0A3] flex items-center justify-center">
                <MessageSquare className="h-7 w-7 text-white" />
              </div>
              
              {/* Text content */}
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white font-poppins">
                Simplified Communication
              </h3>
              
              <p className="text-white/70 mb-6">
                Clear, jargon-free explanations that make finance accessible to everyone.
              </p>
              
              {/* Simple gradient bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4CB0A3] opacity-50" />
            </div>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            className="rounded-xl overflow-hidden group"
            variants={item}
            whileHover={{ y: -8 }}
          >
            <div className="bg-[#151A1D] p-8 md:p-10 relative h-full rounded-xl border border-white/5">
              {/* Icon */}
              <div className="mb-6 w-16 h-16 rounded-xl bg-[#4CB0A3] flex items-center justify-center">
                <Users className="h-7 w-7 text-white" />
              </div>
              
              {/* Text content */}
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white font-poppins">
                User-Centered Design
              </h3>
              
              <p className="text-white/70 mb-6">
                Built around how people actually think about money, not how Wall Street does.
              </p>
              
              {/* Simple gradient bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4CB0A3] opacity-50" />
            </div>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            className="rounded-xl overflow-hidden group"
            variants={item}
            whileHover={{ y: -8 }}
          >
            <div className="bg-[#151A1D] p-8 md:p-10 relative h-full rounded-xl border border-white/5">
              {/* Icon */}
              <div className="mb-6 w-16 h-16 rounded-xl bg-[#4CB0A3] flex items-center justify-center">
                <LightbulbIcon className="h-7 w-7 text-white" />
              </div>
              
              {/* Text content */}
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white font-poppins">
                Value Alignment
              </h3>
              
              <p className="text-white/70 mb-6">
                Invest in what matters to you while growing your wealth responsibly.
              </p>
              
              {/* Simple gradient bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4CB0A3] opacity-50" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
