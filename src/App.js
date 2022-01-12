import './App.css';
import Details from './Components/Details';
import Overview from './Components/Overview';
import React, {useState, useEffect} from 'react';
import { TempUnitContext } from './Context/TempUnit';
import { ActiveWoeidContext } from './Context/ActiveWoeid';
import { searchWeatherById } from './Helpers/helpers'

function App() {
  const [locationWeather, setLocationWeather] = useState({});
  const [tempUnit, setTempUnit] = useState("C");
  const [activeWoeid, setActiveWoeid] = useState(116545);

  useEffect(() => {
    if(activeWoeid){
      setLocationWeather({});
      searchWeatherById(activeWoeid)
      .then(resultWeather => {
          setLocationWeather(resultWeather.data);
      });
    }
  }, [activeWoeid])

  return (
    <>
      <div className='flex flex-col sm:flex-row text-white'>
        <TempUnitContext.Provider value={{tempUnit, setTempUnit}}>
          <ActiveWoeidContext.Provider value={{activeWoeid, setActiveWoeid}}>
            <Overview locationWeather={locationWeather}/>
            <Details  locationWeather={locationWeather}/>
          </ActiveWoeidContext.Provider>
        </TempUnitContext.Provider>
      </div>
    </>
  );
}



export default App;
