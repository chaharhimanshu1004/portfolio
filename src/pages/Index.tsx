import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import RecentBlogs from '../components/home/RecentBlogs';
import FeaturedProjects from '../components/home/FeaturedProjects';
import LifeChangelog from '../components/home/LifeChangelog';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <RecentBlogs />
      <FeaturedProjects />
      <LifeChangelog />
    </Layout>
  );
};

export default Index;
