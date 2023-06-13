import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Footer from "./Footer";
import Nav from "./Nav";
import Projects from "./Projects"
import Contact from "./Contact"
import { useEffect, useState } from "react";
import dark_mode_icon from "./Images/dark-mode-icon-blue.png";
import light_mode_icon from "./Images/light-mode-icon-orange.png";


function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
    handleThemeSwitch();
  }, []);
  useEffect(() => {
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      let image = document.getElementById("theme-toggle-icon");
      image.removeAttribute("src");
      image.setAttribute("src", light_mode_icon);

      let mainDiv = document.getElementById("main-div");
      mainDiv.removeAttribute("data-theme");
      mainDiv.setAttribute("data-theme", "business");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      let image = document.getElementById("theme-toggle-icon");
      image.removeAttribute("src");
      image.setAttribute("src", dark_mode_icon);

      let mainDiv = document.getElementById("main-div");
      mainDiv.removeAttribute("data-theme");
      mainDiv.setAttribute("data-theme", "corporate");
    }
  };
  return (
<>
  <div id="main-div" data-theme="business">
    <div className="mx-auto min-w-screen min-h-screen">
      <div className="navbar">
        <Nav />
        <div className="navbar-end">
          <button
            onClick={handleThemeSwitch}
            id="theme-toggle"
            type="button"
            className="mr-2"
          >
            <img
              className="h-10"
              id="theme-toggle-icon"
              src={light_mode_icon}
              alt="Theme Icon"
            ></img>
          </button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"contact/"} element={<Contact />} />
        <Route path={"projects/"} element={<Projects />} />
      </Routes>

    </div>
    <Footer />
  </div>
</>
  );
};


export default App;
