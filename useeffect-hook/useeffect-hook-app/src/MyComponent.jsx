// useEffect() - react hook that tells React do some code when(pick one):
//  this component re-renders
//  this component mounts
//  the state of the value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})           //runs after every re-render
// 2. useEffect(() => {}, [])       // Runs only on mount
// 3. useEffect(() => {}, [value])  // runs the mount + when value changes

// Uses
// Event Listeners
// Dom Manipulation
// Subscriptions (real-time updates)
// Fetching Data from an Api
// clean up when a component unmounts

import {useState, useEffect} from 'react';

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>
    </>);

}
export default MyComponent;