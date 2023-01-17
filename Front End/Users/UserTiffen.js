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

const UserTiffen=()=>{
    
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
   
    const [UserTiffen,setFoodCategory] = useState([]);
    const url = 'http://localhost:9003/tiffen/v1/view';

  
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
                 {UserTiffen.map( F => 
                                <>
                                <Col lg="3" md="6" sm="6">
                                    {/* //<Row>{F.foodId}</Row> */}
                                    <Row>{<img src="data:image/jpeg;base64,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"/>}</Row>
                                    <Row id="itemn">{F.foodTitle}</Row>
                                    <center><Row id="itemn1">{F.foodDiscription}</Row></center>
                                    <center><Row id="price">₹{F.foodPrice}-{F.foodDiscount} % OFF</Row></center>
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
export default UserTiffen;

