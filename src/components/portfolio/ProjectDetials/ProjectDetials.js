import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../assets/portfplio';
import Porject from '../../project/project';
import './detials.css'
const ProjectDetials = () => {
  const [project,setProject]=useState([])
const { id } = useParams();
const angular= data.angularProjects.find((project)=>project.id==id)

const react= data.reactProjects.find((project)=>project.id==id)
useEffect(() => {
  if(id){
    console.log(id)
    if(react){
  setProject(react.details)
}else if(angular){
  setProject(angular.details)
}else{
  alert("project not found")
}
  }
},[id])
  return (
    <div className="container  portfolio__container__detials">

      {project.map((project,i) => {
        return (
          <div className='m-3'>
            <Porject key={i} project={project}></Porject>
          </div>
        );
      })}
       <div className='portfolio__cta'>
              <a href={project.githup} className="btn " target="_blank">
                Github
              </a>
            
            
              <a href={project.link} className="btn  btn-primary" target="_blank">
                Live Demo
              </a>
        </div>     
            
    </div>
  );
};

export default ProjectDetials;
