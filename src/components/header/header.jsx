import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/imges/1665737760219.png';
import Tilt from 'react-vanilla-tilt'

import HeaderSocials from './headerSocials';
/*
{
    reverse:           false,  // reverse the tilt direction
    max:               35,     // max tilt rotation (degrees)
    perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:             300,    // Speed of the enter/exit transition
    transition:        true,   // Set a transition on enter/exit.
    axis:              null,   // What axis should be disabled. Can be X or Y.
    reset:             true,   // If the tilt effect has to be reset on exit.
    easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare:             false,   // if it should have a "glare" effect
    "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
                               // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
}
*/
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Mohamed Hamdy</h1>
        <h5 className="text-light ">Full Stak Developer</h5>
        <CTA />
        <HeaderSocials />
 
        <Tilt className="me" style={{}}>

          <img src={ME} alt="me" />
        </Tilt>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>

    </header>
  );
};

export default header;
