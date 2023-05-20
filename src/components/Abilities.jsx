import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AbilityDesc } from './AbilityDesc';

export function Abilities(props) {
    const [abilities, setAbilities] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAbilities();
    }, []);

    function getAbilities() {
        let response = axios.get(props.url)
            .then((res) => {
                renderAbilities(res.data.abilities)
                console.log(abilities) 
                
            })

    }

    function renderAbilities(response) {
        setAbilities(response);
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>

            {abilities ? (
                <ul>
                    {abilities &&
                        abilities.map((ability, index) => (
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button key={index} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h5 style={{textTransform: "uppercase"}}>{ability.ability.name}</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body" key={index}>
                                                <AbilityDesc url={ability.ability.url}/> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </ul>
            ) : (
                <p>Loading abilities...</p>
            )}
        </>
    );
}
