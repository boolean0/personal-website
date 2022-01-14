import React from 'react';
import CardItem from './CardItem';
import './Cards.css'; 
import ViralLearning from './images/viral-learning.png';
import RunningRes from './images/running-from-res.png';
import WordHunt from './images/word-hunt.jpg';
import Notebooks from './images/notebooks.PNG';
import WebPic from './images/website-pic.png'
function Cards(){
    return (
    <div className = 'cards'> 
        <h1> Projects</h1>
        
          <div className = "cards__container"> 
          <p className = 'container__text'> The project that got me into software development was Viral Learning, a Hackathon-winning communications app that improved student-teacher communication in distance learning. It served as an introduction to full-stack 
          development and a transition from my competitive programming background into software design. Moreover, it ignited my passion for using technology to enhance modern capabailities. <br/> <br/>
          Ever since then, I've been developing software to achieve this goal or to further other ideas I had. A few of these projects can be found here, and the rest can be found on my GitHub.
          </p>
            <div className = "cards__wrapper"> 
                <ul className = "cards__items"> 
                    
                    <CardItem 

                        src = {RunningRes}
                        header = "Running from Responsibilities"
                        text = "Tensorflow-driven game that detects physical movement through webcam and reflects it in-game in real time."
                        label = "Py, Tensorflow, Pygame"
                        path = 'https://devpost.com/software/running-from-responsibilities'
                        />
                    <CardItem 
                        src = {ViralLearning}
                        header = "Viral Learning"
                        text = "Won first place at Hack it Better. Ticket system for students to ask questions and sorts tickets by category for teachers to view. "
                        label = "JS (Node.js)"
                        path = 'https://devpost.com/software/hack-it-better'
                    />


                </ul>

                <ul className = "cards__items"> 
                    <CardItem 
                        src = {WordHunt}
                        header = "iOS WordHunt Solver"
                        text = "Originally designed to get perfect scores on popular iOS game WordHunt."
                        label = "Py, Py-Tesseract OCR"
                        path = '/'
                    />

                    <CardItem 
                        src = {Notebooks}
                        header = "Notebooks+"
                        text = "A tool that automatically timestamps notes taken while watching videos. These notes are stored in custom folders for easy access. "
                        label = "TypeScript, JS (Node.js)"
                        path = 'https://devpost.com/software/notebooks'
                    />

                    <CardItem 
                        src = {WebPic}
                        header = "React Website"
                        text = "Fully responsive React Website (the one you're on now!)"
                        label = "JS (React), HTML/CSS"
                        path = 'https://boolean0.github.io/personal-website'
                    />
                </ul>
            </div>
          </div> 
    </div>
    );
}

export default Cards; 