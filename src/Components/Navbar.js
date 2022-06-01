import React, {Component} from 'react';
export default class Navbar extends Component {
    render(){
        return(
        <nav className="uk-navbar-container" uk-navbar>
            <h1 className="uk-flex uk-position-absolute"> Lucas Roman</h1>
            <div className="uk-navbar-left uk-align-right">
                <ul className="uk-navbar-nav">
                    <li className="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Parent</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </nav>
        )
    }
}