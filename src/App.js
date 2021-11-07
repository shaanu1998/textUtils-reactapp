import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light')
  let toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#103368';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="shantanu"  about="Aboutus" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm  heading="Enter the text here to analyse" mode={mode}/>
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
