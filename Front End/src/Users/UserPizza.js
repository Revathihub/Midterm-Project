import { useEffect,React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import  { Link ,useNavigate} from 'react-router-dom';
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

const UserPizza=()=>{
    
  const cart=(food) =>{
    console.log(food); 
    alert("Added to cart Successfully");
   }
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
   
   
    const [UserPizza,setFoodCategory] = useState([]);
    const url = 'http://localhost:8007/pizza/v1/view';

  
    useEffect( () => {
        axios.get(url).then( res => {           
            setFoodCategory(res.data);            
        })
   }, []);


    return(
        
        <div id="FoodCategory-div">
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
        <div className="content">
        <Row>
          <Col>
            <Card className="card-stats">
              <CardBody>
                <Row>
                 {UserPizza.map( F => 
                                <>
                                <Col lg="3" md="6" sm="6">
                                    {/* //<Row>{F.foodId}</Row> */}
                                    <Row>{<img src="https://th.bing.com/th/id/OIP.AZqGRDHUSm2vdcKVa_3QSwHaEu?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>}</Row>
                                    <Row id="itemn">{F.foodTitle}</Row>
                                    <center><Row id="itemn1">{F.foodDiscription}</Row> </center>
                                    <center><Row id="price">₹{F.foodPrice}-{F.foodDiscount} % OFF</Row> </center>
                                    <Row>
                                        <div>
                                         <center><Button variant="outline-primary" onClick={()=>cart(F)}>Add to Cart</Button> </center>
                                        </div>
                                    </Row>
                                    <hr />
                                    
                                    </Col>
                                </>)}
                                </Row>
               </CardBody>
            </Card>
          </Col>
          </Row>
        </div>
    </div>    
    )
}
export default UserPizza;

