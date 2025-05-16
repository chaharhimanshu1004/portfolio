import Layout from '../components/layout/Layout';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
	{
		id: 1,
		title: 'Portfolio Website',
		description: 'Personal portfolio website built with React and TailwindCSS',
		tags: ['React', 'TailwindCSS'],
		githubUrl: 'https://github.com/username/portfolio',
		liveUrl: 'https://portfolio.example.com',
	},
	{
		id: 2,
		title: 'Task Manager',
		description: 'A minimalist task management application',
		tags: ['TypeScript', 'React', 'Firebase'],
		githubUrl: 'https://github.com/username/task-manager',
		liveUrl: 'https://task-manager.example.com',
	},
	{
		id: 3,
		title: 'Weather App',
		description: 'Real-time weather application with location detection',
		tags: ['JavaScript', 'API', 'React'],
		githubUrl: 'https://github.com/username/weather-app',
		liveUrl: 'https://weather-app.example.com',
	},
];

const Projects = () => {
	return (
		<Layout>
			<div className="container-custom py-10">
				<h1 className="text-2xl font-bold mb-6 font-heading gradient-text subtle-glow">
					Projects
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{projects.map((project) => (
						<div key={project.id} className="animate-fade-in">
							<Card className="bg-secondary/20 border-white/5 card-hover h-full flex flex-col">
								<CardHeader>
									<h3 className="text-lg font-medium font-heading flex items-center">
										<Code size={18} className="mr-2 text-primary/80" />
										{project.title}
									</h3>
								</CardHeader>
								<CardContent className="flex-grow">
									<p className="text-sm text-muted-foreground mb-3">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-3">
										{project.tags.map((tag) => (
											<Badge
												key={tag}
												variant="outline"
												className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70 border-white/10"
											>
												{tag}
											</Badge>
										))}
									</div>
								</CardContent>
								<CardFooter className="flex justify-end gap-3 pt-2 border-t border-white/5">
									<a
										href={project.githubUrl}
										className="p-2 rounded-full hover:bg-white/5 text-foreground/70 hover:text-primary transition-colors duration-300"
										target="_blank"
										rel="noopener noreferrer"
										title="View Source Code"
									>
										<Github size={18} />
									</a>
									<a
										href={project.liveUrl}
										className="p-2 rounded-full hover:bg-white/5 text-foreground/70 hover:text-primary transition-colors duration-300"
										target="_blank"
										rel="noopener noreferrer"
										title="View Live Demo"
									>
										<ExternalLink size={18} />
									</a>
								</CardFooter>
							</Card>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Projects;
