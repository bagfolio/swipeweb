import { motion } from "framer-motion";
import { BookOpen, Smile, Clock } from "lucide-react";

export default function VisionTeaseSection() {
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
        stiffness: 50,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-[#F5F7FA]">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-0 left-0 w-[30rem] h-[30rem] rounded-full bg-[#6FCFC3]/10 blur-[100px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[#2A6F79]/10 blur-[120px]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-[#4CB0A3] font-medium mb-3 border-b-2 border-[#6FCFC3]/30 px-3 py-1"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y:.0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              OUR VISION
            </motion.span>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#2A353A] leading-tight">
              We're building <span className="gradient-text">something different</span>
            </h2>
            
            <motion.p 
              className="text-xl mb-0 max-w-2xl mx-auto text-[#2A353A]/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Not just a platform, but a whole new way to think about growing your money—designed by and for people who've been ignored by traditional finance.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="group relative"
              variants={featureItem}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6FCFC3]/20 to-[#4CB0A3]/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.03] -z-10" />
              <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col group-hover:translate-y-[-8px] group-hover:translate-x-[-8px]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6FCFC3] to-[#2A6F79] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2A353A] group-hover:text-[#2A6F79] transition-colors">Learn</h3>
                <p className="text-[#2A353A]/80 text-lg leading-relaxed flex-grow">
                  Knowledge that makes sense, delivered in ways that respect your time and intelligence. No jargon, no gatekeeping.
                </p>
                <div className="h-1 w-0 bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79] mt-6 group-hover:w-full transition-all duration-700 rounded-full" />
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative"
              variants={featureItem}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6FCFC3]/20 to-[#4CB0A3]/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.03] -z-10" />
              <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col group-hover:translate-y-[-8px] group-hover:translate-x-[-8px]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6FCFC3] to-[#2A6F79] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smile className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2A353A] group-hover:text-[#2A6F79] transition-colors">Practice</h3>
                <p className="text-[#2A353A]/80 text-lg leading-relaxed flex-grow">
                  Build confidence through experience, not intimidating theory. Learn by doing in a safe, guided environment.
                </p>
                <div className="h-1 w-0 bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79] mt-6 group-hover:w-full transition-all duration-700 rounded-full" />
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative"
              variants={featureItem}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6FCFC3]/20 to-[#4CB0A3]/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.03] -z-10" />
              <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col group-hover:translate-y-[-8px] group-hover:translate-x-[-8px]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6FCFC3] to-[#2A6F79] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2A353A] group-hover:text-[#2A6F79] transition-colors">Empower</h3>
                <p className="text-[#2A353A]/80 text-lg leading-relaxed flex-grow">
                  Take control with tools that adapt to your goals and values, not someone else's definition of financial success.
                </p>
                <div className="h-1 w-0 bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79] mt-6 group-hover:w-full transition-all duration-700 rounded-full" />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="mt-20 text-center max-w-3xl mx-auto bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-[#E1E4E8]/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#2A6F79]/10 text-[#2A6F79] font-medium text-sm mb-4">
              COMING SOON
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2A353A] mb-4">
              Where finance meets your life, not the other way around
            </h3>
            <p className="text-[#2A353A]/70 text-lg">
              We're reimagining what investing can be when it's built for your generation from the ground up.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
