import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistFormSchema } from "@/lib/schema";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { type z } from "zod";
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Mail, 
  TrendingUp, 
  Timer, 
  Sparkles, 
  Zap 
} from "lucide-react";

type FormValues = z.infer<typeof waitlistFormSchema>;

export default function WaitlistSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const form = useForm<FormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/waitlist", data);
      toast({
        title: "You're in!",
        description: "Welcome to the movement! Get ready for something different.",
        variant: "default",
      });
      setIsSuccessful(true);
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      id="waitlist" 
      ref={sectionRef}
      className="py-28 md:py-40 dark-section relative overflow-hidden"
    >
      {/* Background pattern & effects */}
      <div className="absolute inset-0 z-0 section-pattern opacity-20"></div>
      
      {/* Animated diagonal lines */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-10" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.line
            key={i}
            x1={0}
            y1={100 + i * 150}
            x2={1920}
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
        className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[#6FCFC3]/10 blur-[150px] pulsing-element"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-[#2A6F79]/10 blur-[120px] pulsing-element"
        style={{ y: y2 }}
      />
      
      {/* Moving light streak */}
      <motion.div
        className="absolute top-0 left-0 w-full h-20 bg-white opacity-5"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "linear"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#6FCFC3]/20 text-[#6FCFC3] text-sm font-medium border border-[#6FCFC3]/30">
                <Sparkles size={14} />
                JOIN THE MOVEMENT
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Be the first to experience <span className="gradient-text-shine">Swipefolio</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl mb-0 text-white/80 font-light max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Join our waitlist for early access and help shape the future of investing for our generation.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="relative z-10 glass-effect-dark border border-white/10 p-8 md:p-10 rounded-2xl shadow-xl overflow-hidden hover-lift"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y: y2 }}
          >
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#6FCFC3]/20 blur-[60px]"></div>
            
            <div className="relative z-10">
              {isSuccessful ? (
                <motion.div 
                  className="text-center py-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79] text-white shadow-lg">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">You're on the list!</h3>
                  <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
                    We'll be in touch soon with updates and early access information. Get ready for something different.
                  </p>
                  <Button
                    onClick={() => setIsSuccessful(false)}
                    className="relative px-8 py-3 bg-[#36444C] hover:bg-[#2D3A42] text-white rounded-lg text-md font-medium border border-white/10 overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      Add another email
                      <Zap className="ml-2 h-4 w-4 text-[#6FCFC3]" />
                    </span>
                    
                    {/* Background animation effect */}
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-[#2A6F79]/50 to-[#4CB0A3]/50 -z-10"
                      initial={{ x: "-100%", opacity: 0 }}
                      whileHover={{ 
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.4 }
                      }}
                    />
                  </Button>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-6">
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-3 text-white">Get early access</h3>
                        <p className="text-white/70 text-lg">
                          Be among the first to try Swipefolio when we launch.
                        </p>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#6FCFC3]/70" />
                                <Input
                                  placeholder="Your email address"
                                  className="pl-12 pr-12 py-6 rounded-xl text-white bg-[#36444C] border-[#36444C] focus-visible:ring-[#6FCFC3] focus-visible:border-[#6FCFC3] h-auto placeholder:text-white/50 text-lg"
                                  {...field}
                                />
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6FCFC3]/60">
                                  <ArrowRight size={20} />
                                </div>
                              </div>
                            </FormControl>
                            <FormMessage className="text-[#FF6B6B] mt-2 ml-1" />
                          </FormItem>
                        )}
                      />
                      
                      <motion.button 
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full py-5 bg-gradient-to-r from-[#4CB0A3] to-[#2A6F79] text-white rounded-lg text-lg font-medium shadow-xl overflow-hidden group"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 15px 30px -5px rgba(42, 111, 121, 0.5)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <span className="h-5 w-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2" />
                            Processing...
                          </span>
                        ) : (
                          <span className="relative z-10 flex items-center justify-center">
                            Join the Movement
                            <motion.span
                              className="ml-2" 
                              initial={{ x: 0 }}
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ArrowRight size={18} />
                            </motion.span>
                          </span>
                        )}
                        
                        {/* Background animation effect */}
                        <motion.span 
                          className="absolute inset-0 bg-gradient-to-r from-[#2A6F79] to-[#4CB0A3] -z-10"
                          initial={{ x: "100%", opacity: 0 }}
                          whileHover={{ 
                            x: 0,
                            opacity: 1,
                            transition: { duration: 0.4 }
                          }}
                        />
                        
                        {/* Glowing effect */}
                        <motion.span 
                          className="absolute inset-0 -z-20"
                          animate={{ 
                            boxShadow: ["0 0 0px rgba(111, 207, 195, 0)", "0 0 25px rgba(111, 207, 195, 0.5)", "0 0 5px rgba(111, 207, 195, 0)"]
                          }}
                          transition={{ 
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.button>
                      
                      <div className="flex items-center justify-center text-sm text-white/60 gap-2">
                        <Shield size={14} className="text-[#6FCFC3]" />
                        <span>No spam. No pressure. Your data is protected.</span>
                      </div>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            variants={staggerContainer}
          >
            {[
              { value: "1000+", label: "Early Adopters", icon: TrendingUp },
              { value: "Q3 2025", label: "Planned Launch", icon: Timer },
              { value: "100%", label: "User-Focused", icon: Zap }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="glass-effect-dark border border-white/10 p-6 rounded-xl text-center hover-lift group"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6FCFC3]/50 to-[#2A6F79]/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1 text-white group-hover:text-[#6FCFC3] transition-colors">{stat.value}</div>
                <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
