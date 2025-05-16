import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-black/90">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
