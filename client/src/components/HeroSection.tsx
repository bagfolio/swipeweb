import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
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

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient overflow-hidden relative section-padding">
      {/* Abstract shapes */}
      <motion.div 
        className="absolute left-0 top-1/4 w-64 h-64 rounded-full bg-[#6FCFC3]/10 blur-3xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.div 
        className="absolute right-0 bottom-1/4 w-96 h-96 rounded-full bg-[#2A6F79]/10 blur-3xl"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-[#2A353A]"
            variants={fadeInUp}
          >
            Investing Without The{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Nonsense</span>
              <motion.span 
                className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-4 md:h-5 bg-[#6FCFC3] opacity-30 z-0 rounded"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-[#2A353A]/90 mb-12 max-w-3xl mx-auto font-light"
            variants={fadeInUp}
          >
            A next-gen investing platform built for your generation. 
            <span className="block mt-2">No lectures. No jargon. Just clarity, meaning, and control.</span>
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            variants={fadeInUp}
          >
            <motion.button 
              onClick={scrollToWaitlist}
              className="btn-primary text-lg group relative"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(76, 176, 163, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Join the Waitlist</span>
              <motion.span 
                className="absolute inset-0 bg-[#2A6F79] rounded-full -z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ 
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.4 }
                }}
              />
            </motion.button>
            
            <motion.button
              onClick={scrollToProblem}
              className="text-[#2A6F79] hover:text-[#4CB0A3] transition-colors duration-300 flex items-center gap-2 group"
              whileHover={{ y: 3 }}
              whileTap={{ y: 0 }}
            >
              Learn More
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
          
          {/* Floating stats */}
          <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 shadow-sm hover-lift"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">83%</div>
              <p className="text-[#2A353A]/70">of Gen Z feel intimidated by traditional finance</p>
            </motion.div>
            
            <motion.div 
              className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 shadow-sm hover-lift"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">68%</div>
              <p className="text-[#2A353A]/70">want investing that aligns with their values</p>
            </motion.div>
            
            <motion.div 
              className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 shadow-sm hover-lift"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">77%</div>
              <p className="text-[#2A353A]/70">seek simplicity and meaning in financial decisions</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
