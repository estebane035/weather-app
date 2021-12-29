import './App.css';
import Details from './Components/Details';
import Overview from './Components/Overview';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { TempUnitContext } from './Context/TempUnit';

function App() {
  const [locationWeather, setLocationWeather] = useState({});
  const [tempUnit, setTempUnit] = useState("C");

  const getWeather = (location) => {
    axios.get(`https://www.metaweather.com/api/location/search/?query=${location}`)
            .then(resultLocation => {
              axios.get(`https://www.metaweather.com/api/location/${resultLocation.data[0].woeid}/`)
                  .then(resultWeather => {
                    setLocationWeather(resultWeather.data);
                  })
            });
  }

  useEffect(() => {
    getWeather("san");
  }, [])

  return (
    <>
      <div className='flex flex-row text-white'>
        <TempUnitContext.Provider value={{tempUnit, setTempUnit}}>
            <Overview locationWeather={locationWeather}/>
            <Details  locationWeather={locationWeather}/>
        </TempUnitContext.Provider>
      </div>
    </>
  );
}



export default App;
