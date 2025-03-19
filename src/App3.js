import React, { useState } from 'react'

export default function App3() {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const [msg,setMsg]=useState();
    const handleSubmit=()=>{
        if(email==="sai@gmail.com" && password==="123")
            setMsg("Welcome Sai")
        else
        setMsg("Access Denied")
    }
  return (
    <div>
        <h3>Login:</h3>
        {msg}
        <p><input type="text" onChange={(event)=>setEmail(event.target.value)}></input></p>
        <p><input type="password" onChange={(event)=>setPassword(event.target.value)}></input></p>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}
