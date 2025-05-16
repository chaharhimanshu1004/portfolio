
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  slug: string;
  views: number;
}

const BlogCard = ({ title, slug, views }: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="block">
      <div className="bg-secondary/20 hover:bg-secondary/30 transition-colors duration-300 p-6 rounded-md border border-white/5 card-hover">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
          <h3 className="text-lg font-medium text-primary font-heading">{title}</h3>
          <span className="text-muted-foreground text-xs tracking-wide">{views.toLocaleString()} views</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
