import React, { useState } from 'react'

export default function App6() {
    
    return (
    <div>
        <h1>Super Market</h1>
        <input type="text" placeholder="Enter your Hobby" onChange={(event)=>setText(event.target.value)}></input>
        <button onClick={handleSubnit}>Add</button>
        <hr></hr>
        {hobby && hobby.map((value,index)=> <li key={index}>{value}</li>)}
    </div>
  )
}
