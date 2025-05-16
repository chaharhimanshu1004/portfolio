
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-6 navbar-glow backdrop-blur-sm bg-background/80">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-primary hover:text-white transition-colors duration-300 text-lg font-heading gradient-text subtle-glow tracking-wide">
            Himanshu Chahar
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/snippets">Snippets</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-foreground hover:text-primary transition-colors duration-300">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container-custom mt-4 pb-4 flex flex-col space-y-4 animate-fade-in">
          <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink to="/blog" onClick={toggleMenu}>Blog</MobileNavLink>
          <MobileNavLink to="/snippets" onClick={toggleMenu}>Snippets</MobileNavLink>
          <MobileNavLink to="/resources" onClick={toggleMenu}>Resources</MobileNavLink>
          <MobileNavLink to="/projects" onClick={toggleMenu}>Projects</MobileNavLink>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-sm tracking-wide relative group"
  >
    {children}
    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"></span>
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => (
  <Link to={to} className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2 text-lg font-medium" onClick={onClick}>
    {children}
  </Link>
);

export default Navbar;
