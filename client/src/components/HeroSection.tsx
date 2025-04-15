import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#2A353A]"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Investing Without The {" "}
            <span className="relative">
              <span className="relative z-10">Nonsense</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#6FCFC3] opacity-50 z-0"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-[#2A353A] mb-10"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            A next-gen investing platform built for your generation. 
            No lectures. No jargon. Just clarity, meaning, and control.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <motion.button 
              onClick={scrollToWaitlist}
              className="inline-block px-8 py-4 bg-[#4CB0A3] hover:bg-[#2A6F79] text-white rounded-full text-lg font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Waitlist
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
