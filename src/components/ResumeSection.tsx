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
    },
    {
      title: "Frontend Developer (React)",
      issuer: "Hacker Rank",
      skills:  ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design", "Web APIs"],
      credentialUrl: "https://drive.google.com/file/d/1fEn1_o_Fh-W4qcYF0RicPNV_jsB6H7BX/view?usp=sharing"
    }
  ];

  const experience = [
    {
      title: "Python Programming Intern",
      company: "Azure-Skynet",
      type: "Virtual Internship",
      
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
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center sm:items-start w-full">
  <Button 
    size="lg"
    className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-primary transition-bounce w-[90%] sm:w-auto text-sm sm:text-base text-center"
    onClick={() => window.open("https://drive.google.com/file/d/1tKrfuHUKb-JVn52XGxBoBml5IMMTmqNT/view?usp=sharing", "_blank")}
  >
    <Download className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />Download Data Analyst Resume
  </Button>

  <Button 
    size="lg"
    className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-primary transition-bounce w-[90%] sm:w-auto text-sm sm:text-base text-center"
    onClick={() => window.open("https://drive.google.com/file/d/1X6ZJ3-rSUaPoYCi1GwDMJz28HKZJ3BP0/view?usp=sharing", "_blank")}
  >
    <Download className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />Download Frontend Resume
  </Button>
</div>

          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">

            {/* Soft Skills */}
     {/* Soft Skills */}
<div className="scroll-reveal ">
  <div className="flex items-center gap-3 mb-8">
    <Code className="w-6 h-6 text-accent" />
    <h3 className="text-2xl font-semibold text-accent">Soft Skills</h3>
  </div>
  
  <div className="glass-card p-6 rounded-xl hover-lift">
    <div className="flex flex-col gap-3">
      {softSkills.map((skill, index) => (
        <div
          key={skill}
          className="flex items-center gap-2 p-3 glass rounded-lg hover-lift animate-fade-in"
          style={{ animationDelay: `${index * 0.05}s` }}
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
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      </div>
    </section>
  );
};

export default ResumeSection;