import React, {useContext} from 'react';

const CardWindDirection = (props) => {
    const arrowMapping = {
        "E": 0,
        "SE": 45,
        "ESE": 45,
        "SSE": 45,
        "S": 90,
        "SW": 135,
        "SSW": 135,
        "WSW": 135,
        "W": 180,
        "NW": 225,
        "WNW": 225,
        "NNW": 225,
        "N": 270,
        "NE": 315,
        "NNE": 315,
        "ENE": 315
    }

    return (
        <div className='bg-secondary flex-auto text-base text-center'>
            <div className='flex my-4 px-6  justify-center'>
                <p>{props.title}</p>
            </div>
            <div className='flex justify-center mb-8 h-18'>
                <p className='text-6xl'>{props.content}</p>
            </div>
            <div className='flex justify-center mb-8'>
            <span class="material-icons" style={{transform: `rotate(${arrowMapping[props.direction]}deg)`}}>
                send
            </span>
                <span className="text-base text-[#E7E7EB] pl-2">{props.direction}</span>
            </div>

        </div>
    );
}

export default CardWindDirection;
