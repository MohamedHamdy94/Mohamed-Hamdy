import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../../assets/portfplio';
import Porject from '../../project/project';
import './detials.css';
const ProjectDetials = () => {
  const [ProjectDetials, setProjectDetials] = useState([]);
  const [project, setProject] = useState([]);

  const { id } = useParams();
  const angular = data.angularProjects.find((project) => project.id == id);

  const react = data.reactProjects.find((project) => project.id == id);
  const fullStack = data.fullStackProjects.find((project) => project.id == id);

  useEffect(() => {
    if (id) {
      console.log(id);
      if (react) {
        setProject(react);
        setProjectDetials(react.details);
      } else if (angular) {
        setProject(angular);
        setProjectDetials(angular.details);
      } else if (fullStack) {
        setProject(fullStack);
        setProjectDetials(fullStack.details);
      } else {
        alert('project not found');
      }
    }
  },[id,angular,react]);
  return (<>
    <Link to={'/'} className="btn btn-primary home">
   Home
  </Link>

    <div className="container  portfolio__container__detials">
      {ProjectDetials.map((project, i) => {
        return (
          <div key={i} className="m-3">
            <Porject  project={project}></Porject>
          </div>
        );
      })}
      <div className="portfolio__cta">
        <a href={project.githup} className="btn " target="_blank" rel='noreferrer'>
          Github
        </a>

        
        {project.link && (
            <a href={project.link} className="btn btn-primary" target="_blank" rel='noreferrer'>
              Live Demo
            </a>
          )}
      </div>
    </div>
  </>
  );
};

export default ProjectDetials;
