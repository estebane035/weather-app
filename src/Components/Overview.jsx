import React, {useContext, useState} from 'react';
import { TempUnitContext } from '../Context/TempUnit';
import convertTemp from '../Helpers/convertTemp';
import getImage from '../Helpers/getImage';
import formatDate from '../Helpers/formatDate';
import Modalselectlocation from './ModalSelectLocation';

const Overview = (props) => {
    const [showModalSearch, setShowModalSearch] = useState(false)
    const {tempUnit, setTempUnit} = useContext(TempUnitContext);

    let tempToday
    
    if(props.locationWeather.consolidated_weather){
        tempToday = props.locationWeather.consolidated_weather[0];
    }

    const switchModal = () => {
        setShowModalSearch(!showModalSearch);
    }

    return (
        <>
            { showModalSearch && <Modalselectlocation closeModal={switchModal}/> }
            <div className='flex flex-col w-full sm:w-1/3 bg-secondary min-h-screen py-3'>
                {
                    props.locationWeather.consolidated_weather 
                    ?
                    <div className='flex-grow'>
                        <div className='flex justify-between mt-4 px-12'>
                            <input className='bg-alter-gray placeholder-white px-2 shadow-md shadow-[#00000054]' type="text" placeholder='Search place...'/>
                            <button onClick={switchModal} className='bg-gray-200 p-1.5 rounded-full'>C</button>
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
