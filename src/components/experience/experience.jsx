import React from 'react';
import './experience.css';
import data from '../../assets/portfplio';

import ExperienceChild from './ExperienceChild';

const frontendExperience = data.experience.frontend;
console.log(frontendExperience);
const backendExperience = data.experience.backend;
console.log(backendExperience);

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendExperience.map((project) => {
              return (
                <div key={project.experienceName}>
                  <ExperienceChild project={project} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backtend Development</h3>
          <div className="experience__content">
            {backendExperience.map((project) => {
              return (
                <div key={project.experienceName}>
                  <ExperienceChild project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
