import React, {Component} from 'react';
import "../styles/Portfolio.css";
import filmSage from "../Assets/Images/Film-Sage.png"


export default class Portfolio extends Component {
    render(){
        return(
            <div>
                <div>
                    <a href="https://remotemana.github.io/movie-mood/" target="_blank" rel="noreferrer"><img className="imgOne" alt="Film-Sage" src={filmSage} /></a>
                </div>
            </div>
        )
    }
}
