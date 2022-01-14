import React from 'react';
import gitLogo from '../images/git-logo.png';
import './Home.css';
import {Link} from 'react-router-dom';
import HomeCards from './HomeCards';
import Resume from '../Matt Huang Resume.pdf';
function Home(){
    return(
    <div className = 'all-container'>
        <div className = 'sidebar-wrapper'>
            <div className = "sidebar-container">
                <div className = 'my-name'>
                    <h1>Matt  <br/> Huang </h1>
                </div>
                <div className = 'icon-row'>
                        <a className = 'icon-item' href="https://www.linkedin.com/in/matt-huang-207146221/"> 
                        <i class="fab fa-linkedin-in fa-2x"></i>
                        </a>

                        <a className = 'icon-item' href="https://github.com/boolean0"> 
                        <i class="fab fa-github fa-2x"></i>
                        </a>

                        <a className = 'icon-item' href={Resume}> 
                        <i class="fas fa-file fa-2x"></i>
                        </a>

                        <a className = 'icon-item' href="mailto: matthuang03@gmail.com"> 
                        <i class="fas fa-envelope-square fa-2x"></i>
                        </a>

                </div>
                
                <img className = 'my-image' src = {gitLogo}></img> 
                
            </div>
            
        </div>

        <div className = 'vert-line'> </div>

        <div className = 'text-block'>
            <div className = 'about-me'>
                <h1> About Me</h1>
                <p className = 'about-me-text'>Hi! I'm Matt! <br/> <br/> I'm a first-year Computer Science /
                BBA double degree student at the University of Waterloo. I've built this website to express a little bit about myself: 
                My work, interests, thoughts and hobbies. <br/> <br/> I'm passionate about discovering and learning about how technology can be leveraged to enhance what we are currently capable of. 
                To showcase this, I've created a few projects that highlight the helpful traits of technology, which can be found under <Link to = '/projects'> Projects</Link>.  
                I've also had many great mentors along the way, which is why I'm equally devoted to leading and helping others wherever I can. A snapshot of these experiences can be found under <Link to = '/leadership'> Leadership</Link>. <br/> <br/>
                
                Outside of these interests, my hobbies include badminton and volleyball, playing the guitar and cooking food from various cuisines. I love expanding my horizons and pushing my skills, which 
                is probably why my hobbies seem so unrelated. <br/> <br/>
                
                If you'd like a TL;DR of this website, my resume is available <a href = {Resume}> here</a>. If you'd like to contact me, you're welcome to do so through my <a href = "https://www.linkedin.com/in/matt-huang-207146221"> LinkedIn</a> or through my <a href = "mailto: matthuang03@gmail.com"> e-mail.</a> </p> 
            </div>

             {/* <div className = 'project-container'> 
             <h1> Projects </h1>
                <HomeCards /> 
            </div>  */}
        </div>
        
    </div>
              
    );
}
export default Home;