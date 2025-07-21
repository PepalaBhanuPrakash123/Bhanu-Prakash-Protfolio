import { Button } from "@/components/ui/button";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/pepala-bhanu-prakash-2002m09d14/",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/PepalaBhanuPrakash123",
      label: "GitHub"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:pepalabhanuprakash@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="relative py-20 border-t border-border/50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Bhanu Prakash
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Data Analyst & Web Developer passionate about transforming complex data into actionable insights 
                and building innovative web solutions.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made This using React & Tailwind CSS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-muted-foreground hover:text-primary transition-smooth py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-accent">Let's Connect</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Actively seeking full-time roles and collaborative opportunities in software development and data analytics.
              </p>
              
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="glass hover:bg-primary/10 hover-glow transition-bounce"
                    onClick={() => window.open(social.url, "_blank")}
                    title={social.label}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>

              <div className="glass p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-400">Available for Work</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Currently accepting new projects and opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Bhanu Prakash Pepala. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="glass hover:bg-primary/10 hover-glow transition-bounce"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;