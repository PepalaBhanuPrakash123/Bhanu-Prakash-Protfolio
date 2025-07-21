import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Data Analyst", "Power BI Expert"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bhanu Prakash
              </span>
            </h1>
            
            <div className="text-2xl lg:text-3xl text-muted-foreground">
              <span>I'm a </span>
              <span className="text-primary font-semibold animate-bounce-in" key={currentRole}>
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Crafting intelligent, data-driven solutions and modern web experiences. 
              Passionate about transforming complex data into actionable insights.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-primary transition-bounce"
              onClick={scrollToProjects}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-primary/30 hover:bg-primary/10 hover-glow transition-bounce"
              onClick={() => window.open("https://drive.google.com/file/d/1tKrfuHUKb-JVn52XGxBoBml5IMMTmqNT/view?usp=sharing", "_blank")}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button
              variant="ghost"
              size="icon"
              className="glass hover:bg-primary/10 hover-glow transition-bounce"
              onClick={() => window.open("https://www.linkedin.com/in/pepala-bhanu-prakash-2002m09d14/", "_blank")}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="glass hover:bg-primary/10 hover-glow transition-bounce"
              onClick={() => window.open("https://github.com/PepalaBhanuPrakash123", "_blank")}
            >
              <Github className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card glow-accent hover-lift">
              <img 
                src="/lovable-uploads/7af7a1e0-1750-40f9-bba7-09fac7ee24dc.png"
                alt="Bhanu Prakash Pepala"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 glass rounded-full flex items-center justify-center glow-primary animate-float">
              <span className="text-2xl">🐍</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 glass rounded-full flex items-center justify-center glow-accent animate-float" style={{animationDelay: '1s'}}>
              <span className="text-2xl">📊</span>
            </div>
            
            <div className="absolute top-1/2 -left-8 w-12 h-12 glass rounded-full flex items-center justify-center glow-primary animate-float" style={{animationDelay: '2s'}}>
              <span className="text-lg">⚛️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;