import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap'

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
    title: "FotoFoto",
    img:"/fotofoto.gif" ,
    alt:"fotofoto",
    p1:"Welcome to the FotoFoto library, a full-stack image library and robust photo-editing platform that aims to be a fun and simple way for users to upload their own photos and add a touch of personalization.",
    p2:"Our goal is to help users explore their creative side by offering a balance between simplicity and in-depth editing all within one easy-to-use application.",
    git:"https://github.com/DahliaGRV/FOTOFOTO",
    deploy:"https://fotofotolibrary.herokuapp.com/"
},
{
    title: "ReadMe Generator",
    img:"/ReadmeGen.gif",
    alt:"readme",
    p1:"This project uses the terminal to prompt a user with questions about their project and then will output a professional, styled README. ",
    p2:"",
    git:"https://github.com/remotemana/README-gen",
    deploy:"https://blooming-island-00362.herokuapp.com/"
},
];

const projects2 = [
    {
        title: "Blog-I.T!",
        img: "/blog.gif",
        alt:"blog",
        p1:"This project is a cms-style blog. A user can log in, view a homepage that shows other users blogs. The user may choose any available blog, click and choose to leave a comment. The user can navigate via the Navbar and visit their dashboard to view all their own blogs.",
        p2:"They may also choose to create their own blog! If a user is done they may choose to logout, they will be prompted to re-login.",
        git:"https://github.com/remotemana/blog",
        deploy:""
    },
    {
        title: "E-Commerce Backend",
        img: "/e-commerce.gif",
        alt:"ecom",
        p1:"",
        p2:"",
        git:"",
        deploy:""
    },
    {
        title: "Coming Soon!",
        img: "/comingSoon.gif",
        alt:"comingSoon",
        p1:"",
        p2:"",
        git:"",
        deploy:""
    },
]



export default function Projects() {
    return (
    <Container fluid="md">
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
                                <p>{p1}</p>
                                <p>{p2}</p>
                            </Card.Text>
                                <a href={git}>Git Repos</a>
                                <br></br>
                                <a href={deploy}>Deployed App</a>
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
                                <p>{p1}</p>
                                <p>{p2}</p>
                            </Card.Text>
                                <a href={git}>Git Repos</a>
                                <br></br>
                                <a href={deploy}>Deployed App</a>
                        </Card.Body>
                    </Card>
                    )})}
                </div>
            </Col>
        </Row>
    </Container>
    )
}