import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Info, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Experience() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % RESUME_DATA.experience.length);
  const prev = () => setIndex((prev) => (prev - 1 + RESUME_DATA.experience.length) % RESUME_DATA.experience.length);

  const currentJob = RESUME_DATA.experience[index];

  return (
    <section id="experience" className="py-32 bg-[#f8f9fa] relative overflow-hidden text-black">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">The Journey</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100, rotateY: 45 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -45 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="w-full"
              >
                <div className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1 space-y-6">
                    <div>
                      <span className="text-primary font-bold text-sm uppercase tracking-widest">{currentJob.period}</span>
                      <h3 className="text-3xl md:text-5xl font-heading font-bold mt-2">{currentJob.role}</h3>
                      <p className="text-xl text-black/60 font-medium mt-1">{currentJob.company}</p>
                    </div>
                    <p className="text-lg text-black/70 leading-relaxed max-w-xl">
                      {currentJob.description}
                    </p>
                    <div className="flex gap-4 pt-4">
                      <Button className="rounded-full px-8 py-6 text-lg font-bold">
                        Learn More <Info className="ml-2" size={20} />
                      </Button>
                      <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-bold border-black/10">
                        Demo <ExternalLink className="ml-2" size={20} />
                      </Button>
                    </div>
                  </div>

                  <div className="hidden lg:block w-72 h-72 relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                    <div className="absolute inset-4 bg-primary/20 rounded-full animate-ping" />
                    <div className="absolute inset-10 bg-white rounded-full shadow-inner flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary">0{index + 1}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-6 mt-12">
            <button 
              onClick={prev}
              className="p-4 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {RESUME_DATA.experience.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 transition-all duration-300 rounded-full ${i === index ? 'w-8 bg-primary' : 'w-2 bg-black/10'}`} 
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-4 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}