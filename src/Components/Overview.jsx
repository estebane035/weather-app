import React from 'react';

const Overview = (props) => {
    return (
        <div className='w-1/3 bg-secondary min-h-screen py-3'>
            <div className='flex justify-between mt-4 px-12'>
                <input className='bg-alter-gray placeholder-white px-2' type="text" placeholder='Search place...'/>
                <button className='bg-gray-200 p-1.5 rounded-full'>C</button>
            </div>

            <div className='flex mt-20 justify-center'>
                <img className='py-12' src="assets/img/Shower.png" alt="" />
            </div>

            <div className='flex mt-8 justify-center'>
                <strong className='text-9xl'>15</strong>
                <small className='text-8xl font-thin'>°c</small>
            </div>

            <div className='flex mt-8 justify-center'>
                <p className='mt-5 text-4xl text-alter-gray font-bold'>Shower</p>
            </div>

            <div className='flex mt-20 justify-around px-32'>
                <p className='mt-5 text-lg text-alter-gray'>Today</p>
                <p className='mt-5 text-lg text-alter-gray'>Fri, 5 Jun</p>
            </div>

            <div className='flex mt-2 justify-center px-32'>
                <p className='mt-5 text-lg text-alter-gray'><label className="material-icons pt-2">location_on</label> {props.locationWeather.title}</p>
            </div>
        </div>
    );
}

export default Overview;
