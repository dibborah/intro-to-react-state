import { useState } from "react";

// In REACT we cannot use normal variables(like let or var) to change the UI
// In order to change the UI we have to use State from useState hook in REACT

function App() {
  console.log("Component Re-renders");

  // useState(defaultValue) ---> [ stateValue, functionToUpdateThatStateValue ];
  // ### useState ko bas hum component ke andaar h call kar skte hain direct
  // Aur file main kahi nahi call kar skte

  // useState is only callable inside the component before the return or JSX syntax

  // Callable:

  // # Note: This callable note is applied for all the other hooks in REACT
  // like : useEffect , useRef, etc.
  // And not just useState

  // # useState ka direct parent wo functional component hona chahiye

  // Component ke bahar ---> No
  // JSX ke andaar ---> No
  // kisi aur function ke andaar --> No

  // If all the above criteria are met than only
  // useState is callable inside a Functional Component

  // Notes on useState :
  // 1.
  // Destructuring => Array Destructuring is used in useState since useState hook takes in a defaultValue as a parameter and if nothing is passed as an defaultValues than undefined is passed as an defaultValues
  // And then useState returns an Array w/ two element 
  // First a state and the a function to update that state

  // 2. 
  // Whenever a State is changed (updated) than the component where the useState of that state is defined that component re-renders
  // So when the component re-renders the UI is updated with the latest state(value(data))

  // ### Keep the data in useState or State to keep the UI dynamic
  // useState is much more POWERFUL than NORMAL VARIABLES 

  // const [firstName , setFirstName] = useState("Elon");// Shortcut syntax hain
  // state ---> Elon
  // state ---> Dibya
  // Component re-renders
  // UI Changes

  const [firstName, setFirstName] = useState("Elon")// This state and setState is a naming convention which all react developers follow in the community
  const handleNameChange = () => {
    if(firstName === "Elon") setFirstName("Dibya");
    else setFirstName("Elon");
  }
  return (
    <div>
      <h1>{firstName}</h1>
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  );
}

export default App;
