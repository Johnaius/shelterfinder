import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';


function ShowShelters(props){
    return (
        <>
        <h1>Shelters near you</h1>
        <table className="table table-striped">
            <thead>
                <tr >
                    <th scope = "col">Name</th>
                    <th scope = "col">Address</th>
                    <th scope = "col">description</th>
                    <th scope = "col">phone</th>
                    <th scope = "col">Weather</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border">
                    <td>mock data</td>
                    <td>mock data</td>
                    <td>mock data</td>
                    <td>mock data</td>
                    <td>mock data</td>
                </tr>
                <tr className="border">
                    <td>mock data</td>
                    <td>mock data</td>
                    <td>mock data</td>
                    <td>mock data</td>
                    <td>mock data</td>
                </tr>
            </tbody>

        </table>
        </>


    )
}
export default ShowShelters
