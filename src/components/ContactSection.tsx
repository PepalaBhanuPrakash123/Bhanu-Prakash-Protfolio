import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const { name, email, message } = formData;

  const subject = encodeURIComponent("Let's Connect");
  const body = encodeURIComponent(`Hi Bhanu,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);

  window.location.href = `mailto:pepalabhanuprakash@gmail.com?subject=${subject}&body=${body}`;
};


  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "pepalabhanuprakash@gmail.com",
      link: "mailto:pepalabhanuprakash@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 6305772064",
      link: "tel:+916305772064"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Hyderabad, Telangana",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/pepala-bhanu-prakash-2002m09d14/",
      color: "text-blue-400"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/PepalaBhanuPrakash123",
      color: "text-gray-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Actively seeking full-time roles and collaborative opportunities in software development and data analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 scroll-reveal">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-semibold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, especially ambitious or large-scale projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 glass rounded-lg hover-lift animate-fade-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="p-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg glow-primary">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-lg font-medium hover:text-primary transition-smooth"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 rounded-xl hover-lift">
              <h4 className="text-lg font-semibold mb-4 text-center">Follow Me</h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="lg"
                    className={`glass hover:bg-primary/10 hover-glow transition-bounce ${social.color}`}
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    {social.icon}
                    <span className="ml-2">{social.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-6 rounded-xl hover-lift">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold text-green-400">Available for Work</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Actively seeking full-time roles and collaborative opportunities in software development and data analytics.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal" style={{animationDelay: '0.3s'}}>
            <div className="glass-card p-8 rounded-2xl hover-lift h-[850px]">
              <h3 className="text-2xl font-semibold mb-6">
                <span className="text-primary">Send a Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="glass border-primary/30 focus:border-primary bg-transparent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="glass border-primary/30 focus:border-primary bg-transparent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    className="glass border-primary/30 focus:border-primary bg-transparent resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-primary transition-bounce"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 glass rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  ⚡ Usually respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;