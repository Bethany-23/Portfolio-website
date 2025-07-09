import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import { Player } from '@lottiefiles/react-lottie-player';
import './styles.scss';
import devAnimation from '../../assets/lotties/dev.json';

const details = [
  { label: 'Name', value: 'Betanya' },
  { label: 'Email', value: 'bbbbbb@gmail.com' },
  { label: 'Phone no', value: '123456789' },
];

const jobSummary = `
I'm a Frontend Developer who loves bringing ideas to life on the web. 
I specialize in building responsive, accessible, and visually clean interfaces using HTML, CSS, JavaScript, and React. 
Whether it’s creating smooth animations, pixel-perfect layouts, or turning a Figma design into a live website, 
I enjoy crafting user experiences that feel intuitive and engaging. 
I'm always learning, always improving and passionate about writing clean code that scales.
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
            <h3 className="section-heading">Frontend Developer</h3>
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
