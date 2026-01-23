import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {RESUME_DATA.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass border-white/5 hover:border-primary/30 transition-colors duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <CardTitle className="text-xl md:text-2xl text-white font-heading">
                      {job.role}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit text-primary border-primary/20 bg-primary/5">
                      {job.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-lg text-white/80 font-medium">
                    {job.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}