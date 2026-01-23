import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Professional Journey</h2>
          <div className="h-1 w-24 bg-primary rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {RESUME_DATA.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 hidden md:block border-4 border-background" />

                <div className="w-full md:w-1/2 p-4 md:p-12">
                  <div className={`text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-primary font-mono text-sm tracking-tighter mb-2 block">{job.period}</span>
                    <h3 className="text-2xl md:text-4xl font-heading font-bold text-white mb-2">{job.role}</h3>
                    <p className="text-xl text-muted-foreground mb-6">{job.company}</p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 p-4 md:p-12">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-primary/50 transition-all group">
                     <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-colors">
                        {job.description}
                     </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}