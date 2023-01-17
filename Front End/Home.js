


// function mu(){
//     const [count, setCount] = useState(0);
//     return(
//         <>
//         <ul  id="horizontal-list">
//             <li> Home </li>
//             <li>  <Link id="link" to="/food"> FoodCategory </Link> </li>
//             <li>  <Link id="link" to="/food">   Orders </Link> </li>
//             <li>  <Link id="link" to="/food">   Payments </Link> </li>
//             <li >  <Link id="logout" to="/login">  Logout </Link> </li>
//         </ul>
//         <div id="home-div">
//         <h2> Home Page</h2>
//          <p>You clicked {count} times</p>
//          <button onClick={() => setCount(count + 1)}>  Click me  </button>
//         </div>
        
    
//         </>       
//     )
  
// }


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import './App.css'
import {Link}from 'react-router-dom';
import React, { useState } from 'react';


function Home() {
  return (
    <Navbar expand="lg" id="color" >
      <Container fluid>

        <Navbar.Brand href="#">Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              id="search"
              aria-label="Search"
            />
            <Button id="butt" type="button" variant="outline-success">Search</Button>
            <Button id="butt1"  type="button" variant="outline-success" ><Link to="/login">Logout</Link></Button>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;