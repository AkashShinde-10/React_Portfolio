import React from 'react'
import { Link } from 'react-scroll'
import "./Navbar.css"
import photo from '../../assets/portfolioLogo.webp'
import { useState } from 'react'

const Navbar = ({ toggleTheme, theme }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav'>
      <div className="logo">
        <img src={photo} alt="" />
      </div>
     <div  className={`links ${isOpen ? "open" : ""} ${theme}`}>
     <ul>
        <li onClick={() => setIsOpen(false)}> <Link  to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"> Home </Link>  </li>
        <li onClick={() => setIsOpen(false)}><Link  to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active">About</Link></li>
        <li onClick={() => setIsOpen(false)}><Link  to="project"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active">Projects</Link></li>
        <li onClick={() => setIsOpen(false)}><Link  to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"> Contact</Link></li>
      </ul>
     </div>
    <div className="nav-toggle">
    <button onClick={toggleTheme} className="toggle-button">{theme === "light" ? <svg className='toggle-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" className='toggle-icon' fill='orange' viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>} </button>
     <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <svg  className= {`${theme}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> : <svg className= {`${theme}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>}
        </button>
    </div>
    </div>
  )
}

export default Navbar