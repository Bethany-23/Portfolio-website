
import './styles.scss';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© {new Date().getFullYear()} Betanya Addisalem. All rights reserved.</p>

        <div className="footer__socials">
          <a href="https://github.com/Bethany-23" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/be23" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:bethanyaddis7@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
