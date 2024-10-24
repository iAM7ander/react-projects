// updater function - a function passed as an argument to setState() usually, setYear(arrow function)
// ex. setYear(y => y + 1)
// allow for safe update based on the previous state
// used with multiple state updates and asynchronous functions
// good practice to use updater functions

import {useState} from 'react';

function MyComponent(){

    const [count, setCount] = useState(0);

    function increment(){

        //takes pending state to calculate NEXT state
        //React puts your updater function in a queue (waiting in line)
        //During the next render, react will all them in the same order.

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    };

    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    };

    function reset(){
        setCount(0);
    };

    return(<div>
        <p>Count: {count}</p>
        <button className='counter-button' onClick={decrement}>decrement</button>
        <button className='counter-button' onClick={reset}>reset</button>
        <button className='counter-button' onClick={increment}>increment</button>
    </div>);
}

export default MyComponent