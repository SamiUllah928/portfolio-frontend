import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import myImage from "./sami.jpg";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h3>Hello & Welcome, It's Me</h3>
        <h1>SamiUllah.</h1>
        <h3>
          And I'm A <span className="highlight">FrontEnd Developer</span>
        </h3>
        <h4>
          Front-end developer skilled in HTML, CSS, JavaScript, and React.js,
          seeking an internship to build dynamic, responsive web applications
          and grow in a collaborative environment.
        </h4>
        <div className="icons">
          <FaFacebook className="facebook" />
          <FaInstagram className="instagram" />
          <FaLinkedin className="linkedin" />
          <FaWhatsapp className="whatsapp" />
        </div>
        <button id="download-cv">Download CV</button>
      </div>
      <div className="my-image">
        <img src={myImage} alt="No Internet" />
      </div>
    </div>
  );
}
