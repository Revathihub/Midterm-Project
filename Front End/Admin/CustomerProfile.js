import { useEffect,React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import  { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
  } from "reactstrap";

  const CustomerProfile=()=>{
    const deleteUser=(id)=>{
        const urll=`http://localhost:9004/users/v1/delete/${id}`;
        axios.delete(urll).then(()=>{
            alert("Food Details Deleted Successfully!!!");
            axios.get("http://localhost:9004/users/v1/view").then( res => {           
                setCustomers(res.data);            
            })
        })
    }
    const [CustomerProfile,setCustomers] = useState([]);
    const url = 'http://localhost:9004/users/v1/view';

  
    useEffect( () => {
        axios.get(url).then( res => {           
            setCustomers(res.data);            
        })
   }, []);
   function order(){
    alert("You are in the Admin View Please login as User");
  }

    return(
        <>
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
            </Nav>
            <Nav>
                <Button variant="dark"><Link id="link" to="/adminlogin">Logout</Link></Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div >
        <div >    
          <center>
          <h1  id="caption2">List Of Customer-Profiles</h1>

            <table > 
               <tr>
                   <td><th>ID</th></td>
                   <td><th>Email</th></td>
                   <td><th>PASSWORD</th></td>
                   <td><th>DELETE</th></td>

              </tr>

                {CustomerProfile.map( user => 
                               <tr>
                                   <td>{user.id}</td>
                                   <td>{user.email}</td>
                                   <td>{user.password}</td>
                                   <td><center><Button id="btn1"   variant="danger" onClick={()=>deleteUser(user.id)}>Delete</Button> </center></td>
                                   </tr>
                                   )}
                                  
                                       
                               </table></center>
                              
       </div> 
   </>  
   )
}
export default CustomerProfile;
