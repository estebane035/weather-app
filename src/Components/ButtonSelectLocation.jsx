import React from 'react';

const Buttonselectlocation = (props) => {
    return (
        <button onClick={() => {props.handleClick(props.location.woeid)}} className='hover:border hover:border-white w-full py-6 px-4 text-base hover:cursor-pointer text-left mb-6'>
            {props.location.title}
            <label className="material-icons pr-2 float-right">arrow_forward_ios</label>
        </button>
    );
}

export default Buttonselectlocation;
