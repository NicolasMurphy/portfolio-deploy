import CarouselCarCar from "./CarouselCarCar";
import CarouselBookBounty from "./CarouselBookBounty";
import GitLab from "./Images/gitlab-svgrepo-com.png";
import CarouselBookBountyMobile from "./CarouselBookBountyMobile";

const Projects = () => {
  return (
    <>
      <div className="text-center">
        <div className="text-center w-full md:mt-[5%] mt-[10%]">
          <h1 className="fade-in text-5xl md:text-6xl font-bold">CarCar</h1>
          <p className="fade-in-2 text-xl md:text-2xl md:my-[3%] my-[8%]">
            A microservice application built with Django, React, and Docker
          </p>
          <div className="fade-in-2 mx-auto md:w-[5%] w-[10%] md:mb-[3%] mb-[7%]">
            <a
              href="https://gitlab.com/murphynick10/car-car"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitLab}></img>
            </a>
          </div>
        </div>
      </div>
      <CarouselCarCar />
      <div className="text-center">
        <div className="text-center w-full md:mt-[5%] mt-[10%]">
          <h1 className="fade-in-4 text-5xl md:text-6xl font-bold">
            BookBounty
          </h1>
          <p className="fade-in-4 text-xl md:text-2xl md:my-[3%] my-[8%]">
            A microservice application built with FastAPI, React, Redux ...
          </p>
          <div className="fade-in-4 mx-auto md:w-[5%] w-[10%] md:mb-[3%] mb-[7%]">
            <a
              href="https://gitlab.com/mod-3-group/bookbounty"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitLab}></img>
            </a>
          </div>
        </div>
      </div>
      <CarouselBookBounty />
      <CarouselBookBountyMobile />
    </>
  );
};

export default Projects;
