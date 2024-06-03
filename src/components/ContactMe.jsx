import React from "react";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

export default function ContactMe() {
  // const navigate = useNavigate();
  // const handleHeader = () => {
  //   navigate("/");
  // };
  return (
    <div className="contact-me">
      <div className="contact">
        <h1>
          Contact <span className="highlight">Me</span>
        </h1>
      </div>
      <div className="main-section">
        <div className="work-togather">
          <h2>Lets Work Together</h2>
          <p>
            Unlock the potential of your website with a passionate front-end
            developer. I specialize in creating seamless, interactive web
            experiences using HTML, CSS, JavaScript, and React.js. Let's
            collaborate to bring your digital ideas to life and make your vision
            a reality.
          </p>
          <div className="call-box">
            <MdEmail id="box" />
            <p>samiullahiqbal5@gmail.com</p>
          </div>
          <div className="call-box">
            <IoCall id="box" />
            <p>+92348-6084875</p>
          </div>
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
        </div>
        <div className="input-fields">
          <input type="text" placeholder="Enter your Name" required />
          <input type="text" placeholder="Enter Email" required />
          <input type="text" placeholder="Subject" required />
          <button id="submit">Submit</button>
        </div>
      </div>
      <p>&copy; 2024 SamiUllah</p>
    </div>
  );
}
