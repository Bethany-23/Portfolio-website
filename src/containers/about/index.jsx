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
Software Engineer with a strong foundation in building modern web applications using JavaScript and React.
 With a background in UI/UX and Graphic Design, I bring a user-centered approach to both interface design 
 and implementation, ensuring products are as functional as they are intuitive. Currently deepening my expertise 
 within the AI stream of Software Engineering, I am focused on bridging the gap between design-driven frontends and 
 emerging AI technologies to build the next generation of web experiences.
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
