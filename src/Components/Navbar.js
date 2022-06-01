import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../styles/NavBar.css"
export default class Navbar extends Component {
    render(){
        return(
        <nav className="uk-navbar" uk-navbar>
            <div className="uk-navbar-left uk-align-right">
                <ul className="uk-navbar-nav">
                    <li><h1 className="myName"> Lucas Roman</h1></li> 
                    <li className="uk-active"><Link to="/">About Me</Link></li>
                    <li className="uk-active"><Link to="/PortFolio">Portfolio</Link></li>
                    <li className="uk-active"><Link to="/Resume">Resume</Link></li>
                    <li className="uk-active"><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
        )
    }
}