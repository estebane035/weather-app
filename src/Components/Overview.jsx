import React, {useContext, useState, useEffect} from 'react';
import { TempUnitContext } from '../Context/TempUnit';
import convertTemp from '../Helpers/convertTemp';
import getImage from '../Helpers/getImage';
import formatDate from '../Helpers/formatDate';
import Modalselectlocation from './ModalSelectLocation';
import { searchWeatherById, searchWeatherByLocation, isEmpty } from './../Helpers/api'

const Overview = (props) => {
    const [showModalSearch, setShowModalSearch] = useState(false);
    const [locations, setLocations] = useState([]);
    const {tempUnit, setTempUnit} = useContext(TempUnitContext);

    let tempToday;
    
    if(!isEmpty(props.locationWeather)){
        tempToday = props.locationWeather.consolidated_weather[0];
    }


    const switchModal = () => {
        setShowModalSearch(!showModalSearch);
    }
    
    const helperSearchAndSetLocation = (search) => {
        searchWeatherByLocation(search)
        .then(resultLocation => {
            if(resultLocation.data.length > 1){
                setLocations(resultLocation.data);
                setShowModalSearch(true);
            } else{
                handleSelectLocation(resultLocation.data[0].woeid);
            }
        });
    }

    const handleSelectLocation = (woeid) => {
        searchWeatherById(woeid)
        .then(resultWeather => {
            props.setLocationWeather(resultWeather.data);
        });
    }

    const handleKeyUp = (e) => {
        if (e.keyCode == 13){
            helperSearchAndSetLocation(e.target.value);
        }
    }
    
    useEffect(() => {
        helperSearchAndSetLocation("Mexico");
    }, [])
    

    return (
        <>
            { showModalSearch && <Modalselectlocation locations={locations} handleSelectLocation={handleSelectLocation} closeModal={switchModal}/> }
            <div className='flex flex-col w-full sm:w-1/3 bg-secondary min-h-screen py-3'>
                {
                    props.locationWeather.consolidated_weather 
                    ?
                    <div className='flex-grow'>
                        <div className='flex justify-between mt-4 px-12'>
                            <input onKeyUp={handleKeyUp} className='bg-alter-gray placeholder-white px-2 shadow-md shadow-[#00000054]' type="text" placeholder='Search place...'/>
                            <button onClick={() => {helperSearchAndSetLocation("Mexico")}} className='bg-[#585676] rounded-full w-10 h-10 font-bold text-[18px]'><i className="material-icons text-2xl">gps_fixed</i></button>
                        </div>

                        <div className='flex mt-20 justify-center'>
                            <img className='py-12' src={getImage(tempToday?.weather_state_name)} alt="" />
                        </div>

                        <div className='flex mt-8 justify-center'>
                            <strong className='text-9xl'>{convertTemp(tempToday?.the_temp, tempUnit)}</strong>
                            <small className='text-8xl font-thin'>°{tempUnit}</small>
                        </div>

                        <div className='flex mt-8 justify-center'>
                            <p className='mt-5 text-4xl text-alter-gray font-bold'>{tempToday?.weather_state_name}</p>
                        </div>

                        <div className='flex mt-20 mx-auto justify-center text-lg text-alter-gray'>
                            <span className='px-5'>Today</span> • <span className='px-5'>{formatDate(tempToday?.applicable_date)}</span>
                        </div>

                        <div className='flex mt-8 justify-center text-lg text-alter-gray mb-4'>
                            <label className="material-icons pr-2">location_on</label> <label className='font-semibold'>{props.locationWeather.title}</label>
                        </div>
                    </div>
                    : 
                    <div className='grid flex-grow place-content-center'>
                        Cargando
                    </div>
                }

            </div>
        </>
    );
}

export default Overview;
