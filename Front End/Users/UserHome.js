import React from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import  { Link, useNavigate} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
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

const UserHome=()=> {
  const navigate=useNavigate();
  function searchfun(){
   
          var a=document.getElementById("search").value
          if(a=='biryani' |  a=="Biryani" | a=="chicken biryani" |a=="chicken" | a=="chicken lollipop" | a=="lollopop"){
            navigate("/user/biryani");
        }
        else if(a=='pizza' |  a=="Pizza"  ){
          navigate("/user/pizza");
        }
        else if(a=='burger' |  a=="Burger" |a=="chicken burger" ){
          navigate("/user/burger");
        }
        else if(a=='ice cream' |  a=="cream" |a=="vennila" |a=="strawberry"| a=="chocolate" |a=="pistha"){
          navigate("/user/icecream");
        }
        else if(a=='sandwich' |  a=="food" | a=="veg sandwich" |a=="chicken sandwich" ){
          navigate("/user/sandwich");
        }
        else if(a=='tiffen' |  a=="idly" |a=="dosa" |a=="puri" | a=="sambar idly"| a=="bajji" |a=="vada"){
          navigate("/user/tiffen");
        }
        else if(a=='noodels' |  a=="chicken noodels" |a=="chaines food" |a=="fried rice" | a=="manchuria" ){
          navigate("/user/noodels");
        }
        else if(a=='meals' |  a=="rice" |a=="curry" |a=="thaali" ){
          navigate("/user/meals");
        }
        else{
          navigate("/error");
        }
      }
     

  return(
    <>
    <div >
    <Navbar expand="lg" id="color" >
        <Container fluid>
        <Navbar.Brand ><Link to="/user"><Button type="button"  variant="outline-dark">Food Ordering</Button></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="/user">Home</Nav.Link>
            <NavDropdown title="FoodCategory" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/user/biryani">Biryani</NavDropdown.Item>
            <NavDropdown.Item href="/user/pizza">Pizza</NavDropdown.Item>
            <NavDropdown.Item href="/user/burger">Burger</NavDropdown.Item>
            <NavDropdown.Item href="/user/icecream">Ice-Cream</NavDropdown.Item>
            <NavDropdown.Item href="/user/meals"> Meals</NavDropdown.Item>
            <NavDropdown.Item href="/user/noodels">Chainees Food</NavDropdown.Item>
            <NavDropdown.Item href="/user/sandwich">Sandwich</NavDropdown.Item>
            <NavDropdown.Item href="/user/tiffen"> Tiffen</NavDropdown.Item>
            <NavDropdown.Divider />
            </NavDropdown>
            
        </Nav>
        <Form className="d-flex">
          <div className="space">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              id="search"
              aria-label="Search"
            /></div>
            <div className="space">
            <Button id="butt" type="button" variant="outline-success" onClick={()=>searchfun()}>Search</Button>
            </div>
          <div className="space">
            <img src="https://www.bing.com/th?id=OIP.hvHFIHyRHU3MYRq1b_2vYAHaHa&w=160&h=165&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="images1"/>
          </div>
          <div className="space">
            <Button type="button" variant="dark"><Link id="link" to="/login">Logout</Link></Button>
            </div>
            </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </div >
    <div className=" cardd">
        <Row>
          <Col lg="" md="" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                <Col md="" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <a href="/user/biryani"><img src="https://bitemeup.com/wp-content/uploads/2019/04/htzpmwbmoklojshm4oyx-1024x685.jpg" className="imagel" /></a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col  >
                    <div  >
                     <center> <p className="titless">Biryani</p></center>
                      </div>
                  </Col>
                  <center>
                      <p className="fontss">₹125 OFF ABOVE ₹500</p></center>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
              </CardFooter>
            </Card>
          </Col>
          <Col  lg="" md="" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <a href="/user/pizza"><img  src="https://th.bing.com/th/id/OIP.hEmPGjhyieb1S7iWFmz8oQHaE8?pid=ImgDet&w=207&h=138&c=7&dpr=1.3" className="imagel"/></a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <div  ><center>
                      <p className="titless">PizzaHut</p></center>
                      </div>
                  </Col>
                  <center><p className="fontss">50% DISCOUNT UPTO  100</p></center>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
              
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <a href="/user/burger"> <img src="https://th.bing.com/th/id/OIP.Hv5w3razKyeKOhyfMCNE1gHaE7?pid=ImgDet&rs=1" className="imagel"/></a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div  ><center>
                      <p className="titless">Burger</p></center>
                      </div>
                  </Col><center>
                      <p className="fontss">B1 G1 (COMBO OFFER)</p></center>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
              
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <a href="/user/noodels"> <img src="https://www.bing.com/th?id=OIP.l3QcXBaVKHbaTLDQGFoFWwHaE8&w=254&h=169&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="imagel"/></a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <div  ><center>
                      <p className="titless">Noodels</p></center>
                      </div>
                  </Col><center>
                      <p className="fontss">FLAT DEAL 30% OFF </p></center>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
              
              </CardFooter>
            </Card>
          </Col>
          </Row>
          <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <a href="/user/meals"> <img src="https://th.bing.com/th/id/R.abde79715125b75bf5601a1c78318e1e?rik=fOf3%2b1qg7k%2f9aw&riu=http%3a%2f%2fwww.travelsiteindia.com%2fblog%2fwp-content%2fuploads%2f2018%2f04%2ftraditional-indian-food-sessions.jpg&ehk=hZj0OmrOGIC9z3k%2fmeYcLe5x%2fUkpQeyo7uwn%2fLYvN84%3d&risl=&pid=ImgRaw&r=0" className="imagel"/></a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <div  ><center>
                      <p className="titless">Meals</p></center>
                      </div>
                  </Col><center>
                      <p className="fontss"> NONVEG & VEG (Thalis)</p></center>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="2" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <a href="/user/tiffen"> <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/ikgoqbkdsderfzjrtdxu" className="imagel" /></a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <div  ><center>
                      <p className="titless">Tiffen</p></center>
                      </div>
                  </Col><center>
                      <p className="fontss">FLAT DEAL 20% OFF</p></center>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
               
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <a href="/user/icecream"><img src="https://www.bing.com/th?id=OIP.H_QrXcpWLRRgREKjpSwh2wHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="imagel" /></a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div  ><center>
                      <p className="titless">Ice-Cream</p></center>
                      </div>
                  </Col><center>
                      <p className="fontss">50% DISCOUNT UPTO 100</p></center>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <a href="/user/sandwich"><img src="https://th.bing.com/th/id/OIP.7vVTZXYwKjdfD9BsUI3RAgHaE8?w=304&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"  className="imagel"/></a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div  ><center>
                      <p className="titless">Sandwich</p></center>
                      </div>
                  </Col><center>
                      <p className="fontss">35% DISCOUNT UPTO 75</p></center>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
               
              </CardFooter>
            </Card>
          </Col>
          </Row>
      </div>


    </>
  );}
  export default UserHome;