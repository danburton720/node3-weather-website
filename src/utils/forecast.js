const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b0908cbb22bbc58c36f8121684587aac&query='
        + encodeURIComponent(latitude)
        + ','
        + encodeURIComponent(longitude)
        + '&units=m';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!')
        } else if (body.error) {
            console.log('Unable to find location')
        } else {
            callback(undefined, body.current.weather_descriptions[0]
                + '. It is currently ' + body.current.temperature
                + ' degrees out. It feels like '
                + body.current.feelslike + ' degrees out.'
            )
        }
    })
};

module.exports = forecast;