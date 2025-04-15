import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-10 bg-[#F5F7FA] border-t border-[#E1E4E8]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-xl font-bold">
              <span className="text-[#4CB0A3]">swipe</span>
              <span className="text-[#2A6F79]">folio</span>
            </span>
          </div>
          
          <div className="flex gap-8 items-center">
            <a 
              href="mailto:hello@swipefolio.com" 
              className="text-[#2A353A] hover:text-[#4CB0A3] transition-colors"
            >
              hello@swipefolio.com
            </a>
            <a 
              href="/privacy" 
              className="text-[#2A353A] hover:text-[#4CB0A3] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
          
          <div className="text-sm text-[#2A353A] opacity-70">
            &copy; {new Date().getFullYear()} Swipefolio. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
