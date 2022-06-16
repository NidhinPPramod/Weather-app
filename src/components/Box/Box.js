import React from 'react'
import "./Box.css"

const Box = () => {
    return (
        <div className="main-div  rounded p-4">
            <div className="d-flex flex-column py-4 justify-content-start">
                <h1>City name</h1>
                <h1>30 C</h1>
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
        </div>
    )
}

export default Box
