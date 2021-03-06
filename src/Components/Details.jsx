import React, {useContext} from 'react';
import Card from './Card';
import { TempUnitContext } from '../Context/TempUnit';
import ButtonTempUnit from './ButtonTempUnit';
import { getImage, formatDate, convertTemp } from '../Helpers/helpers';
import CardPercentage from './CardPercentage';
import CardWindDirection from './CardWindDirection';

const Details = (props) => {
    const {tempUnit, setTempUnit} = useContext(TempUnitContext);

    const changeTempUnit = (unit) => {
        setTempUnit(unit);
    }

    return (
        <div className='flex flex-col w-full sm:w-2/3 bg-principal p-3 px-12 sm:px-36 min-h-screen'>
            <main className="flex-grow">
                <div className='flex flex-row justify-end mt-4'>
                    <ButtonTempUnit tempUnit="C" />
                    <ButtonTempUnit tempUnit="F" />
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-5 mt-12 gap-6'>
                    { props.locationWeather.consolidated_weather
                        ?   props.locationWeather.consolidated_weather.slice(1).map((x, index) => 
                                <Card key={index} image={getImage(x.weather_state_name)} title={index===0 ? "Tomorrow" : formatDate(x.applicable_date)} min={convertTemp(x.min_temp, tempUnit)} max={convertTemp(x.max_temp, tempUnit)}/>
                            )
                        :
                            <>
                                <Card skeleton={true}/>
                                <Card skeleton={true}/>
                                <Card skeleton={true}/>
                                <Card skeleton={true}/>
                                <Card skeleton={true}/>
                            </>
                    }

                </div>

                <div className='mt-12'>
                    { props.locationWeather.consolidated_weather
                        ?   <h1 className='text-2xl'>Today's Highlights</h1>
                        :   <div className="animate-pulse h-4 w-1/3 bg-gray-700 rounded"></div>
                    }
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4">
                    { props.locationWeather.consolidated_weather
                        ?
                            <>
                                <CardWindDirection title={"Wind Status"} content={`${parseInt(props.locationWeather.consolidated_weather[0].wind_speed)} mph`} direction={props.locationWeather.consolidated_weather[0].wind_direction_compass}/>
                                <CardPercentage title={"Humidity"} content={`${props.locationWeather.consolidated_weather[0].humidity}%`} percentage={props.locationWeather.consolidated_weather[0].humidity}/>
                                <Card title={"Visibility"} content={`${parseFloat(props.locationWeather.consolidated_weather[0].visibility).toFixed(1)} Miles`}/>
                                <Card title={"Air Pressure"} content={`${props.locationWeather.consolidated_weather[0].air_pressure} mb`}/>
                            </>
                        :
                            <>
                                <Card skeleton={true}/>
                                <Card skeleton={true}/>
                                <Card skeleton={true}/>
                                <Card skeleton={true}/>
                            </>
                    }
                </div>
            </main>

            

            <footer className='mx-auto mt-12 text-center text-white-gray'>
                Created by <a className='underline' href='https://github.com/estebane035' target='_blank'>Esteban Bocardo</a> y <a className='underline' href='https://github.com/FranciscoMarquez1' target='_blank'>Francisco Marquez</a> - <a className='font-bold' href='https://devchallenges.io/' target='_blank'>devChallenges.io</a>
            </footer>
            
        </div>
    );
}

export default Details;
