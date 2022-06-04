import React from 'react';
import "../styles/Resume.css";

export default function Resume() {
    return(
        <div>
            <h1 id="resumeQuote">"Knowledge is also defined as the ability to quickly source relevent data and its application" </h1>
            <div id="resumeBox">
                <div className="cardList">
                    <h1 className="cardTitle">Skilled Proficiencies</h1>
                        <ul className="cardUl">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Java/Javascript</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL/Sequelize</li>
                            <li>REST</li>
                            <li>Responsive Design</li>
                            <li>Github Work Flow</li>
                            <li>Team Leading</li>
                            <li>Project Management</li>
                            <li>Communication</li>
                            <li>Code Comprehension and Simple Dissemination</li>
                        </ul> 
                </div>
                <div className="cardList">    
                    <h1 className="cardTitle">Future Goals</h1>
                        <ul className="cardUl">
                            <li>Large Scale Project Management</li>
                            <li>Python</li>
                            <li>C/C++</li>
                            <li>GO</li>
                            <li>Advanced Data structures</li>
                            <li>A.I. coding</li>
                        </ul>
                </div> 
                <div className="cardList">        
                    <h1 className="cardTitle">Attaining Skills</h1>
                        <ul className="cardUl">
                            <li>In-Depth Debugging</li>
                            <li>Algorithms</li>
                            <li>Complex APIs</li>
                            <li>Test Writing</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}