var apibaidu = require('../../utils/apibaidu')
var utils = require( '../../utils/util.js' )

var app = getApp()
Page({
  data: {
    swipermeinv: [],
    listwxhot: [],
    currentDateStr: '',
    page: 1,
    hidden: false,
    loadmorehidden:true,
    loading: false,
    plain: false
  },
  swiperchange: function(e) {
    //console.log(e.detail.current)
  },
  onItemClick: function(e) {
    var targetUrl = "meinv";
    if(e.currentTarget.dataset.url != null )
      targetUrl = targetUrl + "?url=" + e.currentTarget.dataset.url
    wx.navigateTo( {
      url: targetUrl
    })
  },
  scrollupper: function (e) {
    console.log("scrollupper refresh...")
    //this.onLoad()
  },
  scrolllower: function(e) {
    console.log("scrolllower refresh...")
    console.log(e)
    this.loadMore()
  },
  loadMore: function(e) {
    this.setData({page: this.data.page + 1})
    console.log("loading more..." + this.data.page)
    this.requestWxHot(this.data.page);
  },
  requestWxHot: function(p) {
    console.log('requestWxHot')
    var that = this
    that.setData({
      hidden: false,
      loadmorehidden:true
    })
    apibaidu.getWxHot(3,p, function(success,res){
      console.log('getWxHot:'+p+ '-'+success)
      if(success == false) {
        console.log('getWxHot failed')
      }else{
        if (res.data.code == 200) {
          if (that.data.page == 1) {
            wxhotItems=[]
          }
          for( var i = 0;i < res.data.newslist.length;i++){
            wxhotItems.push(res.data.newslist[i])
          }
          that.setData({
            listwxhot:wxhotItems,
            hidden: true,
            loadmorehidden:false
          })
        } else {
          console.log('获取失败');
        }
      }
    })
  },
  onPullDownRefresh: function () {
    console.log("pulldown refresh...")
    this.onLoad()
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    wx.request({
        url: apibaidu.MEINV_URL,
        data: {num: 10},
        header: {'apikey':apibaidu.API_KEY},
        success: function(res) {
          console.log(res.data)
          if (res.data.code == 200) {
            that.setData({
              swipermeinv:res.data.newslist
            })
          } else {
            console.log('获取失败');
          }
        }
    })
    this.setData({page: 1})
    this.requestWxHot(this.data.page)
  },
  onShow: function() {
    var date = utils.getCurrentDate()
    this.setData( { currentDateStr: date.year + '.' + date.month + '.' + date.day + '　' + utils.getWeekday(date.weekday) })
  }

})
var wxhotItems=[]
