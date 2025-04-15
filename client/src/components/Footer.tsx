import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ChevronUp, 
  Mail, 
  Shield, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ExternalLink,
  ArrowUpRight 
} from "lucide-react";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  // Footer links data
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#vision-tease" },
        { name: "Roadmap", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Waitlist", href: "#waitlist" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "mailto:hello@swipefolio.com" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms", href: "#" },
        { name: "Privacy", href: "/privacy" },
        { name: "Cookies", href: "#" },
        { name: "Licenses", href: "#" }
      ]
    }
  ];
  
  // Social links data
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@swipefolio.com", label: "Email" }
  ];

  return (
    <footer 
      id="footer"
      ref={footerRef}
      className="relative overflow-hidden bg-[#111A1E] text-white"
    >
      {/* Background pattern & decorative elements */}
      <div className="absolute inset-0 opacity-10 z-0 section-pattern"></div>
      
      {/* Animated diagonal lines */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-5" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.line
            key={i}
            x1={0}
            y1={100 + i * 180}
            x2={1920}
            y2={-300 + i * 180}
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
        className="absolute top-0 left-0 w-[35rem] h-[35rem] rounded-full bg-[#6FCFC3]/5 blur-[120px] pulsing-element"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-[#2A6F79]/5 blur-[100px] pulsing-element"
        style={{ y: y2 }}
      />
      
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6FCFC3]/30 to-transparent"></div>
      
      {/* Back to top button */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.button
          onClick={scrollToTop}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#4CB0A3] to-[#2A6F79] text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          whileHover={{ 
            y: -5, 
            boxShadow: "0 15px 30px -5px rgba(76, 176, 163, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </motion.button>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5"
          style={{ opacity }}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo and social section */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <motion.span 
                className="text-3xl font-bold relative inline-block"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-[#6FCFC3]">swipe</span>
                <span className="text-white">folio</span>
                <motion.span 
                  className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-[#6FCFC3] to-[#2A6F79]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </motion.span>
            </div>
            
            <p className="text-white/70 text-lg pr-4 leading-relaxed">
              The future of investing built for your generation. No nonsense, just clarity and control.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1D272E] text-[#6FCFC3] shadow-md group border border-white/5"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -5, 
                    backgroundColor: "#2A6F79",
                    color: "white",
                    transition: { duration: 0.3 }
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>
            
            <div className="glass-effect-dark rounded-lg border border-white/10 p-5 mt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#6FCFC3]/20">
                  <ExternalLink size={18} className="text-[#6FCFC3]" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Join our team</h4>
                  <div className="text-sm text-white/60">We're hiring passionate individuals</div>
                </div>
              </div>
              <div className="mt-3 flex items-center group">
                <a 
                  href="#" 
                  className="text-[#6FCFC3] text-sm font-medium flex items-center"
                >
                  View open positions
                  <motion.span 
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </motion.span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Footer menus */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (sectionIndex + 1) }}
            >
              <h3 className="mb-6 text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-white/60 hover:text-[#6FCFC3] transition-colors duration-300 inline-block relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#6FCFC3] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom section */}
        <motion.div
          className="flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="mb-6 flex items-center space-x-2 text-sm text-white/40 md:mb-0">
            <Shield size={14} className="text-[#6FCFC3]/60" />
            <span>&copy; {new Date().getFullYear()} Swipefolio. All rights reserved.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-sm text-white/40 hover:text-[#6FCFC3] transition-colors">
              Accessibility
            </a>
            <a href="mailto:hello@swipefolio.com" className="text-sm text-white/40 hover:text-[#6FCFC3] transition-colors">
              hello@swipefolio.com
            </a>
            <span className="flex items-center gap-1.5 text-sm text-white/40">
              <span className="h-2 w-2 rounded-full bg-[#6FCFC3] animate-pulse"></span>
              Status: Operational
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
