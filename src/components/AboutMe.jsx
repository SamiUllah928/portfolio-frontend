import React from "react";
import myPic from "./sami.jpg";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <img src={myPic} alt="No Internet" />
      <div className="experience">
        <h1>
          About<span className="highlight">Me</span>
        </h1>
        <p>
          I am a motivated and detail-oriented front-end developer with a
          passion for creating engaging user experiences. With a Bachelor's
          degree in Information Technology and hands-on experience in HTML, CSS,
          JavaScript, and React.js, I am eager to contribute to innovative
          projects and expand my skills in a dynamic software development
          environment. I thrive in collaborative settings, enjoy
          problem-solving, and am committed to continuous learning and growth.
        </p>
      </div>
    </div>
  );
}
