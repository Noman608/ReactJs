import React from "react";
//function
const show =  (name)=>{
  return name;
}

//object
let user = {
  firstName:"Rahul",
}

const el1 = <h1>Hello {show("Nomanb")}</h1>;
const el2 = <h1>Hello {user.firstName}</h1>;

export {el1,el2};