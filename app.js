//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  //index
  getVenues:function(){
    var venuesItems=[
        {
            id:"471",
            title:"中国 万里长城",
            imgurl:"http://img05.tooopen.com/images/20151016/tooopen_sy_145433412174.jpg",
            price:"30.00",
            money:"31.80"
        },
        {
            id:"470",
            title:"唯美的故宫 角楼景色",
            imgurl:"http://img02.tooopen.com/images/20150828/tooopen_sy_140423486639.jpg",
            price:"32.00",
            money:"36.00"
        },
        {
            id:"469",
            title:"西湖 美景",
            imgurl:"http://img05.tooopen.com/images/20140510/sy_60782719757.jpg",
            price:"32.00",
            money:"36.00"
        },
        {
            id:"468",
            title:"黄山 迎客松",
            imgurl:"http://img05.tooopen.com/images/20140716/sy_66572377994.jpg",
            price:"38.00",
            money:"42.00"
        }
    ]
    return venuesItems
  }




})