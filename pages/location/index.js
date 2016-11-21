
var app = getApp()
Page({
  onLoad: function () {
    console.log('地图定位！')
    var that = this
    wx.getLocation({
        type: 'gcj02', 
        success: function (res) {
            console.log(res)
            var latitude = res.latitude
            var longitude = res.longitude
            wx.openLocation({
              latitude:latitude,
              longitude:longitude,
              scale:1
            })
        }
    });
  }
})
