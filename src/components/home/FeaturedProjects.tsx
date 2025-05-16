import { Link } from 'react-router-dom';
import { ChevronDown, Github, ExternalLink, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getFeaturedProjects } from '@/data/projects';

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects();
  
  return (
    <section className="py-8 animate-fade-in">
      <div className="container-custom">
        <h2 className="text-xl font-bold mb-6 font-heading">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredProjects.map((project) => (
            <div key={project.id} className="animate-fade-in">
              <Card className="bg-secondary/20 border-white/5 card-hover h-full flex flex-col">
                <CardHeader>
                  <h3 className="text-lg font-medium font-heading flex items-center">
                    <Code size={18} className="mr-2 text-primary/80" />
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <Badge 
                        key={tag} 
                        variant="outline"
                        className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70 border-white/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-3 pt-2 border-t border-white/5">
                  <a 
                    href={project.githubUrl}
                    className="p-2 rounded-full hover:bg-white/5 text-foreground/70 hover:text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Source Code"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="p-2 rounded-full hover:bg-white/5 text-foreground/70 hover:text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Link to="/projects" className="inline-flex items-center text-xs text-primary hover:text-white transition-colors duration-300 group">
            See All Projects <ChevronDown size={12} className="ml-1 group-hover:translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;