
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Code } from 'lucide-react';

const snippets = [
  {
    id: 1,
    title: "React useState Hook",
    language: "TypeScript",
    preview: "const [state, setState] = useState<string>('');"
  },
  {
    id: 2,
    title: "Tailwind Gradient Text",
    language: "HTML",
    preview: "<p class=\"bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500\">Gradient Text</p>"
  }
];

const Snippets = () => {
  return (
    <Layout>
      <div className="container-custom py-10">
        <h1 className="text-2xl font-bold mb-6 font-heading gradient-text subtle-glow">Code Snippets</h1>
        
        <div className="space-y-4">
          {snippets.map((snippet, index) => (
            <div key={snippet.id} className="animate-fade-in" >
              <Card className="bg-secondary/20 border-white/5 card-hover">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <h3 className="text-lg font-medium font-heading flex items-center">
                    <Code size={18} className="mr-2 text-primary/80" />
                    {snippet.title}
                  </h3>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                    {snippet.language}
                  </span>
                </CardHeader>
                <CardContent>
                  <pre className="bg-black/30 p-3 rounded-md text-xs overflow-x-auto">
                    <code className="text-white/90">{snippet.preview}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Snippets;
