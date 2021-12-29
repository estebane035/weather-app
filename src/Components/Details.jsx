import React from 'react';
import Card from './Card';

const Details = () => {
    return (
        <div className='flex flex-col w-2/3 bg-principal p-3 px-36 min-h-screen'>

            <main className="flex-grow">
                <div className='flex flex-row justify-end mt-4'>
                    <button className='bg-gray-200 p-1.5 rounded-full'>C</button>
                    <button className='bg-gray-200 p-1.5 rounded-full'>F</button>
                </div>

                <div className='flex flex-row mt-20 gap-6'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

                <div className='mt-20'>
                    <h1 className='text-2xl'>Today's Highlights</h1>
                </div>

                <div className="grid grid-rows-2 grid-cols-2 gap-10 mt-4">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </main>

            <footer className='mx-auto mt-12 text-center text-white-gray'>
                Creado por <a className='underline' href='https://github.com/estebane035' target='_blank'>Esteban Bocardo</a> y <a className='underline' href='https://github.com/FranciscoMarquez1' target='_blank'>Francisco Marquez</a> - <a className='font-bold' href='https://devchallenges.io/' target='_blank'>devChallenges.io</a>
            </footer>
            
        </div>
    );
}

export default Details;
