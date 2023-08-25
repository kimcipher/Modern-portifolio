import React from "react";
import Navbar from "./components/Navbar"; 
import Header from "./components/Header"; 
import About from "./components/About"; 
import Project from "./components/Project";
import Testimonials from "./components/Testimonials"; 
import Project from "./components/Project";  
import Contact from "./components/Contact"; 
import Footer from "./components/Footer";
import "./style.css"; 

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`sm:px-16 px-6 flex justify-center items-center`}>
      <div className={`xl:max-w-[1280px] w-full`}>
        <Navbar />
        <Header />
        <About />
        <Project />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
