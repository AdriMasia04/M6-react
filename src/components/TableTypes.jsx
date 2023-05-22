import axios from "axios";
import { useEffect, useState } from "react";




export function TableTypes(props) {

    const [damage_relations, setRelations] = useState(null)
    const [double_damage_from, setDoubleDamageFrom] = useState(null)
    const [double_damage_to, setDoubleDamageTo] = useState(null)
    const [half_damage_from, setHalfDamageFrom] = useState(null)
    const [half_damage_to, setHalfDamageTo] = useState(null)
    const [no_damage_from, setNoDamageFrom] = useState(null)
    const [no_damage_to, setNoDamageTo] = useState(null)

    useEffect(() => {
        axios.get(props.url.type.url).then((res) => {

            setRelations(res.data.damage_relations)
            if (damage_relations.double_damage_from) {
                setDoubleDamageFrom(damage_relations.double_damage_from)
                 
            }
            if (damage_relations.double_damage_to) {
                setDoubleDamageTo(damage_relations.double_damage_to)
            }
            if (damage_relations.half_damage_from) {
                setHalfDamageFrom(damage_relations.half_damage_from)
            }
            if (damage_relations.half_damage_to) {
                setHalfDamageTo(damage_relations.half_damage_to)
            }
            if (damage_relations.no_damage_From) {
                setNoDamageFrom(damage_relations.no_damage_from)
            }
            if (damage_relations.half_damage_to) {
                setNoDamageTo(damage_relations.no_damage_to)
            }


        })
    }, [damage_relations]);


    return (
        <> {damage_relations ? (
            <ul>
                <table class="table" style={{borderColor: "#74F74E"}}>
                    <thead>
                        <tr>
                            <th scope="col"><h5>Double damage from</h5></th>
                            <th scope="col"><h5>Double damage to</h5></th>
                            <th scope="col"><h5>Half damage from</h5></th>
                            <th scope="col"><h5>Half damage to</h5></th>
                            <th scope="col"><h5>No damage from</h5></th>
                            <th scope="col"><h5>No damage to</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {double_damage_from && (
                                <td >
                                    {double_damage_from.map((name, index) => (
                                        <div key={index} style={{fontSize: "20px"}}>{double_damage_from[index].name}</div>
                                    ))}
                                </td>
                        )}
                        {double_damage_to && (  
                                <td>
                                    {double_damage_to.map((name, index) => (
                                        <div key={index} style={{fontSize: "20px"}}>{double_damage_to[index].name}</div>
                                    ))}
                                </td>
                        )}
                        {half_damage_from && (  
                                <td>
                                    {half_damage_from.map((name, index) => (
                                        <div key={index} style={{fontSize: "20px"}}>{half_damage_from[index].name}</div>
                                    ))}
                                </td>
                        )}
                        {half_damage_to && (  
                                <td>
                                    {half_damage_to.map((name, index) => (
                                        <div key={index} style={{fontSize: "20px"}}>{half_damage_to[index].name}</div>
                                    ))}
                                </td>
                        )}
                        {no_damage_from && (  
                                <td>
                                    {no_damage_from.map((name, index) => (
                                        <div key={index} style={{fontSize: "20px"}}>{no_damage_from[index].name}</div>
                                    ))}
                                </td>
                        )}
                        {no_damage_to && (  
                                <td>
                                    {no_damage_to.map((name, index) => (
                                        <div key={index} style={{fontSize: "20px"}}>{no_damage_to[index].name}</div>
                                    ))}
                                </td>
                        )}
                        </tr>
                    </tbody>


                </table>
            </ul>
        ) : (
            <p>Loading tables...</p>
        )}

        </>
    )

}