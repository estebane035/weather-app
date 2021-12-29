import React from 'react';

const Overview = (props) => {
    return (
        <div className='flex flex-col w-1/3 bg-secondary min-h-screen py-3'>
            <div className='flex-grow'>
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

                <div className='flex mt-20 mx-auto justify-center text-lg text-alter-gray'>
                    <span className='px-5'>Today</span> • <span className='px-5'>Fri, 5 Jun</span>
                </div>

                <div className='flex mt-8 justify-center text-lg text-alter-gray'>
                    <label className="material-icons pr-2">location_on</label> <label className='font-semibold'>{props.locationWeather.title}</label>
                </div>
            </div>
        </div>
    );
}

export default Overview;
