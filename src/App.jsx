import { useState } from 'react';
import { Register } from './components/Register';
import { Login } from './components/Login';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import { MainMenu } from './components/mainmenu';


export function App() {
  const [view, setView] = useState("login");

  function ChangeView(ev) {
    console.log("dfdsd ")
    view == "register" ? setView("login") : setView("register")
  }
   
  function renderview(ev){
    switch (view) {
      case "register":
        return <Register />
        break;
      case "login":
        return <Login />
      default:
        break;
    }
  }
  

  return (
    <>     
      <div className="appcontainer" >
      {renderview()}
      </div>
      <button onClick={ChangeView}>Cambiar Vista</button>
    </>
  )
}


// style={{position: "relative",width: "300%", left: "-100%", height: "200%"}}