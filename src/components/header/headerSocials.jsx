import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiDribbble} from "react-icons/fi"
import { FaFacebookF } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/mohamed-hamdy-ahmed-mohamed-138693219/" target="_blank"><BsLinkedin/></a>
      
      <a href="https://github.com/MohamedHamdy94" target="_blank"><FaGithub/></a>
      <a href="https://www.facebook.com/anakingmsr/">
          <FaFacebookF />
        </a>
      {/* <a href="linked" target="_blank"><FiDribbble/></a> */}

    </div>
  )
}

export default HeaderSocials ;