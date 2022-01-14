import React from 'react';
import GitLogo from '../images/git-logo.png';
import './Leadership.css';
function Leadership(){
    return (
        <>
        <div className = 'all-cont'>
            <h1 className = 'lead-title'> Leadership Experiences</h1>
            <p className = 'lead-desc'> This is a list of my favourite leadership experiences. "Favourite" is quite difficult to define, but for me, they're
            the ones I found most rewarding and the ones I believe my delegates got the most out of. </p>

            <ul className = "leadership-list">
                <li className = 'leadership-list-item'>
                    <h2 className = 'leadership-item-title'>
                        Co-President of Glenforest's Computer Science Club
                    </h2>

                    <h3 className = 'date'> 2020-21 </h3>

                    <div className = 'leadership-item-text-body'>
    
                    <p className = 'leadership-item-text'>
                    In May 2020, I was elected co-president of and entrusted with Glenforest's biggest club: The CS club. Over the next year, I performed the following duties: <br/> <br/>
                        <ul className = 'cs-duty-list'>
                    
                            <li className = 'cs-duty-item'>
                                Created a roadmap for moving CS club entirely online: With COVID, we had to shift all club operations online. Together with my execs, we created a roadmap
                                that mapped out necessary tasks and when to complete them by. Having a concrete plan gave us tangible goals to work towards and greatly reduced confusion while
                                increasing motivation.
                                <br/> <br/>
                            </li>

                            <li className = 'cs-duty-item'>
                                Lead a YouTube Video Campaign: Coordinated our newly formed exec team in scripting, filming and editing a YouTube promotional video for CS club that brought in
                                over 100 members, the largest in the school.
                                <br/> <br/>
                            </li>

                            <li className = 'cs-duty-item'>
                                Planned and Developed 12 weekly lessons: Each week, I coordinated with 4 trainers to plan and 
                                discuss the content they would be lecturing about in the upcoming week. We would review the lesson and I'd ask for their input as well as give my own on
                                how to improve it. Our lessons increased the number of top scorers on the CCC by 300%. 
                                <br/> <br/>
                            </li>

                            <li className = 'cs-duty-item'>
                                Coordinated 3 Online Workshops: Workshops were a way for our students to gain real-life programming experience. Along with my event coordinators, we reached out to
                                two workshop leaders to host a web-dev and a game-dev workshop for us, bringing in over 50 students. 
                                <br/> <br/>
                            </li>

                            <li className = 'cs-duty-item'>
                                Promoted Exec Input: Throughout all planning mentioned above, I was keen on getting the input of my execs. This allowed them to be part of the process and also
                                made them feel more comfortable contributing and working as a team. Our execs were left feeling satisfied with their work and 90% of them reapplied in 2022.
                                <br/> <br/>
                            </li>
                        </ul>
                    </p>

                    <img className = 'leadership-item-image' src = {GitLogo}/> 

                    </div>

                </li>

               
            </ul>
        </div>
        </>

    );
}

export default Leadership; 