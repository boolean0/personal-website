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
                <p className = 'about-me-text'>Hi! I'm Matt! <br/> <br/> I'm a second-year Computer Science /
                BBA double degree student at the University of Waterloo. I've built this website to express a little bit about myself. <br/> <br/>
                <ul> 
                    <li> I’m passionate about learning how technology can create social value and the <Link to = '/projects'> projects</Link> on this site reflect my progress in discovering this field </li>
                    <li> I’ve had amazing mentors along the way and am equally devoted to <Link to = '/leadership'> leading </Link> others too </li>
                    <li> I’m a sports and music fanatic, as well as an (amateur) cook. </li>
                        <ul>
                            <li> (These hobbies probably seem so unrelated because I love expanding my horizons and pushing my skills) </li>
                        </ul>
                    <li> Feel free to use the icons by my picture to see my resume or contact me! </li>
                </ul>
                </p> 
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
