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
        <div className="welcome">
          <h3>Hello & Welcome, It's Me</h3>
          <h1>SamiUllah.</h1>
        </div>
        <h3>
          And I'm A <span className="highlight">FrontEnd Developer</span>
        </h3>
        <h4>
          Front-end developer skilled in HTML, CSS, JavaScript, and React.js,
          seeking an internship to build dynamic, responsive web applications
          and grow in a collaborative environment.
        </h4>
        <div className="icons">
          <a href="https://www.facebook.com/samiullah.seith">
            <FaFacebook className="facebook" />
          </a>

          <a href="https://www.instagram.com/iamsami4009/">
            <FaInstagram className="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/samiullah-iqbal/">
            <FaLinkedin className="linkedin" />
          </a>
          <a href="https://wa.me/+923486084875">
            <FaWhatsapp className="whatsapp" />
          </a>
        </div>
        <a href="Samiullah cv.pdf" download>
          <button id="download-cv">Download CV</button>
        </a>
      </div>
      <div className="my-image">
        <img src={myImage} alt="No Internet" />
      </div>
    </div>
  );
}
