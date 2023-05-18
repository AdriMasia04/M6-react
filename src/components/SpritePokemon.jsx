import { useEffect, useState } from "react"
import axios from "axios"
import { render } from "react-dom"

export function SpritePokemon(props){

  const [sprites, setSprite]=  useState(null)
   

    useEffect(()=>{
        getSprite()
    }, [])

    function getSprite(){

        let response = axios.get(props.url).then((res)=>{
            console.log(res.data.sprites.versions.generation-v)
            renderSprite(res.data.sprites)
        })
        
        
    } 

    function renderSprite(response){
        setSprite(response)

    }
    return(
        <>
            <div className="spritePokemon">
                {sprites &&
                    <img src={sprites.front_default} alt="" />
                }
            </div>
        </>
    )
}