import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaFolderOpen } from "react-icons/fa";
import "./styles.scss";

const projects = [
  {
    name: "Landing Page",
    client: "iCog Labs",
    date: "July 2025",
    description: "A responsive landing and home page using HTML, CSS, and Bootstrap.",
    github: "https://github.com/yourusername/landing-page"
  },
  {
    name: "Portfolio Website",
    client: "Personal",
    date: "June 2025",
    description: "My personal developer portfolio built with React and SCSS.",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    name: "SkillBoost",
    client: "Project",
    date: "May 2025",
    description: "A skill sharing app using Flutter.",
    github: "https://github.com/yourusername/todo-app"
  }
];

const Portfolio = ({ isSinglePage = false }) => {
  return (
    <section id="portfolio" className={`porfolio ${isSinglePage ? 'single-home' : ''}`}>
      <PageHeaderContent headerText="Portfolio" icon={<FaFolderOpen size={40} color={isSinglePage ? '#77BFA3' : undefined}/>} />
      <div className="portfolio__timeline">
        {projects.map((project, index) => (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__timeline__item"
            key={index}
          >
            <h3>{project.name}</h3>
            <h4>{project.client}</h4>
            <p className="date">{project.date}</p>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
