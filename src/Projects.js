import React from 'react';
import { ProjectCard } from './components/ProjectCard';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "medium blog",
    description: "writing down my ideas and showcasing my work",
    tags: ["tech", "ui/ux design", "product management"],
    website: "https://medium.com/@rohansaxena1738",
    image: "/project_images/blog_image.jpg"
  },
  {
    id: 2,
    title: "github",
    description: "projects i did as i was learning how to code",
    tags: ["python", "machine learning", "flutter"],
    website: "https://github.com/RohanSaxena1224",
    image: "/project_images/github_image.jpg"
  }
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard 
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}