import django from "./Images/Skills/django-svgrepo-com.png"
import python from "./Images/Skills/python-svgrepo-com.png"
import react from "./Images/Skills/react-javascript-js-framework-facebook-svgrepo-com.png"
import mongodb from "./Images/Skills/mongo-svgrepo-com.png"
import docker from "./Images/Skills/docker-svgrepo-com.png"
import postgresql from "./Images/Skills/postgresql-svgrepo-com.png"
import html from "./Images/Skills/html-5-svgrepo-com.png"
import css from "./Images/Skills/css-3-svgrepo-com.png"
import fastapi from "./Images/Skills/fastapi-svgrepo-com.png"
import javascript from "./Images/Skills/javascript-svgrepo-com.png"
import bootstrap from "./Images/Skills/bootstrap-fill-svgrepo-com.png"
import tailwindcss from "./Images/Skills/tailwindcss-icon-svgrepo-com.png"


const Skills = () => {
  return (
    <>
    <div className="flex flex-col items-center">
      <h1 className="txt text-3xl text-center my-4">Skills</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-16">
            <div><img width="100" src={django}></img></div>
            <div><img width="100" src={python}></img></div>
            <div><img width="100" src={react}></img></div>
            <div><img width="100" src={mongodb}></img></div>
            <div><img width="100" src={docker}></img></div>
            <div><img width="100" src={postgresql}></img></div>
            <div><img width="100" src={html}></img></div>
            <div><img width="100" src={css}></img></div>
            <div><img width="100" src={fastapi}></img></div>
            <div><img width="100" src={javascript}></img></div>
            <div><img width="100" src={bootstrap}></img></div>
            <div><img width="100" src={tailwindcss}></img></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
