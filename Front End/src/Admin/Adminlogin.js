import { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Link, Navigate, redirect, useNavigate}from 'react-router-dom';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function AdminLogin(){
    const [email,setusername]  =useState(''); 
    const [password,setpassword]=useState(''); 
    const navigate=useNavigate();
    const [redirect,setRedirect]=useState(false);


    let data={
        email:email,
        password:password
    }

    console.log(email+password+data.name)

    const ALogins=()=>{
        fetch( `http://localhost:8004/admin/v1/validate/${email}`,
        {
            method:"GET",
         }) .then(response=>{return response.text()})
            .then((text)=>{
            console.log(text)
            if(text==='Valid User'){
                alert("Admin Login Successfull");
                navigate("/adminhome");
            }
            else{
                alert("Enter valid Details");
            }
           })
    }
    
    return(
        <>
        <body>

            <div id="main">
            <div id="form">
                <h2 id="headding1">Login Here</h2>
                <input id="inpu" type="email" name="email" placeholder="Enter Email Here" onChange={(e)=> setusername(e.target.value)}/><br/><br/>
                <input type="password" name="password" placeholder="Enter password Here" onChange={(e)=> setpassword(e.target.value)}/>
                <div id="btnn">
                    <button id="btnn"><a href="#" onClick={ALogins}>Login </a></button>
                </div>
                    <p id="font" >Don't have an account<br/>
                    <a href="/adminsignup">Sign up</a>here</p>
            </div>
            </div>
    </body>
    </>
    );
}

export default AdminLogin;