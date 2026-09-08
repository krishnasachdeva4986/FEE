import React from "react";
import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
        console.log(count);
    }
    const removeCount = () => {
        setCount(count - 1);
        console.log(count);    
    }
    return(
        <>
        <h2>Count: {count}</h2>
        <button onClick={handleClick}>Click me</button>
        <br></br>
        <button onClick={removeCount}>Remove</button>   
        </>
    )
}
export default Counter;