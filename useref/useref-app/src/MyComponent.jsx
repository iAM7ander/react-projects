// useState() - re-renders the component when the state value changes

// useRef() - use the reference does not cause re-renders when its value changes.
// when you want a component to remember some information, but don't want that information to trigger new renders.

// accessing/interacting with DOM elements
// handling focus, animations, and transitions
// managing timers and intervals

import React, { useState, useEffect, useRef } from 'react'

function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component rendered");
    });

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }

    return(<div>
        <button onClick={handleClick1}>Click Me 1!</button>
        <input ref={inputRef1}/>

        <button onClick={handleClick2}>Click Me 2!</button>
        <input ref={inputRef2}/>

        <button onClick={handleClick3}>Click Me 3!</button>
        <input ref={inputRef3}/>
    </div>);
}
export default MyComponent;