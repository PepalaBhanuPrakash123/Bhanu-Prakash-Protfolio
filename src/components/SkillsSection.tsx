import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "programming",
      title: "Programming & Scripting",
      skills: ["Python", "JavaScript", "Pandas", "NumPy", "SQL", "MySQL"]
    },
    {
      id: "datavis",
      title: "Data Visualization",
      skills: ["Power BI", "Matplotlib", "Seaborn", "DAX", "Excel", "Power Query"]
    },
    {
      id: "dataanalysis",
      title: "Data Analysis & Manipulation",
      skills: ["Data Cleaning", "Data Transformation", "ETL", "KPIs", "Forecasting", "Data Modeling"]
    },
    {
      id: "tools",
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Docker"]
    },
    {
      id: "web",
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "Bootstrap", "React.js", "React Hooks", "Context API", "Redux"]
    },
    {
      id: "cloud",
      title: "Cloud & Deployment",
      skills: ["Vercel", "Firebase", "Firebase Auth", "Realtime Database"]
    }
  ];

  const getAllSkills = () => {
    return skillCategories.flatMap(cat => cat.skills);
  };

  const getFilteredSkills = () => {
    if (activeCategory === "all") return getAllSkills();
    const category = skillCategories.find(cat => cat.id === activeCategory);
    return category ? category.skills : [];
  };

  const getSkillColor = (skill: string) => {
    if (["Python", "JavaScript", "React.js", "SQL"].includes(skill)) return "primary";
    if (["Power BI", "Data Visualization", "Matplotlib", "Seaborn"].includes(skill)) return "accent";
    if (["Git", "GitHub", "Docker", "Vercel"].includes(skill)) return "secondary";
    return "muted";
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across data analysis, web development, and modern technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 scroll-reveal">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-primary to-accent text-white glow-primary"
                : "glass hover:bg-primary/10 text-muted-foreground hover:text-foreground"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-accent text-white glow-primary"
                  : "glass hover:bg-primary/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="scroll-reveal">
          {activeCategory === "all" ? (
            // All Skills by Category
            <div className="space-y-12">
              {skillCategories.map((category, index) => (
                <div 
                  key={category.id} 
                  className="glass-card p-8 rounded-2xl hover-lift"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <h3 className="text-2xl font-semibold mb-6 text-center">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {category.title}
                    </span>
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`text-lg px-4 py-2 glass hover-lift cursor-pointer animate-fade-in ${
                          getSkillColor(skill) === "primary" ? "hover:bg-primary/20 hover:text-primary glow-primary" :
                          getSkillColor(skill) === "accent" ? "hover:bg-accent/20 hover:text-accent glow-accent" :
                          "hover:bg-secondary/20"
                        }`}
                        style={{animationDelay: `${skillIndex * 0.05}s`}}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Filtered Skills
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <div className="flex flex-wrap justify-center gap-4">
                {getFilteredSkills().map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`text-xl px-6 py-3 glass hover-lift cursor-pointer animate-bounce-in ${
                      getSkillColor(skill) === "primary" ? "hover:bg-primary/20 hover:text-primary glow-primary" :
                      getSkillColor(skill) === "accent" ? "hover:bg-accent/20 hover:text-accent glow-accent" :
                      "hover:bg-secondary/20"
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Professional Concepts */}
        <div className="mt-16 scroll-reveal">
          <div className="glass-card p-8 rounded-2xl hover-lift">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Professional Concepts
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "ETL", "Data Modeling", "KPIs", "Forecasting", "Dashboarding", 
                "Data Storytelling", "Responsive Design", "Cross-Browser Compatibility", 
                "State Management", "Version Control", "Agile", "Problem Solving"
              ].map((concept, index) => (
                <div
                  key={concept}
                  className="text-center p-4 glass rounded-lg hover-lift animate-fade-in"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <span className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
                    {concept}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;