
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent/index";
import {Animate} from 'react-simple-animate'
import './styles.scss'

const details = [
    {
        label: 'Name',
        value: 'Betanya',
    },
    {
        label: 'Email',
        value: 'bbbbbb@gmail.com',
    },
    {
        label: 'Phone no',
        value: '123456789'
    },   
];
const jobSummary = "I'm a Frontend Developer who loves bringing ideas to life on the web. I specialize in building responsive, accessible, and visually clean interfaces using HTML, CSS, JavaScript, and React. Whether it’s creating smooth animations, pixel-perfect layouts, or turning a Figma design into a live website, I enjoy crafting user experiences that feel intuitive and engaging. I'm always learning, always improving—and passionate about writing clean code that scales.";

const About = () =>{
    return(
       <section id="about" className="about">
        <PageHeaderContent 
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
         <Animate play duration={1.5} delay={1}
            start= {{
                transform: 'translatex(-800px)'
            }}
            end= {{
                transform: 'translatex(0px)'
            }}>
        <h3>Frontend Developer</h3>
        <p>{jobSummary}</p>
        </Animate>

        <Animate play duration={1.5} delay={1}
            start= {{
                transform: 'translatex(500px)'
            }}
            end= {{
                transform: 'translatex(0px)'
            }}>
        <h3> Personal information</h3>
        <ul>{details.map((item,i)=>(
            <li key={i}>
                <span className='title'>{item.label}</span>
                <span className='value'>{item.value}</span>
        </li>
        ))
        }
        </ul>
        </Animate>
      </div>
       </section>
    )
}

export default About;