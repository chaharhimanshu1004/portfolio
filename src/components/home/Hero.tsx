
import { Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-12 md:py-16 animate-fade-in" >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 font-heading gradient-text subtle-glow">
              Himanshu Chahar
            </h1>
            <div className="flex items-center gap-x-2 text-sm text-muted-foreground mb-4">
              <span>Building</span>
              <span className="text-primary">Projects</span>
              <span>&</span>
              <span className="text-primary">cool things</span>
            </div>
            <p className="text-sm mb-3 text-balance opacity-90 leading-relaxed">
              Software Engineer building SaaS products and web apps. Find
              me on
              <a 
                href="https://x.com/chaharhimanshu_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center ml-2 text-primary hover:text-white transition-colors duration-300"
              >
                Twitter <Twitter size={14} className="ml-1" />
              </a>
              <span> </span>
              for tech updates and memes.
            </p>
            <p className="text-md text-muted-foreground">
              Currently working at <span className="text-primary">Baazi Games</span>
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="w-24 h-24 rounded-md overflow-hidden ring-2 ring-white/10 shadow-lg shadow-white/5 hover:ring-white/20 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Himanshu Chahar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
