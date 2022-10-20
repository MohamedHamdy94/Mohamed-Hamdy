import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/imges/1665737760219.png';
import Me from '../../assets/imges/IMG20220815155356.jpg';

import HeaderSocials from './headerSocials';

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Mohamed Hamdy</h1>
        <h5 className="text-light ">Full Stak Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
