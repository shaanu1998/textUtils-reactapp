import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light')
  const [alert , setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type : type}
      );

      setTimeout(() => {
        setAlert(null);
      }, 2000);
     
  }
  let toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#103368';
      showAlert("Dark mode has been anabled","success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been anabled","success");
    }
  }
  return (
    <>
      <Navbar title="shantanu"  about="Aboutus" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm  heading="Enter the text here to analyse" mode={mode} showAlert={showAlert} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
