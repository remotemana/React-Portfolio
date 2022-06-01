import React, {Component} from 'react';
import "../styles/NavBar.css"
export default class Navbar extends Component {
    render(){
        return(
        <nav className="uk-navbar-container" uk-navbar>
            <div className="uk-navbar-left uk-align-right">
                <ul className="uk-navbar-nav">
                    <li><h1 className="myName"> Lucas Roman</h1></li> 
                    <li className="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Parent</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </nav>
        )
    }
}