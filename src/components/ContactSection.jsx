import { useState } from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceID = "service_n3zqodc";   // <-- replace with your Service ID
    const templateID = "template_j425x1r"; // <-- replace with your Template ID
    const publicKey = "4PQWd9HavhJOqZ1bA";      // <-- replace with your Public Key

    emailjs.sendForm(serviceID, templateID, e.target, publicKey)
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
        e.target.reset(); // clear the form
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10"><Mail className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:arya500245@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    arya500245@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10"><Phone className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="Mob:+919525949013" className="text-muted-foreground hover:text-primary transition-colors">+91 9525949013</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10"><MapPin className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Ghaziabad, Uttar Ptradesh, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/arya-kumar-mishra-2a64421a1" target="_blank"><Linkedin /></a>
                <a href="https://github.com/Arya9525" target="_blank"><Github /></a>
                <a href="https://www.instagram.com/_arya__mishra__" target="_blank"><Instagram /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your email" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Hello, I'd like to talk about..." />
              </div>

              <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
