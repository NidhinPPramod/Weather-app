import {createContext, useState} from "react";

export const CoordinateContext=createContext(null)


const Coordinate=({children})=>{

    const[coordinates,setCoordinate]=useState({lat:"",lon:""})

    return(
        <CoordinateContext.Provider value={{coordinates,setCoordinate}}>
            {children}
        </CoordinateContext.Provider>
    )
}

export default Coordinate
