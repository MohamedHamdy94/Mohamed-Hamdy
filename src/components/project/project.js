import React from 'react';
import { Link } from 'react-router-dom';

const Porject = (props) => {
  const { project } = props;
  console.log(project.description);
  return (
    <Link to={`project/${project.id}`}>
      <article className="portfolio__item ">
        <div className=" portfolio__image">
          {project.image && (
            <img
              src={require(`../../assets/imges/${project.image}`)}
              alt="Project image"
            />
          )}
          <h4>{project.name}</h4>
          <div className="portfolio__cta d-flex align-items-end">
            {project.githup && (
              <a href={project.githup} className="btn " target="_blank">
                Github
              </a>
            )}
            {project.link && (
              <a href={project.link} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            )}
            {project.description && (
              <ul>
              {project.description.map((description)=>{
                return(
                  <li>
                  {description} 
               </li>
                )
              })}
              </ul>
        
            )
            }
          </div>
        </div>
      </article>
    </Link>
  );
};
export default Porject;
