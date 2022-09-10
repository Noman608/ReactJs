import React from 'react'
import useCustomCounter from './Custom.js'
export default function App() {
    const data = useCustomCounter();
  return (
    <React.Fragment>
      <h1>Count Up : {data.count}</h1>
       <button type='button' onClick={data.handelIncrement}>Increment</button>
    </React.Fragment>
  )
}
