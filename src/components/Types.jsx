import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import axios from 'axios';


export function Types(props) {
    const [types, setTypes] = useState(null);
    const [error, setError] = useState(null);  
   

    useEffect(() => {
        getTypes();
    }, []);

    function getTypes() {

        let response = axios.get(props.url)
            .then((res) => {
                renderTypes(res.data.types)
            })

    }

    function renderTypes(response) {
        setTypes(response);
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

 // 
    return (
        <>
            {types &&
                types.map((types, index) => (
                    <div class="card">
                        <div class="card-body">
                            <h5 key={index} class="card-title"></h5>
                            <h3>{types.type.name}</h3>
                            <p class="card-text">Aqui me gustaria meter una tabla de tipos para ese tipo</p>
                        </div>
                    </div>
                )
                )}
            <p class="card-text">______________________________________________________________________________________________________________________________________</p>

        </>
    )
}