import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, ChevronRight, BrainCircuit, TrendingUp, LightbulbIcon } from "lucide-react";

export default function VisionTeaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  // Simplified scroll-based animations
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const textX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 20, 0]);
  
  // Create smooth container entrance animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  // Item animation for staggered entrance
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Feature cards data
  const features = [
    {
      title: "Learn",
      icon: <BrainCircuit className="h-7 w-7 text-white" />,
      description: "Knowledge that makes sense, delivered in ways that respect your time and intelligence. No jargon, no gatekeeping.",
      link: "#",
    },
    {
      title: "Practice",
      icon: <TrendingUp className="h-7 w-7 text-white" />,
      description: "Build confidence through experience, not intimidating theory. Learn by doing in a safe, guided environment.",
      link: "#",
    },
    {
      title: "Empower",
      icon: <LightbulbIcon className="h-7 w-7 text-white" />,
      description: "Take control with tools that adapt to your goals and values, not someone else's definition of financial success.",
      link: "#",
    },
  ];

  return (
    <section 
      id="vision-tease" 
      ref={sectionRef}
      className="pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 relative overflow-hidden bg-[#FAFBFC]"
    >
      {/* Clean theme transition */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#0F1214] to-transparent -z-0" />
      
      {/* Simple diagonal divider */}
      <div className="absolute top-0 left-0 w-full h-32 z-0">
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0,0 L100,35 L100,0 L0,0 Z" fill="#0F1214" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-12">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#4CB0A3]/10 text-[#4CB0A3] text-sm font-medium border border-[#4CB0A3]/30 mb-6"
          >
            <Sparkles size={14} />
            <span className="font-semibold tracking-wider">OUR VISION</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7 text-[#2A353A] leading-tight tracking-tight font-poppins"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We're building <span className="text-[#4CB0A3] relative">
              something different
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#4CB0A3]/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl max-w-3xl mx-auto text-[#2A353A]/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Not just a platform, but a whole new way to think about growing your money—designed by and for people who've been ignored by traditional finance.
          </motion.p>
        </div>

        {/* Feature cards with simplified styling */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden group"
              variants={item}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-white shadow-sm p-8 md:p-10 relative h-full rounded-xl border border-gray-100">
                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-xl bg-[#4CB0A3] flex items-center justify-center">
                  {feature.icon}
                </div>
                
                {/* Text content */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#2A353A] font-poppins">
                  {feature.title}
                </h3>
                
                <p className="text-[#2A353A]/70 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Learn more button */}
                <motion.a 
                  href={feature.link}
                  className="flex items-center text-[#4CB0A3] font-medium"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-semibold">Learn more</span>
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </motion.a>
                
                {/* Simple accent line */}
                <div className="h-1 w-full bg-[#4CB0A3]/20 mt-8 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon section with clean styling */}
        <motion.div 
          className="mt-24 relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 lg:p-16">
              <motion.div 
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#4CB0A3]/10 text-[#2A6F79] font-medium text-sm mb-6 border border-[#2A6F79]/20"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles size={16} className="mr-1" />
                <span className="tracking-wider">COMING SOON</span>
              </motion.div>

              <motion.h3 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2A353A] mb-6 leading-tight font-poppins"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Where finance meets your life, <span className="text-[#4CB0A3]">not the other way around</span>
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
                className="px-6 py-3 bg-[#4CB0A3] text-white rounded-lg font-medium shadow-md flex items-center gap-2"
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 10px 20px -5px rgba(76, 176, 163, 0.3)"
                }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="font-semibold">Get early access</span>
                <ChevronRight size={18} />
              </motion.button>
            </div>

            {/* Feature highlights */}
            <div className="p-8 md:p-12 lg:p-16 flex items-center">
              <div className="bg-[#F5F7FA] rounded-xl p-8 shadow-sm">
                <h4 className="text-xl font-bold text-[#2A353A] mb-6 flex items-center font-poppins">
                  <div className="bg-[#4CB0A3] w-8 h-8 rounded-lg mr-3 flex items-center justify-center text-white">
                    <Sparkles size={16} />
                  </div>
                  Key Platform Features
                </h4>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#4CB0A3]/20 rounded-lg p-3 h-fit">
                      <BrainCircuit className="h-5 w-5 text-[#4CB0A3]" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#2A353A] mb-1">Smart insights</h5>
                      <p className="text-[#2A353A]/70 text-sm">
                        Personalized guidance that adapts to your goals and risk tolerance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-[#4CB0A3]/20 rounded-lg p-3 h-fit">
                      <TrendingUp className="h-5 w-5 text-[#4CB0A3]" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#2A353A] mb-1">Value alignment</h5>
                      <p className="text-[#2A353A]/70 text-sm">
                        Invest in what matters to you while growing your wealth responsibly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-[#4CB0A3]/20 rounded-lg p-3 h-fit">
                      <LightbulbIcon className="h-5 w-5 text-[#4CB0A3]" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#2A353A] mb-1">Decision clarity</h5>
                      <p className="text-[#2A353A]/70 text-sm">
                        Clear explanations that help you understand the 'why' behind each move.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Simple highlight bar */}
                <div className="h-1 bg-[#4CB0A3]/30 rounded-full mt-6" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
