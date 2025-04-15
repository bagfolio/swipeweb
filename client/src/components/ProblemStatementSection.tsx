import { motion } from "framer-motion";

export default function ProblemStatementSection() {
  const container = {
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
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#2A353A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Let's be honest...
          </motion.h2>
          
          <motion.div 
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="bg-[#F5F7FA] p-6 md:p-8 rounded-2xl shadow-sm"
              variants={item}
            >
              <p className="text-lg md:text-xl text-[#2A353A]">
                "I want to invest, but I don't even know where to start. Everything feels like it was designed for someone else."
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-[#F5F7FA] p-6 md:p-8 rounded-2xl shadow-sm"
              variants={item}
            >
              <p className="text-lg md:text-xl text-[#2A353A]">
                "I'm tired of being lectured about my money by people who don't understand my goals or my reality."
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-[#F5F7FA] p-6 md:p-8 rounded-2xl shadow-sm"
              variants={item}
            >
              <p className="text-lg md:text-xl text-[#2A353A]">
                "Every investing app feels like it was built by finance bros for finance bros. Where's the platform for the rest of us?"
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-xl font-medium text-[#2A6F79]">
              Sound familiar? You're not alone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
