import { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Link, Navigate, redirect, useNavigate}from 'react-router-dom';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function Login(){
    const [email,setusername]  =useState(''); 
    const [password,setpassword]=useState(''); 
    const navigate=useNavigate();
    const [redirect,setRedirect]=useState(false);


    let data={
        email:email,
        password:password
    }

    console.log(email+password+data.name)

    const Logins=()=>{
        fetch( `http://localhost:9000/admin/v1/validate/${email}`,
        {
            method:"GET",
         }) .then(response=>{return response.text()})
            .then((text)=>{
            console.log(text)
            if(text==='Valid User'){
                alert(" Login Successfull");
        
            }
            else{
                alert("Enter valid Admin Details");
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
                <div id="btnn"><Link to={`/profile/${email}`}>
                    <button id="btnn"><a href="#" onClick={Logins}>Login </a></button></Link>
                </div>
                    <p id="font" >Don't have an account<br/>
                    <a href="/signup">Sign up</a>here</p>
            </div>
            </div>
    </body>
    </>
    );
}

export default Login;