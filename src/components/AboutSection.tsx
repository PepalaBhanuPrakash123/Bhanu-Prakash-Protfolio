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
            Dedicated to translating complex data into strategic business insights and developing innovative,
            high-performance web solutions that enhance user experience and drive measurable outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 scroll-reveal">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Career Objective</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Versatile and results-oriented professional with a strong foundation in both data analytics and frontend development,
                capable of transforming raw data into strategic insights and building intuitive, high-performance web interfaces.
                Skilled in Power BI, SQL, Python, React.js, JavaScript, and modern UI/UX frameworks,
                with hands-on experience delivering business dashboards and interactive applications. Demonstrates a keen understanding of user behavior,
                data-driven decision making, and cross-functional collaboration. Committed to creating scalable,
                user-centric digital solutions that align with organizational goals and drive measurable business impact.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-xl hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Location</span>
                </div>
                <p className="text-muted-foreground">Hyderabad,Telangana</p>
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
                <li>📈 Obsessed with turning raw data into strategic insights</li>
                <li>🎨 Craft intuitive user interfaces that feel like second nature</li>
                <li>⚙️ Blend analytics with frontend to build full-stack business solutions</li>
                <li>🧠 Constantly upskilling across tools, trends, and tech stacks</li>
                <li>🌍 Believe great design and data can solve real-world problems</li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;