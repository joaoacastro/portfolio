import React from "react";
import "./SocialMedia.css";

import icoLinkedin from "../img/ico/ico_linkedin.png";
import icoInstagram from "../img/ico/ico_instagram.png";
import icoGithub from "../img/ico/ico_github.png";

const SocialMedia = () => {
  return (
    <div className="socialMedias">
      <ul>
        <div className="linkedin-container">
          <a
            href="https://www.linkedin.com/in/joao-ac-castro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icoLinkedin} alt="icone linkedin" />
            <div className="linkedin">{/* <span>@joao-ac-castro</span> */}</div>
          </a>
        </div>
        <div className="github-container">
          <a
            href="https://github.com/joaoacastro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icoGithub} alt="icone github" />
            <div className="github">{/* <span>@joaoacastro</span> */}</div>
          </a>
        </div>
        <div className="instagram-container">
          <a
            href="https://www.instagram.com/jonnycastro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icoInstagram} alt="icone instagram" />
            <div className="instagram">{/* <span>@jonnycastro</span> */}</div>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default SocialMedia;
