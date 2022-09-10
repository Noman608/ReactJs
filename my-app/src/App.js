import React, { useState } from 'react'

export default function App() {
  
  const [name,setName] = useState('Noman');
  const [roll,setRoll] = useState(608);
  const handleClick= ()=>{
    setName('Abdullah Al Noman');
    setRoll(1880608);
  }
    return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Roll:{roll}</h1>
      <button type='button' onClick={handleClick}>Change</button>
    </div>
  )
}
