import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-background/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F2F2F2] mb-4">
            Education
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass border-[#F2F2F2]/5 h-full flex flex-col justify-center">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-[#F2F2F2] font-heading">
                      {edu.school}
                    </CardTitle>
                    <CardDescription className="text-lg text-primary mt-1">
                      {edu.degree}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pl-[5.5rem]">
                  <p className="text-muted-foreground mb-1">{edu.year}</p>
                  <p className="text-sm text-muted-foreground/80">{edu.location}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}