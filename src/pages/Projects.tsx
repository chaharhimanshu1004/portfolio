
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and TailwindCSS",
    tags: ["React", "TailwindCSS"]
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A minimalist task management application",
    tags: ["TypeScript", "React", "Firebase"]
  }
];

const Projects = () => {
  return (
    <Layout>
      <div className="container-custom py-10">
        <h1 className="text-2xl font-bold mb-6 font-heading gradient-text subtle-glow">Projects</h1>
        
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-fade-in" >
              <Card className="bg-secondary/20 border-white/5 card-hover">
                <CardHeader>
                  <h3 className="text-lg font-medium font-heading">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
