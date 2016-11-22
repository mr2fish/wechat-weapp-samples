const API_KEY="******";
const AIR_QUALITY_URL="http://apis.baidu.com/apistore/aqiservice/aqi";
const WXHOT_URL="http://apis.baidu.com/txapi/weixin/wxhot";
const MEINV_URL="http://apis.baidu.com/txapi/mvtp/meinv";
const NAOWAN_URL="http://apis.baidu.com/txapi/naowan/naowan";
const NUOMI_CATEGORY_URL="http://apis.baidu.com/baidunuomi/openapi/categories";

const HEWEATHER_URL="http://apis.baidu.com/heweather/weather/free";
const SILLYSTUDIO_URL="http://apis.baidu.com/sillystudio/service/topy";

function _getHeWeather(){
	return HEWEATHER_URL;
}

function _getCityName(latitude, longitude,callback){
  console.log('_getCityName:'+latitude+' '+longitude)
	var apiURL = "http://api.map.baidu.com/geocoder?output=json&location="+ latitude + "," + longitude + "&key="+API_KEY;
  
  console.log(apiURL)
  wx.request({
      url: apiURL,
      success: function(res) {
          console.log('_getCityName 2:')
          console.log(res)
          console.log(res.data["result"]["addressComponent"]["city"])
          callback(res.data["result"]["addressComponent"]["city"])
      },
      fail: function() {
        callback('成都')
      }
  });
}

function _getPinYin(words,callback) {
  console.log('_getPinYin: '+words)
  wx.request({
      url: SILLYSTUDIO_URL,
      method: 'GET',
      data: {words:words},
      header: {'apikey':API_KEY},
      success: function(res) {
          console.log('pinyin:')
          console.log(res)
          callback(true,res.data.py)
      },
      fail: function() {
        callback(false)
      }
  })
}

function _getWxHot(num,p,callback) {
  console.log('_getWxHot: '+num +'-p:'+p)
  wx.request({
      url: WXHOT_URL,
      method: 'GET',
      data: {num: num,page:p},
      header: {'apikey':API_KEY},
      success: function(res) {
        console.log(res)
        callback(true,res)
      },
      fail: function() {
        callback(false)
      }
  })
}




module.exports = {
  API_KEY:API_KEY,
  AIR_QUALITY_URL: AIR_QUALITY_URL,
  WXHOT_URL: WXHOT_URL,
  MEINV_URL: MEINV_URL,
  NAOWAN_URL: NAOWAN_URL,
  NUOMI_CATEGORY_URL: NUOMI_CATEGORY_URL,
  
  HEWEATHER_URL:HEWEATHER_URL,
  
  getHeWeather: _getHeWeather,
  getCityName: _getCityName,
  getPinYin: _getPinYin,
  getWxHot: _getWxHot

}
