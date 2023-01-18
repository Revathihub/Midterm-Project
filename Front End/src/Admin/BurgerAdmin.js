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

const BurgerAdmin=()=>{
    
    
    const deleteFood=(foodId)=>{
        const urll=`http://localhost:8008/burger/v1/delete/${foodId}`;
        axios.delete(urll).then(()=>{
            alert("Food Details Deleted Successfully!!!");
            axios.get("http://localhost:8008/burger/v1/view").then( res => {           
                setFoodCategory(res.data);            
            })
        })
    }
   
    const [BurgerAdmin,setFoodCategory] = useState([]);
    const url = 'http://localhost:8008/burger/v1/view';

  
    useEffect( () => {
        axios.get(url).then( res => {           
            setFoodCategory(res.data);            
        })
   }, []);

   function order(){
    alert("You are in the Admin View Please login as User");
  }



    return(
        
        <div id="FoodCategory-div">
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
                <Nav.Link href="user/profile">Customer-Profile</Nav.Link>
            </Nav>
            <Nav>
                <Button variant="dark"><Link id="link" to="/adminlogin">Logout</Link></Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
            </div>
       
        <div>
            
         <CardBody>
           <Col> <h1  id="caption1">Burger-King </h1></Col>
           <Col lg="10" md="4"><Button id="create1" variant="outline-primary" size="lg"> <Link to="/addbu">Create</Link></Button></Col>
            </CardBody>
            

            <center><table>
                <tr>
                    <td><th>ID</th></td>
                    <td><th>Image</th></td>
                    <td><th>TITLE</th></td>
                    <td><th>DISCRIPTION </th></td>
                    <td><th>₹</th></td>
                    <td><th>DISCOUNT</th></td>
                    <td><th>EDIT</th></td>
                    <td><th>DELETE</th></td>
                </tr> 
               

                 {BurgerAdmin.map( food => 
                                <tr>
                                    <td>{food.foodId}</td>
                                    <td>{<img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/mbtg1wsd3zdqu3v3rpgd" className="image"/>}</td>
                                    <td>{food.foodTitle}</td>
                                    <td>{food.foodDiscription}</td>
                                    <td>₹{food.foodPrice}-</td>
                                    <td>{food.foodDiscount} % OFF</td>
                                    <td><Link to={`/editbu/${food.foodId}`}>
                                          <Button id="btn1" variant="success"  type="Submit" onClick={()=>Adminedit()}>Edit</Button>
                                        </Link></td>
                                    <td><Button id="btn1"   variant="danger" onClick={()=>deleteFood(food.foodId)}>Delete</Button> </td>
                                    </tr>
                                    )}
                                   
                                        
                                </table></center>
                               
        </div>
    </div>    
    )
}
export default BurgerAdmin;