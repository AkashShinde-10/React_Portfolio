import React from 'react'
import photo from '../../assets/Akash Shinde_enhanced.jpg'
import './About.css'

const About = () => {
  return (
    <div id='about' className='mainsection'>
      <h1>About Me</h1>
      <div className="about">
        <div className="about-img">
          <img src={photo} alt="my image" />
        </div>
        <div className="about-content">
        <p>Hello! I’m Akash Shinde, an aspiring Frontend Developer with a strong foundation in web development. I’ve gained hands-on experience through personal projects using HTML, CSS, JavaScript, and React.js, and I’m now excited to apply my skills in a professional setting.</p>

         <p>I’m passionate about creating responsive, user-friendly websites and am eager to learn and grow in the field. As a fresh graduate, I’m looking for my first job opportunity where I can contribute to meaningful projects, collaborate with experienced developers, and continue to expand my knowledge of frontend technologies.
         </p>
         <p>If you're looking for a dedicated, motivated developer with a fresh perspective, let's connect!</p>
        </div>
      </div>
      <h2>My Skills</h2>
     <div className="skills">
     <div className="technical">
     <h4>Technical Skills</h4>
    <div className="tech-skills">
    <div className="skill">
      <div className="skill-name">HTML</div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{width:"80%"}}></div>
      </div>
      <div className="skill-percent">80%</div>
    </div>

    <div className="skill">
      <div className="skill-name">CSS</div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{width:"70%"}}></div>
      </div>
      <div className="skill-percent">70%</div>
    </div>

    <div className="skill">
      <div className="skill-name">JavaScript</div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{width:"70%"}}></div>
      </div>
      <div className="skill-percent">70%</div>
    </div>

    <div className="skill">
      <div className="skill-name">React.js</div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{width:"60%"}}></div>
      </div>
      <div className="skill-percent">60%</div>
    </div>

    <div className="skill">
      <div className="skill-name">Bootstrap</div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{width:"60%"}}></div>
      </div>
      <div className="skill-percent">60%</div>
    </div>

    
    </div>
     </div>
     <div className="soft">
      <h4>Soft Skills</h4>
      <ul>
      <li>Continuous Learning</li>
      <li>Self-Motivation</li>
      <li>Time Management</li>
      <li>Self-Improvement</li>
      </ul>
     </div>
     </div>
    </div>
  )
}

export default About