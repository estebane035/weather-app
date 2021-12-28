import React from 'react';
import Card from './Card';

const Details = () => {
    return (
        <div className='w-2/3 bg-principal p-3 px-36 min-h-screen'>

            <div className="flex-grow">
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
            </div>
            

            <footer className='text-center mt-12'>
                Creado por Estebane035 y FranciscoMarquez1
            </footer>

        </div>
    );
}

export default Details;
