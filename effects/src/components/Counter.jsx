import { useState } from "react";

export default function Counter() {
    const [count , setCount] = useState(0);
    function increase(){
        setCount(count + 1);
    }
    function decrease(){
        if(count >0) setCount(count-1);
    }
    function reset(){
        setCount(0);
    }
    return(
        <>
        <h1>Counter: {count}</h1>
        <h1><button onClick={increase}>Increase</button></h1>
        <h1><button onClick = {decrease}>Decrease</button></h1>
        <h1><button onClick = {reset}>Reset</button></h1>
        </>
        )
}
