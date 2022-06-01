import React from 'react';
import filmSage from "../Assets/Images/filmSageGif.gif"
import fotoFoto from "../Assets/Images/fotofoto.gif"
import readMe from "../Assets/Images/ReadMeGen.gif"
import Blog from "../Assets/Images/blog.gif"
import ecom from "../Assets/Images/e-commerce.gif"
import soon from "../Assets/Images/comingSoon.gif"
import List from "./Components/Portfolio"

const projects = [
{   
    id:"1",
    title: "Film Sage",
    img: {filmSage},
    p1:"Our motivation was to build a web based app to help users with a movie choice descision with their own text based input that will determine the emotional weight of their input and suggest some movies to watch!",
    p2:"We built the project to help with descision burnout in a fun way, while also providing links to other resources incase a user may need it.",
    git:"https://github.com/remotemana/movie-mood",
    deploy:"https://remotemana.github.io/movie-mood/"
},
{
    id:"2",
    title: "FotoFoto",
    img: {fotoFoto},
    alt:"",
    p1:"",
    p2:"",
    git:"",
    deploy:""
},
{
    id:"3",
    title: "ReadMe Generator",
    img: {readMe},
    alt:"",
    p1:"",
    p2:"",
    git:"",
    deploy:""
},
{
    id:"4",
    title: "Blog-I.T!",
    img: {Blog},
    alt:"",
    p1:"",
    p2:"",
    git:"",
    deploy:""
},
{
    id:"5",
    title: "E-Commerce Backend",
    img: {ecom},
    alt:"",
    p1:"",
    p2:"",
    git:"",
    deploy:""
},
{
    id:"6",
    title: "Coming Soon!",
    img: {soon},
    alt:"",
    p1:"",
    p2:"",
    git:"",
    deploy:""
},
]

function Project() {
    return <List projects={projects} />;
}

export default Project;