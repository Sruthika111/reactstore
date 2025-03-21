import React from 'react';
import "./Register.css";
import { useState } from "react";
import {Link} from "react-router-dom";
export default function Register() {
  const [details, setDetails] = useState([]);
  const [info, setInfo] = useState({});
  const handleSubmit = () => {
    if(details.includes(info)){
      alert("User already exists");
    }
    else{
    setDetails([...details, info]);
  }
  };
  const handleDelete = (value) => {
    setDetails(details.filter((element)=> element!=value));
  };
  return (
    <div className='container'>
    <div>
        <h2>Registration Form</h2>
        <p><input type="text" placeholder="Enter Name" onChange={(e) => setInfo({ ...info, name: e.target.value })}></input></p>
        <p><input type="text" placeholder="Enter address" onChange={(e) => setInfo({ ...info, email: e.target.value })}></input></p>
        <p><input type="text" placeholder="Enter password" onChange={(e) => setInfo({ ...info, Password: e.target.value })}></input></p>
        <p><button onClick={handleSubmit}>Register</button></p>
        <p>
        <Link to="../login">Already a member?Login</Link>
        </p>
       </div>
        <div>
          {details &&
            details.map((value, index) => (
             <li>{value.name}-{value.email}-{value.Password} <button onClick={() => handleDelete(value)}>Delete</button></li>
            )) } 
            
        </div>
    </div>
  )
}
