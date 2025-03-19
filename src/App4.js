import React, { useState } from 'react'

export default function App4() {
    const[user,setUser]=useState({});
    const [msg,setMsg]=useState();
    const handleSubmit=()=>{
        if(user.email==="sai@gmail.com" && user.password==="123")
            setMsg("Welcome Sai")
        else
        setMsg("Access Denied")
    }
  return (
    <div>
        <h3>Login:</h3>
        {msg}
        <p><input type="text" onChange={(event)=>setUser({...user,email:event.target.value})}></input></p>
        <p><input type="password" onChange={(event)=>setUser({...user,password:event.target.value})}></input></p>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}
