import React from 'react';

export const ProjectCard = ({ title, description, tags, website, image }) => (
  <div className="project-card">
    <img src={image} alt={title} className="project-image" />
    <div className="project-content">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={website} target="_blank" rel="noopener noreferrer" className="project-link">website</a>
      </div>
    </div>
  </div>
);
