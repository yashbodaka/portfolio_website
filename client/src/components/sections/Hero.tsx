import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const commands = [
  "print('Hello, I am Yash')",
  "print('AI Engineer')",
  "print('Backend Specialist')",
  "print('Building Intelligent Workflows')",
  "ls -a ./expertise",
  "> [LLM, RAG, MLOps, SQL]",
];

export function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fullText = commands[currentLine];
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        if (text.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setCurrentLine((prev) => (prev + 1) % commands.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentLine]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] font-mono">
      {/* Terminal Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-0 left-0 w-full h-full p-10 flex flex-col gap-2 text-primary/40 text-xs sm:text-sm">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {`0x${(i * 1024).toString(16)} >> init_process --service-id ai-backend-worker-${i} --status active`}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Terminal Window Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-2 text-[10px] text-muted-foreground uppercase tracking-widest">bash — 80x24</span>
            </div>
            <div className="p-6 md:p-10 min-h-[300px] flex flex-col justify-center">
              <div className="text-primary mb-4 text-sm opacity-70">yash@portfolio:~$ python3 main.py</div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                {text}
                <span className="animate-pulse ml-1 text-primary">_</span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#experience"
                  className="px-6 py-3 bg-primary text-black font-bold rounded hover:bg-primary/90 transition-all flex items-center gap-2"
                >
                  <span className="text-xs">$</span> ./explore_work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-white/10 text-white hover:bg-white/5 transition-all rounded"
                >
                  Contact.init()
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-muted-foreground/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to access UI</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
}