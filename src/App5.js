import React, { useState } from 'react'
import "./App5.css"
export default function App5() {
    const [sub,setSub]=useState(0);
    const handleSubmit=()=>{
        setSub(sub+1)
    }
  return (
   <div className="container">
    <div>
        <div>{sub}</div>
        <button onClick={handleSubmit}>Click</button>
    </div>
    </div>
  )
}
