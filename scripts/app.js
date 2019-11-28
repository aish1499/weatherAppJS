const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const time = document.querySelector('.time')
const icon = document.querySelector('.icon img')
const details = document.querySelector('.details')

const updateGUI = (data) => {
    // const city = data.cityDetails
    // const weather = data.weather
    let {cityDetails, weather} = data;
    console.log(cityDetails);
    console.log(weather);
    const currentTime = new Date(weather.EpochTime)
    

    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <span>${currentTime.getHours()}:${currentTime.getMinutes()}</span>
    <div class="display-4 my-3">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        
    </div>
    `   
    let timeSrc = ''
    if(weather.IsDayTime){
        timeSrc = 'images/day.svg'
    } else {
        timeSrc = 'images/night.svg'
    }

    time.setAttribute('src', timeSrc);

    iconSrc = `images/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)
}

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key)

    return {
        cityDetails,
        weather
    }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const city = cityForm.city.value.trim();
    
    updateCity(city)
        .then(data => updateGUI(data))
        .catch(err => console.log(err));
    cityForm.reset()
    // console.log(card.classList)
    //Making the card appear
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

})