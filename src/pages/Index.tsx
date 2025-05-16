import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import RecentBlogs from '../components/home/RecentBlogs';
import FeaturedProjects from '../components/home/FeaturedProjects';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <RecentBlogs />
      <FeaturedProjects />
    </Layout>
  );
};

export default Index;
