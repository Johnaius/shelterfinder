import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

function GetShelter() {
   const emptyFields = {
      city: "",
      state: "",
   }
   const [formFields, setFormFields] = useState(emptyFields);
   function handleFormChange(e) {
      let temp = { ...formFields };
      temp[e.target.id] = e.target.value;
      setFormFields(temp);
   }
   const loadShelter = async (city,state) => {
      console.log('load shelter running!')
      const url = `https://homeless-shelter.p.rapidapi.com/state-city?state=${state}&city=${city}`;
      const options = {
         method: 'GET',
         headers: {
            'X-RapidAPI-Key': '6fc3062f9amshb19471b6d09bba5p1e8ce0jsn4c9d612646c0',
            'X-RapidAPI-Host': 'homeless-shelter.p.rapidapi.com'
         }
      };

      try {
         const response = await fetch(url, options);
         const result = await response.json();
         console.log(result);
      } catch (error) {
         console.error(error);
      }
   }
   function getInfo(e){
      e.preventDefault();
      console.log(`${formFields.city}, ${formFields.state}`)
      // loadShelter(formFields.city,formFields.state);


   }
   useEffect(() => {
      console.log("GetShelter component running!")
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
                  value = {formFields.state}
                  onChange={handleFormChange}
               />
            </div>

            <button type="submit" className="btn btn-primary" onClick={getInfo}>Submit</button>
         </form>
      </div>

   )
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
