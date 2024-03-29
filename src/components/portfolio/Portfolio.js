import React from 'react';

import './portfolio.css';
import Porject from '../project/project.js';
import data from '../../assets/portfplio';

const Portfolio = () => {
  const reactProjects = data.reactProjects;
  console.log(reactProjects);

  const angularProjects = data.angularProjects;
  const fullStackProjects = data.fullStackProjects;
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>

      <h2>Portfolio</h2>
      <h3>React Projects</h3>
      <div className="container portfolio__container">
        {reactProjects.map((project, i) => {
          return (
            <>
              <Porject key={i} project={project}></Porject>
            </>
          );
        })}
      </div>

      <h3>Angular Projects</h3>
      <div className="container portfolio__container">
        {angularProjects.map((project, i) => {
          return (
            <>
              <Porject key={i} project={project}></Porject>
            </>
          );
        })}
      </div>

     <h3>Full Stack Projects</h3>
      <div className="container portfolio__container">
      {fullStackProjects.map((project) => {
          return (
            <>
              <Porject project={project}></Porject>
            </>
          )
        })} 
      </div>
    </section>
  );
};

export default Portfolio;
