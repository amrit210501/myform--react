import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/NavBar';
import Alert from './components/Alert';
import SignUp from './components/SignUp';
import { useState } from 'react';


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 4000);
  }
  document.body.style.backgroundColor = '#042743';
  
  return (
    <>
    
    <Router>
          <Navbar />
          <Alert  alert={alert}/>
          <div className="container">
          <Routes>
            <Route exact path="/" element={<SignUp showAlert={showAlert}/>}>
            </Route>
          </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
