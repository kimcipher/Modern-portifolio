
import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p className="mb-4">
          Feel free to reach out to me if you have any questions or
          collaboration opportunities. I'd love to hear from you!
        </p>
        <a
          href="mailto:contact@example.com"
          className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
