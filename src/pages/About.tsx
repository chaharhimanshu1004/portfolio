
import Layout from '../components/layout/Layout';
import ContactForm from '../components/contact/ContactForm';

const About = () => {
  return (
    <Layout>
      <div className="container-custom py-10">
        <h1 className="text-2xl font-bold mb-6 font-heading gradient-text subtle-glow">About Me</h1>
        
        <div className="space-y-6">
          <div className="bg-secondary/20 border border-white/5 rounded-lg p-6 card-hover">
            <h2 className="text-xl font-bold mb-4 font-heading">Who I Am</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm a Software Engineer passionate about building web applications and SaaS products.
              With experience in React, TypeScript, and modern web technologies, I focus on creating 
              performant and user-friendly experiences.
            </p>
          </div>
          
          <div className="bg-secondary/20 border border-white/5 rounded-lg p-6 card-hover">
            <h2 className="text-xl font-bold mb-4 font-heading">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-sm">
                <span className="block font-medium">Frontend</span>
                <span className="text-muted-foreground">React, TypeScript, Next.js</span>
              </div>
              <div className="text-sm">
                <span className="block font-medium">Backend</span>
                <span className="text-muted-foreground">Node.js, Express, MongoDB</span>
              </div>
              <div className="text-sm">
                <span className="block font-medium">Other</span>
                <span className="text-muted-foreground">Git, CI/CD, AWS</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default About;