import React, {useContext} from 'react';
import { TempUnitContext } from '../Context/TempUnit';
import convertTemp from '../Helpers/convertTemp';

const CardWindDirection = (props) => {
    const {tempUnit, setTempUnit} = useContext(TempUnitContext);

    return (
        <div className='bg-secondary flex-auto text-base text-center'>
            <div className='flex my-4 px-6  justify-center'>
                <p>{props.title}</p>
            </div>
            <div className='flex justify-center mb-8 h-18'>
                <p className='text-6xl'>{props.content}</p>
            </div>
            <div className='flex justify-center mb-8'>
                <div className='pr-2'>
                    Flechita
                </div>
                <span className="text-base text-[#E7E7EB] pl-2">{props.direction}</span>
            </div>

        </div>
    );
}

export default CardWindDirection;
