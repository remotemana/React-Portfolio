import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap'
import "../styles/NavBar.css"
export default class Navbar extends Component {
    render(){
        return(
         <div className="navbar" >
            <Nav className="justify-content-end" defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/">About Me</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/Resume">Resume</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/Contact">Contact</Nav.Link>
  </Nav.Item>
</Nav>
        </div>
       
        )
    }
}