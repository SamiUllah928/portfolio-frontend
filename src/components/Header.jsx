import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
// import { useState } from "useState";
export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClicked = () => {
    setOpen(!open);
  };
  return (
    <div className="header-main">
      <div className="header">
        <div className="left">
          <h1>Port</h1>
          <h1>Folio.</h1>
        </div>
        <HiBars3BottomRight className="bar" onClick={handleClicked} />

        <div className="right ">
          <ul>
            <li onClick={() => navigate("/")}>
              <a>Home</a>
            </li>
            <li onClick={() => navigate("/services")}>
              <a>Services</a>
            </li>
            <li onClick={() => navigate("/skills")}>
              <a>Skills</a>
            </li>
            <li onClick={() => navigate("/project")}>
              <a>Projects</a>
            </li>
            <li onClick={() => navigate("/about")}>
              <a>About</a>
            </li>
            <li onClick={() => navigate("/contact")}>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {open && (
        <div className="mobile-ul">
          <ul>
            <li onClick={() => navigate("/")}>
              <a>Home</a>
            </li>
            <li onClick={() => navigate("/services")}>
              <a>Services</a>
            </li>
            <li onClick={() => navigate("/skills")}>
              <a>Skills</a>
            </li>
            <li onClick={() => navigate("/project")}>
              <a>Projects</a>
            </li>
            <li onClick={() => navigate("/about")}>
              <a>About</a>
            </li>
            <li onClick={() => navigate("/contact")}>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
