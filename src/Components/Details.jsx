import React, {useContext} from 'react';
import Card from './Card';
import { TempUnitContext } from '../Context/TempUnit';
import ButtonTempUnit from './ButtonTempUnit';
import getImage from '../Helpers/getImage';
import convertTemp from '../Helpers/convertTemp';
import CardPercentage from './CardPercentage';
import CardWindDirection from './CardWindDirection';

const Details = (props) => {
    const {tempUnit, setTempUnit} = useContext(TempUnitContext);

    const changeTempUnit = (unit) => {
        setTempUnit(unit);
    }

    return (
        <div className='flex flex-col w-2/3 bg-principal p-3 px-36 min-h-screen'>
            <main className="flex-grow">
                { props.locationWeather.consolidated_weather
                ?
                    <>
                        <div className='flex flex-row justify-end mt-4'>
                            <ButtonTempUnit tempUnit="C" />
                            <ButtonTempUnit tempUnit="F" />
                        </div>

                        <div className='flex flex-row mt-20 gap-6'>
                            {props.locationWeather.consolidated_weather.slice(1).map(x => 
                                    <Card image={getImage(x.weather_state_name)} title={"tomorrow"} min={convertTemp(x.min_temp, tempUnit)} max={convertTemp(x.max_temp, tempUnit)}/>
                                )
                            }

                        </div>

                        <div className='mt-20'>
                            <h1 className='text-2xl'>Today's Highlights</h1>
                        </div>

                        <div className="grid grid-rows-2 grid-cols-2 gap-10 mt-4">
                            <CardWindDirection title={"Wind Status"} content={`${parseInt(props.locationWeather.consolidated_weather[0].wind_speed)} mph`} direction={props.locationWeather.consolidated_weather[0].wind_direction_compass}/>
                            <CardPercentage title={"Humidity"} content={`${props.locationWeather.consolidated_weather[0].humidity}%`} percentage={props.locationWeather.consolidated_weather[0].humidity}/>
                            <Card title={"Visibility"} content={`${parseFloat(props.locationWeather.consolidated_weather[0].visibility).toFixed(1)} Miles`}/>
                            <Card title={"Air Pressure"} content={`${props.locationWeather.consolidated_weather[0].air_pressure} mb`}/>
                        </div>
                    </>
                :
                    "Cargando"        
                }

            </main>

            

            <footer className='mx-auto mt-12 text-center text-white-gray'>
                Created by <a className='underline' href='https://github.com/estebane035' target='_blank'>Esteban Bocardo</a> y <a className='underline' href='https://github.com/FranciscoMarquez1' target='_blank'>Francisco Marquez</a> - <a className='font-bold' href='https://devchallenges.io/' target='_blank'>devChallenges.io</a>
            </footer>
            
        </div>
    );
}

export default Details;
