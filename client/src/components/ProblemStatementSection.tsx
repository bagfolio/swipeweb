import { motion } from "framer-motion";
import { MessageSquare, BadgeCheck, ThumbsUp } from "lucide-react";

export default function ProblemStatementSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12
      }
    }
  };

  return (
    <section id="problem-statement" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#F5F7FA]"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 rounded-full bg-[#6FCFC3]/5 blur-3xl -z-10"></div>
      <div className="absolute right-0 bottom-1/4 w-64 h-64 rounded-full bg-[#2A6F79]/5 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-block text-[#4CB0A3] font-medium mb-3 border-b-2 border-[#6FCFC3]/30 px-3 py-1"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              VOICES LIKE YOURS
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#2A353A] leading-tight">
              Let's be <span className="text-[#4CB0A3]">honest</span>...
            </h2>
            <p className="text-lg text-[#2A353A]/70 max-w-2xl mx-auto">
              These are the real frustrations we've heard from young investors like you. 
              We're building Swipefolio because we've felt them too.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="p-8 md:p-10 flex gap-6 items-start">
                <div className="bg-gradient-to-br from-[#6FCFC3] to-[#4CB0A3] rounded-full p-3 text-white shrink-0 transform transition-transform group-hover:rotate-12">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#2A353A] group-hover:text-[#4CB0A3] transition-colors">
                    "I want to invest, but I don't even know where to start. Everything feels like it was designed for someone else."
                  </h3>
                  <p className="text-[#2A353A]/70 text-lg">
                    The current investment landscape is filled with complex jargon, overwhelming choices, and tools that require expertise most of us don't have time to acquire.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#4CB0A3]">
                    <BadgeCheck size={16} />
                    <span className="text-sm font-medium">Rachel, 24, Graphic Designer</span>
                  </div>
                </div>
              </div>
              <motion.div 
                className="h-1 w-0 bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79]"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1.5 }}
              />
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="p-8 md:p-10 flex gap-6 items-start">
                <div className="bg-gradient-to-br from-[#6FCFC3] to-[#4CB0A3] rounded-full p-3 text-white shrink-0 transform transition-transform group-hover:rotate-12">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#2A353A] group-hover:text-[#4CB0A3] transition-colors">
                    "I'm tired of being lectured about my money by people who don't understand my goals or my reality."
                  </h3>
                  <p className="text-[#2A353A]/70 text-lg">
                    Traditional financial advice doesn't account for the economic realities, values, and priorities of younger generations facing different challenges than our parents did.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#4CB0A3]">
                    <BadgeCheck size={16} />
                    <span className="text-sm font-medium">Alex, 26, Software Developer</span>
                  </div>
                </div>
              </div>
              <motion.div 
                className="h-1 w-0 bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79]"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.5 }}
              />
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="p-8 md:p-10 flex gap-6 items-start">
                <div className="bg-gradient-to-br from-[#6FCFC3] to-[#4CB0A3] rounded-full p-3 text-white shrink-0 transform transition-transform group-hover:rotate-12">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#2A353A] group-hover:text-[#4CB0A3] transition-colors">
                    "Every investing app feels like it was built by finance bros for finance bros. Where's the platform for the rest of us?"
                  </h3>
                  <p className="text-[#2A353A]/70 text-lg">
                    The investing world has been dominated by one perspective for too long. It's time for platforms that represent and understand diverse financial journeys.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#4CB0A3]">
                    <BadgeCheck size={16} />
                    <span className="text-sm font-medium">Jordan, 22, Marketing Assistant</span>
                  </div>
                </div>
              </div>
              <motion.div 
                className="h-1 w-0 bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79]"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1.5 }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center p-6 rounded-xl bg-[#2A6F79]/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <ThumbsUp className="text-[#4CB0A3]" />
              <h3 className="text-[#2A353A] text-xl font-semibold">Sound familiar?</h3>
            </div>
            <p className="text-lg text-[#2A353A]/90 max-w-2xl mx-auto">
              You're not alone. <span className="font-medium text-[#2A6F79]">94% of our research participants</span> expressed similar frustrations with the current investing landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
