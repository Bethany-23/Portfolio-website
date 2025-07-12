
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaEnvelope } from "react-icons/fa";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent headerText="Contact" icon={<FaEnvelope size={40} />} />

      <div className="contact__container">
        <h3 className="contact__heading">Let's work together?</h3>
        <a href="mailto:bethanyaddis7@gmail.com" className="contact__button">
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
