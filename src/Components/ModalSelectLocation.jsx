import React from 'react';
import ButtonSelectlocation from './ButtonSelectLocation';

const Modalselectlocation = (props) => {
    return (
        <div className='bg-secondary min-h-screen absolute w-full sm:w-1/3 flex flex-col py-3 px-12'>
            <div className='text-right'>
                <button className="material-icons text-[#E7E7EB]" onClick={props.closeModal}>close</button>
            </div>
            <div className='flex flex-row mt-12 h-12'>
                <label className="material-icons text-[#616475] absolute translate-x-4 pt-3">search</label>
                <input className='form-input mr-2 text-[#616475] placeholder-[#616475] flex-auto bg-transparent border border-white pl-14 pr-4 w-7/12' autoComplete='off' type="text" placeholder='Search location' name='search'/>
                <button className='ml-2 flex-auto bg-custom-blue'>Search</button>
            </div>

            <div className='mt-16'>
                <ButtonSelectlocation name="London" />
                <ButtonSelectlocation name="Barcelona" />
                <ButtonSelectlocation name="Long Beach" />
            </div>
        </div>
    );
}

export default Modalselectlocation;
