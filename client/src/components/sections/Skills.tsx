import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#0E0E0E] relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div className="h-full w-full bg-[size:20px_20px] bg-[linear-gradient(to_right,#717171_1px,transparent_1px),linear-gradient(to_bottom,#717171_1px,transparent_1px)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#F2F2F2] mb-6">Expertise Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A collection of tools and technologies I've mastered to build scalable AI systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {Object.entries(RESUME_DATA.skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl font-bold text-[#F2F2F2]/5 font-heading absolute -top-10 -left-4 select-none">0{index + 1}</span>
                <h3 className="text-2xl font-heading font-bold text-[#F2F2F2] capitalize relative z-10 pl-2 border-l-2 border-primary">
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {items.map((skill, sIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: (index * 0.1) + (sIdx * 0.05) }}
                    className="group relative"
                  >
                    <div className="px-5 py-2.5 bg-[#F2F2F2]/[0.03] border border-[#F2F2F2]/10 rounded-full text-muted-foreground hover:text-[#F2F2F2] hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      {skill}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}