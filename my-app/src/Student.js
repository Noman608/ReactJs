import React from "react";
import { Component } from "react";


/********* Class Component *********/
class Student extends Component{
    render(){
        return(
            <>
                <h1>Hello {this.props.name}</h1>
            </>
        )
    }
}

/********* functional Component *********/
// const Student = (props) => {
//   return (
//     <>
//       <h1>Hello {props.name}</h1>
//     </>
//   );
// };

export default Student;
