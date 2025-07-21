import { Button } from "@/components/ui/button";
import { Download, MapPin, Phone, Mail, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming data into actionable insights and building innovative web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 scroll-reveal">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Career Objective</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aspiring Data Analyst with strong expertise in Advanced Excel, data interpretation, 
                reporting, SQL, Power BI, Python and data visualization. Experienced in data cleaning, 
                transformation, DAX, KPIs, ETL, and building interactive dashboards using Pandas, MySQL, 
                and Power Query. Certified by IBM and Microsoft, with hands-on projects in stock analysis, 
                sales insights, and sports analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-xl hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Location</span>
                </div>
                <p className="text-muted-foreground">Nellore, Andhra Pradesh</p>
              </div>

              <div className="glass-card p-6 rounded-xl hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Phone</span>
                </div>
                <p className="text-muted-foreground">6305772064</p>
              </div>

              <div className="glass-card p-6 rounded-xl hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Email</span>
                </div>
                <p className="text-muted-foreground text-sm">pepalabhanuprakash@gmail.com</p>
              </div>

              <div className="glass-card p-6 rounded-xl hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Experience</span>
                </div>
                <p className="text-muted-foreground">Fresher</p>
              </div>
            </div>
          </div>

          {/* Right Content - Education & Timeline */}
          <div className="space-y-6 scroll-reveal">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full glow-primary"></div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-semibold">Bachelor of Technology (B.Tech)</h4>
                    <p className="text-lg text-muted-foreground">Electronics And Communication Engineering</p>
                    <p className="text-primary font-medium">Visvodaya Engineering College</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      
                      <span>CGPA: 6.45</span>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-accent/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full glow-accent"></div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-semibold">Python Programming Internship</h4>
                    <p className="text-lg text-muted-foreground">Azure-Skynet</p>
                    <p className="text-accent font-medium">Virtual Internship</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Gained hands-on experience in Python scripting, debugging, and automation. 
                      Developed applications focusing on logical structuring and modular programming.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="glass-card p-6 rounded-xl hover-lift">
              <h4 className="text-lg font-semibold mb-4 text-accent">Fun Facts</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>🎯 Passionate about data storytelling</li>
                <li>🚀 Love exploring new technologies</li>
                <li>📊 Enjoy creating interactive dashboards</li>
                <li>💡 Always learning and growing</li>
              </ul>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-primary transition-bounce"
              onClick={() => window.open("https://drive.google.com/file/d/1tKrfuHUKb-JVn52XGxBoBml5IMMTmqNT/view?usp=sharing", "_blank")}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Full Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;