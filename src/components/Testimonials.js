
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
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
