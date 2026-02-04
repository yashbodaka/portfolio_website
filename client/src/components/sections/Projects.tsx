import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

export function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % RESUME_DATA.projects.length);
  };
  
  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + RESUME_DATA.projects.length) % RESUME_DATA.projects.length);
  };

  const currentProject = RESUME_DATA.projects[index];

  // Carousel animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 25 : -25,
      filter: "blur(10px)",
      zIndex: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -25 : 25,
      filter: "blur(10px)",
      zIndex: 0,
    }),
  };

  return (
    <section id="projects" className="py-32 bg-[#E6D5C3] relative overflow-hidden text-[#0E0E0E]">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#0E0E0E 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-24 bg-[#0E0E0E] mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-5xl mx-auto" style={{ perspective: "2000px" }}>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="w-full absolute"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="bg-[#F2F2F2] rounded-3xl p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#0E0E0E]/5 flex flex-col md:flex-row gap-12 items-center text-[#0E0E0E]">
                  <div className="flex-1 space-y-6">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {currentProject.tags.map((tag) => (
                          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-[#0E0E0E]/5 text-[#0E0E0E] rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl md:text-5xl font-heading font-bold mt-2 text-[#0E0E0E]">{currentProject.title}</h3>
                    </div>
                    <p className="text-lg text-[#0E0E0E]/70 leading-relaxed max-w-xl">
                      {currentProject.description}
                    </p>
                    <div className="flex gap-4 pt-4">
                      {/* @ts-ignore */}
                      {currentProject.type === 'paper' ? (
                        <Button 
                          asChild
                          className="rounded-full px-8 py-6 text-lg font-bold bg-[#0E0E0E] text-[#F2F2F2] hover:bg-[#0E0E0E]/80"
                        >
                          <a href={currentProject.link} target="_blank" rel="noopener noreferrer">
                            Read Paper <ExternalLink className="ml-2" size={20} />
                          </a>
                        </Button>
                      ) : (
                        <>
                          <Button asChild className="rounded-full px-8 py-6 text-lg font-bold bg-[#0E0E0E] text-[#F2F2F2] hover:bg-[#0E0E0E]/80">
                            <a href={currentProject.link} target="_blank" rel="noopener noreferrer">
                              View Code <Github className="ml-2" size={20} />
                            </a>
                          </Button>

                          {/* @ts-ignore */}
                          {currentProject.video ? (
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-bold border-[#0E0E0E]/10 text-[#0E0E0E] hover:bg-[#0E0E0E]/5">
                                  Live Demo <ExternalLink className="ml-2" size={20} />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[900px] p-0 bg-black border-[#0E0E0E]/20 overflow-hidden shadow-2xl">
                                <span className="sr-only"><DialogTitle>{currentProject.title} Demo</DialogTitle></span>
                                <div className="aspect-video w-full bg-black flex items-center justify-center">
                                  {/* @ts-ignore */}
                                  <video 
                                    controls 
                                    autoPlay 
                                    className="w-full h-full object-contain"
                                    src={currentProject.video}
                                  >
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                              </DialogContent>
                            </Dialog>
                          ) : null}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="hidden lg:block w-72 h-72 relative">
                    <div className="absolute inset-0 bg-[#0E0E0E]/5 rounded-full animate-pulse" />
                    <div className="absolute inset-10 bg-[#E6D5C3] rounded-full shadow-lg flex items-center justify-center border border-[#0E0E0E]/5">
                       <div className="text-center">
                          <span className="block text-4xl font-bold text-[#0E0E0E]">0{index + 1}</span>
                          <span className="text-[10px] uppercase tracking-tighter text-[#0E0E0E]/60">Project</span>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-6 mt-12">
            <motion.button 
              onClick={prev}
              className="p-4 rounded-full border border-[#0E0E0E]/10 hover:bg-[#0E0E0E] hover:text-[#F2F2F2] text-[#0E0E0E] transition-all shadow-sm bg-[#F2F2F2]/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <div className="flex items-center gap-2">
              {RESUME_DATA.projects.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className="relative cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <motion.div
                    className="h-2 rounded-full bg-[#0E0E0E]/10"
                    animate={{
                      width: i === index ? 32 : 8,
                      backgroundColor: i === index ? '#0E0E0E' : 'rgba(14, 14, 14, 0.1)',
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  {i === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-full border-2 border-[#0E0E0E]/30"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <motion.button 
              onClick={next}
              className="p-4 rounded-full border border-[#0E0E0E]/10 hover:bg-[#0E0E0E] hover:text-[#F2F2F2] text-[#0E0E0E] transition-all shadow-sm bg-[#F2F2F2]/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}