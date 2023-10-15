import React, {useState} from "react";

function App() {
const [headingText, setHeadingText] = useState("Hello");
const [isMouseOver, setOnMouseOver] = useState(false);

function handleHeading(){
  setHeadingText("SUBMITTED");
}

function handleOnMouseOver(){
  setOnMouseOver(true);
  console.log("mouse over");
}

function handleOnMouseOut(){
  setOnMouseOver(false);
  console.log("mouse out");
}

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={
          { backgroundColor: isMouseOver ? "black" : "white" }
        }
        onClick={handleHeading}
        onMouseOut={handleOnMouseOut}
        onMouseOver={handleOnMouseOver}
      >Submit</button>
    </div>
  );
}

export default App;
