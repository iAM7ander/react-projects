// useContext() = react hook that allows you to share values between multiple levels of components without passing props through each level

import React, {useState} from 'react'
import ComponentA from './ComponentA';

function App() {

  return(<>
    <ComponentA/>
  </>);
}

export default App
