import React, {useContext, useEffect, useState} from 'react'
import "./Box.css"
import axios from "../../axios";
import {API_KEY} from "../../Constants/Constants";
import {CoordinateContext} from "../../Context/CoordinateContext";



const Box = () => {
    const {coordinates} = useContext(CoordinateContext)
    const [value, setValue] = useState('')

    useEffect(() => {
        axios.get(`data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${API_KEY}`).then((response) => {
            setValue(response.data)
        })
    }, [coordinates])

    const climateCheck=()=>{
        if(value.weather[0].main==='Clouds')
        {
            return 'fa-solid fa-cloud'
        }
        else if(value.weather[0].main==='Clear')
        {
            return 'fa-solid fa-cloud-sun'
        }
        else if(value.weather[0].main==='Rain')
        {
            return 'fa-solid fa-cloud-rain'
        }
        else if(value.weather[0].main==='Drizzle')
        {
            return 'fa-solid fa-cloud-bolt'
        }
        else if(value.weather[0].main==='Haze')
        {
            return 'fa-solid fa-smog'
        }

    }

    return (
        <div>
            {value && <div className="main-div  rounded p-4 container-fluid col-sm-12">
                <div className="d-flex flex-column py-4 justify-content-start">
                    <h1 className="title">{value.name}</h1>
                    <h1 className="val">{value.main.temp}°C</h1>
                </div>
                <div className="bottom-div">
                    <div className="icon fa-7x pt-3">
                        <i className={climateCheck()}/>
                    </div>
                    <div className="d-flex flex-row align-items-center border border-dark rounded p-3 text-white bg-dark">
                        <div className="d-flex flex-column align-items-center justify-content-center px-2">
                            <span className="val">{value.main.humidity}%</span>
                            <span className="title">Humidity</span>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center px-2">
                            <span className="val">{value.visibility}m</span>
                            <span className="title">Visibility</span>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center px-2">
                            <span className="val">{value.sys.country}</span>
                            <span className="title">Country</span>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Box
