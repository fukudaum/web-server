const request = require('request')

const forecast = (latitude, longitude) =>{
    const url = 'http://api.weatherstack.com/current?access_key=e7e8f47170f88f9a5908a51707f2f493&query=' + latitude + ',' + longitude

    request({url, json: true}, (error, {body} = {}) =>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.error){
            callback('Unable to find location. Try another search.', undefined)
        }
        else{
            const weather = body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. Humidity is ' + body.current.humidity + '%.'
            callback(undefined, weather)
        }
    })
}

module.exports = forecast