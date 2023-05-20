import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom/client";
import axios from 'axios';
import { Abilities } from './Abilities';
import { Types } from './Types';
import { MainMenu } from './mainmenu';


export function Pokemon(props) {

    const [color, setColor] = useState("")
    console.log(props.url.color)

    useEffect(() => {
        switch (props.url.color) {
            case "normal":
                setColor("#DDE3DD")
                break;
            case "fighting":
                setColor("#E85D13")
                break;
            case "flying":
                setColor("#B6FFEE")
                break;
            case "poison":
                setColor("#6006B4")
                break;
            case "ground":
                setColor("#6E501D")
                break;
            case "rock":
                setColor("#593902")
                break;
            case "bug":
                setColor("#A0CB0E")
                break;
            case "ghost":
                setColor("#7209A3")
                break;
            case "steel":
                setColor("#BDB1B1")
                break;
            case "fire":
                setColor("#F71D1D")
                break;
            case "water":
                setColor("#0943C8")
                break;
            case "grass":
                setColor("#24E321")
                break;
            case "electric":
                setColor("#EAF41D")
                break;
            case "psychic":
                setColor("#F602BE")
                break;
            case "ice":
                setColor("#05EFCF")
                break;
            case "dragon":
                setColor("#2E0742")
                break;
            case "dark":
                setColor("#262427")
                break;
            case "fairy":
                setColor("#FF00E4")
                break;
            default:
                break;
        
        }
    }, []);


    function renderMainMenu(ev) {
        console.log(props)
        ReactDOM.createRoot(document.getElementById("loginContainer")).render(
            <MainMenu user={{username: props.url.user, password: props.url.password}}/>)
    }


    return (
        <>
            <div className="pokemon" id='loginContainer' >
                <div class="card" style={{ backgroundColor: color }}>
                    <div className="PokeDetails" style={{ backgroundColor: "white" }}>
                        <h1 class="card-header" style={{ textTransform: "uppercase" }}>{props.url.name}</h1>
                        <div class="card-body" >
                            <h2 class="card-title">Abilities</h2>
                            <Abilities url={props.url.url} />
                        </div>
                        <div class="card-body" >
                            <h2 class="card-title">Types of the pokemon</h2>
                            <Types url={props.url.url} />
                        </div>
                    </div>
                </div>
                <button onClick={renderMainMenu}>Volver al menu</button>
            </div>
        </>
    )
}
