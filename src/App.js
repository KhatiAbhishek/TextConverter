import './App.css';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';
import React,{useState} from 'react'
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message , type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1000);   
       
   }
  
  const toggleMode = ()=>{

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode is enabled","success")
    } else {
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode is enabled","success")
    }

  }

  return (
    <>
   
    <Navbar  title='TextUtils'  about='About US'  mode={mode} toggleMode={toggleMode} />
    <Alert  alert={alert} />
    <TextUtils  showAlert={showAlert} heading='Enter Text to analyze'  mode={mode}   />
    
    
    </>
   
  );
}

export default App;
