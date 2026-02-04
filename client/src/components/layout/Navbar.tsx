import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md border-b border-white/10" : ""
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-2xl font-heading font-bold tracking-tighter text-white hover:text-primary transition-colors cursor-pointer"
        >
          Yash<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}
          <motion.a
            href={RESUME_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-colors border border-white/5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-lg font-medium text-muted-foreground hover:text-primary"
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href={RESUME_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-primary"
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </motion.div>
      )}
    </motion.nav>
  );
}