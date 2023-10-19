import React from "react";
import { useEffect } from "react";


function GetShelter() {

    const loadShelter = async () => {
        const url = 'https://homeless-shelter.p.rapidapi.com/state-city?state=NY&city=Buffalo';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6acef6ddecmsh49fb5e8525b9842p19bea8jsn13e2d4555982',
                'X-RapidAPI-Host': 'homeless-shelter.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result[0]);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        loadShelter()
    }, [])


    return (
        <div>
            <h1>Shelters</h1>
        </div>

    )

}
export default GetShelter

