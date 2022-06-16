import React, {useContext} from 'react'
import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import {CityContext} from "../../Context/Context";
import axios from "../../axios";
import {API_KEY} from "../../Constants/Constants";
import {CoordinateContext} from "../../Context/CoordinateContext";

const SearchBox = () => {
    const {setCity, city} = useContext(CityContext)

    const{setCoordinate}=useContext(CoordinateContext)

    const getCoordinates = () => {
        axios.get(`geo/1.0/direct?q=${city}&appid=${API_KEY}`).then((response) => {
            let updated_lat=response.data[0].lat
            let updated_lon=response.data[0].lon
            setCoordinate({lat: updated_lat,lon: updated_lon})
        }).catch((err)=>{
            console.log(err.message)
        })
    }


    return (
        <div className="search-div bg-light text-white rounded p-3 d-flex flex-row justify-content-between ">
            <div>
                <TextField onChange={(event) => setCity(event.target.value)} fullWidth id="outlined-basic"
                           label="Enter City" variant="outlined"/>
            </div>
            <div className="px-2 d-flex align-items-center justify-content-center">
                <button className="btn btn-outline-dark" onClick={getCoordinates}>Check</button>
            </div>
        </div>
    )
}

export default SearchBox
