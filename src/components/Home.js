import React from 'react';
import Header from './header/header';
import Nav from './nav/Nav';
import About from './about/About';
import Experience from './experience/experience';
import Services from './Services/Services';
import Portfolio from './portfolio/Portfolio';
import Testimonials from './testimonials/testimonials';
import Contact from './contact/Contact';
const Home = () => {
  return (
    <>
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
