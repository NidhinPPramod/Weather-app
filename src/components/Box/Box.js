import React, {useContext, useEffect, useState} from 'react'
import "./Box.css"
import axios from "../../axios";
import {API_KEY} from "../../Constants/Constants";
import {CoordinateContext} from "../../Context/CoordinateContext";
import {CityContext} from "../../Context/Context";


const Box = () => {
    const {coordinates} = useContext(CoordinateContext)
    const [value, setValue] = useState('')
    const {city} = useContext(CityContext)

    useEffect(() => {
        axios.get(`data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${API_KEY}`).then((response) => {
            setValue(response.data)
            console.log(value)
        })

    }, [coordinates])


    return (
        <div>
            {value && <div className="main-div  rounded p-4">
                <div className="d-flex flex-column py-4 justify-content-start">
                    <h1>{city}</h1>
                    <h1>{value.main.temp}</h1>
                </div>
                <div className="bottom-div">
                    <div className="d-flex flex-row align-items-center border border-dark rounded p-3">
                        <div className="d-flex flex-column align-items-center justify-content-center px-2">
                            <span>100%</span>
                            <span>Humidity</span>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center px-2">
                            <span>277km</span>
                            <span>Visibility</span>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center px-2">
                            <span>Low 0</span>
                            <span>Uv index</span>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Box
