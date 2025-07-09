import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaEnvelope } from "react-icons/fa";
import "./styles.scss";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent headerText="Contact" icon={<FaEnvelope size={40} />} />
      <form className="contact__form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
