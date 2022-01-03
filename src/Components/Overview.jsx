import React, {useContext, useState} from 'react';
import { TempUnitContext } from '../Context/TempUnit';
import { ActiveWoeidContext } from '../Context/ActiveWoeid';
import convertTemp from '../Helpers/convertTemp';
import getImage from '../Helpers/getImage';
import formatDate from '../Helpers/formatDate';
import Modalselectlocation from './ModalSelectLocation';
import { searchWeatherByLocation, isEmpty } from './../Helpers/api'

const Overview = (props) => {
    const [showModalSearch, setShowModalSearch] = useState(false);
    const [locations, setLocations] = useState([]);
    const {tempUnit, setTempUnit} = useContext(TempUnitContext);
    const {activeWoeid, setActiveWoeid} = useContext(ActiveWoeidContext);

    let tempToday;
    
    if(!isEmpty(props.locationWeather)){
        tempToday = props.locationWeather.consolidated_weather[0];
    }

    const switchModal = () => {
        setShowModalSearch(!showModalSearch);
    }
    
    const searchAndSelectLocation = (search) => {
        searchWeatherByLocation(search)
        .then(resultLocation => {
            if(resultLocation.data.length > 0){
                if(resultLocation.data.length > 1){
                    setLocations(resultLocation.data);
                    setShowModalSearch(true);
                } else{
                    setActiveWoeid(resultLocation.data[0].woeid);
                }
            }else{
                alert("Invalid search, insert pretty alert here :)");
            }
        });
    }

    const handleKeyUp = (e) => {
        if (e.keyCode == 13){
            searchAndSelectLocation(e.target.value);
        }
    }
    

    return (
        <>
            { showModalSearch && <Modalselectlocation locations={locations} handleLocations={(value) => {setLocations(value)}} closeModal={switchModal}/> }
            <div className='flex flex-col w-full sm:w-1/3 bg-secondary min-h-screen py-3'>
                <div className='flex-grow'>
                    <div className='flex justify-between mt-4 px-12'>
                        <input onKeyUp={handleKeyUp} className='bg-alter-gray placeholder-white px-2 shadow-md shadow-[#00000054]' type="text" placeholder='Search place...'/>
                        <button onClick={() => {searchAndSelectLocation("Mexico")}} className='bg-[#585676] rounded-full w-10 h-10 font-bold text-[18px]'><i className="material-icons text-2xl">gps_fixed</i></button>
                    </div>

                    <div className='flex mt-20 justify-center'>
                        { props.locationWeather.consolidated_weather
                            ? <img className='py-12' src={getImage(tempToday?.weather_state_name)} alt="" />
                            : <div className="rounded-full animate-pulse bg-gray-700 h-40 w-40"></div>
                        }
                    </div>

                    <div className='flex mt-8 justify-center'>
                        { props.locationWeather.consolidated_weather
                            ?
                                <>
                                    <strong className='text-9xl'>{convertTemp(tempToday?.the_temp, tempUnit)}</strong>
                                    <small className='text-8xl font-thin'>°{tempUnit}</small>
                                </>
                            :
                                <div className="animate-pulse h-4 w-1/3 bg-gray-700 rounded"></div>
                        }
                    </div>

                    <div className='flex mt-8 justify-center'>
                        { props.locationWeather.consolidated_weather
                            ? <p className='mt-5 text-4xl text-alter-gray font-bold'>{tempToday?.weather_state_name}</p>
                            : <div className="animate-pulse h-4 w-1/3 bg-gray-700 rounded"></div>
                        }
                    </div>

                    <div className='flex mt-20 mx-auto justify-center text-lg text-alter-gray'>
                        { props.locationWeather.consolidated_weather
                            ? 
                                <>
                                    <span className='px-5'>Today</span> • <span className='px-5'>{formatDate(tempToday?.applicable_date)}</span>
                                </>
                            :
                                <>
                                    <div className="animate-pulse h-4 w-16 bg-gray-700 rounded mr-2 mt-2"></div> • <div className="animate-pulse h-4 w-16 bg-gray-700 rounded ml-2 mt-2"></div>
                                </> 
                        }
                        
                    </div>

                    <div className='flex mt-8 justify-center text-lg text-alter-gray mb-4'>
                        <label className="material-icons pr-2">location_on</label>
                        { props.locationWeather.consolidated_weather
                            ? <label className='font-semibold'>{props.locationWeather.title}</label>
                            : <div className="animate-pulse h-4 w-16 bg-gray-700 rounded mt-1"></div>
                        }
                    </div>
                </div>

            </div>
        </>
    );
}

export default Overview;
