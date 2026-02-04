import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "831764ea-edb2-4ae6-b78e-287c7ecf32e0",
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#1A1613] relative border-t border-[#432818]/20"> 
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#E6D5C3] mb-6">
              Let's Connect
            </h2>
            <p className="text-[#E6D5C3]/80 text-lg mb-8 leading-relaxed text-justify">
              I'm always interested in hearing about new projects and opportunities in AI and Backend Engineering.
              Whether you have a question or just want to say hi, feel free to drop a message!
            </p>

            <div className="flex flex-col gap-6">
              <a
                href={`mailto:${RESUME_DATA.email}`}
                className="flex items-center gap-4 text-[#E6D5C3] hover:text-[#FFFFFF] transition-colors p-4 bg-[#432818]/20 rounded-lg border border-[#E6D5C3]/10 hover:border-[#E6D5C3]/30 hover:bg-[#432818]/40 shadow-sm group"
              >
                <div className="p-3 bg-[#E6D5C3]/10 rounded-full text-[#E6D5C3] group-hover:bg-[#E6D5C3] group-hover:text-[#432818] transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#E6D5C3]/60 group-hover:text-[#E6D5C3]/80">Email</p>
                  <p className="text-lg font-medium">{RESUME_DATA.email}</p>
                </div>
              </a>
              
              <div className="flex gap-4 mt-4">
                {RESUME_DATA.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#432818]/20 rounded-full text-[#E6D5C3] hover:bg-[#E6D5C3] hover:text-[#432818] transition-all border border-[#E6D5C3]/10 hover:border-[#E6D5C3] shadow-sm"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="bg-[#1F1B18] p-8 rounded-2xl border border-[#E6D5C3]/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#E6D5C3] font-medium ml-1">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-[#2A2420] border-[#E6D5C3]/10 text-[#E6D5C3] focus:border-[#E6D5C3]/40 focus:bg-[#2F2925] focus:ring-0 placeholder:text-[#E6D5C3]/20 shadow-inner transition-all duration-300 h-12" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#E6D5C3] font-medium ml-1">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-[#2A2420] border-[#E6D5C3]/10 text-[#E6D5C3] focus:border-[#E6D5C3]/40 focus:bg-[#2F2925] focus:ring-0 placeholder:text-[#E6D5C3]/20 shadow-inner transition-all duration-300 h-12" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#E6D5C3] font-medium ml-1">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="min-h-[150px] bg-[#2A2420] border-[#E6D5C3]/10 text-[#E6D5C3] focus:border-[#E6D5C3]/40 focus:bg-[#2F2925] focus:ring-0 resize-none placeholder:text-[#E6D5C3]/20 shadow-inner transition-all duration-300 p-4" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-[#E6D5C3] text-[#1A1613] font-bold tracking-wide hover:bg-[#FFF] hover:scale-[1.01] active:scale-[0.98] py-7 shadow-lg hover:shadow-[#E6D5C3]/10 transition-all duration-300 text-lg">
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}