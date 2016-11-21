
var apibaidu = require('apibaidu')

function getLocation(callback) {
    wx.getLocation({
        success: function(res) {
            callback(true, res.latitude, res.longitude)
        },
        fail: function() {
            callback(false)
        }
    })
}

function getWeatherByLocation(latitude, longitude, callback) {
    apibaidu.getCityName(latitude, longitude, function(cityname){
        console.log('cityname:' +cityname)
        cityname=cityname.replace('市','')
        apibaidu.getPinYin(cityname, function(success,city){
            console.log('city:' +city)
            if(success == false) {
                console.log('default city:chengdu')
                city='chengdu'
            }
            city=city.replace(/\s+/g,"")
            console.log(city)
            wx.request({
                url: apibaidu.HEWEATHER_URL,
                method: 'GET',
                data: {city:city},
                header: {'apikey':apibaidu.API_KEY},
                success: function(res) {
                    console.log('heweather:')
                    console.log(res.data)
                    var weatherData = res.data['HeWeather data service 3.0'][0];
                    callback(weatherData);
                }
            })
        })
    })
}


function requestWeatherData(cb) {
    getLocation(function(success, latitude, longitude){
        if(success == false) {
            latitude = 30.572269
            longitude = 104.066541
        }
        getWeatherByLocation(latitude, longitude, function(weatherData){
            cb(weatherData)
        })
    })
}

function loadWeatherData(callback) {
    requestWeatherData(function(data){
      var weatherData = {}
      weatherData = data
      callback(weatherData)
    })

}


module.exports = {
    loadWeatherData: loadWeatherData
}
