import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Interactive Power BI Dashboards: A Complete Guide",
      description: "Learn how to create stunning, interactive dashboards that tell compelling data stories. From DAX functions to advanced visualizations.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Power BI", "Data Visualization", "DAX"],
      category: "Data Analytics",
      featured: true
    },
    {
      id: 2,
      title: "Python for Data Analysis: Pandas vs NumPy Performance Tips",
      description: "Optimize your data analysis workflow with performance tips and best practices for handling large datasets efficiently.",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["Python", "Pandas", "Performance"],
      category: "Programming",
      featured: true
    },
    {
      id: 3,
      title: "React State Management: When to Use Context vs Redux",
      description: "Understanding the trade-offs between React Context API and Redux for state management in modern web applications.",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["React", "Redux", "Context API"],
      category: "Web Development",
      featured: false
    },
    {
      id: 4,
      title: "SQL Query Optimization for Large Datasets",
      description: "Advanced techniques for writing efficient SQL queries that scale with your data growth.",
      date: "2023-12-28",
      readTime: "10 min read",
      tags: ["SQL", "Database", "Optimization"],
      category: "Database",
      featured: false
    },
    {
      id: 5,
      title: "Building Responsive Web Apps with Modern CSS",
      description: "Master CSS Grid, Flexbox, and modern layout techniques for creating beautiful, responsive interfaces.",
      date: "2023-12-20",
      readTime: "7 min read",
      tags: ["CSS", "Responsive Design", "Frontend"],
      category: "Design",
      featured: false
    },
    {
      id: 6,
      title: "Data Storytelling: Making Numbers Meaningful",
      description: "Transform raw data into compelling narratives that drive business decisions and engage stakeholders.",
      date: "2023-12-15",
      readTime: "9 min read",
      tags: ["Data Storytelling", "Visualization", "Analytics"],
      category: "Data Analytics",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Data Analytics":
        return "primary";
      case "Programming":
        return "accent";
      case "Web Development":
        return "secondary";
      default:
        return "muted";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <section id="blog" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Latest <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Blog Posts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights on data analytics, web development, and technology trends
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center scroll-reveal">
            <span className="text-primary">Featured Articles</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <article 
                key={post.id}
                className="glass-card p-8 rounded-2xl hover-lift scroll-reveal glow-primary"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Badge 
                    variant="secondary"
                    className={`glass ${getCategoryColor(post.category) === 'primary' ? 'border-primary/30 text-primary' : 'border-accent/30 text-accent'}`}
                  >
                    {post.category}
                  </Badge>
                  <Badge variant="outline" className="glass">
                    Featured
                  </Badge>
                </div>

                <h3 className="text-2xl font-semibold mb-4 hover:text-primary transition-smooth cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="glass border-primary/20 hover:bg-primary/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <Button 
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 hover:bg-primary/10 transition-bounce"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Other Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center scroll-reveal">
            <span className="text-accent">Recent Articles</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article 
                key={post.id}
                className="glass-card p-6 rounded-xl hover-lift scroll-reveal"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Badge 
                  variant="secondary"
                  className={`mb-4 glass ${getCategoryColor(post.category) === 'primary' ? 'border-primary/30 text-primary' : 'border-accent/30 text-accent'}`}
                >
                  {post.category}
                </Badge>

                <h4 className="text-lg font-semibold mb-3 hover:text-primary transition-smooth cursor-pointer line-clamp-2">
                  {post.title}
                </h4>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs glass border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs glass border-muted/30">
                      +{post.tags.length - 2}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                <Button 
                  variant="ghost"
                  size="sm"
                  className="w-full mt-4 text-primary hover:text-primary/80 hover:bg-primary/10"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </article>
            ))}
          </div>
        </div>

        {/* View All Posts */}
        <div className="text-center scroll-reveal">
          <Button 
            variant="outline"
            size="lg"
            className="glass border-primary/30 hover:bg-primary/10 hover-glow transition-bounce"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
