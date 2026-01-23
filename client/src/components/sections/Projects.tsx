import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESUME_DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full glass border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl text-white font-heading group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="gap-4 pt-4 border-t border-white/5">
                  <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors">
                    <ExternalLink size={16} /> Demo
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}