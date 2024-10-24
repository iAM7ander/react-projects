// react hook - special function that allows functional components to use React features without writing class components (react v16.8)
// (useState, useEffect, useContext, useReducer, useCallback)

//  useState() = a react hook that allows the creation of a stateful variable AND setter function to update its value in the virtual DOM. [name, setName]

import MyComponent from './MyComponent.jsx'

function App() {

  return(<>
      <MyComponent></MyComponent>
  </>);
}

export default App
