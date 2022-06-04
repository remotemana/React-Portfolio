import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap'
import "../styles/NavBar.css"

const NavBar = () => {
        return(
 <div className="navbar" >
    <h1 className="myName">Lucas Roman</h1>
    <div className="route" >
        <Nav id="nav" className="justify-content-center foot" defaultActiveKey="/home" as="ul" >
          <Nav.Item as="li">
            <Nav.Link  href="/">About Me</Nav.Link>
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
</div>
       
  )
}

export default NavBar