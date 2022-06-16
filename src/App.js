import Home from "./Home/Home"
import {useState} from "react";
import {CityContext} from "./Context/Context"
import Coordinate from "./Context/CoordinateContext";


function App() {
    const [city, setCity] = useState('')
    return (
        <div>
            <Coordinate>
                <CityContext.Provider value={{city, setCity}}>
                    <Home/>
                </CityContext.Provider>
            </Coordinate>
        </div>
    );
}

export default App;
