import axios from "axios";
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { SpritePokemon } from "./SpritePokemon";

export function MainMenu(props) {
    const [products, setProducts] = useState([])
    const [sprite, setSprite] = useState("")

    useEffect(() => {
        const products = axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => { // El res es la respuesta de Axios que da como variable
            // console.log(res)
            setProducts(res.data.results)
        })
    }, []);

    useEffect(() => {
        const products = axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => { // El res es la respuesta de Axios que da como variable
            // console.log(res)
            setProducts(res.data.results)
        })
    }, []);

 


    return (
        <>
            <div class="card">
                <h5 class="card-header display-3">
                    My Pokedex (User: {props.user.username})
                </h5>
                <div class="card-body" >
                    <h5 class="card-title display-5">Search your pokemon here!</h5>
                    <div className="products d-flex flex-wrap">
                        {products &&
                            products.map((pokemon, index) => (
                                <div class="card" style={{ width: "25%" }}>
                                    <div class="card-body">
                                        <h5 class="card-title">{pokemon.name}</h5>
                                        <div className="sprite" id="PokeSprite">                                          
                                            <SpritePokemon url={pokemon.url} />
                                        </div>
                                        <button class="btn btn-info">entrar a {pokemon.name}</button>
                                    </div>
                                </div>

                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}



