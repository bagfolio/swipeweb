import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Quote, Users } from "lucide-react";
import { useRef } from "react";
import chartPath from "../assets/chart.png";

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
  
  // Streamlined testimonial data - fewer but more impactful quotes
  const testimonials = [
    {
      quote: "I want to invest, but traditional platforms feel overwhelming and unnecessarily complex.",
      name: "Rachel",
      accentColor: "from-[#6FCFC3]/80 to-[#4CB0A3]"
    },
    {
      quote: "I need clear investing options that align with my goals and values, without the finance jargon.",
      name: "Alex",
      accentColor: "from-[#5FC0B6]/80 to-[#3A8F89]"
    }
  ];

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
          
          {/* Large central quote - focal point */}
          <motion.div 
            id="testimonials-section"
            className="max-w-4xl mx-auto mb-24"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="text-center">
              <div className="inline-block mb-10 text-[#6FCFC3]/20">
                <Quote size={60} />
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-light italic leading-tight mb-12">
                We're building a platform that makes investing <span className="text-[#6FCFC3] font-normal">meaningful</span>, <span className="text-[#6FCFC3] font-normal">intuitive</span>, and aligned with <span className="text-[#6FCFC3] font-normal">your values</span>.
              </h3>
              
              <div className="h-0.5 w-24 bg-[#6FCFC3]/30 mx-auto"></div>
            </div>
          </motion.div>
          
          {/* Testimonial cards - more minimal */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
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
                <div className="glass-effect-dark border border-white/10 p-8 md:p-10 relative">
                  {/* Decorative quotes in background */}
                  <div className="absolute top-6 right-8 text-[#4CB0A3]/10">
                    <Quote size={80} strokeWidth={1} />
                  </div>
                  
                  {/* Text content - simplified */}
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-medium mb-6 text-white leading-relaxed group-hover:text-[#6FCFC3] transition-colors duration-300">
                      "{testimonial.quote}"
                    </h3>
                    
                    <div className="text-[#6FCFC3]">
                      {testimonial.name}
                    </div>
                  </div>
                  
                  {/* Animated gradient bar */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${testimonial.accentColor}`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 1.2 }}
                  />
                </div>
              </motion.div>
            ))}
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
