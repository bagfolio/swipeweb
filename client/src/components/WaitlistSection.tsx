import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Shield,
  CheckCircle
} from "lucide-react";

// Import chart image
import chartPath from "../assets/chart-pattern.svg";

export default function WaitlistSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  // Simple parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Form validation
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
    };
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log(formData);
        setIsSubmitting(false);
        setIsSuccessful(true);
      }, 1500);
    }
  };

  // Reset form
  const resetForm = () => {
    setIsSuccessful(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <section 
      id="waitlist" 
      ref={sectionRef}
      className="py-28 md:py-36 lg:py-40 relative overflow-hidden bg-[#0F1214]"
    >
      {/* Clean background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight font-poppins"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join the <span className="text-[#4CB0A3]">Waitlist</span>
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-[#4CB0A3]/30 mx-auto mb-10 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        {/* Waitlist form container */}
        <motion.div
          className="relative z-10 bg-[#151A1D] p-10 md:p-14 rounded-xl shadow-lg max-w-2xl mx-auto overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ y: y1 }}
        >
          {isSuccessful ? (
            // Success state
            <div className="text-center py-8">
              <motion.div 
                className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#4CB0A3] text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <CheckCircle size={48} />
              </motion.div>
              
              <motion.h3 
                className="text-4xl font-bold mb-6 text-white font-poppins"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                You're on the list!
              </motion.h3>
              
              <motion.p 
                className="text-white/80 text-xl mb-10 max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                We'll be in touch soon with updates and early access information.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={resetForm}
                  className="px-8 py-3 bg-[#2A353A] hover:bg-[#36444C] text-white rounded-lg text-lg font-medium transition-colors duration-200"
                >
                  Add another email
                </button>
              </motion.div>
            </div>
          ) : (
            // Form state
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name fields row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full py-6 rounded-lg text-white bg-[#1A2227] border border-[#2A353A] focus:ring-2 focus:ring-[#4CB0A3] focus:border-[#4CB0A3] h-auto placeholder:text-white/50 text-lg px-4 outline-none transition-all duration-200"
                  />
                  {errors.firstName && <p className="text-[#FF6B6B] mt-1 ml-1 text-sm">{errors.firstName}</p>}
                </div>
                
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full py-6 rounded-lg text-white bg-[#1A2227] border border-[#2A353A] focus:ring-2 focus:ring-[#4CB0A3] focus:border-[#4CB0A3] h-auto placeholder:text-white/50 text-lg px-4 outline-none transition-all duration-200"
                  />
                  {errors.lastName && <p className="text-[#FF6B6B] mt-1 ml-1 text-sm">{errors.lastName}</p>}
                </div>
              </div>
              
              {/* Email field */}
              <div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#4CB0A3]" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 py-6 rounded-lg text-white bg-[#1A2227] border border-[#2A353A] focus:ring-2 focus:ring-[#4CB0A3] focus:border-[#4CB0A3] h-auto placeholder:text-white/50 text-lg px-4 outline-none transition-all duration-200"
                  />
                </div>
                {errors.email && <p className="text-[#FF6B6B] mt-1 ml-1 text-sm">{errors.email}</p>}
              </div>
              
              {/* Submit button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-[#4CB0A3] hover:bg-[#3D9C90] text-white rounded-lg text-lg font-medium mt-4 transition-colors duration-200 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                )}
              </button>
              
              {/* Privacy note */}
              <div className="flex items-center justify-center text-sm text-white/60 gap-2 pt-2 mt-2">
                <Shield size={14} className="text-[#4CB0A3]" />
                <span>No spam. Your information is secure and never shared.</span>
              </div>
            </form>
          )}
        </motion.div>
        
        {/* Counter */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-poppins">1,275+</div>
          <div className="text-[#4CB0A3] font-medium tracking-wider">PEOPLE ALREADY JOINED</div>
        </motion.div>
      </div>
    </section>
  );
}
