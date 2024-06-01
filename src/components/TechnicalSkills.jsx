import React from "react";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { PiFileCssFill } from "react-icons/pi";

export default function TechnicalSkills() {
  return (
    <div className="skills">
      <div className="technical">
        <h1>Technical Skills</h1>
        <div className="html-icon-skill">
          <div className="html-icon">
            <FaHtml5 id="html" />
          </div>
          <p>HTML</p>
          <div className="html-per-full">
            <div className="html-per-half"></div>
            <div className="percentage">80%</div>
          </div>
        </div>
        <div className="html-icon-skill">
          <div className="html-icon">
            <FaCss3 id="css" />
          </div>
          <p>CSS</p>
          <div className="css-per-full">
            <div className="css-per-half"></div>
            <div className="seventy">70%</div>
          </div>
        </div>
        <div className="html-icon-skill">
          <div className="html-icon">
            <PiFileCssFill id="css" />
          </div>
          <p>Responsive Web</p>
          <div className="responsive-per-full">
            <div className="responsive-per-half"></div>
            <div className="sixty-five">65%</div>
          </div>
        </div>
        <div className="html-icon-skill">
          <div className="html-icon">
            <IoLogoJavascript id="javascript" />
          </div>
          <p>javaScript</p>
          <div className="java-per-full">
            <div className="java-per-half"></div>
            <div className="sixty">60%</div>
          </div>
        </div>
        <div className="html-icon-skill">
          <div className="html-icon">
            <FaReact id="react" />
          </div>
          <p>React</p>
          <div className="java-per-full">
            <div className="java-per-half"></div>
            <div className="sixty">60%</div>
          </div>
        </div>
        <div className="html-icon-skill">
          <div className="html-icon">
            <FaGithub id="git" />
          </div>
          <p>Git</p>
          <div className="css-per-full">
            <div className="css-per-half"></div>
            <div className="seventy">70%</div>
          </div>
        </div>
      </div>

      <div className="professional">{/* <h1>Professional Skills</h1> */}</div>
    </div>
  );
}
