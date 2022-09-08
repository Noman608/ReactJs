import React from 'react'
const Student = (props)=>{
  const handleClick = (e)=>{
    e.preventDefault();
    console.log("Button Clicked");
  }
  return(
    <>
      <h1>Hello Noman {props.roll}</h1>
      <a href="https://www.geeksforgeeks.org/" onClick={handleClick}>Click Me</a>
    </>
  )
}
export default Student;