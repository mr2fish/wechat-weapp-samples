var weather = require('../../utils/weather')

Page({

  data: {
    weather: {}
  },
  onLoad: function () {
    
    var that = this;

    weather.loadWeatherData(function(data){
      var wantedDaily = [];
      for(var i = 1;i < data.daily_forecast.length;i++) {
        var dailyItem = data.daily_forecast[i];
        var time = dailyItem.date;
        dailyItem["date"] = time.substr(5);
        wantedDaily.push(dailyItem);
      }
      var weatherData = {};
      weatherData = data;
      weatherData.daily_forecast = wantedDaily;
      
      console.log(weatherData)
      that.setData({
        weather: weatherData
      });

    });    

  }

})