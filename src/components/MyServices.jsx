import React from "react";
import { MdOutlinePanTool } from "react-icons/md";
import { BsFiletypeCss } from "react-icons/bs";
import { GrIntegration } from "react-icons/gr";
import { DiWebplatform } from "react-icons/di";
import { useNavigate } from "react-router-dom";

export default function MyServices() {
  const navigate = useNavigate();
  return (
    <div className="MyServices">
      <h1>
        My <span className="highlight">Services</span>
      </h1>
      {/* card  */}
      <div className="service-cards">
        <div className="cardOne">
          <MdOutlinePanTool className="cards-icon" />
          <h1>Custom Web App</h1>
          <p>
            I specialize in creating dynamic and responsive web applications
            using HTML, CSS, JavaScript, and React.js. Let me help you improve
            your online presence with user-friendly and attractive websites.
          </p>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </div>
        <div className="cardOne">
          <BsFiletypeCss className="cards-icon" />
          <h1>Responsive Design</h1>
          <p>
            I design and develop responsive websites using HTML, CSS,
            JavaScript, and React.js. Your website will look and function
            perfectly on desktops, tablets, and mobile devices, providing a
            seamless user experience.
          </p>
          <button onClick={() => navigate("/contact")}>Hire now</button>
        </div>
        <div className="cardOne">
          <GrIntegration className="cards-icon" />
          <h1>API Development</h1>
          <p>
            Utilizing my skills in HTML, CSS, JavaScript, and React.js, I
            develop interactive and responsive web applications. Enhance your
            website's functionality and user experience with modern,
            well-crafted front-end solutions.
          </p>
          <button onClick={() => navigate("/contact")}>hire</button>
        </div>

        <div className="cardOne">
          <DiWebplatform className="cards-icon" />
          <h1>Web Maintenance</h1>
          <p>
            I offer website maintenance services, ensuring your site stays
            up-to-date, secure, and performs well. I handle updates, fix bugs,
            and improve the user experience so you can focus on growing your
            business.
          </p>
          <button onClick={() => navigate("/contact")}>Hire me </button>
        </div>
      </div>
    </div>
  );
}
