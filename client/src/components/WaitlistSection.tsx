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
  Zap 
} from "lucide-react";
import chartPath from "../assets/chart.png";

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
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const form = useForm<FormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: ""
    } as FormValues,
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/waitlist", data);
      toast({
        title: "You're in!",
        description: "Thanks for joining our waitlist. We'll be in touch soon.",
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

  return (
    <section 
      id="waitlist" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#0D1214] relative overflow-hidden"
    >
      {/* Chart background image with overlay */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${chartPath})`,
            filter: "contrast(120%) brightness(50%)",
            transform: "rotate(-3deg) scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1214] via-transparent to-[#0D1214]/90"></div>
      </div>
      
      {/* Light pulse effect */}
      <motion.div
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-[#6FCFC3]/5 blur-[100px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header - minimal */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ opacity }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Join the <span className="text-[#6FCFC3]">Waitlist</span>
            </motion.h2>
            
            <motion.div 
              className="h-1 w-20 bg-[#6FCFC3]/30 mx-auto mb-10"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
            />
          </motion.div>
          
          <motion.div
            className="relative z-10 glass-effect-dark border border-white/10 p-10 md:p-14 rounded-2xl shadow-xl backdrop-blur-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y: y1 }}
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#4CB0A3]/10 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#2A6F79]/10 blur-[80px]"></div>
            
            <div className="relative z-10">
              {isSuccessful ? (
                <motion.div 
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79] text-white shadow-lg">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-4xl font-bold mb-6 text-white">You're on the list!</h3>
                  <p className="text-white/80 text-xl mb-12 max-w-lg mx-auto">
                    We'll be in touch soon with updates and early access information.
                  </p>
                  <Button
                    onClick={() => setIsSuccessful(false)}
                    className="px-8 py-6 bg-[#36444C] hover:bg-[#2D3A42] text-white rounded-lg text-lg font-medium border border-white/10"
                  >
                    <span className="flex items-center">
                      Add another email
                      <Zap className="ml-2 h-5 w-5 text-[#6FCFC3]" />
                    </span>
                  </Button>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-8">
                      {/* Name fields row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="First Name"
                                  className="py-6 rounded-xl text-white bg-[#212C32] border-[#36444C]/50 focus-visible:ring-[#6FCFC3] focus-visible:border-[#6FCFC3] h-auto placeholder:text-white/50 text-lg"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-[#FF6B6B] mt-1 ml-1" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Last Name"
                                  className="py-6 rounded-xl text-white bg-[#212C32] border-[#36444C]/50 focus-visible:ring-[#6FCFC3] focus-visible:border-[#6FCFC3] h-auto placeholder:text-white/50 text-lg"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-[#FF6B6B] mt-1 ml-1" />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      {/* Email field */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#6FCFC3]" />
                                <Input
                                  placeholder="Your email address"
                                  className="pl-12 py-6 rounded-xl text-white bg-[#212C32] border-[#36444C]/50 focus-visible:ring-[#6FCFC3] focus-visible:border-[#6FCFC3] h-auto placeholder:text-white/50 text-lg"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage className="text-[#FF6B6B] mt-2 ml-1" />
                          </FormItem>
                        )}
                      />
                      
                      {/* Submit button - clean and minimal */}
                      <motion.button 
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full py-6 bg-gradient-to-r from-[#4CB0A3] to-[#2A6F79] text-white rounded-xl text-lg font-medium shadow-xl overflow-hidden mt-4"
                        whileHover={{ 
                          scale: 1.01,
                          boxShadow: "0 15px 30px -5px rgba(42, 111, 121, 0.5)"
                        }}
                        whileTap={{ scale: 0.99 }}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <span className="h-5 w-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2" />
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            Join Waitlist
                            <ArrowRight size={18} className="ml-2" />
                          </span>
                        )}
                        
                        {/* Subtle glow effect */}
                        <motion.span 
                          className="absolute inset-0"
                          animate={{ 
                            boxShadow: ["0 0 0px rgba(111, 207, 195, 0)", "0 0 20px rgba(111, 207, 195, 0.3)", "0 0 0px rgba(111, 207, 195, 0)"]
                          }}
                          transition={{ 
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.button>
                      
                      {/* Privacy note - small and unobtrusive */}
                      <div className="flex items-center justify-center text-sm text-white/60 gap-2 pt-2">
                        <Shield size={14} className="text-[#6FCFC3]" />
                        <span>No spam. Your information is secure and never shared.</span>
                      </div>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>
          
          {/* Minimal counter at bottom */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1,275+</div>
            <div className="text-[#6FCFC3]">PEOPLE ALREADY JOINED</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
