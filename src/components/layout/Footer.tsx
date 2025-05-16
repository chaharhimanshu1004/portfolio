import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/5 bg-background/80 backdrop-blur-sm">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo & About */}
          <div>
            <Link to="/" className="text-primary hover:text-white transition-colors duration-300 text-lg font-heading gradient-text subtle-glow tracking-wide mb-3 inline-block">
              Himanshu Chahar
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Software Engineer building SaaS products and web applications.
            </p>
          </div>
          
          {/* Column 2: Pages */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Pages</h3>
            <div className="grid grid-cols-2 gap-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/resources">Resources</FooterLink>
            </div>
          </div>
          
          {/* Column 3: Social */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://twitter.com/chaharhimanshu_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
              >
                <Twitter size={16} className="mr-2" />
                Twitter
              </a>
              <a 
                href="https://linkedin.com/in/himanshuchahar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
              >
                <Github size={16} className="mr-2" />
                GitHub
              </a>
              <a 
                href="mailto:hello@himanshuchahar.com" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
              >
                <Mail size={16} className="mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/5 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between">
          <div>
            © {currentYear} Himanshu Chahar. All rights reserved.
          </div>
          <div className="mt-2 md:mt-0">
            Built with React, TailwindCSS and ♥
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <Link 
    to={to} 
    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Footer;