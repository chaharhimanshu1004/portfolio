
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import BlogCard from '../blog/BlogCard';

const RecentBlogs = () => {
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
    }
  ];

  return (
    <section className="py-8 animate-fade-in">
      <div className="container-custom">
        <h2 className="text-xl font-bold mb-6 font-heading">Recent Blogs</h2>
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
        <div className="mt-6 text-center">
          <Link to="/blog" className="inline-flex items-center text-xs text-primary hover:text-white transition-colors duration-300 group">
            See All Blogs <ChevronDown size={12} className="ml-1 group-hover:translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
