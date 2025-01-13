import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Project from "./Components/Project/Project"
import React, { useState, useEffect } from "react";
import './App.css'


function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

 

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme}/>
      <Home  theme={theme}/>
      <About />
      <Project />
      <Contact />
      <Footer theme={theme}/>
    </>
  )
}

export default App
