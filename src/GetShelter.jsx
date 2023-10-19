import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { SHELTERKEY, OPENWEATHERKEY } from "./assets/keys";


function GetShelter() {
    const emptyFields = {
        city: "",
        state: "",
    }
    const [formFields, setFormFields] = useState(emptyFields);
    const [shelterList, setShelterList] = useState([]);
    function handleFormChange(e) {
        let temp = { ...formFields };
        temp[e.target.id] = e.target.value;
        setFormFields(temp);
    }
    const loadShelter = async (city, state) => {
        console.log('load shelter running!')
        const url = `https://homeless-shelter.p.rapidapi.com/state-city?state=${state}&city=${city}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${SHELTERKEY}`,
                'X-RapidAPI-Host': 'homeless-shelter.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);
        let lat = ''
        let lon = ''
        if (response.ok) {
            const result = await response.json();
            coordinates = result.location.split(',')
            lat = coordinates[0]
            lon = coordinates[1]
            console.log(result)
            setShelterList(result.shelters)
        }
        const loadWeather = async () => {

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=-${lon}&exclude=minutely,hourly,daily&units=imperial&appid=${OPENWEATHERKEY}`;


            try {
                const weatherResponse = await fetch(url);
                const weatherResult = await weatherResponse.json();
                console.log(weatherResult);
            } catch (error) {
                console.error(error);
            }
        }
        loadWeather()

    }

    function getInfo(e) {
        e.preventDefault();
        console.log(`${formFields.city}, ${formFields.state}`)
        // loadShelter(formFields.city,formFields.state);


    }
    useEffect(() => {
        console.log("GetShelter component running!")
        loadShelter()
        // loadShelter()
    }, [])


    return (
        <div>
            <h2>Search for Shelter near you!</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="email" className="form-control" name="city" id="city" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <input className="form-control"
                        type="text"
                        id="state"
                        name="state"
                        value={formFields.state}
                        onChange={handleFormChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary" onClick={getInfo}>Submit</button>
            </form>
        </div>

    )

}
export default GetShelter
