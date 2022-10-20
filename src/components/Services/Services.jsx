import React from 'react'
import { BiCheck } from 'react-icons/bi';
import data from '../../assets/portfplio';

import './services.css'

const WebDevelopment = data.services.WebDevelopment;
const UI_UX_Design = data.services.UI_UX_Design;

const Services = () => {

  return (   
  <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
<article className='service'>
<div className='service__head'>
<h3>Web Development</h3> 
</div>
 <ul className=' service__list'>
 {WebDevelopment.map((service) => {
return (
  <li>
    <div>

<BiCheck className='service__list-icon' /> 
   </div>  <p>{service}</p> 
  </li>)
 })}
</ul>
</article>

<article className='service'>
<div className='service__head'>
<h3>UI/UX Design</h3> 
</div>
 <ul className=' service__list'>
 {UI_UX_Design.map((service) => {
return (
  <li>
    <div>

 <BiCheck className='service__list-icon' /> 
    </div>
  <p>{service}</p> 
  </li>)
 })}
</ul>

</article>

</div>
    </section>
  )

}



export default Services;