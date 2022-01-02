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

export default getImage;