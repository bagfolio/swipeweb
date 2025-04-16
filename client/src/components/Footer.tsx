import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  ChevronUp,
  ExternalLink,
  Shield
} from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });
  
  // Simple parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -15]);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  // Footer links
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Roadmap", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Waitlist", href: "#waitlist" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Security", href: "#" },
      ],
    },
  ];
  
  // Social links
  const socialLinks = [
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:hello@swipefolio.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer 
      id="footer"
      ref={footerRef}
      className="relative overflow-hidden bg-[#0F1214] text-white"
    >
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}></div>
      </div>
      
      {/* Simple line separators */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4CB0A3]/30 to-transparent"></div>
      
      {/* Back to top button */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.button
          onClick={scrollToTop}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4CB0A3] text-white shadow-md transition-all duration-200 hover:shadow-lg"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </motion.button>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-20 pb-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Brand and social */}
          <div className="lg:col-span-2">
            <motion.span 
              className="text-3xl font-bold relative inline-block font-poppins"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[#4CB0A3]">swipe</span>
              <span className="text-white">folio</span>
              <motion.span 
                className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#4CB0A3]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </motion.span>
            
            <p className="text-white/70 text-lg pr-4 leading-relaxed mt-4 mb-6">
              The future of investing built for your generation. No nonsense, just clarity and control.
            </p>
            
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href} 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D272E] text-[#4CB0A3] shadow-sm border border-white/5"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -4,
                    backgroundColor: "#4CB0A3",
                    color: "white"
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            
            <div className="bg-[#151A1D] rounded-lg border border-white/10 p-5 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#4CB0A3]/20">
                  <ExternalLink size={18} className="text-[#4CB0A3]" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Join our team</h4>
                  <div className="text-sm text-white/60">We're hiring passionate individuals</div>
                </div>
              </div>
              <div className="mt-3 flex items-center">
                <a 
                  href="#" 
                  className="text-[#4CB0A3] text-sm font-medium flex items-center"
                >
                  View open positions
                  <motion.span 
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className="inline-block ml-1"
                  >
                    <ExternalLink size={14} />
                  </motion.span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h3 className="mb-6 text-lg font-semibold text-white">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href} 
                          className="text-white/70 hover:text-[#4CB0A3] transition-colors duration-200 inline-block relative group"
                        >
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#4CB0A3] transition-all duration-200 group-hover:w-full"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-6 flex items-center space-x-2 text-white/50 md:mb-0">
            <Shield size={14} className="text-[#4CB0A3]/70" />
            <span>&copy; {new Date().getFullYear()} Swipefolio. All rights reserved.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-sm text-white/50 hover:text-[#4CB0A3] transition-colors duration-200">
              Accessibility
            </a>
            <a href="mailto:hello@swipefolio.com" className="text-sm text-white/50 hover:text-[#4CB0A3] transition-colors duration-200">
              hello@swipefolio.com
            </a>
            <span className="flex items-center gap-1.5 text-sm text-white/50">
              <span className="h-2 w-2 rounded-full bg-[#4CB0A3] animate-pulse"></span>
              Status: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
