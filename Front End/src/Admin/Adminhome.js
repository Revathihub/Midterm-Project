import React from "react";
import Button from 'react-bootstrap/Button';
import  { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { render } from "enzyme";

function Adminhome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function order(){
    alert("You are in the Admin View Please login as User");
  }
  return (
    <div>
    <div >
        <Navbar expand="lg" id="color" >
            <Container fluid>
            <Navbar.Brand ><Button type="button" onClick={()=>order()} variant="outline-dark">Food Ordering</Button></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/adminhome">Home</Nav.Link>
                <NavDropdown title="FoodCategory" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/biryani">Biryani</NavDropdown.Item>
                <NavDropdown.Item href="/pizza">Pizza</NavDropdown.Item>
                <NavDropdown.Item href="/burger">Burger</NavDropdown.Item>
                <NavDropdown.Item href="/icecream">Ice-Cream</NavDropdown.Item>
                <NavDropdown.Item href="/meals"> Meals</NavDropdown.Item>
                <NavDropdown.Item href="/noodels">Chainees Food</NavDropdown.Item>
                <NavDropdown.Item href="/sandwich">Sandwich</NavDropdown.Item>
                <NavDropdown.Item href="/tiffen"> Tiffen</NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link href="/user/profile">Customer-Profile</Nav.Link>
                <center><h2 className="logo1" >Admin Page View</h2></center>
            </Nav>
            
            <Nav>
                <Button variant="dark"><Link id="link" to="/adminlogin">Logout</Link></Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div >
        <div id="bgcolor">
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/04/04/Pictures/_ac5ac2aa-7679-11ea-a349-a18bc5ff339a.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Biryani Indulgence</h2>
          <h6>Treat Yourself To Delish Biriyanis!</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/mbtg1wsd3zdqu3v3rpgd"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Burger King!</h2>
          <h6>Enjoy Lightening Fast Delivery Of Your Favourite Food!</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thepeppercook.com/wp-content/uploads/2020/06/singaporenoodleshorizontal-1.1-2048x1365.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Chainese Specials</h2>
          <h6>
           Explore The Authentic Chinese Cuisine! I'ts Treats To Brighten Your Day
          </h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
      </div>
      </div>
     
  );
}

export default Adminhome;