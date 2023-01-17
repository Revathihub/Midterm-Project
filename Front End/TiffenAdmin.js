import { useEffect,React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import  { Link } from 'react-router-dom';
import Adminedit from './Adminedit';
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

const TiffenAdmin=()=>{
    
    const deleteFood=(foodId)=>{
        const urll=`http://localhost:8006/biryani/v1/delete/${foodId}`;
        axios.delete(urll).then(()=>{
            alert("Food Details Deleted Successfully!!!");
            axios.get("http://localhost:8006/biryani/v1/view").then( res => {           
                setFoodCategory(res.data);            
            })
        })
    }
    const update=(foodId)=>{
        const url=`http://localhost:8002/food/v1/update/${foodId}`;
        axios.put(url).then(()=>{
            alert("Food Details Updated Successfully!!!");
            axios.get("http://localhost:8006/biryani/v1/view").then( res => {           
                setFoodCategory(res.data);            
            })
        })
    }
   
    const [TiffenAdmin,setFoodCategory] = useState([]);
    const url = 'http://localhost:8006/biryani/v1/view';

  
    useEffect( () => {
        axios.get(url).then( res => {           
            setFoodCategory(res.data);            
        })
   }, []);


    return(
        
        <div id="FoodCategory-div">
        <div>
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
        </div>
        <div className="content">
        <Row>
          <Col>
            <Card className="card-stats">
              <CardBody>
                <Row>
                 {TiffenAdmin.map( F => 
                                <>
                                <Col lg="3" md="6" sm="6">
                                    {/* //<Row>{F.foodId}</Row> */}
                                    <Row>{<img src="https://th.bing.com/th/id/OIP.N4ZcAJOIUDYPU9WLHAMOFgHaFC?w=265&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>}</Row>
                                    <Row id="itemn">{F.foodTitle}</Row>
                                    <Row id="itemn1">{F.foodDiscription}</Row>
                                    <Row id="price">₹{F.foodPrice}-{F.foodDiscount} % OFF</Row>
                                    <Row>
                                        <div>
                                        <Link to={'/adminedit'}>
                                            <Button  variant="success"  type="Submit" onClick={()=>Adminedit()}>Edit</Button>
                                         </Link>
                                         <Button id="btn1"  variant="danger" onClick={()=>deleteFood(F.foodId)}>Delete</Button> 
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
export default TiffenAdmin;

