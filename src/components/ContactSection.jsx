import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_n3zqodc";
    const templateID = "template_j425x1r";
    const publicKey = "4PQWd9HavhJOqZ1bA";

    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey)
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
        e.target.reset();
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
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        {/* CLEAN 2-SECTION LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SECTION — CONTACT INFO */}
          <div className="bg-card p-8 rounded-xl shadow-sm text-left">

            <h3 className="text-2xl font-semibold mb-8 border-b pb-2">
              Contact Information
            </h3>

            <div className="space-y-10">

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:arya500245@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    arya500245@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h- w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919525949013"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9525949013
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Ghaziabad, Uttar Pradesh, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SECTION — SEND MESSAGE FORM */}
          <div className="bg-card p-8 rounded-xl shadow-sm text-left">

            <h3 className="text-2xl font-semibold mb-8 border-b pb-2">
              Send Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background 
                             focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background 
                             focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background 
                             focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
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
