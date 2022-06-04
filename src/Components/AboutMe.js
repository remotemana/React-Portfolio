import React, {Component} from 'react';
import "../styles/AboutMe.css";


export default class AboutMe extends Component {
    render(){
        return(
            <div className="aboutMeContainer">
                <h1 className=" abtMe ">About Me</h1>
                <img src="/my-avatar.jpg" alt="my-avatar" className="avatar"/>
                <h3 id="quoteCoffee">"Programmer: A machine that turns Coffee into Code..."</h3>
                <img src="/branch.png" alt="branch" className="branch"/>
                    <div className="paragraph">
                        <p style={{borderTop: "1px solid antiquewhite", paddingTop: "3%"}}>
                            My first time ever coding anything was on 3.21.22!
                            Since then I have made leaps and bounds in understanding syntax and formatting structures of
                            code! I know the basics of HMTL, CSS and Javascript including API call uses and implementation. In several of my coding projects I have built CRUD applications both FrontEnd and BackEnd!
                            I am currently learning React which is how I built and designed this Portfolio!
                        </p>
                        <p>
                            Prior to picking up coding I used to pick up a chefs knife and produce all sorts of delicious
                            meals for Microsoft! Being exposed to that kind of tech environment piqued my interest in coding
                            and technology and I decided to see what options were available.

                            Through a family member, I heard about UW Coding
                            BootCamp and knew that whatever I did next, it would be to apply and get myself enrolled.

                            It has been the most challenging experience of my life and I am loving every second of it!
                        </p>
                        <p>
                            I am looking for Projects, Freelance work, Ideas and Collaborative endeavors to expand my knowledge of coding and full stack web development. Remember too Always Being Coding!
                        </p>
                    </div>
            </div>
        )
    }
}