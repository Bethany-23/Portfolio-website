import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import { Player } from '@lottiefiles/react-lottie-player';
import './styles.scss';
import devAnimation from '../../assets/lotties/dev.json';

const details = [
  { label: 'Name', value: 'Betanya Addisalem' },
  { label: 'Email', value: 'bethanyaddis7@gmail.com' },
  { label: 'Phone no', value: '+251933668090' },
];

const jobSummary = `
I’m a software engineer who enjoys building modern web applications and turning ideas into reliable, user-friendly products.
 I work with HTML, CSS, JavaScript, and React to create responsive, accessible, and visually consistent interfaces, 
 and I also have experience developing web applications that integrate backend services using Node.js, Express, and MongoDB. 
 I enjoy translating designs from Figma into working features, focusing on clarity, usability, and maintainable code.
  Always learning and improving, I value clean, scalable solutions and thoughtful user experiences.
`;

const About = ({ isSinglePage = false }) => {
  return (
    <section id="about" className={`about ${isSinglePage ? 'single-home' : ''}`}>
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} color={isSinglePage ? '#77BFA3' : undefined} />}
      />

      <div className="about__container">
        <div className="about__animation">
          <Player autoplay loop src={devAnimation} className="lottie-player" />
        </div>

        <div className="about__content">
          <Animate
            play
            duration={1.5}
            delay={0.3}
            start={{ transform: 'translateX(-800px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            <h3 className="section-heading">Software Developer</h3>
            <p className="job-summary">{jobSummary}</p>
          </Animate>

          <div className="section-divider" />

          <Animate
            play
            duration={1.5}
            delay={0.6}
            start={{ transform: 'translateX(500px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            <h3 className="section-heading">Personal Information</h3>
            <ul className="personal-info">
              {details.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
