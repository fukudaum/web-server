const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=e7e8f47170f88f9a5908a51707f2f493&query=' + latitude + ',' + longitude

    request({url, json: true}, (error, {body} = {}) =>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.error){
            callback('Unable to find location. Try another search.', undefined)
        }
        else{
            const weather = body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.'
            callback(undefined, weather)
        }
    })
}

module.exports = forecast


// const url = 'http://api.weatherstack.com/current?access_key=e7e8f47170f88f9a5908a51707f2f493&query=-23.3829291,-51.9262769'

// request({url: url, json : true}, (error, response) => {
//     if (error){
//         console.log('Unable to connect to weather service!')
//     }
//     else if(response.body.error){
//         console.log('Unable to find location!')
//     }
//     else{
//         const temperature = response.body.current.temperature
//         const tempFeel = response.body.current.feelslike
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + temperature + ' degrees out. It feels like ' + tempFeel + ' degrees out.')
//     }

// })