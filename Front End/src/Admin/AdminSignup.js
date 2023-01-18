import { useState } from 'react';
import {Link, Navigate, redirect, useNavigate}from 'react-router-dom';
import '../App.css'

function Signup(){
    const [email,setuname]=useState('');   
    const [password,setpassword]=useState(''); 
    const [password1,setpassword1]=useState(''); 

    const navigate=useNavigate();
    // const [redirect,setRedirect]=useState(false);
  

    const register=() =>{
        let data={
            email:email,
            password:password,
            password1:password1

        }
        fetch('http://localhost:8004/admin/v1/add',
        {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        } )
        .then(response=>{return response.text()})
        .then((text)=>{

            if(text=='Admin Details Added Successfully'){
                alert("Admin Registration Successfull");
                navigate('/adminlogin');
            }else{
                alert("Email Id Already Taken");
            }
        })
        
    }

    
    return(
        <body>
            <div id="main">
            <div id="form">
            <h2 id="headding1">Sign up</h2>
            <input id="inpu" placeholder=" Enter Email" type="text" onChange={(e)=> setuname(e.target.value)}/><br/><br/>
            <input type="Password" placeholder=" Enter Password" onChange={(e)=> setpassword(e.target.value)}/><br/><br/>
            <input type="Password" placeholder=" Re-Enter Password " onChange={(e)=> setpassword1(e.target.value)}/><br/><br/>
            <div id="btnn">
                <button id="btnn" onClick={()=>register()}>Register</button><br/><br/>
            </div>
            <Link   id="font" to="/adminlogin"> Already Registred !!!<br/>
            <a href="/adminlogin">Login </a>here</Link>
            </div>
            </div>
        </body>
        
    );
}
export default Signup;
