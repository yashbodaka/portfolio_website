import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { useRef, useEffect } from "react";

// Orb component with continuous flow and gentle cursor repulsion
function FloatingOrb({ initialX, initialY, size }: { initialX: number; initialY: number; size: number }) {
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);

  // Random parameters for organic movement "flow"
  // Each orb has a unique speed, amplitude, and phase offset
  const randomOffset = useRef(Math.random() * 10000);
  const speedX = useRef(0.1 + Math.random() * 0.2); // Horizontal speed: slower, more ambient
  const speedY = useRef(0.1 + Math.random() * 0.2); // Vertical speed
  const amplitude = useRef(20 + Math.random() * 30); // Reduced drift range

  // Local mouse tracking for this specific orb calculation
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    // Shared mouse handler could be an optimization, but individual listeners 
    // for small counts (25) are performant enough and keep components isolated.
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useAnimationFrame((t) => {
    // 1. Calculate Organic Flow Position (Lissajous-like smooth curves)
    // We use time (t) to drive sine/cosine waves
    const time = t * 0.001; // Convert to seconds
    
    const fluidX = Math.sin((time * speedX.current) + randomOffset.current) * amplitude.current;
    const fluidY = Math.cos((time * speedY.current) + randomOffset.current) * amplitude.current;
    
    // The base position where the orb "wants" to be
    const currentBaseX = initialX + fluidX;
    const currentBaseY = initialY + fluidY;

    // 2. Calculate Repulsion from Cursor
    const dx = currentBaseX - mouseRef.current.x;
    const dy = currentBaseY - mouseRef.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    let repelX = 0;
    let repelY = 0;
    
    const repulsionRadius = 200; // Slightly smaller reaction zone
    
    if (dist < repulsionRadius) {
      // Calculate normalized force (1 at center, 0 at edge)
      const force = (repulsionRadius - dist) / repulsionRadius;
      
      // Smooth easing for the force (cubic ease out)
      const easedForce = force * force; 
      
      const angle = Math.atan2(dy, dx);
      const repelStrength = 50 * easedForce; // Reduced repulsion strength (was 80)
      
      repelX = Math.cos(angle) * repelStrength;
      repelY = Math.sin(angle) * repelStrength;
    }

    // Apply combined position
    x.set(currentBaseX + repelX);
    y.set(currentBaseY + repelY);
  });

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: "rgba(255, 255, 255, 0.4)", // Slightly more visible
        filter: "blur(2px)",
        x,
        y,
      }}
    />
  );
}

export function About() {
  const paragraphs = RESUME_DATA.about.content.split("\n\n");

  return (
    <>
      {/* Wave SVG Divider - Top */}
      <div className="relative w-full overflow-hidden leading-[0] bg-[#0E0E0E]">
        <svg
          className="relative block w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
            fill="#F2F2F2"
            initial={{ d: "M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" }}
            animate={{ 
              d: [
                "M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z",
                "M0,20 C300,60 600,100 900,60 C1050,40 1150,20 1200,20 L1200,120 L0,120 Z",
                "M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <section id="about" className="relative py-32 bg-[#F2F2F2] overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => (
            <FloatingOrb 
              key={i} 
              initialX={Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)}
              initialY={Math.random() * 800}
              size={8 + Math.random() * 8}
            />
          ))}
        </div>

        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 pointer-events-none" 
             style={{ 
               background: "radial-gradient(circle at 30% 50%, rgba(67, 40, 24, 0.05), transparent 70%)" 
             }} 
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="mb-16 text-center"
            >
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-[#432818] mb-4 relative inline-block">
                About Me
                <motion.span
                  className="absolute inset-0 text-[#432818]/10"
                  initial={{ opacity: 0, x: 0 }}
                  whileHover={{ 
                    opacity: [0, 1, 0],
                    x: [0, 4, -4, 0]
                  }}
                  transition={{ duration: 0.3 }}
                >
                  About Me
                </motion.span>
              </h2>
              <div className="h-1 w-24 bg-[#D6B897] mx-auto rounded-full" />
            </motion.div>

            {/* Content Text Only */}
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto relative">
              
              {/* Text Content */}
              <div className="w-full space-y-10 text-center px-4">
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: false }}
                   className="space-y-3"
                >
                  <h3 className="text-4xl font-heading font-bold text-[#432818]">{RESUME_DATA.name}</h3>
                  <p className="text-xl text-[#432818]/80 font-medium tracking-wide uppercase">{RESUME_DATA.title}</p>
                </motion.div>

                <div className="space-y-8">
                  {paragraphs.map((paragraph, index) => {
                    return (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.2,
                          ease: "easeOut"
                        }}
                        className="text-xl md:text-2xl text-[#432818] leading-relaxed font-serif italic max-w-3xl mx-auto"
                      >
                        {paragraph}
                      </motion.p>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Wave SVG Divider - Bottom */}
      <div className="relative w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
            fill="#F2F2F2"
            initial={{ d: "M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" }}
            animate={{ 
              d: [
                "M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z",
                "M0,20 C300,60 600,100 900,60 C1050,40 1150,20 1200,20 L1200,120 L0,120 Z",
                "M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </>
  );
}
