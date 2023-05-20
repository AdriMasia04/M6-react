import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SpritePokemon } from './SpritePokemon';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { Pokemon } from './Pokemon';

export function MainMenu(props) {
    const [products, setProducts] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [previousUrl, setPreviousUrl] = useState('');

    useEffect(() => {
        fetchPokemonList('https://pokeapi.co/api/v2/pokemon/');
    }, []);

    const fetchPokemonList = (url) => {
        axios
            .get(url)
            .then((res) => {
                setProducts(res.data.results);
                setNextUrl(res.data.next);
                setPreviousUrl(res.data.previous);
            })
            .catch((error) => {
                console.error('Error fetching Pokémon list:', error);
            });
    };

    const handleNextClick = () => {
        if (nextUrl) {
            fetchPokemonList(nextUrl);
        }
    };

    const handlePreviousClick = () => {
        if (previousUrl) {
            fetchPokemonList(previousUrl);
        }
    };

    function renderPokemon(url, name, type) {
        const container = document.getElementById('MainMenuContainer');
        if (container) {
            const pokemonProps = {
                url: { url: url, name: name, user: props.user.username, password: props.user.password, color: type },
            };
            ReactDOM.createRoot(container).render(<Pokemon {...pokemonProps} />);
        } else {
            console.error('El contenedor especificado no es un elemento del DOM válido.');
        }
    }

    async function fetchPokemonType(url) {
        return axios
            .get(url)
            .then((response) => {
                return response.data.types[0].type.name;
            })
            .catch((error) => {
                console.error('Error fetching Pokémon type:', error);
                return null;
            });
    }

    return (
        <>
            <div className="card" id="MainMenuContainer" style={{ width: '100%', left: '0%', backgroundColor: "#F5363C"}}>
                <h5 className="card-header display-3" style={{backgroundColor: "#74F74E"}}>My Pokedex (User: {props.user.username})</h5>
                <div className="card-body">
                    <h5 className="card-title display-5" style={{backgroundColor: "#74F74E"}}>Search your pokemon here!</h5>
                    <div className="products d-flex flex-wrap">
                        {products &&
                            products.map((pokemon, index) => (
                                <div className="card" style={{ width: '20%', backgroundColor: "#95FFE0" }} key={index}>
                                    <div className="card-body" >
                                        <h5 className="card-title">{pokemon.name}</h5>
                                        <div className="sprite" id="PokeSprite" >
                                            <SpritePokemon url={pokemon.url} />
                                        </div>
                                        <button
                                            style={{marginTop: "12%"}}
                                            className="btn btn-dark"
                                            onClick={() =>
                                                fetchPokemonType(pokemon.url).then((type) =>
                                                    renderPokemon(pokemon.url, pokemon.name, type)
                                                )
                                            }>
                                            entrar a {pokemon.name}
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div>
                        <button className="btn btn-dark" onClick={handlePreviousClick} disabled={!previousUrl}>
                            Previous
                        </button>
                        <button className="btn btn-dark" onClick={handleNextClick} disabled={!nextUrl}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
