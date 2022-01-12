import axios from 'axios';

const searchWeatherByLocation = (search) => {
    return axios.get(`https://meta-weather.vercel.app/api/location/search/?query=${search}`);
}

const searchWeatherById = (id) =>{
    return axios.get(`https://meta-weather.vercel.app/api/location/${id}/`);
}

const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}

const getImage = ( weather ) => {
    const imgMapping = {
        "Clear": "assets/img/Clear.png",
        "Hail": "assets/img/Hail.png",
        "Heavy Cloud": "assets/img/HeavyCloud.png",
        "Heavy Rain": "assets/img/HeavyRain.png",
        "Light Cloud": "assets/img/LightCloud.png",
        "Light Rain": "assets/img/LightCloud.png",
        "Showers": "assets/img/Shower.png",
        "Sleet": "assets/img/Sleet.png",
        "Snow": "assets/img/Snow.png",
        "Thunderstorm": "assets/img/Thunderstorm.png",
    }
    return imgMapping[weather];
}

const convertTemp = (temp, tempUnit) => {
    if(tempUnit === "F"){
        temp = (temp * 1.8) + 32;
    }

    return parseInt(temp);
};

const formatDate = (date) => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date(date);
    const currentMonth = Number(date[5]+date[6])-1;
    return `${weekday[d.getUTCDay()]}, ${date[8]}${date[9]} ${month[currentMonth]}`
}

export {
    searchWeatherByLocation,
    searchWeatherById,
    isEmpty,
    getImage,
    convertTemp,
    formatDate,
}