
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link, ExternalLink } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    url: "#",
    type: "Guide"
  },
  {
    id: 2,
    title: "React Best Practices",
    url: "#",
    type: "Documentation"
  }
];

const Resources = () => {
  return (
    <Layout>
      <div className="container-custom py-10">
        <h1 className="text-2xl font-bold mb-6 font-heading gradient-text subtle-glow">Resources</h1>
        
        <div className="space-y-4">
          {resources.map((resource, index) => (
            <div key={resource.id} className="animate-fade-in" >
              <Card className="bg-secondary/20 border-white/5 card-hover">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <h3 className="text-lg font-medium font-heading flex items-center">
                    <Link size={18} className="mr-2 text-primary/80" />
                    {resource.title}
                  </h3>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                </CardHeader>
                <CardContent>
                  <a 
                    href={resource.url}
                    className="text-sm text-primary hover:text-white transition-colors duration-300 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resource <ExternalLink size={14} className="ml-1" />
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
