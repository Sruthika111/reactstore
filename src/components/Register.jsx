import React from 'react';
import {Link} from "react-router-dom";
export default function Register() {
  return (
    <div>
        <h2>Registration Form</h2>
        <p><input type="text" placeholder="Enter Name"></input></p>
        <p><input type="text" placeholder="Enter address"></input></p>
        <p><input type="password" placeholder="Enter password"></input></p>
        <p><button>Register</button></p>
        <p>
        <Link to="../login">Already a member?Login</Link>
        </p>
    </div>
  )
}
