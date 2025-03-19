import React, { useState } from 'react'

export default function App6() {
    const [hobby,setHobby]=useState([])
    const [text,setText]=useState()
    const handleSubnit=()=>{
        setHobby([...hobby,text])
    }  
    return (
    <div>
        <input type="text" placeholder="Enter your Hobby" onChange={(event)=>setText(event.target.value)}></input>
        <button onClick={handleSubnit}>Add</button>
        <hr></hr>
        {hobby && hobby.map((value,index)=> <li key={index}>{value}</li>)}
    </div>
  )
}
