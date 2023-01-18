import { useEffect,React, useState } from 'react';
import axios from 'axios';
import {Navigate, useParams,useNavigate} from "react-router-dom";
import  { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const SandwichAdd=()=>{
    const navigate=useNavigate();
    const{foodId}=useParams();
    const[food, setFood]=useState({
        foodTitle:"",
        foodDiscription:"",
        foodPrice:"",
        foodDiscount:"",

    });

    const{foodTitle,foodDiscription,foodPrice,foodDiscount}=food;
    const onInputChange=e=>{
        setFood({...food,[e.target.name]: e.target.value});
    };
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:8009/sandwich/v1/add",food);
        alert("Food Details Added Successfully!!")
        navigate("/sandwich");
    }
    function order(){
        alert("You are in the Admin View Please login as User");
      }
   
    return(
        <body>
            <div>
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
            </Nav>
            <Nav>
                <Button variant="dark"><Link id="link" to="/login">Logout</Link></Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
        
        <div id="card" className="container">
                <div className="w-50 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add Food Details</h2>
                    <form onSubmit={e=> onSubmit(e)}>
                        <div className="form-group">
                            <input type="text"className="form-control form-control-lg"  Placeholder="Food Title"  name="foodTitle" value={foodTitle} onChange={e=>onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input type="text"className="form-control form-control-lg"  Placeholder="Food Discription"name="foodDiscription" value={foodDiscription} onChange={e=>onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input type="text"className="form-control form-control-lg" Placeholder="Food Price" name="foodPrice" value={foodPrice} onChange={e=>onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input type="text"className="form-control form-control-lg" Placeholder="Food Discount %"name="foodDiscount" value={foodDiscount} onChange={e=>onInputChange(e)}/>
                        </div>
                        <center><button className="btn btn-primary btn-block">Add</button></center>
                    </form>

                </div>
            </div>
        
        </body>

    );
}
export default SandwichAdd;