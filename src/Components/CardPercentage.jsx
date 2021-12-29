import React, {useContext} from 'react';
import { TempUnitContext } from '../Context/TempUnit';
import convertTemp from '../Helpers/convertTemp';

const CardPercentage = (props) => {
    const {tempUnit, setTempUnit} = useContext(TempUnitContext);

    return (
        <div className='bg-secondary flex-auto text-base text-center'>
            <div className='flex my-4 px-6  justify-center'>
                <p>{props.title}</p>
            </div>
            <div className='flex justify-center mb-6 h-18'>
                <p className='text-6xl'>{props.content}</p>
            </div>
            <div className='flex justify-between mb-1 px-6'>
                <span className='text-xs'>0</span>
                <span className='text-xs'>50</span>
                <span className='text-xs'>100</span>
            </div>
            <div className='flex justify-center px-6'>
                <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200 w-full">
                    <div style={{width: `${props.percentage}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                </div>
            </div>
            <div className='flex justify-end mb-6 px-6'>
                <span>%</span>
            </div>

        </div>
    );
}

export default CardPercentage;
