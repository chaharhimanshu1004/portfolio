export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and TailwindCSS",
    tags: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio.example.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A minimalist task management application",
    tags: ["TypeScript", "React", "Firebase"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://task-manager.example.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather App",
    description: "Real-time weather application with location detection",
    tags: ["JavaScript", "API", "React"],
    githubUrl: "https://github.com/username/weather-app",
    liveUrl: "https://weather-app.example.com",
    featured: false
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);