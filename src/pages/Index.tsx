import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import RecentBlogs from '../components/home/RecentBlogs';
import FeaturedProjects from '../components/home/FeaturedProjects';
import LifeChangelog from '../components/home/LifeChangelog';
import ContactForm from '../components/contact/ContactForm';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <RecentBlogs />
      <FeaturedProjects />
      <LifeChangelog />
      
      {/* Contact Form Section */}
      <section className="py-10 animate-fade-in">
        <div className="container-custom">
          <h2 className="text-xl font-bold mb-6 font-heading">Get In Touch</h2>
          <ContactForm hideTitle={true} />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
