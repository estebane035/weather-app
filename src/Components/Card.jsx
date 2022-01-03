import React, {useContext} from 'react';
import { TempUnitContext } from '../Context/TempUnit';
import convertTemp from '../Helpers/convertTemp';

const Card = (props) => {
    const {tempUnit, setTempUnit} = useContext(TempUnitContext);

    return (
        <div className='bg-secondary flex-auto text-base text-center'>
            { props.skeleton
                ?
                    <div className="rounded-full animate-pulse bg-gray-700 h-20 w-20 mx-auto my-4"></div>
                :
                    <>
                        <div className='flex my-4 px-6 justify-center'>
                            <p>{props.title}</p>
                        </div>
                        <div className='flex justify-center mb-8 h-18'>
                            { props.image 
                                ? <img src={props.image} className='h-14'/>
                                : <p className='text-6xl flex-grow'>{props.content}</p>
                            }
                        </div>
                        {props.max && 
                            <div className='flex justify-around mt-3 mb-4 px-5 '>
                                <p>{convertTemp(props.max, tempUnit)}°{tempUnit}</p>
                                <p className=' text-white-gray '>{convertTemp(props.min, tempUnit)}°{tempUnit}</p>
                            </div>
                        }
                    </>
            }
            

        </div>
    );
}

export default Card;
