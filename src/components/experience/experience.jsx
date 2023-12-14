import React from 'react';
import './experience.css';
import data from '../../assets/portfplio';

import ExperienceChild from './ExperienceChild';

const frontendExperience = data.experience.frontend;
const backendExperience = data.experience.backend;

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendExperience.map((project,i) => {
              return (
                <div key={i}>
                  <ExperienceChild project={project} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backtend Development</h3>
          <div className="experience__content">
            {backendExperience.map((project,i) => {
              return (
                <div key={i}>
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
