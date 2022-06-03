import React from 'react';
import {Card, Container, Row, Col, ThemeProvider} from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import "../styles/Project.css";

const projects = [
{   
    title: "Film Sage",
    img: "/filmSageGif.gif",
    p1:"Our motivation was to build a web based app to help users make a movie choice descision with their own text based input that will determine the emotional weight of their input and suggest some movies to watch!",
    p2:"We built the project to help with descision burnout in a fun way, while also providing links to other resources incase a user may need it.",
    git:"https://github.com/remotemana/movie-mood",
    deploy:"https://remotemana.github.io/movie-mood/"
},
{
    title: "E-Commerce Backend",
    img: "/e-commerce.gif",
    alt:"ecom",
    p1:"This project is an inventory database management system. A user is able to create new products with associated data. Track stock and update information as needed. There are routes built for getting all/single products, tags and categories ",
    p2:"There are also routes to create, update and delete specific products, tags or categories and is associated respectively.",
    git:"https://github.com/remotemana/ORM-E-Commerce",
    deploy:""
},
{
    title: "ReadMe Generator",
    img:"/ReadMeGen.gif",
    alt:"readme",
    p1:"This project uses the terminal to prompt a user with questions about their project and then will output a professional, styled README. ",
    p2:"",
    git:"https://github.com/remotemana/README-gen",
    deploy:"https://drive.google.com/file/d/1H9G0Jm_HF50yVTezbo4i7VyeoUSu682b/view"
},
];

const projects2 = [
    {
        title: "FotoFoto",
        img:"/fotofoto.gif" ,
        alt:"fotofoto",
        p1:"Welcome to the FotoFoto library, a full-stack image library and robust photo-editing platform that aims to be a fun and simple way for users to upload their own photos and add a touch of personalization.",
        p2:"Our goal is to help users explore their creative side by offering a balance between simplicity and in-depth editing all within one easy-to-use application.",
        git:"https://github.com/DahliaGRV/FOTOFOTO",
        deploy:"https://fotofotolibrary.herokuapp.com/"
    },
    {
        title: "Blog-I.T!",
        img: "/blog.gif",
        alt:"blog",
        p1:"This project is a cms-style blog. A user can log in, view a homepage that shows other users blogs. The user may choose any available blog, click and choose to leave a comment. The user can navigate via the Navbar and visit their dashboard to view all their own blogs.",
        p2:"They may also choose to create their own blog! If a user is done they may choose to logout, they will be prompted to re-login.",
        git:"https://github.com/remotemana/blog",
        deploy:"https://blooming-island-00362.herokuapp.com/"
    },
    {
        title: "Coming Soon!",
        img: "/comingSoon.gif",
        alt:"comingSoon",
        p1:"Currently Developing something exciting! ",
        p2:"Check back to see new apps I've developed!",
        git:"",
        deploy:""
    },
]



export default function Projects() {
    return (
    <ThemeProvider breakpoints={['md','sm','xs']}>
        <div className="portBox">
            <Container fluid>
                <Row>
                    <Col>
                        <div>
                            {projects.map(({title, img, alt, p1, p2, git, deploy})=> {
                                return (
                            <Card style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={img} alt={alt}/>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        <p id="paragraph">{p1}</p>
                                        <p>{p2}</p>
                                    </Card.Text>
                                    <div id="portLinks">
                                            <a href={git}><h1 titile="test"><FaGithub /></h1></a> <h3>←Repos</h3>
                                            <br></br>
                                            <a href={deploy}><h1><GrDeploy/></h1></a> <h3>←Deployed</h3>
                                        </div>
                                </Card.Body>
                            </Card>
                            )})}
                        </div>
                    </Col>
                    <Col>
                        <div>
                            {projects2.map(({title, img, alt, p1, p2, git, deploy})=> {
                                return (
                            <Card style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={img} alt={alt}/>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        <p id="paragraph">{p1}</p>
                                        <p>{p2}</p>
                                    </Card.Text>
                                        <div id="portLinks">
                                            <a href={git}><h1 titile="test"><FaGithub /></h1></a> <h3>←Repos</h3>
                                            <br></br>
                                            <a href={deploy}><h1><GrDeploy/></h1></a> <h3>←Deployed</h3>
                                        </div>
                                </Card.Body>
                            </Card>
                            )})}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </ThemeProvider>
    )
}