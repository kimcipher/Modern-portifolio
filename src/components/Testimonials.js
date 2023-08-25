
import React from "react";

const testimonials = [
  {
    name: "Jane Doe",
    content: "John is a talented developer who delivered exceptional work on our project.",
  },
  {
    name: "Michael Smith",
    content: "I was impressed by John's attention to detail and problem-solving skills.",
  },
  // Add more testimonials
];

const Testimonials = () => {
  return (
    <section className="testimonials-section"> 
      <div className="container mx-auto">
        <h2 className="testimonials-title">Testimonials</h2> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card" 
            >
              <p className="testimonial-content">{testimonial.content}</p> 
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
