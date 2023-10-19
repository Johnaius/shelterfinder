import React from "react";
import { useState, useEffect } from "react";


function GetShelter() {

    const [shelterList, setShelterList] = useState([]);

    const loadShelter = async () => {
        const url = `https://homeless-shelter.p.rapidapi.com/state-city?state=NY&city=Buffalo`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6fc3062f9amshb19471b6d09bba5p1e8ce0jsn4c9d612646c0',
                'X-RapidAPI-Host': 'homeless-shelter.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);
        if (response.ok) {
            const result = await response.json();
            console.log(result)
            setShelterList(result.shelters)
        }

    }

    const loadWeather = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=42.95898539151949&lon=-78.86170465446156&exclude=minutely,hourly,daily&units=imperial&appid=64993140304b1d95eb81734c42f0d52a`;


        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadShelter(), loadWeather()
    }, [])






    return (
        <div>
            <h1>Shelters</h1>

            {shelterList.map((item, i) =>
                <div key={i}>{item.name}</div>
            )}
        </div>
    )

}
export default GetShelter

