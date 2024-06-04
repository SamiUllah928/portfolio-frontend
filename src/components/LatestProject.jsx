import React from "react";
import json from "./json.PNG";

export default function LatestProject() {
  return (
    <div className="latest-project">
      <h1>
        Latest <span className="highlight">Projects</span>
      </h1>
      <div className="project-folder">
        <a href="https://crud-json-server-zeta.vercel.app/">
          <img src={json} alt="" />
        </a>
      </div>
    </div>
  );
}
