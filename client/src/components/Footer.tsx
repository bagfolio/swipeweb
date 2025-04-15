import { motion } from "framer-motion";
import { ChevronUp, Mail, Shield, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#E1E4E8] bg-gradient-to-b from-[#F5F7FA] to-white">
      {/* Back to top button */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.button
          onClick={scrollToTop}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#4CB0A3] to-[#2A6F79] text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(76, 176, 163, 0.3)" }}
          whileTap={{ y: 0 }}
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </motion.button>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-1/3 h-32 w-32 rounded-full bg-[#6FCFC3]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-[#2A6F79]/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {/* Logo and social section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <motion.span 
                className="text-2xl font-bold relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#4CB0A3]">swipe</span>
                <span className="text-[#2A6F79]">folio</span>
                <motion.span 
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79]/50"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </motion.span>
            </div>
            
            <p className="mb-6 text-[#2A353A]/80">
              The future of investing built for your generation. No nonsense, just clarity and control.
            </p>
            
            <div className="flex space-x-4">
              <motion.a 
                href="https://instagram.com" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F7FA] text-[#2A6F79] shadow-sm transition-all duration-300 hover-lift"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, backgroundColor: "#4CB0A3", color: "white" }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </motion.a>
              
              <motion.a 
                href="https://twitter.com" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F7FA] text-[#2A6F79] shadow-sm transition-all duration-300 hover-lift"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, backgroundColor: "#4CB0A3", color: "white" }}
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F7FA] text-[#2A6F79] shadow-sm transition-all duration-300 hover-lift"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, backgroundColor: "#4CB0A3", color: "white" }}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
              
              <motion.a 
                href="mailto:hello@swipefolio.com" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F7FA] text-[#2A6F79] shadow-sm transition-all duration-300 hover-lift"
                whileHover={{ y: -3, backgroundColor: "#4CB0A3", color: "white" }}
                aria-label="Email"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-4 text-lg font-semibold text-[#2A353A]">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">Features</a></li>
              <li><a href="#" className="text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">Pricing</a></li>
              <li><a href="#" className="text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">Waitlist</a></li>
            </ul>
          </motion.div>
          
          {/* Company links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 text-lg font-semibold text-[#2A353A]">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">About</a></li>
              <li><a href="#" className="text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          
          {/* Legal links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-4 text-lg font-semibold text-[#2A353A]">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">Terms</a></li>
              <li><a href="/privacy" className="text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">Privacy</a></li>
              <li><a href="#" className="text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">Cookies</a></li>
              <li><a href="#" className="text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">Licenses</a></li>
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom section */}
        <motion.div
          className="flex flex-col items-center justify-between border-t border-[#E1E4E8]/70 pt-6 md:flex-row"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="mb-4 flex items-center space-x-2 text-sm text-[#2A353A]/60 md:mb-0">
            <Shield size={14} />
            <span>&copy; {new Date().getFullYear()} Swipefolio. All rights reserved.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-sm text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">
              Accessibility
            </a>
            <a href="mailto:hello@swipefolio.com" className="text-sm text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">
              hello@swipefolio.com
            </a>
            <a href="#" className="text-sm text-[#2A353A]/70 hover:text-[#4CB0A3] transition-colors">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-[#4CB0A3]"></span>
                Status: Operational
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
