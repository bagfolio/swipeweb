import { motion } from "framer-motion";
import { BookOpen, Smile, Clock } from "lucide-react";

export default function VisionTeaseSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#6FCFC3] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#4CB0A3] transform translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-[#2A353A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            We're building something different
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-16 max-w-2xl mx-auto text-[#2A353A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Not just a platform, but a whole new way to think about growing your money—designed by and for people who've been ignored by traditional finance.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-[#6FCFC3] bg-opacity-30 flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-[#2A6F79]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#2A353A]">Learn</h3>
              <p className="text-center text-[#2A353A]">
                Knowledge that makes sense, delivered in ways that respect your time and intelligence.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-[#6FCFC3] bg-opacity-30 flex items-center justify-center mb-4">
                <Smile className="h-8 w-8 text-[#2A6F79]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#2A353A]">Practice</h3>
              <p className="text-center text-[#2A353A]">
                Build confidence through experience, not theoretical advice or intimidating charts.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-[#6FCFC3] bg-opacity-30 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-[#2A6F79]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#2A353A]">Empower</h3>
              <p className="text-center text-[#2A353A]">
                Take control with tools that adapt to your goals, not someone else's definition of success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
