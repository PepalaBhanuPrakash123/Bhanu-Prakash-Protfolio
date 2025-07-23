import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
  {
  id: 1,
  title: "Building Interactive Power BI Dashboards: A Complete Guide",
  description: "Designed dynamic dashboards using Power BI, leveraging DAX, slicers, and drill-downs to deliver real-time insights. Tracked key metrics like sales and YoY growth. This project showcases my expertise in building visually compelling, decision-support tools through effective data modeling and business storytelling.",
  readTime: "1 min read",
  tags: ["Power BI", "Data Visualization", "DAX"],
  category: "Data Analytics",
  featured: true
},
{
  id: 2,
  title: "Python for Data Analysis: Pandas vs NumPy Performance Tips",
  description: "Benchmarked Pandas and NumPy for large datasets, optimizing performance with vectorized operations and memory-efficient techniques. Streamlined data workflows to significantly reduce processing time. Demonstrates my ability to build scalable, efficient Python-based data pipelines for analytics.",
  readTime: "2 min read",
  tags: ["Python", "Pandas", "Performance"],
  category: "Data Analytics",
  featured: true
},
{
  id: 3,
  title: "React State Management: When to Use Context vs Redux",
  description: "Explored Context API vs Redux through real-world use cases. Evaluated performance, scalability, and code maintainability. Demonstrated optimal state management strategies for modern React applications based on project complexity.",
  readTime: "1 min read",
  tags: ["React", "Redux", "Context API"],
  category: "Web Development",
  featured: true
},
{
  id: 5,
  title: "Building Responsive Web Apps with Modern CSS",
  description: "Created responsive, mobile-first UIs using CSS Grid, Flexbox, and media queries. Focused on performance, accessibility, and clean design. Highlights frontend skills and ability to build scalable user-centric interfaces.",
  readTime: "1 min read",
  tags: ["CSS", "Responsive Design", "Frontend"],
  category: "Design",
  featured: true
},

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
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
