import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import "./Projects.css";
import { BsFillCursorFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
//import data from '../assets/projects';
import data from '../assets/portfplio';
import projects from '../assets/projects';


import SingleProject from "./SingleProject";
// import ImageLode from "../../components/ImageLode";
import img from '../assets/imges/Cars.png'

import { LazyLoadImage } from "react-lazy-load-image-component";
import SectionTitle from "./SectionTitle";
import Nav from "./nav/Nav";
// const projects = [
//   {
//     image: [
//       img
//     ],
//     name: "E-Commerce",
//     github: "https://github.com/Mohammed-Shaaban-Ali/E-Commerce_Frontend",
//     link: "https://e-commerce-v8ra.onrender.com/",
//     category: "Full Stack",
//   },
//   {
//     image: [img],
//     name: "Blog App",
//     github: "https://github.com/Mohammed-Shaaban-Ali/blog-frontend",
//     link: "https://blog-website1.web.app/",
//     category: "Full Stack",
//   },
//   {
//     image: [img],
//     name: "Fashion Studio",
//     github: "https://github.com/Mohammed-Shaaban-Ali/wibe-studio",
//     link: "https://wibe-studio.pages.dev/",
//     category: "React",
//   },
//   {
//     image: [img],
//     name: "News-Website",
//     github: "https://github.com/Mohammed-Shaaban-Ali/News-Website",
//     link: "https://news-website-1.web.app/",
//     category: "React",
//   },

//   {
//     image: [ img],
//     name: "YouTube Clone",
//     github: "https://github.com/Mohammed-Shaaban-Ali/youtube_clone",
//     link: "https://fir-26dc7.web.app/",
//     category: "React",
//   },
//   {
//     image: [
//       img
//     ],
//     name: "Admin Dashboard",
//     github: "https://github.com/Mohammed-Shaaban-Ali/Dashboard",
//     link: "https://dashboard-kappa-plum.vercel.app/",
//     category: "React",
//   },
//   {
//     image: [img],
//     name: "Chat App",
//     github: "https://github.com/Mohammed-Shaaban-Ali/Whatsapp-Frontend",
//     link: "https://whatsapp-frontend-five.vercel.app/",
//     category: "Full Stack",
//   },
//   {
//     image: [img],
//     name: "Ro Do List",
//     github: "https://github.com/Mohammed-Shaaban-Ali/Task",
//     link: "https://task1-theta-gilt.vercel.app/",
//     category: "React",
//   },
//   {
//     image: [img],
//     name: "XO-Game",
//     github: "https://github.com/Mohammed-Shaaban-Ali/xo-game-react",
//     link: "https://xo-game-react-sooty.vercel.app/",
//     category: "React",
//   },
//   {
//     image: [img],
//     name: "E-Commerce Dashboard",
//     github: "https://github.com/Mohammed-Shaaban-Ali/E-Commerce_Admin",
//     link: "https://e-commerce-admin-gly7.onrender.com/",
//     category: "Full Stack",
//   },

//   {
//     image: [img],
//     name: "Special-Design",
//     github: "https://github.com/Mohammed-Shaaban-Ali/Special-Design",
//     link: "https://mohammed-shaaban-ali.github.io/Special-Design/",
//     category: "JavaScript",
//   },
//   {
//     image: [img,img],
//     name: "my-first-project",
//     github: "https://github.com/Mohammed-Shaaban-Ali/my-first-project",
//     link: "https://mohammed-shaaban-ali.github.io/my-first-project/",
//     category: "JavaScript",
//   },
// ];

const Projects = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  //const [projects, setProjects] = useState(null);
  const [open, setopen] = useState(null);
  const [projectLoop, setprojectLoop] = useState(null);
  const [categor, setcategor] = useState("All");
  console.log(data)

  useEffect(() => {
   // setProjects(data)
    // if (pathname === "/") setcategor("All");
    if (categor === "All") {
      console.log('All')
      console.log(projects)
      setprojectLoop(projects);

    } else if (categor === "React") {
      setprojectLoop( projects.filter((project) => project.category === "React"));
    } else if (categor === "Angular") {
      setprojectLoop( projects.filter((project) => project.category === "Angular"));
    } else if (categor === "MERN") {
      setprojectLoop( projects.filter((project) => project.category ==="MERN"));
    } else {
      setprojectLoop( projects.filter((project) => project.category === "MEAN"));
    }
  }, [categor]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <section id="portfolio">
    <h5>My Recent Work</h5>

    <h2>Portfolio</h2>

    <div className=" relative w-full overflow-hidden-web flex justify-center">
        <div className="blur projectblur"></div>
        <div className="blur projectblu2"></div>
        <div className="w-full  flex flex-col xl:w-[70%]">
          <div className="w-full">
            {/* <SectionTitle title={title} subtitle={subtitle} /> */}
          </div>
          <div className="">
      
            <div className=" containerimage  ">
              {projectLoop?.map((project, index) => {
                return (
                  <div
                    data-aos="zoom-out-up"
                    key={index}
                    className="dirction cardimage"
                  >
                    <div className=" imagecontent">
                      <div className="overlaycard"></div>
                      <div className="image">
                        <LazyLoadImage
                          // effect="black-and-white"
                          // placeholderSrc={logo}
                          // width="100%"
                          // height="100%"
                          src={require(`../assets/imges/${project.image}`)}
                          alt={project.name}
                        />
                      </div>
                      <div className="cardicon">
                        <a href={project.github} target="_blank">
                          <AiFillGithub />
                        </a>
                        <a href={project.link} target="_blank">
                          <BsFillCursorFill />
                        </a>
                        <div onClick={() => setopen(project)}>
                          <BsFillEyeFill />
                        </div>
                      </div>
                    </div>
                    <div className="projectContent">
                      <h5>{project.name}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {open && <SingleProject setopen={setopen} project={open}  />}
      </div>
    </section>
  );
};

export default Projects;
