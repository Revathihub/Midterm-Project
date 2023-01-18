
import { useEffect,React, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import  { Link, Navigate,useParams ,useNavigate} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

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

const Profile=()=> {
  const navigate=useNavigate();

  useEffect(()=>{
    loadUser();
},[]);

  const{id}=useParams();
  console.log(id);
  const[user, setUser]=useState({
      id:"",
      email:"",
      password:"",


  });

  const{email,password}=user;

  const loadUser=async () =>{
    const result=await axios.get(`http://localhost:9004/users/v1/id/${id}`);
    setUser(result.data);
  };

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
            <Nav.Link href="/user/profile">Customer-Profile</Nav.Link>
            
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
    <div id="card" className="container">
                <div className="w-25 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Profile</h2>
                    <form >
                        <div className="form-group">
                            Email: <input type="text"className="form-control form-control-lg"   name="id" value={id} />
                        </div>
                        
                        <div className="form-group">
                           Password: <input type="text"className="form-control form-control-lg" name="password" value="123456" />
                        </div>
                        <center><Link to="/user" ><button className="btn btn-primary ">Ok</button></Link></center>
                    </form>

                </div>
            </div>
        

    
    </>
  );}
  export default Profile;