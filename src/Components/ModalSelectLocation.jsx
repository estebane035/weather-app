import React, { useContext, useState } from 'react';
import ButtonSelectlocation from './ButtonSelectLocation';
import { ActiveWoeidContext } from '../Context/ActiveWoeid';
import { searchWeatherByLocation } from '../Helpers/helpers';

const Modalselectlocation = (props) => {
    const [search, setSearch] = useState("");
    const {activeWoeid, setActiveWoeid} = useContext(ActiveWoeidContext);

    const handleClick = (woeid) => {
        props.closeModal();
        setActiveWoeid(woeid);
    }

    const searchAndSelectLocation = (search) => {
        searchWeatherByLocation(search)
        .then(resultLocation => {
            if(resultLocation.data.length > 1){
                props.handleLocations(resultLocation.data);
            } else{
                handleClick(resultLocation.data[0].woeid);
            }
        });
    }

    const handleKeyUp = (e) => {
        if (e.keyCode == 13){
            searchAndSelectLocation(search);
        }
    }

    const clickSearch = () =>{
        searchAndSelectLocation(search);
    }

    return (
        <div className='bg-secondary min-h-screen absolute w-full sm:w-1/3 flex flex-col py-3 px-12'>
            <div className='text-right'>
                <button className="material-icons text-[#E7E7EB]" onClick={props.closeModal}>close</button>
            </div>
            <div className='flex flex-row mt-12 h-12'>
                <label className="material-icons text-[#616475] absolute translate-x-4 pt-3">search</label>
                <input className='form-input mr-2 text-[#616475] placeholder-[#616475] flex-auto bg-transparent border border-white pl-14 pr-4 w-7/12' onKeyUp={handleKeyUp} onChange={e => setSearch(e.target.value)} autoComplete='off' type="text" placeholder='Search location' name='search'/>
                <button className='ml-2 flex-auto bg-custom-blue' onClick={clickSearch}>Search</button>
            </div>

            <div className='mt-16'>
                {
                    props.locations.slice(0, 5).map(location => <ButtonSelectlocation handleClick={handleClick} location={location} />)
                }
            </div>
        </div>
    );
}

export default Modalselectlocation;
