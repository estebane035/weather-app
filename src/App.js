import './App.css';
import Details from './Components/Details';
import Overview from './Components/Overview';
import React, {useState, useEffect} from 'react';
import { TempUnitContext } from './Context/TempUnit';

function App() {
  const [locationWeather, setLocationWeather] = useState({});
  const [tempUnit, setTempUnit] = useState("C");

  const helperSetLocationWeather = (value) => {
    setLocationWeather(value);
  }

  return (
    <>
      <div className='flex flex-col sm:flex-row text-white w-screen'>
        <TempUnitContext.Provider value={{tempUnit, setTempUnit}}>
            <Overview setLocationWeather={helperSetLocationWeather} locationWeather={locationWeather}/>
            <Details  locationWeather={locationWeather}/>
        </TempUnitContext.Provider>
      </div>
    </>
  );
}



export default App;
