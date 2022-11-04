import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
const footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a href="https://www.facebook.com/anakingmsr/">
          <FaFacebookF />
        </a>
        <a href="https://github.com/MohamedHamdy94">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-hamdy-ahmed-mohamed-138693219/">
          <BsLinkedin />
        </a>
      </div>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expeirience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </footer>
  );
};

export default footer;
