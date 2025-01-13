import React from 'react'
import shoeon from '../../assets/shoeon.png'
import weather from '../../assets/weather-app.png'
import netflix from '../../assets/netflix-clone.png'
import './Project.css'

const Project = () => {

  const projects = [
    {
      title: "ShoeON E-commerce website",
      description: "An e-commerce website for sports and casual shoes with product listings, cart functionality, and more.",
      techStack: ["HTML", "CSS", "JavaScript", "Vite"],
      link: "https://shoeon-store.netlify.app", 
      image: shoeon, 
    },
    {
      title: "Weather App",
      description: "A JavaScript application that fetches and displays weather information based on user input.",
      techStack: ["HTML", "CSS", "JavaScript", "API"],
      link: "http://temp-tracker-js.netlify.app",
      image: weather,
    },
    {
      title: "Netflix Clone",
      description: "A simple Netflix homepage clone built using HTML and CSS.",
      techStack: ["HTML", "CSS"],
      link: "http://my-static-clone-web.netlify.app", 
      image: netflix, 
    },
  ];

  
  return (
    <div id='project'>
    <h2 className='title'>My Projects</h2>
    <div className="projects-container">
      
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Tech Stack:</strong> {project.techStack.join(", ")}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
    </div>
  );
  
}

export default Project