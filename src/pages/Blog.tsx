
import Layout from '../components/layout/Layout';
import BlogCard from '../components/blog/BlogCard';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Javascript important questions",
      slug: "javascript-important-questions",
      views: 16962
    },
    {
      id: 2,
      title: "Free portfolio website template that gets you hired in 2021",
      slug: "free-portfolio-website-template",
      views: 5769
    },
    {
      id: 3,
      title: "Understanding React Hooks",
      slug: "understanding-react-hooks",
      views: 3421
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox",
      slug: "css-grid-vs-flexbox",
      views: 2845
    }
  ];

  return (
    <Layout>
      <section className="py-10">
        <div className="container-custom">
          <h1 className="text-2xl font-bold mb-8 font-heading gradient-text subtle-glow">All Blogs</h1>
          <div className="space-y-3">
            {blogs.map((blog, index) => (
              <div key={blog.id} className="animate-fade-in" >
                <BlogCard
                  title={blog.title}
                  slug={blog.slug}
                  views={blog.views}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
