import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, BarChart3, Zap, Globe } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Stock Performance Dashboard",
      description: "Interactive Power BI dashboard comparing stock performance of TATA, Reliance, and HDFC. Features KPI indicators, MACD/RSI analysis, OHLC charts, and custom DAX measures for financial storytelling.",
      type: "Data Analytics",
      icon: <TrendingUp className="w-6 h-6" />,
      tech: ["Power BI", "DAX", "Excel", "Financial Analysis", "Data Modeling"],
      liveUrl: "https://github.com/PepalaBhanuPrakash123/PowerBI-Stock-Performance-2023-2025",
      githubUrl: "https://github.com/PepalaBhanuPrakash123/PowerBI-Stock-Performance-2023-2025",
      featured: true,
      color: "primary"
    },
    {
      id: 2,
      title: "IPL Performance Analytics Dashboard",
      description: "Comprehensive analysis of 17 seasons of IPL data using Power BI and Power Query. Built interactive visualizations with comparative KPIs for team/player insights and strategic decision-making.",
      type: "Sports Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      tech: ["Power BI", "DAX", "Power Query", "Data Modeling", "Sports Analytics"],
      liveUrl: "https://github.com/PepalaBhanuPrakash123/ipl-powerbi-dashboard",
      githubUrl: "https://github.com/PepalaBhanuPrakash123/ipl-powerbi-dashboard",
      featured: true,
      color: "accent"
    },
    {
      id: 3,
      title: "BlinkIt Sales Analysis",
      description: "End-to-end data pipeline performing ETL operations, data cleaning and aggregation using SQL. Built 8+ visualizations with Python libraries for comprehensive sales insights and reporting.",
      type: "Business Intelligence",
      icon: <Zap className="w-6 h-6" />,
      tech: ["MySQL", "Python", "Pandas", "Seaborn", "Matplotlib", "SQLAlchemy"],
      githubUrl: "https://github.com/PepalaBhanuPrakash123/blinkit-sales-analysis",
      featured: false,
      color: "secondary"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Modern, responsive React.js application with real-time weather data using OpenWeatherMap API. Features include location search, temperature toggle, 5-day forecast, and dynamic UI based on weather conditions.",
      type: "Web Application",
      icon: <Globe className="w-6 h-6" />,
      tech: ["React.js", "OpenWeatherMap API", "HTML5", "CSS3", "JavaScript", "Vercel"],
      liveUrl: "https://weather-app-nine-indol-87.vercel.app/",
      githubUrl: "https://github.com/PepalaBhanuPrakash123/weather-app",
      featured: false,
      color: "primary"
    },
    {
      id: 5,
      title: "Doctor Appointment System",
      description: "Full-stack React.js application with Firebase authentication and real-time database. Features doctor search, profile viewing, appointment booking, and responsive mobile-first design with Redux state management.",
      type: "Web Application",
      icon: <Globe className="w-6 h-6" />,
      tech: ["React.js", "Firebase", "Redux", "Bootstrap", "Tailwind CSS", "React Hooks"],
      liveUrl: "https://project-react-doctor-application.vercel.app/",
      githubUrl: "https://github.com/PepalaBhanuPrakash123/doctor-appointment",
      featured: true,
      color: "accent"
    }
  ];

  const getProjectGradient = (color: string) => {
    switch (color) {
      case "primary":
        return "from-primary/20 to-primary/5";
      case "accent":
        return "from-accent/20 to-accent/5";
      default:
        return "from-secondary/20 to-secondary/5";
    }
  };

  const getProjectGlow = (color: string) => {
    switch (color) {
      case "primary":
        return "glow-primary";
      case "accent":
        return "glow-accent";
      default:
        return "";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing data analytics dashboards, web applications, and innovative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center scroll-reveal">
            <span className="text-primary">Featured Work</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div 
                key={project.id}
                className={`glass-card p-8 rounded-2xl hover-lift ${getProjectGlow(project.color)} scroll-reveal`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getProjectGradient(project.color)}`}>
                    {project.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </div>
                  <Badge variant="secondary" className="ml-auto glass">
                    Featured
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="glass border-primary/30 hover:bg-primary/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="default"
                    size="sm"
                    className={`bg-gradient-to-r ${
                      project.color === "primary" ? "from-primary to-accent" : "from-accent to-primary"
                    } hover:from-primary/80 hover:to-accent/80 transition-bounce`}
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="sm"
                    className="glass border-primary/30 hover:bg-primary/10 hover-glow"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center scroll-reveal">
            <span className="text-accent">Other Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div 
                key={project.id}
                className="glass-card p-6 rounded-xl hover-lift scroll-reveal"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getProjectGradient(project.color)}`}>
                    {project.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <p className="text-xs text-muted-foreground">{project.type}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs glass border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs glass border-muted/30">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="default"
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/80"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="sm"
                    className="glass border-primary/30 hover:bg-primary/10"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-12 scroll-reveal">
          <Button 
            variant="outline"
            size="lg"
            className="glass border-primary/30 hover:bg-primary/10 hover-glow transition-bounce"
            onClick={() => window.open("https://github.com/PepalaBhanuPrakash123", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
