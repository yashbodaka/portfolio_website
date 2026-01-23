import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { RESUME_DATA } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5 bg-background">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}