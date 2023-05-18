import { useState } from "react";
import ReactDOM from "react-dom/client";
import { MainMenu } from "./mainmenu";


export function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function renderMainMenu(ev) {
        console.log("fdfdf")
        ReactDOM.createRoot(document.getElementById("loginContainer")).render(
            <MainMenu user={{username: username, password: password}}/>)
    }

    function handleChange(ev) {
        console.log(ev.target.id)
        switch (ev.target.id) {
            case "username":
                setUsername(ev.target.value);
                break;

            case "password":
                setPassword(ev.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <>
        {/* PREGUNTARLE A RAUL COMO PONER EL FONDO EN TODA LA PAGINA Y NO SOLO EN EL FORMULARIO*/}
            <div id="loginContainer"> 
                <div className="card border border-danger" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6H0cE6t8bmRtmokjcDE-tJ1xAJAq9VeKG-jmdzAQB14oAcUc8fyI1Ue3RkvgccbnPac&usqp=CAU)`}}>
                    <h2 style={{color: "royalblue"}}>LOGIN</h2>
                    <div className="card-body">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label" style={{color: "white", fontSize:"150%"}}>Email address</label>
                            <input onInput={handleChange} type="email" className="form-control" id="username" placeholder="name@example.com"></input>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label" style={{color: "white", fontSize:"150%"}}>password</label>
                            <input onInput={handleChange} type="password" className="form-control" id="password" placeholder="A11aa;ª1yy"></input>
                        </div>
                        <div className="mb-3">
                            <button type="button" class="btn btn-primary" onClick={renderMainMenu}>Entrar al main menu</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}


