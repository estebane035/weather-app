import axios from 'axios';

const searchWeatherByLocation = (search) => {
    return axios.get(`https://www.metaweather.com/api/location/search/?query=${search}`);
}

const searchWeatherById = (id) =>{
    return axios.get(`https://www.metaweather.com/api/location/${id}/`);
}

const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}

export {
    searchWeatherByLocation,
    searchWeatherById,
    isEmpty,
}