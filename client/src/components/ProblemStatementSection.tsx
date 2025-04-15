import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, BadgeCheck, ThumbsUp, Quote, Users } from "lucide-react";
import { useRef } from "react";

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
  
  // Testimonial data
  const testimonials = [
    {
      quote: "I want to invest, but I don't even know where to start. Everything feels like it was designed for someone else.",
      description: "The current investment landscape is filled with complex jargon, overwhelming choices, and tools that require expertise most of us don't have time to acquire.",
      name: "Rachel, 24",
      role: "Graphic Designer",
      accentColor: "from-[#6FCFC3]/80 to-[#4CB0A3]"
    },
    {
      quote: "I'm tired of being lectured about my money by people who don't understand my goals or my reality.",
      description: "Traditional financial advice doesn't account for the economic realities, values, and priorities of younger generations facing different challenges than our parents did.",
      name: "Alex, 26",
      role: "Software Developer",
      accentColor: "from-[#5FC0B6]/80 to-[#3A8F89]"
    },
    {
      quote: "Every investing app feels like it was built by finance bros for finance bros. Where's the platform for the rest of us?",
      description: "The investing world has been dominated by one perspective for too long. It's time for platforms that represent and understand diverse financial journeys.",
      name: "Jordan, 22",
      role: "Marketing Assistant",
      accentColor: "from-[#4BA294]/80 to-[#2A6F79]"
    }
  ];

  return (
    <section 
      id="problem-statement" 
      ref={sectionRef}
      className="py-32 md:py-40 relative overflow-hidden dark-section"
    >
      {/* Background pattern & effects */}
      <div className="absolute inset-0 opacity-30 z-0 section-pattern"></div>
      
      {/* Animated background diagonal lines */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-10" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.line
            key={i}
            x1={1920}
            y1={100 + i * 150}
            x2={0}
            y2={-200 + i * 150}
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
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
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
                VOICES LIKE YOURS
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Let's be <span className="text-[#6FCFC3]">honest</span><span className="text-[#6FCFC3]">...</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              These are the real frustrations we've heard from young investors like you. 
              We're building Swipefolio because we've felt them too.
            </motion.p>
          </motion.div>
          
          {/* Testimonial cards */}
          <motion.div 
            id="testimonials-section"
            className="grid grid-cols-1 gap-8 lg:gap-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="rounded-2xl overflow-hidden group"
                variants={item}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 200, damping: 20 } }}
              >
                <div className="glass-effect-dark border border-white/10 p-0">
                  <div className="p-8 md:p-10 relative">
                    {/* Decorative quotes in background */}
                    <div className="absolute top-6 right-8 text-[#4CB0A3]/10">
                      <Quote size={120} strokeWidth={1} />
                    </div>
                    
                    {/* Card content */}
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                      {/* Icon container */}
                      <div className={`hidden md:flex shrink-0 p-4 rounded-xl bg-gradient-to-br ${testimonial.accentColor} shadow-lg transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110`}>
                        <MessageSquare size={32} className="text-white" />
                      </div>
                      
                      {/* Text content */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight group-hover:text-[#6FCFC3] transition-colors duration-300">
                          "{testimonial.quote}"
                        </h3>
                        
                        <p className="text-white/70 text-lg mb-8 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                          {testimonial.description}
                        </p>
                        
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.accentColor} flex items-center justify-center shadow-md`}>
                            <BadgeCheck size={18} className="text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{testimonial.name}</div>
                            <div className="text-sm text-[#6FCFC3]">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated gradient bar */}
                  <motion.div 
                    className={`h-1 w-0 bg-gradient-to-r ${testimonial.accentColor}`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 1.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Bottom stats card */}
          <motion.div 
            className="mt-20 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="glass-effect-dark rounded-xl border border-white/10 p-8 overflow-hidden relative">
              {/* Background glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#6FCFC3]/30 blur-[60px]"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6FCFC3] to-[#2A6F79] flex items-center justify-center shadow-lg">
                    <ThumbsUp className="text-white h-8 w-8" />
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl text-white font-bold mb-1">Sound familiar?</h3>
                    <p className="text-white/70 md:text-lg">
                      You're not alone in feeling this way.
                    </p>
                  </div>
                </div>
                
                <div className="text-center md:text-right">
                  <div className="text-5xl font-bold gradient-text-shine mb-1">94%</div>
                  <p className="text-white/80">of our research participants expressed similar frustrations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
