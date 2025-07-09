import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaLaptopCode } from "react-icons/fa";
import "./styles.scss";

const frontendSkills = ["HTML", "CSS", "Bootstrap", "Tailwind","JavaScript", "React", , "Flutter", "Kotlin"];
const designSkills = ["Photoshop", "Illustrator", "Canva", "Figma"];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="Skills" icon={<FaLaptopCode size={40} />} />

      <div className="skills__category">
        <h4 className="category__title">Frontend Development</h4>
        <div className="skills__list">
          {frontendSkills.map((skill, i) => (
            <div className="skill__box fadeInUp" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <FaCheckCircle className="check" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills__category graphic">
        <h4 className="category__title">Graphic Design</h4>
        <div className="skills__list">
          {designSkills.map((skill, i) => (
            <div className="skill__box fadeInUp" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <FaCheckCircle className="check" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
