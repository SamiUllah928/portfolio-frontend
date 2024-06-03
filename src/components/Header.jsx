import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
// import { useState } from "useState";
export default function Header() {
  // const [first, setFirst] = useState(true);

  return (
    <div className="header">
      <div className="left">
        <h1>Port</h1>
        <h1>Folio.</h1>
      </div>
      <HiBars3BottomRight className="bar" />
      <div className="right">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
