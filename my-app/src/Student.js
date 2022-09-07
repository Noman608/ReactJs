import React from "react";

const Student = (props)=>{
    return(
        <>
            <h1>Hello {props.name}</h1>
            <h1>Your Roll :{props.roll}</h1>
        </>
    )
}
export default Student;