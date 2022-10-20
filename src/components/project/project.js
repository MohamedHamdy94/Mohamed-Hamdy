import React from 'react';

const Porject = (props) => {
  const { project } = props;
  return (
    <article className="portfolio__item ">
      <div className=" portfolio__image">
        <img
          src={require(`../../assets/imges/${project.image}`)}
          alt="Project image"
        />
        <h4>{project.name}</h4>
        <div className="portfolio__cta d-flex align-items-end">
          <a href={project.githup} className="btn " target="_blank">
            Github
          </a>
          {project.link && (
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
            
          )}
        </div>
      </div>
    </article>
  );
};
export default Porject;
