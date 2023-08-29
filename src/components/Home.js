import React, { useEffect, useState } from 'react';
import Header from './header/header';
import Nav from './nav/Nav';
import About from './about/About';
import Experience from './experience/experience';
import Services from './Services/Services';
import Portfolio from './portfolio/Portfolio';
import Testimonials from './testimonials/testimonials';
import Contact from './contact/Contact';
import './styleStar.css';

const Home = () => {
  
  const [newElement, setnewElement] = useState([]);
  useEffect(() => {
    // setDivelement(element.length=100)
    const array = [];
    for (let i = 1; i <=2; i++) {
      array.push(
        <>
         
          <div className="star"></div>
        </>
      );
    }
    setnewElement(array);
  }, []);
  return (
    <>


          <div className=" stars">
        {newElement.map((item) => {
          return item;
        })}
      </div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />


    </>
  );
};

export default Home;