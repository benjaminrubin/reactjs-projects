// Import the React and ReactDom libraries
// whatever is after 'from' can be either a Library or a Dependency
import React from "react";
import ReactDOM from "react-dom";


// Create a function
function createButtonText() {
  return "This is text from a function!"
}

// Create a react component
const App = () => {

  // Variables
  const buttonText = "Click me!"
  const style = { backgroundColor: "red", color: "white" };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
        {/* This is a js variable */}
         {buttonText}
         {createButtonText()}
      </button>


    {/* Another way to set styles for an object */}
    <button style={style}>This is a button</button>

    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById("root"));
