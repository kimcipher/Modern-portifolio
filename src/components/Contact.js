import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div
        className="container d-flex flex-column align-items-center"
        style={{ minHeight: '20vh' }}
      >
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          Don't hesitate to get in touch should you have inquiries or potential
          collaboration prospects. Your thoughts are important to me!
        </p>
        <a href="mailto:havierkim@gmail.com" className="contact-link mt-4">
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
