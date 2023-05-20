import { useEffect, useState } from "react";
import axios from "axios";

export function AbilityDesc(props) {
    const [desc, setDesc] = useState("");

    useEffect(() => { 
        async function fetchData() {
            try {
                const englishDesc = await getEnglishAbilityDescription(props.url);
                if (englishDesc) {
                    setDesc(englishDesc);
                } else {
                    console.log("No se pudo obtener la descripción de la habilidad en inglés");
                }
            } catch (error) {
                console.error("Error fetching ability description:", error);
            }
        }

        fetchData();
        console.log(desc)
    }, []);

    async function getEnglishAbilityDescription(abilityUrl) { // Esta funcion la he creado con ChatGPT 
        try {
            const response = await axios.get(abilityUrl);
            const { flavor_text_entries } = response.data;
            const englishDesc = flavor_text_entries.find(
                (entry) => entry.language.name === "en"
            );
            if (englishDesc) {
                return englishDesc.flavor_text;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error fetching ability description:", error);
            return null;
        }
    }

    return (
        <>
            <p>{desc ? desc : "Loading ability description..."}</p>
        </>
    );
}
