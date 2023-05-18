import { useEffect, useState } from "react"

export function Register() {
    const [username, SetUsername] = useState("")
    const [password, SetPassword] = useState("")

    let users = [] 
    let passwords = []

    useEffect(() => {
        console.log("Regiter montado")
        return () => {
            console.log("Register desmontado")
        }
    }, []);

    useEffect(() =>{
        console.log(users)
        console.log(passwords)

    }, [UpdateUsers])

    function handleinput(ev) {
        switch (ev.target.id) {
            case "username":
                SetUsername(ev.target.value);
                break;
            case "password":
                SetPassword(ev.target.value);
                break;
            default:
                break;
        }
    }

    function UpdateUsers(ev){
        users.push(document.getElementById("UserInput").value)
        passwords.push(document.getElementById("PassInput").value)
    }

    
    return (
        <>

            <div className="registerContainer" >
                <div className="card border border-info" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6H0cE6t8bmRtmokjcDE-tJ1xAJAq9VeKG-jmdzAQB14oAcUc8fyI1Ue3RkvgccbnPac&usqp=CAU)`}}>
                <h2 style={{color: "goldenrod"}}>REGISTER</h2> 
                    <div className="card-body">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label"style={{color: "white", fontSize:"150%"}}>Email address</label>
                            <input type="email" className="form-control" id="UserInput"
                                placeholder="name@example.com" onInput={handleinput}></input>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label" style={{color: "white", fontSize:"150%"}}>password</label>
                            <input type="password" className="form-control" id="PassInput" placeholder="A11aa;ª1yy"></input>
                        </div>
                        <div className="mb-3">
                            <button type="button" class="btn btn-primary" onClick={UpdateUsers}>Registrar usuario</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}


