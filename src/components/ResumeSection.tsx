import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Award, Briefcase, GraduationCap, Code } from "lucide-react";

const ResumeSection = () => {
  const certifications = [
    {
      title: "IBM Data Analysis with Python",
      issuer: "IBM",
      skills: ["Python", "Pandas", "NumPy", "Data Wrangling", "Visualization"],
      credentialUrl: "https://drive.google.com/file/d/1eH2GVRBFGtvWcTmfKb0Tpav4vO6-9V6Z/view?usp=sharing"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (Forage)",
      skills: ["Data Analysis", "Forensic Technology", "Business Intelligence"],
      credentialUrl: "https://drive.google.com/file/d/1eH2GVRBFGtvWcTmfKb0Tpav4vO6-9V6Z/view?usp=sharing"
    },
    {
      title: "GenAI-Powered Data Analytics Job Simulation",
      issuer: "TATA (Forage)",
      skills: ["EDA", "AI Risk Profiling", "Delinquency Prediction", "Business Storytelling"],
      credentialUrl: "https://drive.google.com/file/d/1HRLeUl82Bw3MZLON0rhyw6EEMC7nN0RP/view?usp=sharing"
    }
  ];

  const experience = [
    {
      title: "Python Programming Intern",
      company: "Azure-Skynet",
      type: "Virtual Internship",
      duration: "May 2023 - July 2023",
      description: "Gained hands-on experience in Python scripting, debugging, and automation. Developed small-scale applications to practice logical structuring and modular programming.",
      achievements: [
        "Improved problem-solving and code optimization skills",
        "Developed modular programming fundamentals",
        "Created automation scripts for data processing"
      ]
    }
  ];

  const softSkills = [
    "Strong interpersonal communication",
    "Critical thinking",
    "Adaptability", 
    "Problem-solving",
    "Team collaboration",
    "Leadership",
    "Time management",
    "Analytical thinking"
  ];

  return (
    <section id="resume" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience, certifications, and comprehensive skill overview
          </p>
        </div>

        {/* Download Resume */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="glass-card p-8 rounded-2xl hover-lift max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full glow-primary">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold">Download Resume</h3>
                <p className="text-muted-foreground">Get the complete PDF version</p>
              </div>
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-primary transition-bounce"
              onClick={() => window.open("#", "_blank")}
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Experience */}
            <div className="scroll-reveal">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-primary">Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.type}</p>
                      </div>
                      <Badge variant="outline" className="glass border-primary/30">
                        {exp.duration}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="scroll-reveal">
              <div className="flex items-center gap-3 mb-8">
                <Code className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-semibold text-accent">Soft Skills</h3>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover-lift">
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 p-3 glass rounded-lg hover-lift animate-fade-in"
                      style={{animationDelay: `${index * 0.05}s`}}
                    >
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Education */}
            <div className="scroll-reveal">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-primary">Education</h3>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover-lift">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold">Bachelor of Technology (B.Tech)</h4>
                    <p className="text-lg text-primary font-medium">Electronics And Communication Engineering</p>
                    <p className="text-muted-foreground">Visvodaya Engineering College</p>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant="outline" className="glass border-primary/30">
                        2020 - 2024
                      </Badge>
                      <Badge variant="secondary" className="glass">
                        CGPA: 6.45
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nellore, Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="scroll-reveal">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-semibold text-accent">Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">{cert.title}</h4>
                        <p className="text-accent font-medium">{cert.issuer}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary/80 hover:bg-primary/10"
                        onClick={() => window.open(cert.credentialUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="text-xs glass border-accent/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 scroll-reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "15+", label: "Projects Completed", color: "primary" },
              { number: "3+", label: "Certifications", color: "accent" },
              { number: "2+", label: "Years Learning", color: "primary" },
              { number: "100%", label: "Passion Level", color: "accent" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl hover-lift text-center animate-bounce-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`text-3xl font-bold mb-2 ${stat.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;