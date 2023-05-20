import { useEffect, useState } from "react"
import axios from "axios"
import { render } from "react-dom"

export function SpritePokemon(props){

  const [sprites, setSprite]=  useState(null)
   

    useEffect(()=>{
        getSprite()
    }, [props.url])

    function getSprite(){
        let response = axios.get(props.url).then((res)=>{
            const spritesGenerationV = res.data.sprites.versions["generation-v"];
            const spritesBlackWhite = spritesGenerationV["black-white"].animated;
            renderSprite(spritesBlackWhite)
            console.log(spritesBlackWhite)
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