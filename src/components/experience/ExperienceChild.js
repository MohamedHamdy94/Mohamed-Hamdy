import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs';

const ExperienceChild = (props) => {
  const { project } = props;
console.log(project)
  return (
    <article className="experience__details">
      <div>

    <BsPatchCheckFill className="experience__icon"/>
      </div>
    <div>
    <h4>{project.experienceName}</h4>
   {/* {project.experienceDegree&& <small className='text-light'>{project.experienceDegree}</small>}  */}
    </div>

  </article>
  )
}

export default ExperienceChild