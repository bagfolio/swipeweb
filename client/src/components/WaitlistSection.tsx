import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistFormSchema } from "@/lib/schema";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { type z } from "zod";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";

type FormValues = z.infer<typeof waitlistFormSchema>;

export default function WaitlistSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

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

  return (
    <section 
      id="waitlist" 
      className="py-24 md:py-32 text-white relative overflow-hidden"
    >
      {/* Beautiful gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(125deg, #6FCFC3 0%, #4CB0A3 50%, #2A6F79 100%)"
        }}
      />
      
      {/* Decorative elements */}
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
      
      <motion.div 
        className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-white opacity-5 blur-3xl"
        initial={{ scale: 0.8, opacity: 0.03 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ 
          repeat: Infinity, 
          duration: 4,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-white/80 font-medium mb-3 border-b-2 border-white/30 px-3 py-1"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              JOIN THE MOVEMENT
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Be the first to experience Swipefolio
            </h2>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 opacity-90 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join our waitlist for early access and help shape the future of investing for our generation.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="relative z-10 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {isSuccessful ? (
              <motion.div 
                className="text-center py-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-[#2A6F79]">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-3">You're on the list!</h3>
                <p className="text-white/90 mb-6">
                  We'll be in touch soon with updates and early access information.
                </p>
                <Button
                  onClick={() => setIsSuccessful(false)}
                  className="bg-white hover:bg-[#F5F7FA] text-[#2A6F79] rounded-full py-2 px-6"
                >
                  Add another email
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="flex flex-col space-y-6">
                    <div className="text-left">
                      <h3 className="text-xl font-semibold mb-2">Get early access</h3>
                      <p className="text-white/80 text-sm">
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
                              <Input
                                placeholder="Your email address"
                                className="pl-5 pr-12 py-6 rounded-xl text-white bg-white/10 border-white/20 focus:ring-2 focus:ring-white/50 focus:border-transparent h-auto placeholder:text-white/60"
                                {...field}
                              />
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40">
                                <ArrowRight size={20} />
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage className="text-left mt-2 text-white/90" />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 bg-white hover:bg-[#F5F7FA] text-[#2A6F79] rounded-xl font-medium transition-all duration-300 hover:shadow-lg h-auto text-lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#2A6F79]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Join the Movement"
                      )}
                    </Button>
                    
                    <div className="flex items-center justify-center text-sm text-white/70 mt-4 gap-2">
                      <Shield size={14} />
                      <span>No spam. No pressure. Your data is protected.</span>
                    </div>
                  </div>
                </form>
              </Form>
            )}
          </motion.div>
          
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl text-center">
              <div className="text-3xl font-bold mb-1">1000+</div>
              <div className="text-sm text-white/80">Early Adopters</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl text-center">
              <div className="text-3xl font-bold mb-1">Q3 2025</div>
              <div className="text-sm text-white/80">Planned Launch</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl text-center">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-white/80">User-Focused</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
