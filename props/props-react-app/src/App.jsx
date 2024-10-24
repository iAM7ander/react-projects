// props - read-only properties that are shared between components.
// a parent component can send data to a child component.
// <Component key=value />
import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name="SpongeBob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student name="Squidward" age={50} isStudent={false}></Student>
      <Student name="Sandy" age={27} isStudent={true}></Student>
      <Student></Student>
    </>
  );
}

export default App
