const key = 'mRm9WTNGMmL3PZ1IhZ7Yz1fUFsa8mpXG'

//Get weather informations:
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0]
}


//Get city informations:
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0]
}

// getCity('bangalore')
//     .then(data => getWeather(data.Key))  //Get promise from getweather
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// getWeather('349727');