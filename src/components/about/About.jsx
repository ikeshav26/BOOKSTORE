import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Aboutpart from "../Aboutpart";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[80vh]">
        <Aboutpart />
      </div>
      <Footer />
    </div>
  );
};

export default About;
