import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick=()=>{
      let value = text.toUpperCase();
      setText(value);
  }
  const handleDownClick=()=>{
    let value = text.toLowerCase();
    setText(value);
}

const handleClearText=()=>{
    setText("");
}
  

  const handleOnChange=(event)=>{
      setText(event.target.value);
  }
  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
      <h2 >{props.heading}</h2>
      <div className="mb-3 ">
        <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Text summary</h3>
        <p> {text.split(" ").length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}  Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
