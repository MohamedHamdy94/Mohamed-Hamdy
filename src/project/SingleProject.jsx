import './Projects.css';

// import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import required modules
// import { Keyboard, Pagination, Navigation } from "swiper/modules";

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SingleProject = ({ setopen, project }) => {
  console.log(project);
  return (
    <div className="dirction gallary">
      <div onClick={() => setopen(null)} className="over"></div>
      <div className="boxcontainer">
        <div className="imageslider">
          <Carousel className="slidercontainar">
            {/* {project?.map((url, i) => (
              <div className="singleimage" key={i}>
                <img
                  src={require(`../assets/imges/${project.image}`)}
                  alt="url"
                />
              </div>
            ))} */}
                     <div className="singleimage" >
                <img
                  src={require(`../assets/imges/${project.image}`)}
                  alt="url"
                />
              </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
