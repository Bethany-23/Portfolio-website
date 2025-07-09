
import Home from '../home';
import About from '../about';
import Skills from '../skills';
import Portfolio from '../portfolio';
import Contact from '../contact';
import './styles.scss';
const SinglePageHome = () => {
  return (
    <>
      <section id="home" className="page-section home-section"><Home /></section>
      <section id="about" className="page-section about-section single-home"><About isSinglePage/></section>
      <section id="skills" className="page-section skills-section"><Skills /></section>
      <section id="portfolio" className="page-section portfolio-section single-home"><Portfolio isSinglePage/></section>
      <section id="contact" className="page-section contact-section"><Contact /></section>
    </>
  );
};

export default SinglePageHome;
