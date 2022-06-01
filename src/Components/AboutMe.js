import React, {Component} from 'react';
import "../styles/AboutMe.css";

export default class AboutMe extends Component {
    render(){
        return(
            <div className="aboutMeContainer">
                <h1 className=" abtMe ">About Me</h1>
                    <div className="paragraph">
                        <p>
                            My first time ever coding anything was on 3.21.22!
                            Since then I have made leaps and bounds in understanding syntax and formatting structures of
                            code! I know the basics of HMTL, CSS and Javascript including API call uses and implementation. In several of my coding projects I have built
                            full crud applications both FrontEnd and BackEnd! The most challenging was server routes! 
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
                    </div>
            </div>
        )
    }
}