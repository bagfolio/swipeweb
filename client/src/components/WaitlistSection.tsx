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

type FormValues = z.infer<typeof waitlistFormSchema>;

export default function WaitlistSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        title: "Success!",
        description: "You're on the list! Get ready for something different.",
        variant: "default",
      });
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
      className="py-20 md:py-32 text-white relative"
      style={{
        background: "linear-gradient(135deg, #6FCFC3 0%, #4CB0A3 50%, #2A6F79 100%)"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Be the first to experience Swipefolio
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-10 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our waitlist for early access and help shape the future of investing for our generation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mb-6">
                <div className="flex flex-col md:flex-row gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            placeholder="Your email address"
                            className="px-5 py-7 rounded-full text-[#2A353A] focus:ring-2 focus:ring-white h-auto"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-left mt-2 text-white/90" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-7 bg-white hover:bg-[#F5F7FA] text-[#2A6F79] rounded-full font-medium transition-all duration-300 h-auto"
                  >
                    {isSubmitting ? "Joining..." : "Join the Movement"}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
          
          <motion.p 
            className="text-sm opacity-70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            No spam. No pressure. Just updates on our launch and occasional insights.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
