
import React from "react";

const Contact = () => {
  return (
    <section className="contact-section"> 
    <div className="container mx-auto">
      <h2 className="contact-title">Contact Me</h2> 
      <p className="contact-description">
        Feel free to reach out to me if you have any questions or
        collaboration opportunities. I'd love to hear from you!
      </p>
      <a
        href="mailto:contact@example.com"
        className="contact-link" 
      >
        Email Me
      </a>
    </div>
  </section>
);
};
export default Contact;
